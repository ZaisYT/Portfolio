import { Metadata } from "next";
import MainComponent from "./component";

export const metadata: Metadata = {
  title: "Zais Page",
  description: "Portafolio de Zais",
};

export default function Page() {
  return <MainComponent />;
}
