import { useFadeIn } from "@/hooks/useFadeIn"
import { Instagram, ExternalLink } from "lucide-react"

export function SocialConnect() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section id="contact" className="py-20 px-4 sm:px-6">
      <div ref={ref} className={`max-w-3xl mx-auto text-center fade-section ${isVisible ? "visible" : ""}`}>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Connect &{" "}
          <span className="bg-gradient-to-r from-electric-pink to-electric-blue bg-clip-text text-transparent">
            Follow the Champion
          </span>
        </h2>
        <p className="text-muted-foreground mb-10">
          Follow Louis's championship journey on social media. Get behind-the-scenes content, race
          updates, and inspiration from a rising single-seater talent.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto">
          <a
            href="https://www.instagram.com/louis_karting347/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 hover:border-electric-pink/40 transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-electric-pink/10 flex items-center justify-center">
              <Instagram size={20} className="text-electric-pink" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold group-hover:text-electric-pink transition-colors">
                Instagram
              </p>
              <p className="text-xs text-muted-foreground">@louis_karting347</p>
            </div>
          </a>
          <a
            href="https://www.tiktok.com/@louis_hartmann_347"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 hover:border-electric-blue/40 transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-electric-blue/10 flex items-center justify-center">
              <ExternalLink size={20} className="text-electric-blue" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold group-hover:text-electric-blue transition-colors">
                TikTok
              </p>
              <p className="text-xs text-muted-foreground">@louis_hartmann_347</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
