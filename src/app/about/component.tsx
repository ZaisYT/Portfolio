"use client";
import Image from "next/image";
import Header from "../components/Header";
import { useEffect, useState } from "react";

type Genre = [string, number];
type Artist = [string];

export default function MainComponent() {
  const [ready, setReady] = useState(false);
  const [genres, setGenres] = useState<Genre[]>([["Loading", 1]]);

  function calcularEdad() {
    const pastDate = new Date("2008-03-18");
    const currentDate = new Date();

    let yearsDiff = currentDate.getFullYear() - pastDate.getFullYear();

    // Ajustar si aún no ha pasado el cumpleaños este año
    const hasBirthdayPassed =
      currentDate.getMonth() > pastDate.getMonth() ||
      (currentDate.getMonth() === pastDate.getMonth() &&
        currentDate.getDate() >= pastDate.getDate());

    if (!hasBirthdayPassed) {
      yearsDiff--;
    }

    return yearsDiff;
  }

  useEffect(() => {
    fetch("/api/spotify/genres")
      .then((res) => res.json())
      .then((data: Genre[]) => setGenres(data))
      .catch((error) => console.error("Error al obtener los géneros:", error));
  }, []);

  const [artists, setArtists] = useState<Artist[]>([["Loading"]]);

  useEffect(() => {
    fetch("/api/spotify/artists")
      .then((res) => res.json())
      .then((data: Artist[]) => setArtists(data))
      .catch((error) => console.error("Error al obtener los artistas:", error));
  }, []);

  useEffect(() => {
    if (artists[0][0] == "Loading" || genres[0][0] == "Loading") return;
    setReady(true);
  }, [artists, genres]);

  return (
    <section id="top" className="p-4 min-h-screen bg-background-800">
      <Header></Header>

      <main className="xl:mt-20 xl:p-4">
        <h1 className="my-4 text-center xl:text-left text-accent-700 font-Lilita_One text-5xl xl:text-6xl">
          Sobre Zais
        </h1>
        <div className="xl:grid xl:grid-cols-2">
          <div>
            <p className="text-center text-white font-Afacad_Flux font-light text-2xl mb-8">
              Me presento, soy Vicente Moreno, más conocido como{" "}
              <span className="text-primary-500">Zais, ZaisX o Zek</span>.
              Actualmente, curso en el
              <span className="text-primary-500"> IV medio B</span> y tengo
              <span className="text-primary-500"> {calcularEdad()} años</span>.
            </p>
            <p className="text-center text-white font-Afacad_Flux font-light text-2xl mb-8">
              Nací el
              <span className="text-primary-500"> 18 de marzo del 2008</span>,
              ¡me gusta mucho la tecnología, los videojuegos, la música y sobre
              todo aventurarme a cosas nuevas!
            </p>
          </div>
          <div className=" row-start-2">
            <p className="text-center text-white font-Afacad_Flux font-light text-2xl mb-8">
              Te cuento un poco de mis gustos. Me gustan mucho los
              <span className="text-primary-500"> juegos de ritmo</span> desde
              pequeño, soy muy bueno en ellos.
            </p>
            <p className="text-center text-white font-Afacad_Flux font-light text-2xl mb-8">
              Me encanta la
              <span className="text-primary-500"> programación</span> y la
              <span className="text-primary-500"> electrónica</span>, a la vez
              mis juegos/generos favoritos son:
            </p>
            <div className="flex flex-col justify-center items-center md:grid md:grid-cols-3 xl:gap-x-2">
              <Image
                draggable={false}
                className="xl:w-full md:mx-auto w-[70%] max-w-60"
                src="/Blinkies/DDR.gif"
                width={150}
                height={20}
                alt="DDR blinkie"
                unoptimized
              />
              <Image
                draggable={false}
                className="xl:w-full md:mx-auto w-[70%] max-w-60"
                src="/Blinkies/Horrorgames.gif"
                width={150}
                height={20}
                alt="Horror Games blinkie"
                unoptimized
              />
              <Image
                draggable={false}
                className="xl:w-full md:mx-auto w-[70%] max-w-60"
                src="/Blinkies/minecraft.gif"
                width={150}
                height={20}
                alt="Minecraft blinkie"
                unoptimized
              />
            </div>
          </div>
          <p className="text-center text-white font-Afacad_Flux font-light text-2xl">
            En temas musicales, escucho de toda la música, principalmente ahora
            estoy viciado escuchando:
            <br />
            {ready ? (
              <>
                {genres.map(([genre], index) => (
                  <span key={index} className="mb-8">
                    <span className="text-primary-500 capitalize" key={index}>
                      {genre}
                    </span>
                    {index === genres.length - 2 ? <span> y </span> : null}
                    {index === genres.length - 1 ? <span>. </span> : null}
                    {index !== genres.length - 1 &&
                    index !== genres.length - 2 ? (
                      <span>, </span>
                    ) : null}
                  </span>
                ))}
              </>
            ) : (
              <span className="flex items-center justify-center">
                <span className="animate-pulse flex w-full max-w-[50ch] h-4 bg-background-700 rounded-md"></span>
              </span>
            )}
          </p>
          <p className="text-center text-white font-Afacad_Flux font-light text-2xl">
            Mis artistas favoritos son:
            <br />
            {ready ? (
              <>
                {artists.map((artist, index) => (
                  <span key={index}>
                    <span className="text-primary-500" key={index}>
                      {artist}
                    </span>
                    {index === artists.length - 2 ? <span> y </span> : null}
                    {index === artists.length - 1 ? <span>. </span> : null}
                    {index !== artists.length - 1 &&
                    index !== artists.length - 2 ? (
                      <span>, </span>
                    ) : null}
                  </span>
                ))}
              </>
            ) : (
              <span className="flex items-center justify-center">
                <span className="animate-pulse flex w-full max-w-[40%] h-4 bg-neutral-700 rounded-md"></span>
              </span>
            )}
            <br />
            En esta página busco mostrar mis proyectos de programación y
            proyectos musicales que estoy desarrollando.
            <br />
            ¡Recuerda,{" "}
            <span className="text-primary-500">
              siempre estoy abierto a hablar con cualquier persona
            </span>
            , así que sin miedo puedes mandarme un dm y amigaremos :D!
          </p>
        </div>

        <a
          href="#top"
          className="lg:hidden no-underline flex items-center justify-center font-Afacad_Flux rounded-lg text-black min-h-12 text-2xl bg-primary-500 cursor-pointer active:bg-secondary-500 my-4"
        >
          Volver Arriba
        </a>
      </main>
    </section>
  );
}
