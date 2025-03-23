import { Metadata } from "next";
import MainComponent from "./component";

export const metadata: Metadata = {
  title: "Sobre mi - Zais",
  description: "Sobre Zais",
};

export default function Page() {
  return <MainComponent />;
}
