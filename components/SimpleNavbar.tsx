"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export default function SimpleNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled
        ? "border-b border-white/70 bg-white/80 shadow-[0_12px_40px_-22px_rgba(15,23,42,0.45)] backdrop-blur-xl"
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between py-4">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-semibold tracking-[0.24em] text-slate-900 shadow-sm backdrop-blur">
            <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-orange-500 to-rose-500" />
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 rounded-full border border-white/60 bg-white/70 p-1.5 shadow-sm backdrop-blur">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-900 hover:text-white"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full border border-white/70 bg-white/80 text-slate-700 shadow-sm backdrop-blur hover:bg-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-white/70 bg-white/90 shadow-lg backdrop-blur-xl">
          <div className="space-y-2 px-4 py-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full rounded-2xl px-4 py-3 text-left font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-900 hover:text-white"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
