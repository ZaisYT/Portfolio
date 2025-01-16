import { useEffect } from 'react'
import { Header } from './Header'
import { Link } from 'react-router-dom'

type statsObject = {
  closedWindows: number,
  infoClicked: number,
  pagesVisited: string[],
  sectionSwitches: number,
  isKonami: boolean
}

export const FOF = () => {
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
        isKonami: false,
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

  useEffect(() => {
    handleswitch("404");
  }, []);


  return (
    <div className='p-4 min-h-screen'>
      <Header/>

      <h1 className='mt-2 text-8xl font-Lilita_One text-accent'>404!</h1>
      <h2 className='text-3xl font-Afacad_Flux text-white mb-10'>Parece que no hemos encontrado ese contenido :c</h2>

      <Link to='/' className='no-underline flex items-center justify-center font-Afacad_Flux rounded-lg text-black max-w-[40%] min-h-12 text-2xl bg-primary cursor-pointer active:bg-secondary my-4'>Volver al principio</Link>
    </div>
  )
}
