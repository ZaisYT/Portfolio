"use client";
import { useState } from "react";
import { getStats, updateStats } from "@/utils/stats";
import Header from "../components/Header";
import Image from "next/image";

export default function MainComponent() {
  const [helpActive, setHelpActive] = useState(false);
  const [selectedTechs, setSelectedTechs] = useState<ProgrammingLang[]>([]);

  const [proyectList, setProyectList] = useState([
    {
      id: 0,
      windowTitle: "ZXQM",
      windowDesc:
        "Un sitio web de música que intenta destronar a spotify, es gratuito aunque no tiene muchas canciones y esta pasando por una remodelacion :P",
      windowTechs: [
        "HTML",
        "CSS",
        "NodeJS",
        "Python",
        "TypeScript",
        "React",
      ] as ProgrammingLang[],
      ishelp: false,
    },
    {
      id: 1,
      windowTitle: "ZaisX",
      windowDesc: "Mi perfil de Spotify como artista :33",
      windowTechs: ["other"] as ProgrammingLang[],
      link: "https://open.spotify.com/intl-es/artist/25CHYmNDiv8GB4UXduYdfz",
      ishelp: false,
    },
    {
      id: 2,
      windowTitle: "Vibras Ligeras",
      windowDesc: "Mi banda humilde, somos ligeros :33",
      windowTechs: ["other"] as ProgrammingLang[],
      link: "https://www.instagram.com/vibras.ligeras/",
      ishelp: false,
    },
    {
      id: 3,
      windowTitle: "Horarios para cursos",
      windowDesc:
        "Pagina web para cursos que permite subir tareas, pruebas, salidas y mucho mas <3",
      windowTechs: [
        "HTML",
        "TailwindCSS",
        "React",
        "TypeScript",
        "NodeJS",
        "other",
        "Vite",
      ] as ProgrammingLang[],
      link: "https://3mb-horario.netlify.app/",
      ishelp: false,
    },
    {
      id: 4,
      windowTitle: "ZAIS!",
      windowDesc:
        "Pagina web para subir mis cositas, es la pagina en la que estas, waaa",
      windowTechs: [
        "HTML",
        "TailwindCSS",
        "React",
        "TypeScript",
        "NodeJS",
        "other",
        "NextJS",
      ] as ProgrammingLang[],
      link: "https://zais.netlify.app/",
      ishelp: false,
    },
  ]);

  function handleHelp() {
    const newlist = [...proyectList];
    if (helpActive) {
      newlist.shift();
    } else {
      newlist.unshift({
        id: Date.now(),
        windowTitle: "Ayuda",
        windowDesc:
          "El icono de la flecha te redireccionara a la pagina del proyecto o algun link asociado con el. Mientras tanto la X servira para cerrar la ventana del proyecto, aunque cuidado, si cierras muchas ventanas te podras quedar sin, esto solo se arregla recargando la seccion!",
        windowTechs: [],
        ishelp: true,
      });
    }

    if (!helpActive) {
      const stats = getStats();
      if (!stats) return;
      stats.infoClicked += 1;
      if (stats.infoClicked == 100) {
        window.open(
          "https://discordapp.com/users/528735486773166117",
          "newTab"
        );
      }
      updateStats(stats);
    }
    setProyectList(newlist);
    setHelpActive(!helpActive);
  }

  function closeWindow(id: number, isHelp: boolean) {
    setProyectList(proyectList.filter((item) => item.id !== id));
    if (isHelp) {
      setHelpActive(false);
      return;
    }

    const stats = getStats();
    if (!stats) return;
    stats.closedWindows += 1;
    updateStats(stats);
  }

  function filterProjectsByTech(techs: ProgrammingLang[]): typeof proyectList {
    return proyectList.filter((project) =>
      techs.every((tech) => project.windowTechs.includes(tech))
    );
  }

  const filteredProjects = filterProjectsByTech(selectedTechs);

  return (
    <div className="min-h-screen p-4 bg-background-800">
      <Header />
      <div className="mt-4 flex items-center justify-between">
        <h1 className="font-Lilita_One text-accent-700 text-5xl">Proyectos</h1>
        <Image
          draggable={false}
          width={36}
          height={36}
          src={
            helpActive
              ? "/svgs/help-circle-active.svg"
              : "/svgs/help-circle.svg"
          }
          alt="Help button"
          onClick={handleHelp}
          className="w-9 cursor-pointer"
        />
      </div>

      <div className="flex flex-col">
        <h1 className="text-lg md:text-2xl font-Afacad_Flux mb-3">
          Estas son las tecnologias usadas! (puedes hacer click para filtrar)
        </h1>
        <TechList selectedTechs={selectedTechs} setSelectedTechs={setSelectedTechs} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
        {filteredProjects.map((data) => (
          <ProyectWindow
            key={data.id}
            id={data.id}
            windowTitle={data.windowTitle}
            windowDesc={data.windowDesc}
            windowTechs={data.windowTechs}
            link={data.link}
            closeWindow={() => {
              closeWindow(data.id, data.ishelp);
            }}
            ishelp={data.ishelp}
          />
        ))}
      </div>
    </div>
  );
}

type ProgrammingLang =
  | "Python"
  | "JavaScript"
  | "CSS"
  | "HTML"
  | "TypeScript"
  | "NodeJS"
  | "React"
  | "TailwindCSS"
  | "Vite"
  | "NextJS"
  | "other";

