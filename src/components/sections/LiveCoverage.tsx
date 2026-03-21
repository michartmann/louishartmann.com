import { useFadeIn } from "@/hooks/useFadeIn"
import { Tv } from "lucide-react"

const links = [
  {
    title: "Rotax Live Coverage",
    subtitle: "Professional Broadcast Quality",
    description:
      "Professional multi-camera broadcasts with live commentary. Louis competes in 15+ televised races per season.",
    live: true,
  },
  {
    title: "IAME Live Coverage",
    subtitle: "HD Race Coverage",
    description:
      "High-quality race coverage featuring replays, podium ceremonies, and championship updates. 9+ broadcast races per season.",
    live: true,
  },
  {
    title: "Rotax Championship Hub",
    subtitle: "Official Championship Platform",
    description:
      "Official UAE Rotax Max Challenge platform featuring race results, championship standings, and driver profiles.",
  },
  {
    title: "IAME Series Hub",
    subtitle: "Official Series Platform",
    description:
      "Official IAME UAE series website with schedules, results, and news.",
  },
]

export function LiveCoverage() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section className="py-20 px-4 sm:px-6 bg-card/50">
      <div ref={ref} className={`max-w-5xl mx-auto fade-section ${isVisible ? "visible" : ""}`}>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Live Race Coverage &{" "}
          <span className="bg-gradient-to-r from-electric-pink to-electric-blue bg-clip-text text-transparent">
            Media Exposure
          </span>
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          Professional race broadcasts across UAE's premier karting championships - your brand featured
          in every race, every podium, every championship moment
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {links.map((link) => (
            <div
              key={link.title}
              className="bg-card border border-border rounded-xl p-5 hover:border-electric-blue/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                {link.live && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-bold bg-red-500/10 text-red-500 border border-red-500/20 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    LIVE
                  </span>
                )}
                <Tv size={16} className="text-electric-blue" />
              </div>
              <h3 className="text-base font-bold mb-1">{link.title}</h3>
              <p className="text-xs text-electric-blue mb-2">{link.subtitle}</p>
              <p className="text-xs text-muted-foreground">{link.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-card border border-border rounded-xl p-5 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="text-foreground font-semibold">Partner Value:</span> Every race weekend
            means hours of professional broadcast coverage featuring your brand. With{" "}
            <span className="text-electric-blue font-semibold">24+ televised races annually</span>{" "}
            across both championships, your investment delivers consistent brand exposure before Louis's
            progression to F4 single-seater racing in 2026.
          </p>
        </div>
      </div>
    </section>
  )
}
