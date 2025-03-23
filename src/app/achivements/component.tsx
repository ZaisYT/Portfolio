"use client";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Image from "next/image";
import { getStats, statsObject } from "@/utils/stats";

export default function MainComponent() {
  const [stats, setStats] = useState<statsObject | null>(null);
  const allPages = ["proyects", "main", "about", "achivements", "404"];

  useEffect(() => {
    setStats(getStats());
  }, []);

  if (!stats) {
    return (
      <div className="min-h-screen p-4 bg-background-800">
        <Header />
        <h1 className="font-Lilita_One text-accent-700 text-5xl mb-4">Logros :3</h1>
        <p className="text-white">Cargando logros...</p>
      </div>
    );
  }

  function percentageCalculation(val: number, expected: number): number {
    const percentage = val / expected;
    return Math.min(percentage * 100, 100);
  }

  function isKonamiExecuted(): number {
    return stats?.isKonami ? 100 : 0;
  }

  function isFOFDiscovered(): number {
    return stats?.pagesVisited?.includes("404") ? 100 : 0;
  }

  function isCompleted(val: number): boolean {
    return val >= 100;
  }

  function percentageAllAchivements(): number {
    if (!stats) return 0;
    const achivementsNo = 12;
    let noCompletedAchivements = 0;

    if (stats.closedWindows >= 100) {
      noCompletedAchivements += 3;
    } else if (stats.closedWindows >= 20) {
      noCompletedAchivements += 2;
    } else if (stats.closedWindows >= 1) {
      noCompletedAchivements += 1;
    }

    if (stats.sectionSwitches >= 100) {
      noCompletedAchivements += 3;
    } else if (stats.sectionSwitches >= 20) {
      noCompletedAchivements += 2;
    } else if (stats.sectionSwitches >= 1) {
      noCompletedAchivements += 1;
    }

    if (stats.infoClicked >= 100) {
      noCompletedAchivements += 3;
    } else if (stats.infoClicked >= 10) {
      noCompletedAchivements += 2;
    } else if (stats.infoClicked >= 1) {
      noCompletedAchivements += 1;
    }

    if (stats.isKonami) noCompletedAchivements += 1;
    if (isFOFDiscovered()) noCompletedAchivements += 1;
    if (stats.pagesVisited.length == allPages.length)
      noCompletedAchivements += 1;

    const percentage = noCompletedAchivements / achivementsNo;
    return percentage * 100;
  }

  const achievements = [
    {
      val: percentageCalculation(stats.closedWindows, 1),
      Title: "Fuera de Aquí!",
      Desc: "Wow, eso de verdad fue molesto!",
      Img: "CLOSEPUP1XL.png",
    },
    {
      val: percentageCalculation(stats.closedWindows, 20),
      Title: "No estan permitidas",
      Desc: "Que salgan de aca!",
      Img: "CLOSEPUP20XL.png",
    },
    {
      val: percentageCalculation(stats.closedWindows, 100),
      Title: "ADBLOCK",
      Desc: "Felicidades, bloqueaste mas publicidad que adblock promedio!",
      Img: "CLOSEPUP100XL.png",
    },
    {
      val: isKonamiExecuted(),
      Title: "Is that Konami??",
      Desc: "User.Settings.GodMode = true",
      Img: "KONAMIXL.png",
    },
    {
      val: isFOFDiscovered(),
      Title: "Fuera del mapa",
      Desc: "Llega a una página de error 404",
      Img: "404XL.png",
    },
    {
      val: percentageCalculation(stats.sectionSwitches, 1),
      Title: "Explorador novato",
      Desc: "Te gusto la pagina?",
      Img: "EXPLORER1XL.png",
    },
    {
      val: percentageCalculation(stats.sectionSwitches, 20),
      Title: "Explorador medio",
      Desc: "Waoo, creo que tengo un fan",
      Img: "EXPLORER20XL.png",
    },
    {
      val: percentageCalculation(stats.sectionSwitches, 100),
      Title: "Explorador Avanzado",
      Desc: "Ehhh, estas bien? Eres mi fan #1",
      Img: "EXPLORER100XL.png",
    },
    {
      val: percentageCalculation(stats.pagesVisited.length, allPages.length),
      Title: "100%?",
      Desc: "Ya revisaste todo, pero aun queda camino",
      Img: "EVERYSECTIONXL.png",
    },
    {
      val: percentageCalculation(stats.infoClicked, 1),
      Title: "Pidiendo ayuda",
      Desc: "Necesitas una mano?",
      Img: "HELP1XL.png",
    },
    {
      val: percentageCalculation(stats.infoClicked, 10),
      Title: "Ehhh no entendiste?",
      Desc: "Creo que tienes TDAH",
      Img: "HELP10XL.png"
    },
    {
      val: percentageCalculation(stats.infoClicked, 100),
      Title: "Eres tonto o te haces?!?",
      Desc: "No, eso ya es retraso",
      Img: "HELP100XL.png",
    },
    {
      val: percentageAllAchivements(),
      Title: "The real 100%!!",
      Desc: "ERES EL GOAT",
      Img: "ALLACHIVEMENTSXL.png",
    }
  ];
  

  return (
    <div className="min-h-screen p-4 bg-background-800">
      <Header />
      <h1 className="font-Lilita_One text-accent-700 text-5xl mb-4">Logros :3</h1>

      <div>
        {achievements.map((ach, index) => (
          <Achievement key={index} val={ach.val} data={{ ...ach, Unlocked: isCompleted(ach.val) }} />
        ))}
      </div>
    </div>
  );
}

type AchiType = {
  val: number;
  data: {
    Img: string;
    Title: string;
    Desc: string;
    Unlocked: boolean;
  };
};

const Achievement = ({ val, data }: AchiType) => {
  return (
    <div className="p-2 bg-neutral-800 rounded-md mb-3">
      <div className="flex">
        <Image
          src={`/Achivements/${data.Img}`}
          alt="Achievement picture"
          width={1200}
          height={1200}
          draggable={false}
          className={data.Unlocked ? "w-24 h-24 rounded-md mr-2" : "w-24 h-24 rounded-md mr-2 grayscale opacity-40"}
        />
        <div>
          <h1 className="text-white font-Lilita_One text-xl">{data.Title}</h1>
          <h2 className="text-neutral-400 font-Afacad_Flux text-md">{data.Desc}</h2>
        </div>
      </div>

      <div className="flex flex-col mt-2">
        <div className="h-2 w-full bg-neutral-700 rounded-full">
          <div
            className={data.Unlocked ? "h-2.5 rounded-full bg-primary-500" : "h-2.5 rounded-full bg-secondary-500"}
            style={{ width: `${val}%` }}
          ></div>
        </div>
        <div className="flex justify-between">
          <h2 className="text-neutral-400 font-Afacad_Flux">
            {String(Number.isInteger(Number(val)) ? val : val.toFixed(2))}%
          </h2>
          <h2 className="text-white font-Afacad_Flux">100%</h2>
        </div>
      </div>
    </div>
  );
};
