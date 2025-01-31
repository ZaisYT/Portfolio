import { Metadata } from "next";
import FOFComponent from "./fof";

export const metadata: Metadata = {
  title: "Oops! - Zais",
  description: "Pagina no encontrada en el portafolio de Zais",
};

export default function Page() {
  return (
    <FOFComponent/>
  );
}