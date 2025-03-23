import { Metadata } from "next";
import MainComponent from "./component";

export const metadata: Metadata = {
  title: "Proyectos - Zais",
  description: "Proyectos de Zais",
};

export default function ProyectsPage() {
  return <MainComponent />;
}
