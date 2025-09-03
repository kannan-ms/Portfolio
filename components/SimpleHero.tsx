"use client"

import { Button } from "./ui/button"
import { ChevronDown } from "lucide-react"

export default function SimpleHero() {
  const scrollToAbout = () => {
    const element = document.querySelector("#about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Profile Photo Placeholder */}
          <div className="mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl font-bold">[Photo]</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              [Your Name]
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
            Aspiring Data Analyst & DevOps Enthusiast
          </h2>

          {/* Intro Paragraph */}
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate about transforming data into actionable insights and building robust, 
            scalable systems. Currently exploring the intersection of data analysis and DevOps practices 
            to create efficient, data-driven solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 text-lg"
            >
              Learn More About Me
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const element = document.querySelector("#projects")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="border-2 border-gray-300 hover:border-gray-400 px-8 py-3 text-lg"
            >
              View My Projects
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
