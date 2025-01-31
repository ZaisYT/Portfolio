import type { Metadata } from "next";
import { Afacad_Flux, Lilita_One } from "next/font/google";
import "./globals.css";

const afacadFlux = Afacad_Flux({
  subsets: ["latin"],
  weight: "400"
});

const lilitaOne = Lilita_One({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Zais Page",
  description: "Portafolio de Zais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${afacadFlux.className} ${lilitaOne.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
