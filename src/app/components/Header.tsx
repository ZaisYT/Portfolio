"use client";
import Link from "next/link";
import { getStats, updateStats } from "@/utils/stats";

export default function Header() {
  function handleswitch() {
    const stats = getStats();
    stats.sectionSwitches += 1;
    if (!stats.pagesVisited.includes("main")) {
      stats.pagesVisited.push("main");
    }

    updateStats(stats);
  }

  return (
    <header className="flex">
      <Link
        onClick={handleswitch}
        className="text-left xl:text-5xl text-4xl font-Lilita_One text-primary-500 flex items-center mb-1"
        href="/"
      >
        <h1>ZAIS!</h1>
        <h2 className="text-background-800 bg-accent-700 rounded-md ml-3 text-2xl xl:text-3xl p-0.5">
          BETA
        </h2>
      </Link>
    </header>
  );
}
