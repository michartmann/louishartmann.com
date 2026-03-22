import { useFadeIn } from "@/hooks/useFadeIn"
import { Flag, Car, Trophy as TrophyIcon, Star } from "lucide-react"

const steps = [
  {
    label: "F4 UAE",
    years: "2026-28",
    color: "bg-electric-blue",
    borderColor: "border-electric-blue/40",
    textColor: "text-electric-blue",
    icon: Flag,
  },
  {
    label: "F3 or GT4",
    years: "2028-29",
    color: "bg-racing-orange",
    borderColor: "border-racing-orange/40",
    textColor: "text-racing-orange",
    icon: Car,
  },
  {
    label: "GT3 & Factory",
    years: "2029-30",
    color: "bg-electric-pink",
    borderColor: "border-electric-pink/40",
    textColor: "text-electric-pink",
    icon: TrophyIcon,
  },
  {
    label: "Le Mans",
    years: "2031+",
    color: "bg-racing-gold",
    borderColor: "border-racing-gold/40",
    textColor: "text-racing-gold",
    icon: Star,
  },
]

export function RacingProgression() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section className="py-20 px-4 sm:px-6 bg-background-alt">
      <div ref={ref} className={`max-w-4xl mx-auto fade-section ${isVisible ? "visible" : ""}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Dream Big.{" "}
          <span className="bg-gradient-to-r from-racing-gold to-racing-orange bg-clip-text text-transparent">
            Race Higher.
          </span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 leading-relaxed">
          Louis made his racing debut at Dubai Kartdrome on November 5, 2023 (IAME UAE Round 2). After
          competing in Junior and Senior karting, and the Champions of the Future Academy UAE (2024–25),
          his final karting season will be 2025–26. At 16, Louis will transition to F4 single-seater
          racing in the UAE, building the foundation for F3 or GT racing and ultimately a factory seat.
        </p>

        <div className="relative mb-12">
          {/* Animated dashed connecting line (desktop) */}
          <svg
            className="hidden md:block absolute top-6 left-0 right-0 h-2 z-0"
            preserveAspectRatio="none"
          >
            <line
              x1="12.5%"
              y1="50%"
              x2="87.5%"
              y2="50%"
              stroke="url(#progressGradient)"
              strokeWidth="2"
              strokeDasharray="8 6"
              style={{ animation: "dash-move 1.5s linear infinite" }}
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="33%" stopColor="#f97316" />
                <stop offset="66%" stopColor="#e23d8b" />
                <stop offset="100%" stopColor="#eab308" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center group">
                <div
                  className={`w-8 h-8 rounded-full ${step.color} ring-4 ring-background mb-3 z-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}
                >
                  <step.icon size={14} className="text-white" />
                </div>
                <div
                  className={`bg-card border ${step.borderColor} rounded-lg px-4 py-4 text-center w-full group-hover:scale-[1.03] transition-all duration-200`}
                  style={{
                    borderTopWidth: "3px",
                  }}
                >
                  <span className="text-sm font-bold text-foreground block">{step.label}</span>
                  <span className={`text-xs font-medium ${step.textColor}`}>{step.years}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <blockquote className="border-l-4 border-electric-pink pl-6 py-2 text-muted-foreground italic max-w-2xl mx-auto">
          "Karting teaches racecraft and precision. F4 is the bridge to car racing fundamentals. F3 or
          GT4 develops wheel-to-wheel combat skills. Each category prepares you for the ultimate
          challenge: endurance racing."
        </blockquote>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-electric-blue/10 border border-electric-blue/20 rounded-full">
            <div className="w-2 h-2 rounded-full bg-electric-blue animate-pulse" />
            <span className="text-sm font-semibold text-electric-blue">Next Stop: F4 Racing 2026</span>
            <span className="text-xs text-muted-foreground hidden sm:inline">Single-seater career development</span>
          </div>
        </div>
      </div>
    </section>
  )
}
