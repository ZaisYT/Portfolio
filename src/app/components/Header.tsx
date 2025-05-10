"use client";
import Link from "next/link";
import { getStats, updateStats } from "@/utils/stats";

export default function Header() {
  function handleswitch() {
    const stats = getStats();
    if (!stats) return;
    
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
      </Link>
    </header>
  );
}
