'use client';
import Link from "next/link";

type statsObject = {
  closedWindows: number,
  infoClicked: number,
  pagesVisited: string[],
  sectionSwitches: number,
  isKonami: boolean
}

export default function Header() {
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

  function updateStats(stats: statsObject) {
    localStorage.setItem("Stats", JSON.stringify(stats));

    return;
  }

  function handleswitch() {
    let stats = getStats();
    stats.sectionSwitches += 1;
    if (!stats.pagesVisited.includes("main")) {
      stats.pagesVisited.push("main");
    }

    updateStats(stats);
  }

  return (
    <Link onClick={handleswitch} className="text-left xl:text-5xl text-4xl font-Lilita_One text-primary flex items-center mb-1" href="/">
      <span>
        ZAIS!
      </span>
      <span className="text-background bg-accent rounded-md ml-3 text-2xl xl:text-3xl p-0.5">
        BETA
      </span>
    </Link>
  )
}
