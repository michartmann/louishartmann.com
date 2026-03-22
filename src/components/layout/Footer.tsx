import { Instagram, ExternalLink, Mail, ArrowRight } from "lucide-react"

const navLinks = [
  { id: "home", label: "Home" },
  { id: "racing", label: "Racing" },
  { id: "story", label: "Story" },
  { id: "partners", label: "Partners" },
  { id: "contact", label: "Contact" },
]

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/louis_karting347/",
    icon: Instagram,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@louis_hartmann_347",
    icon: ExternalLink,
  },
]

export function Footer() {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer id="contact" className="bg-card/80 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/lh-racing-logo.jpg"
                alt="LH Racing"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <span className="text-sm font-bold tracking-wider text-foreground">
                  LOUIS HARTMANN
                </span>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>Racing</span>
                  <span className="text-electric-pink">•</span>
                  <span>347</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Danish racing driver turning neurodiversity into competitive advantage.
              From karting champion to future GT factory driver.
            </p>
          </div>

          {/* Links & Social */}
          <div className="flex flex-col sm:flex-row gap-10 md:justify-end">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                Navigate
              </h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                Connect
              </h4>
              <ul className="space-y-2">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <link.icon size={14} />
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="mailto:racing@louishartmann.com"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail size={14} />
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Louis Hartmann Racing. All rights reserved.
          </p>
          <a
            href="mailto:racing@louishartmann.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-electric-pink to-electric-blue text-white text-sm font-semibold rounded-full hover:opacity-90 transition-opacity"
          >
            <Mail size={16} />
            Get in Touch
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}