const allTechs: ProgrammingLang[] = [
  "Python",
  "JavaScript",
  "CSS",
  "HTML",
  "TypeScript",
  "NodeJS",
  "React",
  "TailwindCSS",
  "Vite",
  "NextJS",
  "other",
];

type WindowType = {
  id: number;
  windowTitle: string;
  windowDesc: string;
  link?: string;
  windowTechs: ProgrammingLang[];
  windowImg?: string;
  closeWindow: (id: number) => void;
  ishelp: boolean;
};

const TechsInfo: Record<
  Exclude<ProgrammingLang, "other">,
  { src: string; alt: string }
> = {
  Python: { src: "python.svg", alt: "Python Logo" },
  JavaScript: { src: "js.svg", alt: "JavaScript Logo" },
  CSS: { src: "css3.svg", alt: "CSS Logo" },
  HTML: { src: "html.svg", alt: "HTML Logo" },
  TypeScript: { src: "ts.svg", alt: "TypeScript Logo" },
  NodeJS: { src: "nodejs.svg", alt: "NodeJS Logo" },
  React: { src: "reactjs.svg", alt: "React Logo" },
  TailwindCSS: { src: "tailwind.svg", alt: "TailwindCSS Logo" },
  Vite: { src: "vite.svg", alt: "Vite Logo" },
  NextJS: { src: "nextjs.svg", alt: "NextJS Logo" },
};

const ProyectWindow = ({
  id,
  windowTitle,
  windowDesc,
  link,
  windowTechs,
  closeWindow,
  ishelp,
}: WindowType) => {
  const validTechs = windowTechs.filter((tech) => tech !== "other") as Exclude<
    ProgrammingLang,
    "other"
  >[];

  return (
    <div className="p-2 bg-neutral-800 rounded-lg mb-4 hover:bg-neutral-700 transition-colors duration-300 ease-in-out">
      <div className="border-b-white border-b-2 pb-2 flex justify-between items-center">
        <h1 className="font-Lilita_One text-white text-3xl">{windowTitle}</h1>
        <div className="flex">
          {link && (
            <Image
              draggable={false}
              width={40}
              height={40}
              src="/svgs/arrow-up-right.svg"
              alt=""
              className="transition-all w-10 mr-4 hover:bg-lime-700 active:bg-lime-700 rounded-xl cursor-pointer"
              onClick={() => {
                window.open(link, "_blank")?.focus();
              }}
            />
          )}
          <Image
            draggable={false}
            width={40}
            height={40}
            src="/svgs/x.svg"
            alt=""
            className="transition-all w-10 hover:bg-red-800 active:bg-red-800 rounded-xl cursor-pointer"
            onClick={() => closeWindow(id)}
          />
        </div>
      </div>

      <div className="p-2">
        <div>
          <p className="text-white overflow-auto text-ellipsis max-h-32 pb-2 font-Afacad_Flux">
            {windowDesc}
          </p>
          {!ishelp && validTechs.length > 0 && (
            <div>
              <h1 className="text-primary-500 font-Lilita_One text-2xl pt-1 pb-2 border-t-2 border-white border-opacity-25">
                Tecnologías usadas:
              </h1>
              <div className="flex overflow-auto pb-2">
                {validTechs.map((tech, i) => {
                  const { src, alt } = TechsInfo[tech];
                  return (
                    <div key={i}>
                      <Image
                        draggable={false}
                        width={32}
                        height={32}
                        className="w-8 mr-1"
                        src={`svgs/${src}`}
                        alt={alt}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const TechRender = ({
  img,
  name,
  isActive,
  onClick,
}: {
  img: string;
  name: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-center p-3 pl-10 pr-10 rounded-lg  transition-colors duration-300 ease-in-out cursor-pointer ${
        !isActive ? "bg-neutral-800 hover:bg-neutral-700" : "bg-secondary-500 hover:bg-amber-400"
      }`}
      onClick={onClick}
    >
      <Image
        src={`svgs/${img}`}
        alt={`${name} icon`}
        width={32}
        height={32}
        className="w-10 h-10 md:mr-2"
        draggable={false}
      />
      <p className="font-Afacad_Flux flex items-center justify-center text-lg text-white mt-2 md:mt-0">
        {name}
      </p>
    </div>
  );
};

const mappedTechs = allTechs
  .filter((tech) => tech !== "other")
  .map((tech) => ({
    tech,
    ...TechsInfo[tech as Exclude<ProgrammingLang, "other">],
  }));

const TechList = ({
  selectedTechs,
  setSelectedTechs,
}: {
  selectedTechs: ProgrammingLang[];
  setSelectedTechs: React.Dispatch<React.SetStateAction<ProgrammingLang[]>>;
}) => {
  const handleTechClick = (tech: ProgrammingLang) => {
    setSelectedTechs((prevSelectedTechs) =>
      prevSelectedTechs.includes(tech)
        ? prevSelectedTechs.filter((t) => t !== tech)
        : [...prevSelectedTechs, tech]
    );
  };

  return (
    <div className="flex gap-4 overflow-x-auto">
      {mappedTechs.map((item, index) => (
        <TechRender
          key={index}
          img={item.src}
          name={item.tech}
          isActive={selectedTechs.includes(item.tech)}
          onClick={() => handleTechClick(item.tech)}
        />
      ))}
    </div>
  );
};
