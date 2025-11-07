import Link from "next/link"
import Navigation from "@/components/navigation"
import Image from "next/image"

export default function ServicesPage() {
  const services = [
    {
      title: "Film Production",
      description: "Craft visual stories through documentaries, corporate videos, and animation",
      href: "/services/film-production",
      image: "/professional-film-production-scene.jpg",
    },
    {
      title: "Branding",
      description: "Shape memorable brands that people remember and return to",
      href: "/services/branding",
      image: "/creative-branding-workspace-with-design-sketches.jpg",
    },
    {
      title: "Art Curation",
      description: "Bring art to people through festivals, performances, and cultural events",
      href: "/services/art-curation",
      image: "/outdoor-art-festival-with-colorful-tent-and-creati.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary mb-4 italic">
              The Storyboard Reveals the Breadth of Our Craft
            </h1>
            <p className="text-lg md:text-xl text-foreground/70">Explore the services that bring stories to life</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={service.href}>
                <div
                  className="group cursor-pointer h-full transform transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white rounded-sm shadow-xl overflow-hidden h-full flex flex-col relative hover:shadow-2xl transition-all duration-300">
                    {/* Tape effect */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-gradient-to-b from-white/50 to-white/30 rounded-full opacity-50 z-10" />

                    {/* Image Container with loading state */}
                    <div className="relative w-full h-64 overflow-hidden bg-gray-200 group-hover:bg-gray-300 transition-colors duration-300">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col justify-between flex-grow group-hover:bg-gray-50 transition-colors duration-300">
                      <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-foreground/70 text-sm group-hover:text-foreground/90 transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom border accent on hover */}
                    <div className="h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
