"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Data Analysis Dashboard",
    description: "A comprehensive dashboard for analyzing sales data with interactive visualizations and real-time updates.",
    tools: ["Python", "SQL", "Power BI", "Tableau"],
    image: "/project1-placeholder.jpg",
    github: "https://github.com/yourusername/project1",
    live: "https://project1-demo.com",
  },
  {
    title: "DevOps Pipeline Automation",
    description: "Automated CI/CD pipeline using GitLab and Docker for seamless deployment and testing processes.",
    tools: ["Git", "Docker", "CI/CD", "Bash"],
    image: "/project2-placeholder.jpg",
    github: "https://github.com/yourusername/project2",
    live: "https://project2-demo.com",
  },
  {
    title: "Machine Learning Model",
    description: "Predictive analytics model for customer behavior analysis using machine learning algorithms.",
    tools: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    image: "/project3-placeholder.jpg",
    github: "https://github.com/yourusername/project3",
    live: "https://project3-demo.com",
  },
  {
    title: "Web Application",
    description: "Full-stack web application with modern UI/UX design and responsive functionality.",
    tools: ["React", "Node.js", "MongoDB", "Express"],
    image: "/project4-placeholder.jpg",
    github: "https://github.com/yourusername/project4",
    live: "https://project4-demo.com",
  },
  {
    title: "Data Pipeline ETL",
    description: "End-to-end ETL pipeline for processing and transforming large datasets efficiently.",
    tools: ["Python", "Apache Airflow", "PostgreSQL", "Redis"],
    image: "/project5-placeholder.jpg",
    github: "https://github.com/yourusername/project5",
    live: "https://project5-demo.com",
  },
  {
    title: "Infrastructure as Code",
    description: "Terraform configurations for managing cloud infrastructure and deployment automation.",
    tools: ["Terraform", "AWS", "Docker", "Kubernetes"],
    image: "/project6-placeholder.jpg",
    github: "https://github.com/yourusername/project6",
    live: "https://project6-demo.com",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in data analysis and DevOps
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-md group">
                <CardHeader className="pb-4">
                  {/* Project Image Placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                    <span className="text-gray-500 text-sm font-medium">[Screenshot]</span>
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
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group-hover:border-blue-500 group-hover:text-blue-600 transition-colors duration-300"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
