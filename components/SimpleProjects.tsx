import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"

const projects = [
  {
    title: "Data Analysis Dashboard",
    description: "A comprehensive dashboard for analyzing sales data with interactive visualizations and real-time updates.",
    tools: ["Python", "SQL", "Power BI", "Excel"],
    image: "/project1-placeholder.jpg",
    github: "https://github.com/yourusername/project1",
    live: "https://project1-demo.com",
  },
  {
    title: "Web Application",
    description: "Full-stack web application with modern UI/UX design and responsive functionality.",
    tools: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    image: "/project4-placeholder.jpg",
    github: "https://github.com/yourusername/project4",
    live: "https://project4-demo.com",
  },
  {
    title: "Data Pipeline ETL",
    description: "End-to-end ETL pipeline for processing and transforming large datasets efficiently.",
    tools: ["Python", "SQL", "PostgreSQL", "Pandas"],
    image: "/project5-placeholder.jpg",
    github: "https://github.com/yourusername/project5",
    live: "https://project5-demo.com",
  },
  {
    title: "Crypto Rewind System",
    description: "System to track and analyze crypto trade!",
    tools: ["Java", "JavaScript", "CSS"],
  image: "/images/crypto.jpg",
    github: "https://github.com/r-kalaivanan/crypto-rewind-system",
    live: "",
  }
]

export default function SimpleProjects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in data analysis and web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-md group">
                <CardHeader className="pb-4">
                  {/* Project Image or Placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title + ' screenshot'}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <span className="text-gray-500 text-sm font-medium">[Screenshot]</span>
                    )}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tools Badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="secondary" className="text-xs">
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
                          className="flex-1 border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-colors duration-300 text-center py-2 px-3 rounded-md text-sm font-medium"
                        >
                          Code
                        </a>
                        <a
                          href="/demo-unavailable"
                          className="flex-1 bg-gradient-to-r from-gray-400 to-gray-500 text-white text-center py-2 px-3 rounded-md text-sm font-medium opacity-80 cursor-not-allowed transition-all duration-300"
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
