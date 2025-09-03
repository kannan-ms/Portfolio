import React from "react";

export default function StaticHero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-10">
          {/* Profile Photo */}
          <div className="mx-auto w-36 h-36 rounded-full border-4 border-white shadow-2xl flex items-center justify-center overflow-hidden mb-6 mt-20 bg-white">
            <img 
              src="/images/portfolio_img.jpg" 
              alt="Kannan M"
              className="w-36 h-60 object-cover rounded-full"
              style={{ objectFit: 'cover', objectPosition: 'center 20%'}}
            />
          </div>

          {/* Headline with handwritten font */}
          <h1 className="text-4xl m d:text-6xl font-bold text-gray-900 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent font-signature">
              Kannan M
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
            Aspiring Data Analyst
          </h2>

          {/* Personal Intro */}
          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-2">
              Passionate about transforming data into actionable insights and creating impactful solutions.
            </p>
            <p className="text-base text-gray-500 italic mb-2">
              "I love coffee, cricket, and finding stories in numbers."
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Dedicated to leveraging data analytics to drive informed decision-making and deliver valuable business insights.
            </p>
          </div>

          {/* CTA Buttons with organic style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
            <a
              href="#about"
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-3 text-lg rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300"
            >
              Learn More About Me
            </a>
            <a
              href="#projects"
              className="border-2 border-blue-200 hover:border-indigo-400 px-8 py-3 text-lg rounded-full font-semibold text-blue-700 hover:text-indigo-900 bg-white shadow-lg hover:scale-105 transition-all duration-300"
            >
              View My Projects
            </a>
          </div>
        </div>

        {/* Scroll Indicator with organic style */}
        <div className="flex justify-center mt-10">
          <a
            href="#about"
            className="flex flex-col items-center text-indigo-400 hover:text-blue-600 transition-colors"
            aria-label="Scroll to About"
          >
            <svg className="w-10 h-10 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <span className="sr-only">Scroll Down</span>
          </a>
        </div>
      </div>
    </section>
  );
}
