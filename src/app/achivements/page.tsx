import { Metadata } from "next";
import MainComponent from "./component";

export const metadata: Metadata = {
  title: "Logros - Zais",
  description: "Logros en el fortafolio de Zais",
};

const AllRoutes = [
  "main",
  "about",
  "proyects",
  "achivements",
  "404",
  "cotizador",
];

export default function Page() {
  return <MainComponent routes={AllRoutes} />;
}
