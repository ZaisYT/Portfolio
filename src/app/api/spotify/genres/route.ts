import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
        const clientId = process.env.SPOTIFY_CLIENT_ID;
        const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

        if (!refreshToken || !clientId || !clientSecret) {
            return NextResponse.json({ error: 'Faltan variables de entorno' }, { status: 500 });
        }

        // Obtener nuevo Access Token
        const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
        const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${auth}`,
            },
            body: new URLSearchParams({
                grant_type: 'refresh_token',
                refresh_token: refreshToken,
            }),
        });

        const tokenData = await tokenResponse.json();
        if (!tokenData.access_token) {
            return NextResponse.json({ error: 'No se pudo obtener el Access Token' }, { status: 500 });
        }
        const access_token = tokenData.access_token;

        // Obtener top de artistas
        const topArtistsResponse = await fetch('https://api.spotify.com/v1/me/top/artists?limit=50&time_range=short_term', {
            headers: { Authorization: `Bearer ${access_token}` },
        });

        const artistsData = await topArtistsResponse.json();
        if (!artistsData.items) {
            return NextResponse.json({ error: 'No se pudieron obtener los artistas' }, { status: 500 });
        }

        // Contar géneros
        const genreCounts: Record<string, number> = {};
        artistsData.items.forEach((artist: { genres: string[] }) => {
            artist.genres.forEach((genre: string) => {
                genreCounts[genre] = (genreCounts[genre] || 0) + 1;
            });
        });

        // Ordenar y devolver los 5 géneros más repetidos
        const sortedGenres = Object.entries(genreCounts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5);

        return NextResponse.json(sortedGenres);
    } catch (error) {
        return NextResponse.json({ error: `Error en la API: ${error}` }, { status: 500 });
    }
}
