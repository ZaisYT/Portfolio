import { Link } from "react-router-dom"

type statsObject = {
  closedWindows: number,
  infoClicked: number,
  pagesVisited: string[],
  sectionSwitches: number
}

export const Header = () => {
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
        sectionSwitches: 0
      };
      localStorage.setItem("Stats", JSON.stringify(statsJSON));
    }

    return statsJSON
  }

  function updateStats(stats: statsObject){
    localStorage.setItem("Stats", JSON.stringify(stats));

    return;
  }

  function handleswitch() {
    let stats = getStats();
    stats.sectionSwitches += 1;
    if (!stats.pagesVisited.includes("main")){
      stats.pagesVisited.push("main");
    }

    updateStats(stats);
  }

  return (
    <Link onClick={handleswitch} className="text-left xl:text-5xl text-4xl font-Lilita_One text-primary" to="/">ZAIS!</Link>
  )
}
