

"use client"

import React from "react"

const roles = ["MCA Student", "Web Developer", "Data Analytics Learner"]

function useTypingEffect(words: string[], speed = 120, pause = 1200) {
  const [display, setDisplay] = React.useState("")
  const [index, setIndex] = React.useState(0)
  const [subIndex, setSubIndex] = React.useState(0)
  const [deleting, setDeleting] = React.useState(false)

  React.useEffect(() => {
    if (index === words.length) setIndex(0)
    if (!deleting && subIndex === words[index].length) {
      const pauseTimer = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(pauseTimer)
    }
    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1))
    }, deleting ? speed / 2 : speed)
    return () => clearTimeout(timeout)
  }, [subIndex, index, deleting, words, speed, pause])

  React.useEffect(() => {
    setDisplay(words[index].substring(0, subIndex))
  }, [subIndex, index, words])

  return display
}

export default function SimpleHero() {
  const typing = useTypingEffect(roles)

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="absolute right-[-6rem] top-24 h-72 w-72 rounded-full bg-violet-200/50 blur-3xl" />
        <div className="absolute bottom-0 left-[-5rem] h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-10">
        <div className="animate-fadeInUp space-y-8 text-center lg:text-left" style={{ animationDelay: "0.05s", animationFillMode: "both" }}>
          <div className="flex justify-center lg:justify-start">
            <span className="section-kicker bg-white/80">MCA • Web Development • Data Analytics</span>
          </div>

          <div className="space-y-5">
            <h1 className="text-5xl font-semibold leading-[0.95] text-slate-950 sm:text-6xl lg:text-7xl">
              Building practical web apps with <span className="gradient-text block">data-driven insights</span>
            </h1>
            <h2 className="inline-flex items-center gap-3 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-lg font-medium text-slate-700 shadow-sm backdrop-blur">
              <span className="min-h-[1.5rem] font-mono text-indigo-700">{typing}</span>
              <span className="inline-block h-5 w-[2px] animate-blink rounded-full bg-indigo-500" />
            </h2>
          </div>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600 lg:mx-0 lg:text-xl">
            MCA student at PSG College of Technology with a strong foundation in programming and web development. I enjoy building scalable solutions and exploring analytics to improve decisions.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-600 px-8 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_-18px_rgba(79,70,229,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_48px_-16px_rgba(79,70,229,0.95)]"
            >
              Let’s Connect
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/75 px-8 py-3.5 text-base font-semibold text-slate-800 shadow-sm backdrop-blur transition-all duration-300 hover:border-slate-200 hover:bg-white"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="surface-card relative overflow-hidden p-4 shadow-[0_24px_80px_-30px_rgba(15,23,42,0.35)]">
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-r from-indigo-500/15 via-violet-500/10 to-sky-500/15" />
            <div className="relative flex flex-col items-center gap-6 p-6 text-center sm:p-8">
              <div className="rounded-[2rem] border border-white/70 bg-white p-2 shadow-lg">
                <div className="h-56 w-56 overflow-hidden rounded-[1.75rem] sm:h-72 sm:w-72">
                  <img
                    src="/images/portfolio_img.jpg"
                    alt="Kannan M"
                    className="h-full w-full object-cover object-[center_10%]"
                  />
                </div>
              </div>

              <div className="grid w-full grid-cols-3 gap-3">
                <div className="rounded-2xl bg-slate-950 px-3 py-4 text-white shadow-sm">
                  <div className="text-2xl font-semibold">2</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-300">Projects</div>
                </div>
                <div className="rounded-2xl bg-indigo-600 px-3 py-4 text-white shadow-sm">
                  <div className="text-2xl font-semibold">2</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-indigo-100">Degrees</div>
                </div>
                <div className="rounded-2xl bg-white px-3 py-4 text-slate-900 shadow-sm ring-1 ring-slate-200">
                  <div className="text-2xl font-semibold">2026</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-500">MCA Grad</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


