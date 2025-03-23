"use client";
import { useCallback, useEffect } from "react";
import { getStats, updateStats } from "@/utils/stats";
import Header from "./components/Header";
import Link from "next/link";

export default function FOFComponent() {
  const handleswitch = useCallback((page: string) => {
    const stats = getStats();
    stats.sectionSwitches += 1;
    if (!stats.pagesVisited.includes(page)) {
      stats.pagesVisited.push(page);
    }

    updateStats(stats);
  }, []);

  useEffect(() => {
    handleswitch("404");
  }, [handleswitch]);

  return (
    <main className="p-4 min-h-screen bg-background-800">
      <Header />

      <h1 className="mt-2 text-8xl font-Lilita_One text-accent-700">404!</h1>
      <h2 className="text-3xl font-Afacad_Flux text-white mb-10">
        Parece que no hemos encontrado ese contenido :c
      </h2>

      <Link
        href="/"
        className="no-underline flex items-center justify-center font-Afacad_Flux rounded-lg text-black max-w-[40%] min-h-12 text-2xl bg-primary-500 cursor-pointer active:bg-secondary-500 my-4"
      >
        Volver al principio
      </Link>
    </main>
  );
}
