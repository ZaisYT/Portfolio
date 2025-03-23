export type statsObject = {
  closedWindows: number;
  infoClicked: number;
  pagesVisited: string[];
  sectionSwitches: number;
  isKonami: boolean;
};

export function getStats(): statsObject | null {
  if (typeof window === "undefined") return null; // Evita el error en SSR

  const stats = localStorage.getItem("Stats");
  let statsJSON: statsObject | null = stats ? JSON.parse(stats) : null;

  if (statsJSON === null) {
    statsJSON = {
      closedWindows: 0,
      infoClicked: 0,
      pagesVisited: [],
      sectionSwitches: 0,
      isKonami: false,
    };
    localStorage.setItem("Stats", JSON.stringify(statsJSON));
  }

  return statsJSON;
}

export function updateStats(stats: statsObject) {
  localStorage.setItem("Stats", JSON.stringify(stats));
}
