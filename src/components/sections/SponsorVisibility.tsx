import { useFadeIn } from "@/hooks/useFadeIn"
import { Camera, Tv, Video } from "lucide-react"

const placements = [
  {
    title: "Premium Helmet Placement",
    description:
      "Your brand prominently featured on Bell racing helmet - visible in all close-up shots, podium ceremonies, and broadcast interviews",
    zones: ["Side Panel", "Top Center", "Back Display"],
    icon: Camera,
    extras: ["Podium Close-ups", "Interview Visibility", "Premium Positioning"],
    image: "/assets/louis-portrait.jpg",
  },
  {
    title: "Suit & Name Sponsorship",
    description:
      "Maximum visibility on professional racing suit - captured in paddock content, race broadcasts, and team photos. XCEL Motorsport team partnership visible.",
    zones: ["Chest Logo", "Back Panel", "Sleeve Placement"],
    icon: Tv,
    extras: ["Full Race Coverage", "Paddock Content", "Team Photos"],
    image: "/assets/louis-portrait.jpg",
  },
  {
    title: "Kart Livery & Racing Action",
    description:
      "Your brand featured during competitive racing - live broadcast coverage across 24+ televised races annually with professional multi-camera filming",
    zones: ["Kart Sidepod", "Nose Cone", "Suit Integration"],
    icon: Video,
    extras: ["24+ Races/Year", "Multi-Camera", "Live Broadcast"],
    image: "/assets/louis-portrait.jpg",
  },
]

export function SponsorVisibility() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section className="py-20 px-4 sm:px-6 bg-background-alt">
      <div ref={ref} className={`max-w-5xl mx-auto fade-section ${isVisible ? "visible" : ""}`}>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">See Your Brand in Action</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {placements.map((p) => (
            <div
              key={p.title}
              className="bg-card border border-border rounded-xl overflow-hidden hover:scale-[1.02] hover:border-electric-pink/30 transition-all duration-200 group"
            >
              {/* Image area */}
              <div className="relative h-40 bg-gradient-to-br from-electric-pink/10 to-electric-blue/10 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <p.icon
                  size={32}
                  className="absolute bottom-3 left-4 text-electric-pink drop-shadow-lg"
                />
              </div>

              <div className="p-5">
                <h3 className="text-base font-bold mb-2">{p.title}</h3>
                <p className="text-xs text-muted-foreground mb-4">{p.description}</p>
                <div className="mb-3">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Sponsor Zones:
                  </span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {p.zones.map((z) => (
                      <span
                        key={z}
                        className="px-2 py-0.5 text-xs bg-electric-pink/10 text-electric-pink border border-electric-pink/20 rounded-full"
                      >
                        {z}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {p.extras.map((e) => (
                    <span
                      key={e}
                      className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded-full"
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-xl p-4 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="text-foreground font-semibold">Content Delivery:</span>{" "}
            High-resolution race photography, behind-the-scenes paddock content, and professional video
            coverage from every race weekend. All sponsor-branded content delivered monthly for your
            marketing use.
          </p>
        </div>
      </div>
    </section>
  )
}
