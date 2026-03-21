import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Story } from "@/components/sections/Story"
import { RacingProgression } from "@/components/sections/RacingProgression"
import { Education } from "@/components/sections/Education"
import { RacingCalendar } from "@/components/sections/RacingCalendar"
import { Timeline } from "@/components/sections/Timeline"
import { Ambassador } from "@/components/sections/Ambassador"
import { Partnerships } from "@/components/sections/Partnerships"
import { SponsorVisibility } from "@/components/sections/SponsorVisibility"
import { SocialConnect } from "@/components/sections/SocialConnect"
import { LiveCoverage } from "@/components/sections/LiveCoverage"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Story />
      <RacingProgression />
      <Education />
      <RacingCalendar />
      <Timeline />
      <Ambassador />
      <Partnerships />
      <SponsorVisibility />
      <SocialConnect />
      <LiveCoverage />
      <Footer />
    </div>
  )
}

export default App
