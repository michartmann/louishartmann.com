import { useFadeIn } from "@/hooks/useFadeIn"
import { partnerships } from "@/data/partnerships"
import { Check, ArrowRight, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

export function Partnerships() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section id="partners" className="py-20 px-4 sm:px-6">
      <div ref={ref} className={`max-w-6xl mx-auto fade-section ${isVisible ? "visible" : ""}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Partnership{" "}
          <span className="bg-gradient-to-r from-racing-gold to-racing-orange bg-clip-text text-transparent">
            Opportunities
          </span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Partner with Louis Hartmann: Rising F4 Contender with a unique story. From
          championship-winning performance to inspiring thousands through neurodiversity advocacy.
        </p>

        <h3 className="text-xl font-bold text-center mb-8">Partnership Levels</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {partnerships.map((p) => (
            <div
              key={p.title}
              className={cn(
                "bg-card border rounded-xl p-6 flex flex-col hover:scale-[1.02] transition-all duration-200",
                p.premium
                  ? "border-racing-gold/40 ring-1 ring-racing-gold/20 hover:ring-racing-gold/40 hover:shadow-[0_0_20px_rgba(234,179,8,0.1)]"
                  : "border-border hover:border-electric-pink/30"
              )}
            >
              {p.premium && (
                <span className="inline-block self-start px-2 py-0.5 text-xs font-bold bg-racing-gold/10 text-racing-gold border border-racing-gold/20 rounded-full mb-3">
                  PREMIUM
                </span>
              )}
              <h4 className="text-lg font-bold mb-1">{p.title}</h4>
              <p className="text-sm text-muted-foreground mb-4">{p.subtitle}</p>
              <ul className="space-y-2 mt-auto">
                {p.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={14} className="text-neon-green mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold">Request Partnership Information</h3>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Get a comprehensive sponsorship package including detailed proposals, media reach
            analytics, championship schedules, and custom partnership opportunities.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="mailto:racing@louishartmann.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-racing-gold to-racing-orange text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              <Mail size={16} />
              Get Sponsorship Package
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
