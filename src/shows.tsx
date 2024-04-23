
export interface showType {
  name: string,
  dateSeen: string,
  url?: string,
  type?: "BROADWAY" | "OFF_BROADWAY",
  theatre?: string,
  synopsis?: string,
  img?: string,
  isRecommended: boolean,
}

export const SHOWS : showType[] = [
  {
    "name": "Brooklyn Laundry",
    "dateSeen": "2/22/2024",
    "type": "OFF_BROADWAY",
    "theatre": "New York City Center Stage I",
    "isRecommended": false
  },
  {
    "name": "An Enemy of the People",
    "dateSeen": "3/9/2024",
    "type": "BROADWAY",
    "img": "enemyofthepeople.JPG",
    "theatre": "Circle in the Square Theatre",
    "isRecommended": false,
    "url": "https://anenemyofthepeopleplay.com/"
  },
  {
    "name": "The Notebook The Musical",
    "dateSeen": "3/30/2024",
    "type": "BROADWAY",
    "theatre": "Gerald Schoenfeld Theatre",
    "isRecommended": false,
    "img": "notebook.jpg",
    "url": "https://notebookmusical.com/"
  },
  {
    "name": "Back to the Future the Musical",
    "dateSeen": "3/31/2024",
    "type": "BROADWAY",
    "theatre": "Winter Garden Theatre",
    "synopsis": "",
    "isRecommended": true,
    "img": "backtothefuture.jpg",
    "url": "https://www.backtothefuturemusical.com/"
  },
  {
    "name": "Mother Play",
    "dateSeen": "4/7/2024",
    "url": "https://2st.com/shows/mother-play",
    "type": "BROADWAY",
    "img": "mother.jpg",
    "theatre": "The Hayes Theater",
    "isRecommended": false,
    "synopsis": ""
  },
  {
    "name": "Lempicka",
    "dateSeen": "4/18/2024",
    "type": "BROADWAY",
    "theatre": "Longacre Theatre",
    "isRecommended": false,
    "img": "lempicka.jpg",
    "url": "https://lempickamusical.com/"
  },
  {
    "name": "Monty Python's Spamalot",
    "dateSeen": "2/18/2024",
    "type": "BROADWAY",
    "theatre": "St. James Theatre",
    "isRecommended": true
  },
  {
    "name": "Job the Play",
    "dateSeen": "2/19/2024",
    "type": "OFF_BROADWAY",
    "theatre": "Connelly Theater",
    "isRecommended": true,
    "url": "https://jobtheplay.com/"
  },
  {
    "name": "The Apiary",
    "dateSeen": "2/11/2024",
    "type": "OFF_BROADWAY",
    "theatre": "Tony Kiser Theater",
    "isRecommended": false
  },
  {
    "name": "I Love You So Much I Could Die",
    "dateSeen": "2/6/2024",
    "type": "OFF_BROADWAY",
    "theatre": "New York Theatre Workshop",
    "url": "https://www.nytw.org/show/i-love-you-so-much-i-could-die/",
    "isRecommended": false
  },
  {
    "name": "Sweeney Todd",
    "dateSeen": "2/2/2024",
    "type": "BROADWAY",
    "theatre": "Lunt-Fontanne Theatre",
    "isRecommended": true,
    "url": "https://sweeneytoddbroadway.com/"
  },
  {
    "name": "Wicked",
    "dateSeen": "1/30/2024",
    "type": "BROADWAY",
    "theatre": "Gershwin Theatre",
    "isRecommended": true,
    "url": "https://wickedthemusical.com/"
  },
  {
    "name": "Appropriate",
    "dateSeen": "12/1/2023",
    "type": "BROADWAY",
    "theatre": "The Hayes Theater",
    "isRecommended": true,
    "url": "https://appropriateplay.com/"
  },
  {
    "name": "Gutenberg The Musical",
    "dateSeen": "11/28/2023",
    "type": "BROADWAY",
    "theatre": "James Earl Jones Theatre",
    "isRecommended": false
  },
  {
    "name": "Spain",
    "dateSeen": "11/16/2023",
    "type": "OFF_BROADWAY",
    "theatre": "Tony Kiser Theater",
    "isRecommended": false
  },
  {
    "name": "Six The Musical",
    "dateSeen": "11/17/2023",
    "type": "BROADWAY",
    "isRecommended": true,
    "url": "https://sixonbroadway.com/",
    "theatre": "Lena Horne Theatre"
  },
  {
    "name": "I Need That",
    "dateSeen": "10/15/2023",
    "type": "BROADWAY",
    "theatre": "American Airlines Theatre",
    "isRecommended": false
  },
  {
    "name": "Merry Me",
    "dateSeen": "10/21/2023",
    "type": "OFF_BROADWAY",
    "theatre": "New York Theatre Workshop",
    "isRecommended": false
  },
  {
    "name": "Merrily We Roll Along",
    "dateSeen": "10/14/2023",
    "type": "BROADWAY",
    "theatre": "Hudson Theatre",
    "isRecommended": true,
    "url": "https://merrilyonbroadway.com/"
  },
  {
    "name": "The Refuge Plays",
    "dateSeen": "9/29/2023",
    "type": "OFF_BROADWAY",
    "theatre": "Laura Pels Theatre at the Harold and Miriam Steinberg Center for Theatre",
    "isRecommended": false
  },
  {
    "name": "Death Let Me Do My Show",
    "dateSeen": "9/18/2023",
    "type": "OFF_BROADWAY",
    "theatre": "Lucille Lortel Theatre",
    "isRecommended": false
  },
  {
    "name": "The Shark is Broken",
    "dateSeen": "9/9/2023",
    "type": "BROADWAY",
    "theatre": "Golden Theatre",
    "isRecommended": false
  },
  {
    "name": "Infinite Life",
    "dateSeen": "9/2/2023",
    "type": "OFF_BROADWAY",
    "theatre": "Linda Gross Theater",
    "isRecommended": false
  },
  {
    "name": "Good Night, Oscar",
    "dateSeen": "7/21/2023",
    "type": "BROADWAY",
    "theatre": "Belasco Theatre",
    "isRecommended": false
  },
  {
    "name": "Shucked",
    "dateSeen": "7/1/2023",
    "type": "BROADWAY",
    "theatre": "Nederlander Theatre",
    "isRecommended": false
  },
  {
    "name": "Parade",
    "dateSeen": "6/7/2023",
    "type": "BROADWAY",
    "theatre": "Bernard B. Jacobs Theatre",
    "isRecommended": false
  },
  {
    "name": "King James",
    "dateSeen": "5/14/2023",
    "type": "OFF_BROADWAY",
    "theatre": "NY City Center Stage I",
    "isRecommended": false
  },
  {
    "name": "The Sign in Sidney Brustein's Window",
    "dateSeen": "5/11/2023",
    "type": "BROADWAY",
    "theatre": "James Earl Jones Theatre",
    "isRecommended": false
  },
  {
    "name": "Funny Girl",
    "dateSeen": "4/29/2023",
    "type": "BROADWAY",
    "theatre": "August Wilson Theatre",
    "isRecommended": false
  },
  {
    "name": "Kimberly Akimbo",
    "dateSeen": "4/28/2023",
    "type": "BROADWAY",
    "theatre": "Booth Theatre",
    "isRecommended": true,
    "url": "https://kimberlyakimbothemusical.com/"
  },
  {
    "name": "The Thanksgiving Play",
    "dateSeen": "4/15/2023",
    "type": "BROADWAY",
    "theatre": "The Hayes Theater",
    "isRecommended": false
  },
  {
    "name": "Little Shop of Horrors",
    "dateSeen": "4/14/2023",
    "type": "OFF_BROADWAY",
    "theatre": "Westside Theatre Upstairs",
    "url": "https://littleshopnyc.com/",
    "isRecommended": true
  },
  {
    "name": "Bad Cinderella",
    "dateSeen": "3/4/2023",
    "type": "BROADWAY",
    "theatre": "Imperial Theatre",
    "isRecommended": false
  },
  {
    "name": "Harry Potter and the Cursed Child",
    "dateSeen": "2/11/2023",
    "type": "BROADWAY",
    "theatre": "Lyric Theatre",
    "isRecommended": true,
    "url": "https://broadway.harrypottertheplay.com/"
  },
  {
    "name": "Phantom of the Opera",
    "dateSeen": "1/25/2023",
    "type": "BROADWAY",
    "theatre": "Majestic Theatre",
    "isRecommended": false
  },
  {
    "name": "Take Me Out",
    "dateSeen": "1/15/2023",
    "type": "BROADWAY",
    "theatre": "Gerald Schoenfeld Theatre",
    "isRecommended": false
  },
  {
    "name": "& Juliet",
    "dateSeen": "1/14/2023",
    "type": "BROADWAY",
    "theatre": "Stephen Sondheim Theatre",
    "url": "https://andjulietbroadway.com/",
    "isRecommended": false
  },
  {
    "name": "Into The Woods",
    "dateSeen": "10/13/2022",
    "type": "BROADWAY",
    "theatre": "St. James Theatre",
    "isRecommended": false
  },
  {
    "name": "The Kite Runner",
    "dateSeen": "9/30/2022",
    "type": "BROADWAY",
    "theatre": "The Hayes Theater",
    "isRecommended": false
  },
  {
    "name": "Hadestown",
    "dateSeen": "9/24/2022",
    "type": "BROADWAY",
    "theatre": "Walter Kerr Theatre",
    "isRecommended": true,
    "url": "https://hadestown.com/broadway"
  },
  {
    "name": "Beetlejuice",
    "dateSeen": "9/10/2022",
    "type": "BROADWAY",
    "theatre": "Marquis Theatre",
    "isRecommended": false
  },
  {
    "name": "Come From Away",
    "dateSeen": "8/14/2022",
    "type": "BROADWAY",
    "theatre": "Gerald Schoenfeld Theatre",
    "isRecommended": false
  },
  {
    "name": "Dear Evan Hansen",
    "dateSeen": "7/30/2022",
    "type": "BROADWAY",
    "theatre": "The Music Box",
    "isRecommended": false
  },
  {
    "name": "Company",
    "dateSeen": "7/6/2022",
    "type": "BROADWAY",
    "theatre": "Bernard B. Jacobs Theatre",
    "isRecommended": false
  }
]