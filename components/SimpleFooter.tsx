"use client"

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "./ui/button"

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/r-kalaivanan", label: "Visit GitHub" },
  { name: "LinkedIn", icon: Linkedin, href: "#", label: "Connect on LinkedIn" },
  { name: "Email", icon: Mail, href: "mailto:kannanmayilsamy04@gmail.com", label: "Send an email" },
]

export default function SimpleFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-white/70 bg-white/70 py-12 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3 items-center mb-8">
          {/* Branding */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Kannan M</h3>
            <p className="text-sm text-slate-600">Web Developer & Data Enthusiast</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/80 text-slate-600 transition-all duration-200 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200"
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>

          {/* Back to Top Button */}
          <div className="flex justify-end">
            <Button
              onClick={scrollToTop}
              className="rounded-full bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white shadow-lg transition-all duration-200"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/70" />

        {/* Copyright */}
        <div className="pt-8 text-center">
          <p className="text-sm text-slate-600">
            © 2025 Kannan M | Built with <span className="font-semibold text-slate-900">Next.js</span> & <span className="font-semibold text-slate-900">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
