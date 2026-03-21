import { Instagram, ExternalLink, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-electric-pink/5 via-background to-background" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Text content */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-widest text-neon-green bg-neon-green/10 border border-neon-green/20 rounded-full">
            IAME Summer Cup Champion 2025
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-4">
            <span className="bg-gradient-to-r from-electric-pink to-electric-blue bg-clip-text text-transparent">
              LOUIS
            </span>
            <br />
            <span className="text-foreground">HARTMANN</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mb-6 leading-relaxed">
            Racing debut: Dubai Kartdrome, November 5, 2023. Danish champion transforming
            neurodiversity into competitive advantage in professional motorsport.
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            Next target: <span className="text-electric-blue font-semibold">F4</span> →{" "}
            <span className="text-racing-orange font-semibold">F3/GT</span> →{" "}
            <span className="text-racing-gold font-semibold">Professional Driver Career</span>
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
            <button
              onClick={() => document.getElementById("racing")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-electric-pink to-electric-blue text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              View Racing Journey
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => document.getElementById("partners")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-semibold rounded-full hover:bg-muted transition-colors"
            >
              Partnership Opportunities
            </button>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start text-sm text-muted-foreground">
            <span>Follow:</span>
            <a
              href="https://www.instagram.com/louis_karting347/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-foreground hover:text-electric-pink transition-colors"
            >
              <Instagram size={16} />
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@louis_hartmann_347"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-foreground hover:text-electric-pink transition-colors"
            >
              <ExternalLink size={16} />
              TikTok
            </a>
          </div>
        </div>

        {/* Portrait */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-electric-pink to-electric-blue rounded-2xl blur-lg opacity-30" />
            <img
              src="/assets/louis-portrait.png"
              alt="Louis Hartmann in XCEL Motorsport racing suit"
              className="relative w-64 sm:w-80 lg:w-96 rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bottom badge */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="px-4 py-2 bg-card border border-border rounded-full text-xs text-muted-foreground">
          Future Path: Karting to GT Driver
        </div>
      </div>
    </section>
  )
}
