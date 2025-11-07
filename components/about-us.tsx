"use client"

import { useState, useEffect } from "react"

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about-us-section")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: "85+", label: "Projects" },
    { number: "50+", label: "Happy Clients" },
    { number: "10+", label: "Experts Team" },
  ]

  const clients = ["Coca-Cola", "TED", "DBF", "Serve"]

  return (
    <section id="about-us-section" className="py-16 md:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Left Column - Text and Stats */}
          <div className="flex flex-col gap-8">
            {/* Main Title */}
            <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0s" }}>
              <p className="text-sm md:text-base text-foreground/70 font-serif mb-3 hover:text-accent transition-colors duration-300">
                A montage of familiar faces and names.
              </p>
              <div className="text-sm md:text-base text-foreground/80 leading-relaxed max-w-sm">
                <p className="mb-4 hover:text-foreground transition-colors duration-300">
                  Some stories come from the biggest names. Others begin with bold, rising voices. We've been fortunate
                  to walk alongside both - listening, creating, and building stories that matter.
                </p>
              </div>
            </div>

            {/* Stats Cards */}
            <div
              className={`flex flex-col sm:flex-row gap-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.1s" }}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-yellow-100 p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:rotate-1 hover:scale-105 hover:-translate-y-3 group cursor-pointer"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <p className="text-2xl md:text-4xl font-bold text-primary mb-1 group-hover:text-accent transition-colors duration-300 group-hover:scale-110 group-hover:font-extrabold">
                    {stat.number}
                  </p>
                  <p className="text-sm md:text-base text-accent font-medium group-hover:scale-110 transition-transform duration-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Testimonial and Visuals */}
          <div className="flex flex-col gap-8">
            {/* Italic Testimonial Text */}
            <div className={`${isVisible ? "animate-blur-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
              <p className="text-lg md:text-2xl font-serif italic text-primary/80 leading-relaxed max-w-lg hover:text-primary hover:scale-105 transition-all duration-300 origin-left">
                Every project is more than just a brief - it's a new chapter waiting to be written. Together, we've
                crafted tales that inspire, connect, and endure.
              </p>
            </div>

            {/* Client Logos Grid */}
            <div
              className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.3s" }}
            >
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="aspect-square bg-foreground/5 rounded-lg flex items-center justify-center p-4 hover:bg-accent/10 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-accent/30 group cursor-pointer border-2 border-transparent hover:border-accent"
                  style={{ animationDelay: `${0.4 + index * 0.08}s` }}
                >
                  <div className="text-center">
                    <p className="text-xs md:text-sm font-bold text-accent/70 group-hover:text-accent group-hover:scale-125 transition-all duration-300 group-hover:font-extrabold">
                      {client}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mountain and Sun Illustration */}
            <div
              className={`relative w-full h-56 md:h-72 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.4s" }}
            >
              <svg
                className="w-full h-full drop-shadow-lg hover:drop-shadow-2xl transition-all duration-500"
                viewBox="0 0 500 400"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Sun with rotating animation */}
                <g className="animate-rotate-slow origin-center" style={{ transformOrigin: "400px 80px" }}>
                  <circle
                    cx="400"
                    cy="80"
                    r="40"
                    fill="#E8754B"
                    opacity="0.8"
                    className="hover:opacity-100 transition-opacity duration-300"
                  />
                  <circle cx="400" cy="80" r="50" fill="none" stroke="#E8754B" strokeWidth="2" opacity="0.3" />
                </g>

                {/* Sun rays with pulse effect */}
                <g stroke="#E8754B" strokeWidth="2" opacity="0.5" className="animate-pulse-soft">
                  <line x1="400" y1="20" x2="400" y2="0" />
                  <line x1="400" y1="140" x2="400" y2="160" />
                  <line x1="460" y1="80" x2="480" y2="80" />
                  <line x1="340" y1="80" x2="320" y2="80" />
                  <line x1="450" y1="30" x2="465" y2="15" />
                  <line x1="350" y1="130" x2="335" y2="145" />
                  <line x1="450" y1="130" x2="465" y2="145" />
                  <line x1="350" y1="30" x2="335" y2="15" />
                </g>

                {/* Mountains with hover fill */}
                <path
                  d="M 0 250 L 150 120 L 280 200 L 400 80 L 500 180 L 500 400 L 0 400 Z"
                  fill="#1a3a3a"
                  opacity="0.3"
                  className="hover:opacity-50 transition-opacity duration-300 cursor-pointer"
                />

                {/* Mountain outline */}
                <path
                  d="M 0 250 L 150 120 L 280 200 L 400 80 L 500 180"
                  fill="none"
                  stroke="#1a3a3a"
                  strokeWidth="2"
                  opacity="0.6"
                  className="hover:stroke-accent transition-all duration-300 hover:opacity-100"
                />

                {/* Trees with hover scale */}
                {[50, 120, 200, 320, 420].map((x, idx) => (
                  <g
                    key={x}
                    className="hover:scale-125 transition-transform duration-300 cursor-pointer origin-bottom"
                    style={{ transformOrigin: `${x}px 330px` }}
                  >
                    <line
                      x1={x}
                      y1={280}
                      x2={x}
                      y2={320}
                      stroke="#1a3a3a"
                      strokeWidth="2"
                      opacity="0.7"
                      className="hover:stroke-accent transition-colors duration-300"
                    />
                    <path
                      d={`M ${x} ${310} L ${x - 15} ${330} L ${x + 15} ${330} Z`}
                      fill="#1a3a3a"
                      opacity="0.6"
                      className="hover:fill-accent hover:opacity-100 transition-all duration-300"
                    />
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
