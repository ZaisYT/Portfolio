import { Metadata } from "next";
import MainComponent from "./component";

type statsObject = {
  closedWindows: number,
  infoClicked: number,
  pagesVisited: string[],
  sectionSwitches: number,
  isKonami: boolean
}

export const metadata: Metadata = {
  title: "Proyectos - Zais",
  description: "Proyectos de Zais",
};

export default function ProyectsPage() {
  return (
    <MainComponent />
  );
};