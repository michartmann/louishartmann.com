import { MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
        <a
          href="https://wa.me/message/YOUR_WHATSAPP_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-neon-green text-white font-semibold rounded-full hover:bg-neon-green/90 transition-colors animate-pulse-glow"
        >
          <MessageCircle size={20} />
          Chat with Louis
        </a>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Louis Hartmann Racing. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
