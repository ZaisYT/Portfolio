import { Metadata } from "next";
import ComponenteHaku from "./component";

export const metadata: Metadata = {
  title: "Pagina para haku - Zais",
  description: "Pagina oculta pa la hakusita :3",
};

export default function ProyectsPage() {
  return <ComponenteHaku />;
}
