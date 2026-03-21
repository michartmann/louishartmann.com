import { useFadeIn } from "@/hooks/useFadeIn"
import { Heart, Users, Award, Star } from "lucide-react"

const impacts = [
  { icon: Heart, label: "Inspiring young racers with diverse abilities" },
  { icon: Users, label: "Promoting inclusive motorsport culture" },
  { icon: Award, label: "Championing determination & resilience" },
  { icon: Star, label: "Setting new standards for achievement" },
]

export function Ambassador() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section className="py-20 px-4 sm:px-6 bg-card/50">
      <div ref={ref} className={`max-w-4xl mx-auto fade-section ${isVisible ? "visible" : ""}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          UAE's Champion for{" "}
          <span className="bg-gradient-to-r from-neon-green to-electric-blue bg-clip-text text-transparent">
            People of Determination
          </span>
        </h2>

        <div className="space-y-4 text-muted-foreground text-center max-w-2xl mx-auto mb-10 leading-relaxed">
          <p>
            The UAE stands as a global leader in supporting{" "}
            <span className="text-foreground font-semibold">People of Determination</span>, creating
            an inclusive society where every individual can thrive and achieve their dreams.
          </p>
          <p>
            Louis Hartmann embodies this vision perfectly - as an{" "}
            <span className="text-neon-green font-semibold">Ambassador for Inclusion</span>, he
            demonstrates that with the right support and determination, any challenge can become a
            stepping stone to greatness.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {impacts.map((item) => (
            <div
              key={item.label}
              className="bg-card border border-border rounded-xl p-4 text-center hover:border-neon-green/30 transition-colors"
            >
              <item.icon size={24} className="mx-auto mb-2 text-neon-green" />
              <p className="text-xs text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>

        <blockquote className="text-center text-muted-foreground italic text-lg max-w-xl mx-auto">
          "Every victory on the track is a victory for inclusion and the limitless potential within us
          all"
        </blockquote>
      </div>
    </section>
  )
}
