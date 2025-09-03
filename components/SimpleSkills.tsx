import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { 
  Code, 
  Database, 
  Cloud, 
  BarChart3, 
  Server,
  Zap
} from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    color: "from-blue-500 to-blue-600",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "SQL", level: "Advanced" },
      { name: "Java", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
    ]
  },
  {
    title: "Data Tools",
    icon: BarChart3,
    color: "from-green-500 to-green-600",
    skills: [
      { name: "Excel", level: "Intermediate" },
      { name: "Power BI", level: "Intermediate" },
      { name: "Tableau", level: "Basic" },
      { name: "Pandas", level: "Intermediate" },
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    color: "from-purple-500 to-purple-600",
    skills: [
      { name: "Git", level: "Advanced" },
      { name: "Docker", level: "Intermediate" },
      { name: "CI/CD", level: "Intermediate" },
      { name: "AWS", level: "Basic" },
    ]
  },
  {
    title: "Databases & Infrastructure",
    icon: Database,
    color: "from-orange-500 to-orange-600",
    skills: [
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "MongoDB", level: "Basic" },
      { name: "Redis", level: "Basic" },
      { name: "Kubernetes", level: "Basic" },
    ]
  },
  {
    title: "Tools & Platforms",
    icon: Server,
    color: "from-red-500 to-red-600",
    skills: [
      { name: "Jupyter", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
      { name: "Linux", level: "Intermediate" },
      { name: "Postman", level: "Intermediate" },
    ]
  },
  {
    title: "Frameworks & Libraries",
    icon: Zap,
    color: "from-indigo-500 to-indigo-600",
    skills: [
      { name: "React", level: "Intermediate" },
      { name: "Node.js", level: "Basic" },
      { name: "Scikit-learn", level: "Intermediate" },
      { name: "NumPy", level: "Advanced" },
    ]
  }
]

const getLevelColor = (level: string) => {
  switch (level) {
    case "Advanced":
      return "bg-green-100 text-green-800 border-green-200"
    case "Intermediate":
      return "bg-yellow-100 text-yellow-800 border-yellow-200"
    case "Basic":
      return "bg-gray-100 text-gray-800 border-gray-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

export default function SimpleSkills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My technical expertise spans across programming, data analysis, and DevOps practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className={`mx-auto w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mb-4 hover:scale-105 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 text-center">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center justify-between">
                        <span className="text-gray-700 font-medium">
                          {skill.name}
                        </span>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${getLevelColor(skill.level)}`}
                        >
                          {skill.level}
                        </Badge>
                      </div>
                    ))}
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
