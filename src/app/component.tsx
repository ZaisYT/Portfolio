"use client";
import Link from "next/link";
import { getStats, updateStats } from "@/utils/stats";

export default function MainComponent() {
  function handleswitch(page: string) {
    const stats = getStats();
    stats.sectionSwitches += 1;
    if (!stats.pagesVisited.includes(page)) {
      stats.pagesVisited.push(page);
    }

    updateStats(stats);
  }

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
  
  const edadAct = calcularEdad();

  return (
    <main className="p-4 min-h-screen xl:flex xl:items-center xl:px-20 bg-background-800">
      <section className="grid xl:grid-cols-3">
        <header className="flex flex-col items-center">
          <p className="font-Afacad_Flux text-3xl xl:text-5xl text-white text-center pt-2">
            Hey, yo soy
          </p>
          <h1 className="font-Lilita_One text-8xl xl:text-9xl text-primary-500 text-center">
            ZAIS!
          </h1>
          <h2 className="font-Lilita_One text-6xl xl:text-7xl text-background-800 text-center bg-accent-700 rounded-md p-0.5 w-full max-w-52">
            BETA
          </h2>
        </header>

        <section className="xl:col-span-2 xl:p-4">
          <h1 className="font-Lilita_One text-3xl xl:text-6xl text-accent-700 text-center py-4">
            ¡Bienvenido a mi web!
          </h1>
          <p className="font-Afacad_Flux font-light text-white text-center text-2xl xl:text-3xl">
            Me presento, soy Vicente Moreno, más conocido como Zais, ZaisX o
            Zek. Actualmente, curso en el{" "}
            <span className="text-primary-500">IV medio B</span> y tengo{" "}
            <span className="text-primary-500">{edadAct} años</span>.
            <br />
            En esta página busco mostrar mis proyectos de programación y
            proyectos musicales que estoy desarrollando.
            <br />
            ¡Recuerda,{" "}
            <span className="text-primary-500">
              siempre estoy abierto a hablar con cualquier persona
            </span>
            , así que sin miedo puedes mandarme un dm y amigaremos :D!
            <br />
            <br />
            <span className="text-primary-500 ">
              Recuerda, siempre puedes volver a esta página presionando mi
              nombre en la parte de arriba de la página
            </span>
          </p>
        </section>

        <nav className="flex flex-col mt-6 justify-center min-w-[90%] xl:min-w-[60%] mx-auto xl:row-start-2 xl:col-span-3">
          <Link
            onClick={() => {
              handleswitch("about");
            }}
            href="/about"
            className="no-underline flex items-center justify-center font-Afacad_Flux rounded-lg text-black min-h-12 text-2xl bg-primary-500 cursor-pointer active:bg-secondary-500 mb-4"
          >
            Ir a mi bio en mas detalle
          </Link>
          <Link
            onClick={() => {
              handleswitch("proyects");
            }}
            href="/proyects"
            className="no-underline flex items-center justify-center font-Afacad_Flux rounded-lg text-black min-h-12 text-2xl bg-primary-500 cursor-pointer active:bg-secondary-500 mb-4"
          >
            Ir a mis proyectos :P
          </Link>
          <Link
            onClick={() => {
              handleswitch("achivements");
            }}
            href="/achivements"
            className="no-underline flex items-center justify-center font-Afacad_Flux rounded-lg text-black min-h-12 text-2xl bg-primary-500 cursor-pointer active:bg-secondary-500 mb-4"
          >
            Logros :33
          </Link>
        </nav>
      </section>
    </main>
  );
}
