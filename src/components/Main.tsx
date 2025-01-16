import { Link } from 'react-router-dom'

type statsObject = {
  closedWindows: number,
  infoClicked: number,
  pagesVisited: string[],
  sectionSwitches: number,
  isKonami: boolean
}

export const Main = () => {
  function getStats(): statsObject{
    let stats = localStorage.getItem("Stats");

    let statsJSON
    if (stats) {
      statsJSON = JSON.parse(stats);
    } else {
      statsJSON = {
        closedWindows: 0,
        infoClicked: 0,
        pagesVisited: [],
        sectionSwitches: 0,
        isKonami: false
      };
      localStorage.setItem("Stats", JSON.stringify(statsJSON));
    }

    return statsJSON
  }

  function updateStats(stats: statsObject){
    localStorage.setItem("Stats", JSON.stringify(stats));

    return;
  }

  function handleswitch(page: string) {
    let stats = getStats();
    stats.sectionSwitches += 1;
    if (!stats.pagesVisited.includes(page)){
      stats.pagesVisited.push(page);
    }

    updateStats(stats);
  }

  return (
    <div className='p-4 min-h-screen xl:flex xl:items-center xl:px-20'>
      <div className='grid xl:grid-cols-3'>
        <div>
          <p className='font-Afacad_Flux text-3xl xl:text-5xl text-white text-center pt-2'>Hey, yo soy</p>
          <h1 className='font-Lilita_One text-8xl xl:text-9xl text-primary text-center'>ZAIS!</h1>
        </div>

        <div className='xl:col-span-2 xl:p-4'>
          <h1 className='font-Lilita_One text-3xl xl:text-6xl text-accent text-center py-4'>¡Bienvenido a mi web!</h1>
          <p className='font-Afacad_Flux font-light text-white text-center text-2xl xl:text-3xl'>
            Me presento, soy Vicente Moreno, más conocido como Zais, ZaisX o Zek.
            Actualmente, curso en el <span className='text-primary'>IV medio B</span> y tengo <span className='text-primary'>16 años</span>.
            <br />
            En esta página busco mostrar mis proyectos de programación y proyectos musicales que estoy desarrollando.
            <br />
            ¡Recuerda, <span className='text-primary'>siempre estoy abierto a hablar con cualquier persona</span>, así que sin miedo puedes mandarme un dm y amigaremos :D!
            <br />
            <br />
            <span className='text-primary '>
              Recuerda, siempre puedes volver a esta página presionando mi nombre en la parte de arriba de la página
            </span>
          </p>
        </div>

        <div className='flex flex-col mt-6 justify-center min-w-[90%] xl:min-w-[60%] mx-auto xl:row-start-2 xl:col-span-3'>
          <Link onClick={() => { handleswitch("about") }} to="/about#top" className='no-underline flex items-center justify-center font-Afacad_Flux rounded-lg text-black min-h-12 text-2xl bg-primary cursor-pointer active:bg-secondary mb-4'>Ir a mi bio en mas detalle</Link>
          <Link onClick={() => { handleswitch("proyects") }} to="/proyects" className='no-underline flex items-center justify-center font-Afacad_Flux rounded-lg text-black min-h-12 text-2xl bg-primary cursor-pointer active:bg-secondary mb-4'>Ir a mis proyectos :P</Link>
          <Link onClick={() => { handleswitch("achivements") }} to="/achivements" className='no-underline flex items-center justify-center font-Afacad_Flux rounded-lg text-black min-h-12 text-2xl bg-primary cursor-pointer active:bg-secondary mb-4'>Logros :33</Link>
        </div>
      </div>
    </div>
  )
}
