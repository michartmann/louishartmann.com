import { useFadeIn } from "@/hooks/useFadeIn"

const advantages = [
  {
    trait: "Autism",
    strength: "Focus & Consistency",
    description: "Exceptional focus for long endurance races and consistent lap times",
    color: "text-electric-blue",
    bg: "bg-electric-blue/10",
    border: "border-electric-blue/20",
  },
  {
    trait: "Dyslexia",
    strength: "Creative Strategy",
    description: "Big-picture thinking for race strategy and unique problem-solving approaches",
    color: "text-electric-pink",
    bg: "bg-electric-pink/10",
    border: "border-electric-pink/20",
  },
  {
    trait: "ADHD",
    strength: "High-Speed Processing",
    description: "Rapid decision-making and heightened awareness during high-pressure racing",
    color: "text-neon-green",
    bg: "bg-neon-green/10",
    border: "border-neon-green/20",
  },
]

export function Education() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section className="py-20 px-4 sm:px-6">
      <div ref={ref} className={`max-w-5xl mx-auto fade-section ${isVisible ? "visible" : ""}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">
          Balancing Racing &{" "}
          <span className="bg-gradient-to-r from-electric-blue to-neon-green bg-clip-text text-transparent">
            Education
          </span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Where neurodiversity meets excellence – transforming differences into competitive advantages
        </p>

        {/* Academic info */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-lg font-bold mb-1">Academic Excellence</h3>
            <p className="text-sm text-muted-foreground mb-3">IB Career-related Programme (CP)</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Duration:</span>
                <span className="text-foreground font-medium">2026–2028</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Focus Areas:</span>
                <span className="text-foreground font-medium">Business + IT/Data</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Strategic program supporting both sponsorship management skills and advanced race data
              analysis capabilities.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-lg font-bold mb-1 text-neon-green">Fairgreen International School</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              UAE's leading inclusive education environment that celebrates and supports diverse
              learners, allowing Louis to excel both academically and in his racing career through
              personalized learning approaches.
            </p>
          </div>
        </div>

        {/* Competitive advantages */}
        <h3 className="text-xl font-bold text-center mb-6">Competitive Advantages</h3>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {advantages.map((a) => (
            <div key={a.trait} className={`${a.bg} border ${a.border} rounded-xl p-5 text-center`}>
              <span className={`text-lg font-bold ${a.color}`}>{a.trait}</span>
              <div className="text-muted-foreground my-1">→</div>
              <span className="text-foreground font-semibold">{a.strength}</span>
              <p className="text-xs text-muted-foreground mt-2">{a.description}</p>
            </div>
          ))}
        </div>

        <blockquote className="border-l-4 border-neon-green pl-6 py-2 text-muted-foreground italic max-w-2xl mx-auto">
          "Racing gave me focus and structure. My autism and dyslexia are part of who I am – they make
          me stronger, both in school and on the track."
          <footer className="text-sm text-foreground mt-2 not-italic">— Louis Hartmann</footer>
        </blockquote>
      </div>
    </section>
  )
}
