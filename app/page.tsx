import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import AboutTeam from "@/components/about-team"
import AboutUs from "@/components/about-us"
import Portfolio from "@/components/portfolio"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <AboutTeam />
      <AboutUs />
      <Portfolio />
      <Contact />
    </main>
  )
}
