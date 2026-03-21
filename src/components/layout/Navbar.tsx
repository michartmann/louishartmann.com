import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useScrollSpy } from "@/hooks/useScrollSpy"
import { cn } from "@/lib/utils"

const navItems = [
  { id: "home", label: "Home" },
  { id: "racing", label: "Racing" },
  { id: "story", label: "Story" },
  { id: "partners", label: "Partners" },
  { id: "contact", label: "Contact" },
]

const sectionIds = navItems.map((item) => item.id)

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useScrollSpy(sectionIds)

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMobileOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-3">
          <img src="/assets/lh-racing-logo.jpg" alt="LH Racing" className="h-10 w-10 rounded-full object-cover" />
          <div className="text-left">
            <span className="text-sm font-bold tracking-wider text-foreground">LOUIS HARTMANN</span>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>Racing</span>
              <span className="text-electric-pink">•</span>
              <span>347</span>
            </div>
          </div>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                activeId === item.id
                  ? "text-electric-pink bg-electric-pink/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={cn(
                "block w-full text-left px-6 py-3 text-sm font-medium transition-colors",
                activeId === item.id
                  ? "text-electric-pink bg-electric-pink/10"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
