import { useFadeIn } from "@/hooks/useFadeIn"
import { milestones } from "@/data/timeline"

export function Timeline() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section className="py-20 px-4 sm:px-6">
      <div ref={ref} className={`max-w-4xl mx-auto fade-section ${isVisible ? "visible" : ""}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">Career Progression</h2>
        <p className="text-center text-muted-foreground mb-4">
          <span className="bg-gradient-to-r from-electric-pink to-electric-blue bg-clip-text text-transparent font-bold">
            Racing Roadmap 2025-2031
          </span>
        </p>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          From karting champion to factory driver: A strategic pathway through F4, with options for F3
          single-seaters or GT racing. Join Louis's journey to Le Mans glory.
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-pink via-electric-blue to-racing-gold md:-translate-x-1/2" />

          <div className="space-y-8">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0
              return (
                <div key={m.year} className={`relative flex items-start gap-6 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10">
                    <div
                      className={`w-3 h-3 rounded-full ring-4 ring-background ${
                        m.active ? "bg-neon-green animate-pulse" : "bg-electric-pink"
                      }`}
                    />
                  </div>

                  {/* Card */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                    <span className="inline-block px-2 py-0.5 text-xs font-bold bg-card border border-border rounded-full mb-2 text-electric-pink">
                      {m.year}
                    </span>
                    <h3 className="text-lg font-bold mb-1">{m.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{m.description}</p>
                    <ul className={`space-y-1 text-sm ${isLeft ? "md:text-right" : ""}`}>
                      {m.highlights.map((h) => (
                        <li key={h} className="text-muted-foreground flex items-center gap-2 md:gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-neon-green shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
