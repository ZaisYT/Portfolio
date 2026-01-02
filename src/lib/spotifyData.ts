// src/lib/spotifyData.ts
interface Artist {
  id: string;
  name: string;
  image: string;
  genres: string[];
  url: string;
}

type Genre = [string, number];

/**
 * Obtiene un nuevo access token de Spotify usando el refresh token.
 */
async function getAccessToken(): Promise<string | null> {
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!refreshToken || !clientId || !clientSecret) return null;

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${auth}`,
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  const data = await res.json();
  return data.access_token ?? null;
}

/**
 * Devuelve los 5 artistas más escuchados del usuario.
 */
export async function getTopArtists(): Promise<Artist[]> {
  const token = await getAccessToken();
  if (!token) throw new Error("No se pudo obtener el token de Spotify");

  const res = await fetch(
    "https://api.spotify.com/v1/me/top/artists?limit=50&time_range=short_term",
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  const data = await res.json();
  if (!data.items) throw new Error("No se pudieron obtener los artistas");

  return data.items
    .slice(0, 5)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .map((artist: any) => ({
      id: artist.id,
      name: artist.name,
      image: artist.images?.[0]?.url || "",
      genres: artist.genres || [],
      url: artist.external_urls.spotify,
    }));
}

/**
 * Devuelve los 5 géneros más escuchados del usuario.
 */
export async function getTopGenres(): Promise<Genre[]> {
  const token = await getAccessToken();
  if (!token) throw new Error("No se pudo obtener el token de Spotify");

  const res = await fetch(
    "https://api.spotify.com/v1/me/top/artists?limit=50&time_range=short_term",
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  const data = await res.json();
  if (!data.items) throw new Error("No se pudieron obtener los artistas");

  // Contar géneros
  const genreCounts: Record<string, number> = {};
  data.items.forEach((artist: { genres: string[] }) => {
    artist.genres.forEach((genre: string) => {
      genreCounts[genre] = (genreCounts[genre] || 0) + 1;
    });
  });

  // Ordenar y devolver los 5 géneros más repetidos
  return Object.entries(genreCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
}
