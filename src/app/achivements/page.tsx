import { Metadata } from "next";
import MainComponent from "./component";

export const metadata: Metadata = {
  title: "Logros - Zais",
  description: "Logros en el fortafolio de Zais",
};

export default function Page() {
  return <MainComponent />;
}
