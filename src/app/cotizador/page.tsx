import { Metadata } from "next";
import MainComponent from "./component";

export const metadata: Metadata = {
  title: "Cotizador - Zais",
  description: "Cotiza tus proyectos con Zais",
};

export default function ProyectsPage() {
  return <MainComponent />;
}
