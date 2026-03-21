import { useFadeIn } from "@/hooks/useFadeIn"

export function Story() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section id="story" className="py-20 px-4 sm:px-6">
      <div ref={ref} className={`max-w-4xl mx-auto fade-section ${isVisible ? "visible" : ""}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          From Denmark to{" "}
          <span className="bg-gradient-to-r from-electric-pink to-electric-blue bg-clip-text text-transparent">
            UAE Championship Glory
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Louis Hartmann's journey is one of determination, resilience, and triumph. Moving from
              Denmark to the UAE, Louis found more than just a new home – he discovered an environment
              where differences are celebrated and potential is unlimited. Living with ADHD, dyslexia,
              and autism, Louis has transformed what some might see as challenges into his greatest
              strengths on the racing track.
            </p>
            <p>
              At <span className="text-foreground font-semibold">Fairgreen International School</span>,
              Louis thrives in an inclusive environment where his unique strengths are recognized and
              nurtured. The school's commitment to supporting diverse learners allows him to excel both
              academically and in his racing career.
            </p>
            <p>
              His{" "}
              <span className="text-neon-green font-semibold">
                2025 IAME Summer Cup Championship victory
              </span>{" "}
              isn't just a racing achievement – it's a testament to the power of determination and the
              importance of inclusive educational and sporting environments that champion individual
              potential.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-green to-electric-blue rounded-xl blur-lg opacity-20" />
            <img
              src="/assets/louis-racing-action.jpg"
              alt="Louis Hartmann racing in championship"
              className="relative w-full rounded-xl object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
