import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { User, BookOpen, Target } from "lucide-react"

const aboutData = [
  {
    icon: User,
    title: "About Me",
    description: "I'm a passionate individual with a strong foundation in data analysis. I love working with data to uncover insights and build solutions that make a difference.",
  },
  {
    icon: BookOpen,
    title: "Education",
  description: "I am currently pursuing my MCA at PSG College of Technology. I'm constantly learning and expanding my skills through online courses and personal projects.",
  },
  {
    icon: Target,
    title: "Career Goals",
    description: "My goal is to become a well-rounded data analyst, creating efficient, scalable solutions that drive business value through data insights.",
  },
]

export default function SimpleAbout() {
  return (
    <section id="about" className="py-20 bg-white mb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know me better through my background, education, and aspirations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {aboutData.map((item, index) => (
            <div key={index}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-4 hover:scale-105 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
