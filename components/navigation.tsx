"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const handleLetsTalk = (e: React.MouseEvent) => {
    e.preventDefault()
    const contactSection = document.getElementById("contact")
    contactSection?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Flower Design */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 relative animate-float-up">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#E8754B" strokeWidth="1" opacity="0.2" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                  const rad = (angle * Math.PI) / 180
                  const x = 50 + 28 * Math.cos(rad)
                  const y = 50 + 28 * Math.sin(rad)
                  return (
                    <ellipse
                      key={`nav-petal-${angle}`}
                      cx={x}
                      cy={y}
                      rx="7"
                      ry="12"
                      fill="#E8754B"
                      transform={`rotate(${angle} ${x} ${y})`}
                      opacity="0.8"
                    />
                  )
                })}
                <circle cx="50" cy="50" r="14" fill="#E8754B" />
                <text
                  x="50"
                  y="58"
                  fontSize="20"
                  fontWeight="bold"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontFamily="serif"
                  dominantBaseline="middle"
                >
                  V
                </text>
              </svg>
            </div>
            <span className="text-lg font-semibold hidden sm:inline text-foreground group-hover:text-accent transition-colors duration-300">
              Films
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/services"
              className="text-foreground hover:text-accent transition-colors text-sm link-hover-underline"
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className="text-foreground hover:text-accent transition-colors text-sm link-hover-underline"
            >
              Their Stories
            </Link>
            <Link
              href="#about"
              className="text-foreground hover:text-accent transition-colors text-sm link-hover-underline"
            >
              Our Story
            </Link>
            <Link href="/" className="text-foreground hover:text-accent transition-colors text-sm link-hover-underline">
              Varnan
            </Link>
            <button
              onClick={handleLetsTalk}
              className="bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-medium btn-hover-lift btn-hover-glow transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 active:scale-95"
              aria-label="Open contact form"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground transition-transform duration-300 hover:scale-110 hover:text-accent"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in-up">
            <Link
              href="/services"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded transition-colors hover:text-accent"
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded transition-colors hover:text-accent"
            >
              Their Stories
            </Link>
            <Link
              href="#about"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded transition-colors hover:text-accent"
            >
              Our Story
            </Link>
            <Link
              href="/"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded transition-colors hover:text-accent"
            >
              Varnan
            </Link>
            <button
              onClick={handleLetsTalk}
              className="w-full bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-medium btn-hover-lift btn-hover-glow transition-all duration-300 active:scale-95"
              aria-label="Open contact form"
            >
              Let's Talk
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
