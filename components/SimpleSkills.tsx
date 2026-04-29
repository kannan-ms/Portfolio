"use client"

import { motion } from "framer-motion"
import { BarChart3, Code, Database, Server, Zap } from "lucide-react"
import type { IconType } from "react-icons"
import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiFlask,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostman,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiVisualstudiocode,
} from "react-icons/si"
import { TbApi } from "react-icons/tb"

const skillCategories = [
  { title: "Languages", icon: Code, skills: ["Python", "JavaScript", "SQL"] },
  { title: "Backend", icon: Server, skills: ["Node.js", "Express.js", "Flask", "REST API"] },
  { title: "Frontend", icon: Zap, skills: ["React", "HTML", "CSS", "Tailwind CSS", "Bootstrap"] },
  { title: "Databases", icon: Database, skills: ["MongoDB", "MySQL"] },
  { title: "Developer Tools", icon: BarChart3, skills: ["Git", "GitHub", "Postman", "VS Code"] },
]

const skillIcons: Record<string, IconType> = {
  Python: SiPython,
  JavaScript: SiJavascript,
  SQL: SiPostgresql,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  Flask: SiFlask,
  "REST API": TbApi,
  React: SiReact,
  HTML: SiHtml5,
  CSS: SiCss3,
  "Tailwind CSS": SiTailwindcss,
  Bootstrap: SiBootstrap,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Git: SiGit,
  GitHub: SiGithub,
  Postman: SiPostman,
  "VS Code": SiVisualstudiocode,
}

export default function SimpleSkills() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-inner">
        <div className="section-heading mb-14">
          <span className="section-kicker">Skills</span>
          <h2 className="section-title">Skills and technologies I use</h2>
          <p className="section-copy">A focused toolkit for analytics, frontend, and backend work.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="surface-card border-0 p-6 shadow-none transition-all duration-300 hover:shadow-[0_24px_70px_-30px_rgba(15,23,42,0.35)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 via-rose-500 to-sky-500">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-950">{category.title}</h3>
                </div>
                <ul className="grid grid-cols-2 gap-2">
                  {category.skills.map((s) => {
                    const SkillIcon = skillIcons[s]
                    return (
                      <li
                        key={s}
                        className="flex items-center gap-2 rounded-xl border border-orange-100 bg-orange-50/70 px-2 py-1 text-sm text-orange-800"
                      >
                        {SkillIcon ? <SkillIcon className="h-4 w-4" /> : null}
                        <span>{s}</span>
                      </li>
                    )
                  })}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


