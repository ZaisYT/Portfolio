import { Header } from './Header'
import XL404 from '../images/404XL.png';
import XLALLACHIVEMENTS from '../images/ALLACHIVEMENTSXL.png';
import XLCLOSE1 from '../images/CLOSEPUP1XL.png';
import XLCLOSE20 from '../images/CLOSEPUP20XL.png';
import XLCLOSE100 from '../images/CLOSEPUP100XL.png';
import XLEVERYSEC from '../images/EVERYSECTIONXL.png';
import XLEXP1 from '../images/EXPLORER1XL.png';
import XLEXP20 from '../images/EXPLORER20XL.png';
import XLEXP100 from '../images/EXPLORER100XL.png';
import XLHELP1 from '../images/HELP1XL.png';
import XLHELP10 from '../images/HELP10XL.png';
import XLHELP100 from '../images/HELP100XL.png';
import XLKONAMI from '../images/KONAMIXL.png';

type statsObject = {
  closedWindows: number,
  infoClicked: number,
  pagesVisited: string[],
  sectionSwitches: number,
  isKonami: boolean
}

export const Achivements = () => {
  const allPages = ["proyects", "main", "about", "achivements", "404"];

  function getStats(): statsObject {
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

  let stats: statsObject = getStats();

  function percentageCalculation(val: number, expected: number): number {
    let percentage = val / expected;
    if ((percentage * 100) > 100) return 100;
    return percentage * 100;
  }

  function isKonamiExecuted(): number{
    if (stats.isKonami) return 100;
    return 0;
  }

  function isFOFDiscovered(): number{
    if (stats.pagesVisited.findIndex((value) => value === "404") === -1) return 0;
    else return 100;
  }

  function isCompleted(val: number): boolean {
    if (val >= 100) {
      return true;
    } else {
      return false;
    }
  }

  function percentageAllAchivements(): number {
    const achivementsNo = 12;
    let noCompletedAchivements = 0;

    if (stats.closedWindows >= 100){
      noCompletedAchivements += 3;
    } else if (stats.closedWindows >= 20) {
      noCompletedAchivements += 2;
    } else if (stats.closedWindows >= 1) {
      noCompletedAchivements += 1;
    }

    if (stats.sectionSwitches >= 100){
      noCompletedAchivements += 3;
    } else if (stats.sectionSwitches >= 20) {
      noCompletedAchivements += 2;
    } else if (stats.sectionSwitches >= 1) {
      noCompletedAchivements += 1;
    }

    if (stats.infoClicked >= 100){
      noCompletedAchivements += 3;
    } else if (stats.infoClicked >= 10) {
      noCompletedAchivements += 2;
    } else if (stats.infoClicked >= 1) {
      noCompletedAchivements += 1;
    }

    if (stats.isKonami) noCompletedAchivements += 1;
    if (isFOFDiscovered()) noCompletedAchivements += 1;
    if (stats.pagesVisited.length == allPages.length) noCompletedAchivements += 1;

    let percentage =  noCompletedAchivements / achivementsNo;
    return percentage * 100;
  }

  return (
    <div className="min-h-screen p-4">
      <Header></Header>

      <h1 className='font-Lilita_One text-accent text-5xl mb-4'>Logros :3</h1>

      <div>
        <Achivement
          val={percentageCalculation(stats.closedWindows, 1)} 
          data={{ 
            Title: "Fuera de Aqui!", 
            Desc: "Wow, eso de verdad fue molesto!", 
            Img: XLCLOSE1, 
            Unlocked: isCompleted(percentageCalculation(stats.closedWindows, 1)) 
          }}
        />
        <Achivement 
          val={percentageCalculation(stats.closedWindows, 20)} 
          data={{ 
            Title: "No estan permitidas", 
            Desc: "Que salgan de aca!", 
            Img: XLCLOSE20, 
            Unlocked: isCompleted(percentageCalculation(stats.closedWindows, 20)) 
          }}
        />
        <Achivement 
          val={percentageCalculation(stats.closedWindows, 100)} 
          data={{ 
            Title: "ADBLOCK", 
            Desc: "Felicidades, bloqueaste mas publicidad que adblock promedio!", 
            Img: XLCLOSE100, 
            Unlocked: isCompleted(percentageCalculation(stats.closedWindows, 100)) 
          }}
        />
        <Achivement
          val={isKonamiExecuted()} 
          data={{ 
            Title: "Is that Konami??", 
            Desc: "User.Settings.GodMode = true", 
            Img: XLKONAMI, 
            Unlocked: isCompleted(isKonamiExecuted()) 
          }}
        />
        <Achivement 
          val={isFOFDiscovered()} 
          data={{ 
            Title: "Fuera del mapa", 
            Desc: "Llega a una pagina de error 404", 
            Img: XL404, 
            Unlocked: isCompleted(isFOFDiscovered()) 
          }}
        />
        <Achivement 
          val={percentageCalculation(stats.sectionSwitches, 1)} 
          data={{ 
            Title: "Explorador novato", 
            Desc: "Te gusto la pagina?", 
            Img: XLEXP1, 
            Unlocked: isCompleted(percentageCalculation(stats.sectionSwitches, 1))
          }}
        />
        <Achivement 
          val={percentageCalculation(stats.sectionSwitches, 20)} 
          data={{ 
            Title: "Explorador medio", 
            Desc: "Waoo, creo que tengo un fan", 
            Img: XLEXP20, 
            Unlocked: isCompleted(percentageCalculation(stats.sectionSwitches, 20)) 
          }}
        />
        <Achivement 
          val={percentageCalculation(stats.sectionSwitches, 100)} 
          data={{ 
            Title: "Explorador Avanzado", 
            Desc: "Ehhh, estas bien? Eres mi fan #1", 
            Img: XLEXP100, 
            Unlocked: isCompleted(percentageCalculation(stats.sectionSwitches, 100)) 
          }}
        />
        <Achivement
          val={percentageCalculation(stats.pagesVisited.length, allPages.length)}
          data={{ 
            Title: "100%?", 
            Desc: "Ya revisaste todo, pero aun queda camino", 
            Img: XLEVERYSEC, 
            Unlocked: isCompleted(percentageCalculation(stats.pagesVisited.length, allPages.length)) 
          }}
        />
        <Achivement
          val={percentageCalculation(stats.infoClicked, 1)}
          data={{ 
            Title: "Pidiendo ayuda", 
            Desc: "Necesitas una mano?", 
            Img: XLHELP1,
            Unlocked: isCompleted(percentageCalculation(stats.infoClicked, 1))
          }}
        />
        <Achivement
          val={percentageCalculation(stats.infoClicked, 10)}
          data={{ 
            Title: "Ehhh no entendiste?", 
            Desc: "Creo que tienes TDAH", 
            Img: XLHELP10, 
            Unlocked: isCompleted(percentageCalculation(stats.infoClicked, 10))
          }}
        />
        <Achivement
          val={percentageCalculation(stats.infoClicked, 100)}
          data={{ 
            Title: "Eres tonto o te haces?!?", 
            Desc: "No, eso ya es retraso", 
            Img: XLHELP100, 
            Unlocked: isCompleted(percentageCalculation(stats.infoClicked, 100)) 
          }}
        />
        <Achivement
          val={percentageAllAchivements()}
          data={{ 
            Title: "The real 100%!!", 
            Desc: "ERES EL GOAT", 
            Img: XLALLACHIVEMENTS, 
            Unlocked: isCompleted(percentageAllAchivements()) 
          }}
        />
      </div>
    </div>
  )
}

type AchiType = {
  val: Number;
  data: {
    Img: string;
    Title: string;
    Desc: string;
    Unlocked: boolean;
  }
}


const Achivement = ({ val, data }: AchiType) => {
  return (
    <div className='p-2 bg-neutral-800 rounded-md mb-3'>
      <div className='flex'>
        <img src={data.Img} alt="" className={data.Unlocked ? 'w-24 h-24 rounded-md mr-2' : 'w-24 h-24 rounded-md mr-2 grayscale opacity-40'} />
        <div>
          <h1 className='text-white font-Lilita_One text-xl'>{data.Title}</h1>
          <h2 className='text-neutral-400 font-Afacad_Flux text-md'>{data.Desc}</h2>
        </div>
      </div>

      <div className='flex flex-col mt-2'>
        <div className='h-2 w-full bg-neutral-700 rounded-full'>
          <div className={data.Unlocked ? 'h-2.5 rounded-full bg-primary' : 'h-2.5 rounded-full bg-secondary'} style={{ width: `${val}%` }}></div>
        </div>

        <div className='flex justify-between'>
          <h2 className='text-neutral-400 font-Afacad_Flux'>{String(Number.isInteger(Number(val)) ? val : val.toFixed(2))}%</h2>
          <h2 className='text-white font-Afacad_Flux'>100%</h2>
        </div>
      </div>
    </div>
  )
}