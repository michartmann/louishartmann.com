import { useState } from "react"
import { useFadeIn } from "@/hooks/useFadeIn"
import { iameRaces, rotaxRaces, type Race } from "@/data/races"
import { cn } from "@/lib/utils"
import { MapPin, Calendar, Trophy, Star, Award } from "lucide-react"

const tabs = ["All", "Upcoming", "Completed"] as const
type Tab = (typeof tabs)[number]

function filterRaces(races: Race[], tab: Tab) {
  if (tab === "All") return races
  if (tab === "Upcoming") return races.filter((r) => r.status === "upcoming" || r.status === "next")
  return races.filter((r) => r.status === "completed")
}

function RaceCard({ race }: { race: Race }) {
  return (
    <div className="flex items-center justify-between bg-card border border-border rounded-lg px-4 py-3 hover:border-electric-pink/30 transition-colors">
      <div className="flex items-center gap-3">
        <span className="text-xs font-bold text-electric-pink uppercase whitespace-nowrap">
          {race.round}
        </span>
        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full bg-electric-blue/10 text-electric-blue border border-electric-blue/20">
          Upcoming
        </span>
      </div>
      <div className="flex items-center gap-4 text-sm">
        <span className="text-foreground flex items-center gap-1">
          <MapPin size={12} className="text-muted-foreground" />
          {race.venue}
        </span>
        <span className="text-muted-foreground flex items-center gap-1">
          <Calendar size={12} />
          {race.date}
        </span>
      </div>
    </div>
  )
}

export function RacingCalendar() {
  const [activeTab, setActiveTab] = useState<Tab>("All")
  const { ref, isVisible } = useFadeIn()

  const filteredIame = filterRaces(iameRaces, activeTab)
  const filteredRotax = filterRaces(rotaxRaces, activeTab)

  return (
    <section id="racing" className="py-20 px-4 sm:px-6 bg-card/50">
      <div ref={ref} className={`max-w-5xl mx-auto fade-section ${isVisible ? "visible" : ""}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Racing Calendar &{" "}
          <span className="bg-gradient-to-r from-electric-pink to-electric-blue bg-clip-text text-transparent">
            Achievements
          </span>
        </h2>
        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          Comprehensive race schedule across UAE's premier karting championships with extensive media coverage
        </p>

        {/* Achievement badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <div className="bg-card border border-neon-green/20 rounded-lg p-3 text-center">
            <Trophy size={20} className="mx-auto mb-1 text-neon-green" />
            <p className="text-xs font-bold text-neon-green">IAME SUMMER CUP CHAMPION 2025</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-3 text-center">
            <Star size={20} className="mx-auto mb-1 text-electric-blue" />
            <p className="text-xs font-bold text-foreground">15 Years Old</p>
            <p className="text-xs text-muted-foreground">Exceptional racecraft</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-3 text-center">
            <Award size={20} className="mx-auto mb-1 text-racing-orange" />
            <p className="text-xs font-bold text-foreground">Professional Aspirations</p>
            <p className="text-xs text-muted-foreground">Higher-level motorsport</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-3 text-center">
            <Award size={20} className="mx-auto mb-1 text-electric-pink" />
            <p className="text-xs font-bold text-foreground">POD Ambassador</p>
            <p className="text-xs text-muted-foreground">Youth motorsport excellence</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-muted rounded-lg p-1 w-fit mx-auto mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                activeTab === tab
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* IAME */}
        {filteredIame.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-lg font-bold">IAME Series UAE 2025-2026</h3>
              <span className="text-xs px-2 py-0.5 bg-electric-pink/10 text-electric-pink border border-electric-pink/20 rounded-full font-medium">
                {iameRaces.length} races
              </span>
              <span className="text-xs text-muted-foreground ml-auto">
                Current Season Standing: <span className="text-foreground font-semibold">4th Overall</span>
              </span>
            </div>
            <div className="space-y-2">
              {filteredIame.map((race) => (
                <RaceCard key={race.id} race={race} />
              ))}
            </div>
          </div>
        )}

        {/* Rotax */}
        {filteredRotax.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-lg font-bold">Rotax UAE 2025-2026</h3>
              <span className="text-xs px-2 py-0.5 bg-racing-orange/10 text-racing-orange border border-racing-orange/20 rounded-full font-medium">
                {rotaxRaces.length} races
              </span>
            </div>
            <div className="space-y-2">
              {filteredRotax.map((race) => (
                <RaceCard key={race.id} race={race} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
