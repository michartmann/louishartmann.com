import { useFadeIn } from "@/hooks/useFadeIn"

const steps = [
  { label: "F4 UAE (2026-28)", color: "bg-electric-blue" },
  { label: "F3 or GT4 (2028-29)", color: "bg-racing-orange" },
  { label: "GT3 & Factory Programs", color: "bg-electric-pink" },
  { label: "Le Mans & Endurance Racing", color: "bg-racing-gold" },
]

export function RacingProgression() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section className="py-20 px-4 sm:px-6 bg-card/50">
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
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-blue via-racing-orange to-racing-gold -translate-y-1/2" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center">
                <div className={`w-4 h-4 rounded-full ${step.color} ring-4 ring-background mb-3 z-10`} />
                <div className="bg-card border border-border rounded-lg px-4 py-3 text-center w-full">
                  <span className="text-sm font-semibold text-foreground">{step.label}</span>
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
            <span className="text-xs text-muted-foreground">Single-seater career development</span>
          </div>
        </div>
      </div>
    </section>
  )
}
