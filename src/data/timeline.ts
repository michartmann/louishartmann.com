export interface Milestone {
  year: string
  title: string
  description: string
  highlights: string[]
  active?: boolean
}

export const milestones: Milestone[] = [
  {
    year: "2023-2024",
    title: "Racing Debut & Foundation",
    description: "Made racing debut at Dubai Kartdrome on November 5, 2023. Rapid progression through karting fundamentals with neurodiversity as competitive advantage.",
    highlights: [
      "Dubai Kartdrome debut - November 5, 2023",
      "Rapid skill development in IAME Senior category",
      "Established racing foundation and technique",
    ],
  },
  {
    year: "2024-2025",
    title: "Championship Success & Academy",
    description: "IAME Summer Cup Champion and Champions of the Future Academy driver. Building championship-winning mentality and professional racing approach.",
    highlights: [
      "IAME Summer Cup Champion 2025",
      "Champions of the Future Academy selection",
      "Advanced racecraft and competition strategy",
    ],
    active: true,
  },
  {
    year: "2025-2026",
    title: "Final Karting Excellence",
    description: "Final karting season competing in both IAME and Rotax Senior categories. Maximizing karting success before single-seater transition.",
    highlights: [
      "Dual category competition (IAME + Rotax Senior)",
      "Championship contention in multiple series",
      "F4 preparation and testing programs",
    ],
  },
  {
    year: "2026-2027",
    title: "F4 Debut - Single-Seater Foundation",
    description: "First season in single-seater racing with F4 UAE Championship. Learning car racing fundamentals including slick tyres, downforce management, and professional team dynamics.",
    highlights: [
      "F4 UAE Championship entry",
      "Single-seater fundamentals mastery",
      "Professional team integration",
    ],
  },
  {
    year: "2027-2028",
    title: "F4 Championship Challenge",
    description: "Second F4 season targeting race wins and championship contention. Critical evaluation period for F3 single-seater path or GT3/GT4 sportscar transition.",
    highlights: [
      "F4 championship title challenge",
      "Multiple race victories and podiums",
      "F3 and GT testing programs",
    ],
  },
  {
    year: "2028-2029",
    title: "F3 or GT4 - Career Path Decision",
    description: "Strategic career decision point. Either advancing to F3 Regional/European Championship on the single-seater ladder, or transitioning to GT4 European Series with manufacturer partnership opportunities.",
    highlights: [
      "F3 Regional/European or GT4 European entry",
      "Professional factory team partnership",
      "OEM junior driver program evaluation",
    ],
  },
  {
    year: "2029-2030",
    title: "GT3 & Factory Programs",
    description: "Advanced to GT3 competition and OEM junior driver programs. Building towards factory driver status with manufacturer backing.",
    highlights: [
      "GT3 championship competition",
      "OEM junior driver program entry",
      "Factory driver development pathway",
    ],
  },
  {
    year: "2031+",
    title: "Factory Driver & Endurance",
    description: "Factory driver status achieved. Competing in premier endurance races including Le Mans 24H, Spa 24H, and international GT championships.",
    highlights: [
      "Factory driver contract secured",
      "Le Mans 24 Hours competition",
      "Premier endurance racing campaigns",
    ],
  },
]
