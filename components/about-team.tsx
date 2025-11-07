"use client"

import { useRouter } from "next/navigation"

export default function AboutTeam() {
  const router = useRouter()

  const handleViewPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio")
    portfolioSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* Left Side - Yellow Note Card with Text */}
          <div className="w-full lg:w-1/2 animate-slide-in-left">
            <div className="bg-yellow-100 p-8 md:p-12 rounded-sm shadow-lg rotate-2 transform card-hover-lift transition-all duration-300">
              <p className="text-base md:text-lg text-primary leading-relaxed">
                Some craft films. Some build brands. Some curate art. We bring it all together - a curate art. We bring
                it all together - a collective of storytellers driven by one belief: every project deserves to be more
                than just a message; it should become a masterpiece. From first spark to final frame, from raw ideas to
                timeless visuals - we shape stories that stay with you.
              </p>
            </div>
          </div>

          {/* Right Side - Team Silhouettes and Labels */}
          <div className="w-full lg:w-1/2 animate-slide-in-right">
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-md h-80 mb-8">
                {/* Decorative Architecture */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-40 animate-rotate-center"
                  style={{ animationDuration: "25s" }}
                  viewBox="0 0 400 300"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="archGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#E8754B", stopOpacity: 0.2 }} />
                      <stop offset="100%" style={{ stopColor: "#E8754B", stopOpacity: 0.05 }} />
                    </linearGradient>
                  </defs>
                  {/* Building */}
                  <rect x="50" y="100" width="80" height="150" fill="url(#archGrad)" stroke="#E8754B" strokeWidth="2" />
                  {/* Arch */}
                  <path d="M 80 100 Q 80 60 130 100" fill="none" stroke="#E8754B" strokeWidth="2" />
                  {/* Windows */}
                  <rect x="60" y="115" width="15" height="15" fill="none" stroke="#E8754B" strokeWidth="1" />
                  <rect x="85" y="115" width="15" height="15" fill="none" stroke="#E8754B" strokeWidth="1" />
                </svg>

                {/* Team Silhouettes - 5 people */}
                <div className="absolute inset-0 flex items-end justify-center gap-2 px-4">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center flex-1 animate-fade-in-up"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <svg
                        className="w-12 h-24 md:w-16 md:h-32 fill-primary hover:fill-accent transition-colors duration-300"
                        viewBox="0 0 40 100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="20" cy="15" r="8" />
                        <path
                          d="M 20 25 L 20 55 M 10 35 L 30 35 M 20 55 L 15 75 M 20 55 L 25 75"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>

              {/* Labels */}
              <div className="grid grid-cols-3 gap-4 w-full text-center text-sm md:text-base">
                <div className="hover:text-accent transition-colors duration-300">
                  <p className="text-primary font-serif italic">Film Makers</p>
                </div>
                <div className="hover:text-accent transition-colors duration-300">
                  <p className="text-primary font-serif italic">Art Curators</p>
                </div>
                <div className="hover:text-accent transition-colors duration-300">
                  <p className="text-primary font-serif italic">Branding Experts</p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <p className="text-foreground/70 mb-6 text-sm md:text-base">
                  Take a closer look at the stories V bring to life.
                </p>
                <button
                  onClick={handleViewPortfolio}
                  className="bg-accent text-accent-foreground px-8 py-3 rounded-full font-medium btn-hover-lift btn-hover-glow transition-all duration-300"
                >
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
