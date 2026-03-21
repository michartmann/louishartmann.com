export interface Partnership {
  title: string
  subtitle: string
  premium?: boolean
  benefits: string[]
}

export const partnerships: Partnership[] = [
  {
    title: "GT Factory Partner",
    subtitle: "Premium partnership with maximum GT racing exposure and factory driver support",
    premium: true,
    benefits: [
      "Primary logo on GT4/GT3 cars at Spa, Nurburgring, Silverstone",
      "Live-stream coverage across European GT championships",
      "OEM factory scout meetings and networking",
      "Exclusive paddock hospitality experiences",
      "Co-branded factory driver program content",
    ],
  },
  {
    title: "Technical Partner",
    subtitle: "GT racing technical development and equipment partnership",
    benefits: [
      "Logo on racing equipment and GT car livery",
      "GT4/GT3 technical development collaboration",
      "Advanced data analysis and telemetry insights",
      "Behind-the-scenes European circuit content",
      "Co-branded GT racing technical updates",
    ],
  },
  {
    title: "Circuit Logistics",
    subtitle: "Support for European GT championship logistics and transport",
    benefits: [
      "Branded transport to iconic European circuits",
      "GT4/GT3 race calendar integration and planning",
      "Multi-circuit logistics efficiency content",
      "Spa-Francorchamps to Nurburgring travel documentation",
      "European championship logistics partnership announcements",
    ],
  },
  {
    title: "GT Media Partner",
    subtitle: "GT racing content creation and championship media coverage",
    benefits: [
      "GT4/GT3 branded content production across Europe",
      "Live championship social media partnership",
      "European circuit video series collaboration",
      "Exclusive GT racing photography rights",
      "Factory driver journey digital marketing integration",
    ],
  },
  {
    title: "Neurodiversity Advocate",
    subtitle: "Partnership focused on neurodiversity in motorsport and CSR impact",
    benefits: [
      "Neurodiversity in motorsport advocacy platform",
      "GT racing accessibility and inclusion content",
      "Youth development and diverse talent programs",
      "CSR impact through inclusive racing initiatives",
      "Grassroots GT racing and karting transition support",
    ],
  },
]
