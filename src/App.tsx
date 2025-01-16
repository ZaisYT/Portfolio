import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from './components/Main';
import { About } from './components/About';
import { Proyects } from './components/Proyects';
import { FOF } from "./components/fof";
import { Achivements } from "./components/Achivements";
import { useEffect } from "react";

type statsObject = {
  closedWindows: number,
  infoClicked: number,
  pagesVisited: string[],
  sectionSwitches: number,
  isKonami: boolean
}

function App() {
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

  function handleKonami() {
    let stats: statsObject = getStats();
    if (!stats.isKonami){
      stats.isKonami = true;
      updateStats(stats);
    }
  }

  useEffect(() => {
    let cursor = 0;
    const KONAMI_CODE = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    document.addEventListener('keydown', (e) => {
      cursor = (e.keyCode == KONAMI_CODE[cursor]) ? cursor + 1 : 0;
      if (cursor == KONAMI_CODE.length) activateCheats();
    });

    function activateCheats() {
      alert("Trucos Activados!");
      handleKonami()
    }
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<FOF />} />
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/proyects" element={<Proyects />} />
          <Route path="/achivements" element={<Achivements />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
