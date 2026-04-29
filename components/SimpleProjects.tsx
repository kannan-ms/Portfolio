import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"

const projects = [
  {
    title: "Data Analysis Dashboard",
    description: "A comprehensive dashboard for analyzing sales data with interactive visualizations and real-time updates.",
    category: "Analytics",
    outcome: "Reduced report prep time by 30%.",
    tools: ["Python", "SQL", "Power BI", "Excel"],
    image: "/project1-placeholder.jpg",
    github: "https://github.com/yourusername/project1",
    live: "https://project1-demo.com",
  },
  {
    title: "Web Application",
    description: "Full-stack web application with modern UI/UX design and responsive functionality.",
    category: "Web App",
    outcome: "Improved conversion on CTA flows.",
    tools: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    image: "/project4-placeholder.jpg",
    github: "https://github.com/yourusername/project4",
    live: "https://project4-demo.com",
  },
  {
    title: "Data Pipeline ETL",
    description: "End-to-end ETL pipeline for processing and transforming large datasets efficiently.",
    category: "Data Engineering",
    outcome: "Automated daily data ingestion.",
    tools: ["Python", "SQL", "PostgreSQL", "Pandas"],
    image: "/project5-placeholder.jpg",
    github: "https://github.com/yourusername/project5",
    live: "https://project5-demo.com",
  },
  {
    title: "Crypto Rewind System",
    description: "System to track and analyze crypto trade!",
    category: "FinTech",
    outcome: "Visualized trade performance snapshots.",
    tools: ["Java", "JavaScript", "CSS"],
    image: "/images/crypto.jpg",
    github: "https://github.com/r-kalaivanan/crypto-rewind-system",
    live: "",
  }
]

export default function SimpleProjects() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-inner">
        <div className="section-heading mb-14">
          <span className="section-kicker">Projects</span>
          <h2 className="section-title">Selected work and experiments</h2>
          <p className="section-copy">
            Here are some of the projects I've worked on, showcasing my skills in data analysis and web development.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index}>
              <Card className="surface-card group relative h-full border-0 shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_-30px_rgba(15,23,42,0.35)]">
                <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-orange-100/80 via-white/60 to-sky-100/80" />
                  <div className="absolute inset-0 rounded-[1.75rem] border border-white/60" />
                </div>
                <CardHeader className="pb-4">
                  <div className="mb-4 flex h-52 w-full items-center justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-orange-100 via-white to-sky-100 ring-1 ring-white/80 transition-transform duration-300 group-hover:scale-[1.01]">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title + " screenshot"}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="text-sm font-medium text-slate-500">[Screenshot]</span>
                    )}
                  </div>
                  <span className="soft-pill w-fit">{project.category}</span>
                  <CardTitle className="text-xl font-semibold text-slate-950 transition-colors duration-300 group-hover:text-indigo-700">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="leading-relaxed text-slate-600">
                    {project.description}
                  </p>

                  <div className="rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-sm text-slate-700 shadow-sm">
                    <span className="font-semibold text-slate-900">Result:</span> {project.outcome}
                  </div>
                  
                  {/* Tools Badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="secondary" className="rounded-full border border-orange-100 bg-orange-50/80 text-xs text-orange-700 hover:bg-orange-100">
                        {tool}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-center text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700"
                    >
                      Code
                    </a>
                    <a
                      href={project.live || "/demo-unavailable"}
                      className="flex-1 rounded-full bg-gradient-to-r from-slate-900 to-slate-700 px-4 py-2.5 text-center text-sm font-semibold text-white transition-all duration-300 hover:from-orange-600 hover:to-rose-500"
                    >
                      Live Demo
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
