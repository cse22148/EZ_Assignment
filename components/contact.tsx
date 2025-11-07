"use client"

import type React from "react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({})

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = (): boolean => {
    const errors: { [key: string]: string } = {}

    if (!formData.name.trim()) {
      errors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Please enter a valid email"
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required"
    }

    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setError("")
    if (validationErrors[name]) {
      setValidationErrors((prev) => {
        const updated = { ...prev }
        delete updated[name]
        return updated
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setLoading(true)
    setError("")

    try {
      const response = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      setSubmitted(true)
      setFormData({ name: "", email: "", phone: "", message: "" })

      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } catch (err) {
      setError("Failed to submit. Please try again.")
      console.error("[v0] Contact form error:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Decorative mandala patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none animate-rotate-center">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="95" fill="none" stroke="#E8754B" strokeWidth="2" />
          <circle cx="100" cy="100" r="80" fill="none" stroke="#E8754B" strokeWidth="2" />
          <circle cx="100" cy="100" r="65" fill="none" stroke="#E8754B" strokeWidth="2" />
        </svg>
      </div>
      <div
        className="absolute bottom-0 left-0 w-80 h-80 opacity-10 pointer-events-none animate-rotate-center"
        style={{ animationDirection: "reverse" }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="95" fill="none" stroke="#E8754B" strokeWidth="2" />
          <circle cx="100" cy="100" r="80" fill="none" stroke="#E8754B" strokeWidth="2" />
          <circle cx="100" cy="100" r="65" fill="none" stroke="#E8754B" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="flex flex-col justify-center animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8 italic">Join the Story</h2>
            <p className="text-lg text-foreground/80 mb-4">Ready to bring your vision to life? Let's talk</p>
            <p className="text-base text-foreground/70 leading-relaxed mb-8">
              Whether you have an idea, a question, or simply want to explore how V can work together, V're just a
              message away.
            </p>
            <p className="text-base text-foreground/70 leading-relaxed mb-8">Let's catch up over coffee.</p>
            <p className="text-base text-foreground/70 italic">Great stories always begin with a good conversation</p>

            {/* Contact Info */}
            <div className="mt-12 space-y-4">
              <a
                href="mailto:vernita@varnanfilms.co.in"
                className="text-accent font-medium hover:underline link-hover-underline block"
              >
                vernita@varnanfilms.co.in
              </a>
              <a
                href="tel:+919873684567"
                className="block text-accent font-medium hover:underline link-hover-underline"
              >
                +91 98736 84567
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="animate-slide-in-right">
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg animate-fade-in-up">
                Form Submitted! We'll get back to you soon.
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg animate-fade-in-up">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name*"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-6 py-3 bg-card border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent input-focus-glow transition-all duration-300 ${
                    validationErrors.name ? "border-red-500" : "border-border"
                  }`}
                />
                {validationErrors.name && <p className="text-red-500 text-sm mt-1">{validationErrors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email*"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-6 py-3 bg-card border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent input-focus-glow transition-all duration-300 ${
                    validationErrors.email ? "border-red-500" : "border-border"
                  }`}
                />
                {validationErrors.email && <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>}
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-3 bg-card border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent input-focus-glow transition-all duration-300"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your message*"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-6 py-3 bg-card border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent input-focus-glow resize-none transition-all duration-300 ${
                    validationErrors.message ? "border-red-500" : "border-border"
                  }`}
                />
                {validationErrors.message && <p className="text-red-500 text-sm mt-1">{validationErrors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={loading}
                className="bg-accent text-accent-foreground px-8 py-3 rounded-full font-medium btn-hover-lift btn-hover-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-full"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
