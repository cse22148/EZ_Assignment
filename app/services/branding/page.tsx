"use client"

import Link from "next/link"
import Navigation from "@/components/navigation"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function BrandingPage() {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/services"
            className="inline-flex items-center text-accent hover:text-accent/80 mb-8 font-medium transition-all duration-300 hover:-translate-x-1"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back
          </Link>

          {/* Quote */}
          <div className="text-center mb-16">
            <p className="text-2xl md:text-3xl font-serif text-primary italic mb-4">
              "A brand is a voice, and a product is a souvenir." – Lisa Gansky
            </p>
            <div className="w-32 h-1 bg-primary/30 mx-auto animate-shimmer" />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-md w-full card-hover-lift group">
                <div className="relative w-full h-80 bg-gray-200">
                  <Image
                    src="/creative-branding-workspace-with-design-sketches.jpg"
                    alt="Branding"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    onLoad={() => setImageLoaded(true)}
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg"
                    }}
                  />
                </div>
                <div className="p-6 text-center bg-white group-hover:bg-accent/5 transition-colors duration-300">
                  <h3 className="text-xl font-semibold text-primary">Branding</h3>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="animate-slide-in-right">
              <h1 className="text-3xl md:text-4xl font-serif text-primary mb-6 italic">
                A brand isn't just what you see - it's what you remember, what you carry home, and what you trust.
              </h1>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                We shape brands that people remember, return to, and fall in love with.
              </p>

              {/* Services List */}
              <div className="mb-8">
                <p className="font-semibold text-primary mb-4">V creates:</p>
                <ul className="space-y-3">
                  <li className="flex items-start text-foreground/80 group hover:translate-x-2 transition-transform duration-300">
                    <span className="text-accent mr-3 group-hover:scale-125 transition-transform duration-300">•</span>
                    <span className="group-hover:text-accent transition-colors duration-300">
                      Branding & Communication
                    </span>
                  </li>
                  <li className="flex items-start text-foreground/80 group hover:translate-x-2 transition-transform duration-300">
                    <span className="text-accent mr-3 group-hover:scale-125 transition-transform duration-300">•</span>
                    <span className="group-hover:text-accent transition-colors duration-300">Market Mapping</span>
                  </li>
                  <li className="flex items-start text-foreground/80 group hover:translate-x-2 transition-transform duration-300">
                    <span className="text-accent mr-3 group-hover:scale-125 transition-transform duration-300">•</span>
                    <span className="group-hover:text-accent transition-colors duration-300">Content Management</span>
                  </li>
                  <li className="flex items-start text-foreground/80 group hover:translate-x-2 transition-transform duration-300">
                    <span className="text-accent mr-3 group-hover:scale-125 transition-transform duration-300">•</span>
                    <span className="group-hover:text-accent transition-colors duration-300">
                      Social Media Management
                    </span>
                  </li>
                  <li className="flex items-start text-foreground/80 group hover:translate-x-2 transition-transform duration-300">
                    <span className="text-accent mr-3 group-hover:scale-125 transition-transform duration-300">•</span>
                    <span className="group-hover:text-accent transition-colors duration-300">Rebranding</span>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <button className="text-accent font-medium hover:text-accent/80 transition-colors group-hover:scale-105">
                  Explore Now
                </button>
                <svg
                  className="w-6 h-6 text-accent group-hover:translate-x-2 transition-all duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
