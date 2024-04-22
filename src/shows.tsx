
export interface showType {
  name: string,
  dateSeen?: string,
  url?: string,
  isBroadway: boolean,
  theatre?: string,
  synopsis?: string,
  img?: string,
  isRecommended: boolean,
}

export const SHOWS : showType[] = [
  {
    "name": "Mother Play",
    "dateSeen": "4/7/2024",
    "url": "https://2st.com/shows/mother-play",
    "isBroadway": true,
    "img": "mother.JPG",
    "theatre": "Hayes Theater",
    "isRecommended": false,
    "synopsis": "It’s 1962, just outside of D.C., and matriarch Phyllis (Jessica Lange) is supervising her teenage children, Carl (Jim Parsons) and Martha (Celia Keenan-Bolger), as they move into a new apartment. Phyllis has strong ideas about what her children need to do and be to succeed, and woe be the child who finds their own path. Bolstered by gin and cigarettes, the family endures — or survives — the changing world around them. Blending flares of imaginative theatricality, surreal farce, and deep tenderness, this beautiful roller coaster ride reveals timeless truths of love, family, and forgiveness.",
  },
  {
    name: "An Enemy of the People",
    dateSeen: "3/9/2024",
    isBroadway: true,
    img: "enemyofthepeople.JPG",
    theatre: "Circle in the Square Theatre",
    isRecommended: false,
  },
  {
    name: "Back to the Future the Musical",
    dateSeen: "3/31/2024",
    isBroadway: true,
    theatre: "Winter Garden Theatre",
    synopsis: "",
    isRecommended: true,
    img: "backtothefuture.jpg"
  },
  {
    name: "The Notebook The Musical",
    dateSeen: "3/30/2024",
    isBroadway: true,
    theatre: "Gerald Schoenfeld Theatre",
    isRecommended: false,
    img: "notebook.jpg",
  },
  {
    name: "Lempicka",
    dateSeen: "4/18/2024",
    isBroadway: true,
    theatre: "Longacre Theatre",
    isRecommended: false,
    img: "lempicka.jpg",
  },
]