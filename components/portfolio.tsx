"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const slides = [
    {
      title: "Film Production",
      image: "/professional-film-production-scene.jpg",
    },
    {
      title: "Brand Design",
      image: "/creative-branding-workspace-with-design-sketches.jpg",
    },
    {
      title: "Art Curation",
      image: "/outdoor-art-festival-with-colorful-tent-and-creati.jpg",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
  }

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-4">The Highlight Reel</h2>
          <p className="text-lg text-foreground/70">Watch the magic we've captured.</p>
        </div>

        <div
          className="relative max-w-4xl mx-auto animate-scale-in"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Film strip frame */}
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden p-4 md:p-8 card-hover-lift transition-all duration-300 hover:shadow-2xl">
            {/* Top film sprockets */}
            <div className="flex gap-2 mb-4 justify-center">
              {[...Array(12)].map((_, i) => (
                <div
                  key={`top-${i}`}
                  className="w-3 h-4 bg-gradient-to-b from-gray-500 to-gray-400 rounded-sm animate-shimmer"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>

            <div className="relative bg-black rounded-lg overflow-hidden aspect-video flex items-center justify-center group">
              <Image
                src={slides[currentIndex].image || "/placeholder.svg"}
                alt={slides[currentIndex].title}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg"
                }}
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center btn-hover-lift transition-all duration-300 hover:from-red-600 hover:to-red-800 shadow-lg shadow-red-500/50 group-hover:shadow-red-500/70">
                  <ChevronRight size={32} className="text-white ml-1" fill="white" />
                </div>
              </div>

              {/* Film counter */}
              <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded text-sm font-mono">
                {currentIndex + 1} / {slides.length}
              </div>
            </div>

            {/* Bottom film sprockets */}
            <div className="flex gap-2 mt-4 justify-center">
              {[...Array(12)].map((_, i) => (
                <div
                  key={`bottom-${i}`}
                  className="w-3 h-4 bg-gradient-to-t from-gray-500 to-gray-400 rounded-sm animate-shimmer"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-20 bg-foreground/10 hover:bg-accent p-3 rounded-full transition-all duration-300 btn-hover-lift opacity-50 hover:opacity-100 hover:shadow-lg hover:shadow-accent/50"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} className="text-foreground hover:text-accent-foreground" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-20 bg-foreground/10 hover:bg-accent p-3 rounded-full transition-all duration-300 btn-hover-lift opacity-50 hover:opacity-100 hover:shadow-lg hover:shadow-accent/50"
            aria-label="Next slide"
          >
            <ChevronRight size={24} className="text-foreground hover:text-accent-foreground" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  index === currentIndex
                    ? "bg-accent w-8 h-2 shadow-lg shadow-accent/50 animate-pulse"
                    : "w-2 h-2 bg-border hover:bg-accent/50 hover:scale-125 hover:w-4"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
