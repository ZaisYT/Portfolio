import Image from "next/image"
import Header from "../components/Header"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre mi - Zais",
  description: "Sobre Zais",
};

export default function About() {
  return (
    <div id="top" className="p-4 min-h-screen bg-background">
      <Header></Header>

      <div className="xl:mt-20 xl:p-4">
        <h1 className="my-4 text-center xl:text-left text-accent font-Lilita_One text-5xl xl:text-6xl">Sobre Zais</h1>
        <div className="xl:grid xl:grid-cols-2">
          <p className=" text-center text-white font-Afacad_Flux font-light text-2xl">
            Me presento, soy Vicente Moreno, más conocido como <span className='text-primary'>Zais, ZaisX o Zek</span>.
            Actualmente, curso en el <span className='text-primary'>IV medio B</span> y <span className='text-primary'>tengo 16 años</span>.
            <br />
            <br />
            Nací el <span className='text-primary'>18 de marzo del 2008</span>, ¡me gusta mucho la tecnología, los videojuegos, la música y sobre todo aventurarme a cosas nuevas!
            <br />
            <br />
          </p>
          <div className=" row-start-2">
            <p className="text-center text-white font-Afacad_Flux font-light text-2xl">
              Te cuento un poco de mis gustos.
              <br />
              Me gustan mucho los <span className='text-primary'>juegos de ritmo</span> desde pequeño, soy muy bueno en ellos.
              <br />
              <br />
              Me encanta la <span className='text-primary'>programación</span> y la <span className='text-primary'>electrónica</span>, a la vez mis juegos/generos favoritos son:
              <br />
              <br />
            </p>
            <div className="flex flex-col justify-center items-center md:grid md:grid-cols-3 xl:gap-x-2">
              <Image 
                draggable={false}
                className="xl:w-full md:mx-auto w-[70%] max-w-60"
                src="/Blinkies/DDR.gif"
                width={150}
                height={20}
                alt="DDR blinkie" />
              <Image 
                draggable={false}
                className="xl:w-full md:mx-auto w-[70%] max-w-60"
                src="/Blinkies/Horrorgames.gif"
                width={150}
                height={20}
                alt="Horror Games blinkie" />
              <Image 
                draggable={false}
                className="xl:w-full md:mx-auto w-[70%] max-w-60"
                src="/Blinkies/minecraft.gif"
                width={150}
                height={20}
                alt="Minecraft blinkie" />
            </div>
          </div>
          <p className="row-span-2 text-center text-white font-Afacad_Flux font-light text-2xl">
            <br />
            En temas musicales, escucho de toda la música, principalmente ahora estoy viciado escuchando <span className='text-primary'>trap</span>, <span className='text-primary'>rap</span>, <span className='text-primary'>pop</span> y <span className='text-primary'>emo punk</span>.
            <br />
            <br />

            Mis artistas favoritos son <span className='text-primary'>Ritorukai</span>, <span className='text-primary'>Cray Dalton</span>, <span className='text-primary'>ND&apos; Kobi</span> y <span className='text-primary'>DimelowPro</span>.
            <br />
            <br />

            En esta página busco mostrar mis proyectos de programación y proyectos musicales que estoy desarrollando.
            <br />
            <br />

            ¡Recuerda, <span className='text-primary'>siempre estoy abierto a hablar con cualquier persona</span>, así que sin miedo puedes mandarme un dm y amigaremos :D!
            <br />
            <br />
          </p>
        </div>

        <a href="#top" className="lg:hidden no-underline flex items-center justify-center font-Afacad_Flux rounded-lg text-black min-h-12 text-2xl bg-primary cursor-pointer active:bg-secondary my-4">Volver Arriba</a>
      </div>
    </div>
  )
}
