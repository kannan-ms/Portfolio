"use client"

import { motion } from "framer-motion"
import { Code, BarChart3, Cloud, Database, Server, Zap } from "lucide-react"

const skillCategories = [
  { title: "Programming Languages", icon: Code, skills: ["Python", "SQL", "Java", "JavaScript"] },
  { title: "Data Tools", icon: BarChart3, skills: ["Excel", "Power BI", "Tableau", "Pandas"] },
  { title: "DevOps & Cloud", icon: Cloud, skills: ["Git", "Docker", "CI/CD", "AWS"] },
  { title: "Databases & Infra", icon: Database, skills: ["PostgreSQL", "MongoDB", "Redis", "Kubernetes"] },
  { title: "Tools & Platforms", icon: Server, skills: ["Jupyter", "VS Code", "Linux", "Postman"] },
  { title: "Frameworks & Libs", icon: Zap, skills: ["React", "Node.js", "Scikit-learn", "NumPy"] },
]

export default function SimpleSkills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600">Technologies and tools I work with</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <motion.div key={category.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                </div>
                <ul className="grid grid-cols-2 gap-2">
                  {category.skills.map((s) => (
                    <li key={s} className="text-gray-700 text-sm bg-gray-50 border border-gray-200 rounded px-2 py-1">{s}</li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


