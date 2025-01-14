import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from './components/Main';
import { About } from './components/About';
import { Proyects } from './components/Proyects';
import { FOF } from "./components/fof";
import { Achivements } from "./components/Achivements";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    let cursor = 0;
    const KONAMI_CODE = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    document.addEventListener('keydown', (e) => {
      cursor = (e.keyCode == KONAMI_CODE[cursor]) ? cursor + 1 : 0;
      if (cursor == KONAMI_CODE.length) activateCheats();
    });

    function activateCheats() {
      alert("cheats activated");
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
