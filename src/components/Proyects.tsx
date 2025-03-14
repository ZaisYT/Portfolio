import { useState } from "react";
import { Header } from "./Header";
import SVGHELP from '../svgs/help-circle.svg';
import SVGHELPACTIVE from '../svgs/help-circle-active.svg';
import SVGLINK from '../svgs/arrow-up-right.svg';
import SVGCLOSE from '../svgs/x.svg';
import SVGPYTHON from '../svgs/python.svg';
import SVGJS from '../svgs/js.svg';
import SVGTS from '../svgs/ts.svg';
import SVGCSS from '../svgs/css3.svg';
import SVGHTML from '../svgs/html.svg';
import SVGTAILWIND from '../svgs/tailwind.svg';
import SVGREACT from '../svgs/reactjs.svg';
import SVGNODE from '../svgs/nodejs.svg';

type statsObject = {
  closedWindows: number,
  infoClicked: number,
  pagesVisited: string[],
  sectionSwitches: number,
  isKonami: boolean
}

export const Proyects = () => {
  const [helpActive, setHelpActive] = useState(false);

  // Ahora almacenamos los datos en lugar de los componentes directamente
  const [proyectList, setProyectList] = useState([
    { id: 0, windowTitle: "ZXQM", windowDesc: "Un sitio web de música que intenta destronar a spotify, es gratuito aunque no tiene muchas canciones y esta pasando por una remodelacion :P", windowTechs: ["HTML", "CSS", "NodeJS", "Python", "TypeScript", "React"] as programmingLang[], ishelp: false },
    { id: 1, windowTitle: "ZaisX", windowDesc: "Mi perfil de Spotify como artista :33", windowTechs: ["other"] as programmingLang[], link: "https://open.spotify.com/intl-es/artist/25CHYmNDiv8GB4UXduYdfz", ishelp: false },
    { id: 2, windowTitle: "Vibras Ligeras", windowDesc: "Mi banda humilde, somos ligeros :33", windowTechs: ["other"] as programmingLang[], link: "https://www.instagram.com/vibras.ligeras/", ishelp: false },
    { id: 3, windowTitle: "Horarios para cursos", windowDesc: "Pagina web para cursos que permite subir tareas, pruebas, salidas y mucho mas <3", windowTechs: ["HTML", "TailwindCSS", "React", "TypeScript", "NodeJS", "other"] as programmingLang[], link: "https://3mb-horario.netlify.app/", ishelp: false },
    { id: 4, windowTitle: "ZAIS!", windowDesc: "Pagina web para subir mis cositas, es la pagina en la que estas, waaa", windowTechs: ["HTML", "TailwindCSS", "React", "TypeScript", "NodeJS", "other"] as programmingLang[], link: "https://zais.netlify.app/", ishelp: false }
  ]);
  

  function handleHelp() {
    const newlist = [...proyectList];
    helpActive ? newlist.shift() : newlist.unshift({ id: Date.now(), windowTitle: "Ayuda", windowDesc: 'El icono de la flecha te redireccionara a la pagina del proyecto o algun link asociado con el. Mientras tanto la X servira para cerrar la ventana del proyecto, aunque cuidado, si cierras muchas ventanas te podras quedar sin, esto solo se arregla recargando la seccion!', windowTechs: [], ishelp: true });
    if (!helpActive){
      let stats = getStats();
      stats.infoClicked += 1;
      updateStats(stats);
    }
    setProyectList(newlist);
    setHelpActive(!helpActive);
  }

  // Función para cerrar una ventana por ID
  function closeWindow(id: number, isHelp: boolean) {
    setProyectList(proyectList.filter((item) => item.id !== id));
    if (isHelp) {
      setHelpActive(false);
      return
    } 

    let stats = getStats();
    stats.closedWindows += 1;
    updateStats(stats);
  }

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

  return (
    <div className="min-h-screen p-4">
      <Header />
      <div className="mt-4 flex items-center justify-between">
        <h1 className="font-Lilita_One text-accent text-5xl">Proyectos</h1>
        <img src={helpActive ? SVGHELPACTIVE : SVGHELP} alt="" onClick={handleHelp} className="w-9" />
      </div>

      <div className="xl:flex xl:flex-col xl:justify-center mt-4">
        {proyectList.map((data) => (
          <ProyectWindow
            key={data.id}
            id={data.id}
            windowTitle={data.windowTitle}
            windowDesc={data.windowDesc}
            windowTechs={data.windowTechs}
            link={data.link}
            closeWindow={() => {closeWindow(data.id, data.ishelp)}}
            ishelp={data.ishelp}
          />
        ))}
      </div>
    </div>
  );
};

