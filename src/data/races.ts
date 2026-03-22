export interface Race {
  id: string
  series: "IAME" | "Rotax"
  round: string
  name: string
  date: string
  venue: string
  status: "upcoming" | "completed" | "next"
}

export const iameRaces: Race[] = [
  { id: "iame-6-7", series: "IAME", round: "ROUND 6-7", name: "IAME Series UAE", date: "3/4 January 2026", venue: "Yas Marina Circuit", status: "completed" },
  { id: "iame-mec", series: "IAME", round: "MEC 2026", name: "Special Event", date: "10/11 January 2026", venue: "Sharjah Kart Track", status: "completed" },
  { id: "iame-8-9", series: "IAME", round: "ROUND 8-9", name: "IAME Series UAE", date: "31 Jan - 1 Feb 2026", venue: "Al Forsan", status: "completed" },
  { id: "iame-10", series: "IAME", round: "ROUND 10", name: "IAME Series UAE", date: "8 February 2026", venue: "RAK TRACK", status: "completed" },
  { id: "iame-s1", series: "IAME", round: "SUMMER R1", name: "IAME Summer Cup", date: "5 April 2026", venue: "RAK TRACK", status: "next" },
  { id: "iame-s2", series: "IAME", round: "SUMMER R2", name: "IAME Summer Cup", date: "26 April 2026", venue: "RAK TRACK", status: "upcoming" },
  { id: "iame-s3", series: "IAME", round: "SUMMER R3", name: "IAME Summer Cup", date: "17 May 2026", venue: "RAK TRACK", status: "upcoming" },
]

export const rotaxRaces: Race[] = [
  { id: "rotax-4-1", series: "Rotax", round: "ROUND 4.1", name: "Rotax UAE", date: "17 January 2026", venue: "DUBAI KARTDROME", status: "completed" },
  { id: "rotax-4-2", series: "Rotax", round: "ROUND 4.2", name: "Rotax UAE", date: "18 January 2026", venue: "DUBAI KARTDROME", status: "completed" },
  { id: "rotax-5-1", series: "Rotax", round: "ROUND 5.1", name: "Rotax UAE", date: "14 February 2026", venue: "YAS MARINA CIRCUIT", status: "completed" },
  { id: "rotax-5-2", series: "Rotax", round: "ROUND 5.2", name: "Rotax UAE", date: "15 February 2026", venue: "YAS MARINA CIRCUIT", status: "completed" },
  { id: "rotax-6", series: "Rotax", round: "ROUND 6", name: "Rotax UAE", date: "8 March 2026", venue: "DUBAI KARTDROME", status: "completed" },
  { id: "rotax-7", series: "Rotax", round: "ROUND 7", name: "Rotax UAE", date: "29 March 2026", venue: "AL FORSAN CIRCUIT", status: "next" },
  { id: "rotax-8-1", series: "Rotax", round: "ROUND 8.1", name: "Rotax UAE", date: "11 April 2026", venue: "AL AIN RACEWAY", status: "upcoming" },
  { id: "rotax-8-2", series: "Rotax", round: "ROUND 8.2", name: "Rotax UAE", date: "12 April 2026", venue: "AL AIN RACEWAY", status: "upcoming" },
]