type programmingLang = "Python" | "JavaScript" | "CSS" | "HTML" | "TypeScript" | "NodeJS" | "React" | "TailwindCSS" | "other";

type WindowType = {
  id: number;
  windowTitle: string;
  windowDesc: string;
  link?: string;
  windowTechs: programmingLang[];
  windowImg?: string;
  closeWindow: (id: number) => void;
  ishelp: boolean;
};

const ProyectWindow = ({ id, windowTitle, windowDesc, link, windowImg, windowTechs, closeWindow, ishelp }: WindowType) => {
  let techsUsed: JSX.Element[] = [];

  if (windowTechs.includes("Python")){
    techsUsed.push(<img className="w-8 mr-1" src={SVGPYTHON} alt=""></img>)
  }

  if (windowTechs.includes("JavaScript")){
    techsUsed.push(<img className="w-8 mr-1" src={SVGJS} alt=""></img>)
  }

  if (windowTechs.includes("CSS")){
    techsUsed.push(<img className="w-8 mr-1" src={SVGCSS} alt=""></img>)
  }

  if (windowTechs.includes("HTML")){
    techsUsed.push(<img className="w-8 mr-1" src={SVGHTML} alt=""></img>)
  }

  if (windowTechs.includes("TypeScript")){
    techsUsed.push(<img className="w-8 mr-1" src={SVGTS} alt=""></img>)
  }

  if (windowTechs.includes("NodeJS")){
    techsUsed.push(<img className="w-8 mr-1" src={SVGNODE} alt=""></img>)
  }

  if (windowTechs.includes("React")){
    techsUsed.push(<img className="w-8 mr-1" src={SVGREACT} alt=""></img>)
  }

  if (windowTechs.includes("TailwindCSS")){
    techsUsed.push(<img className="w-8 mr-1" src={SVGTAILWIND} alt=""></img>)
  }

  return (
    <div className="p-2 bg-neutral-900 rounded-lg mb-4">
      <div className="border-b-white border-b-2 pb-2 flex justify-between items-center">
        <h1 className="font-Lilita_One text-white text-3xl">{windowTitle}</h1>
        <div className="flex">
          {link && (
            <img
              src={SVGLINK}
              alt=""
              className="transition-all w-10 mr-4 hover:bg-lime-700 active:bg-lime-700 rounded-xl cursor-pointer"
              onClick={() => {window.open(link,'_blank')?.focus();}}
            />
          )}
          <img
            src={SVGCLOSE}
            alt=""
            className="transition-all w-10 hover:bg-red-800 active:bg-red-800 rounded-xl cursor-pointer"
            onClick={() => closeWindow(id)}
          />
        </div>
      </div>

      <div className="p-2 grid grid-cols-5">
        <div className={ ishelp ? "col-span-5" : "col-span-3" }>
          <p className='text-white overflow-auto text-ellipsis max-h-32 pb-2 font-Afacad_Flux'>{windowDesc}</p>
          {ishelp ? null : 
          <div>
            {(windowTechs.length == 0 || windowTechs[0] == "other") ? null : <h1 className="text-primary font-Lilita_One text-2xl pt-1 pb-2 border-t-2 border-white border-opacity-25">Tecnologias usadas:</h1>}
            <div className="flex overflow-auto pb-2">
              {techsUsed.map((elem) => (elem))}
            </div>
          </div>
          }
        </div>
        <div className="col-span-2 col-start-4">
          <img src={windowImg || ""} alt="" />
        </div>
      </div>
    </div>
  );
};
