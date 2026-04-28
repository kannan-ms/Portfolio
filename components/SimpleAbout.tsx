import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { User, BookOpen, Target } from "lucide-react"

const aboutData = [
  {
    icon: User,
    title: "About Me",
    description: "I'm a passionate individual with a strong foundation in data analysis and a growing interest in DevOps practices. I love working with data to uncover insights and build solutions that make a difference.",
  },
  {
    icon: BookOpen,
    title: "Education",
  description: "Currently pursuing my MCA at PSG College of Technology with a focus on data science and computer science. I actively expand my skills through online learning and projects, aiming to turn data into actionable insights and create real-world impact.",
  },
  {
    icon: Target,
    title: "Career Goals",
    description: "My goal is to become a Data Engineer, building robust data pipelines and scalable systems that empower organizations to make data-driven decisions.",
  },
]

export default function SimpleAbout() {
  return (
    <section id="about" className="section-shell">
      <div className="section-inner">
        <div className="section-heading mb-14">
          <span className="section-kicker">About</span>
          <h2 className="section-title">A quick snapshot of who I am</h2>
          <p className="section-copy">
            Get to know me better through my background, education, and aspirations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {aboutData.map((item, index) => (
            <div key={index}>
              <Card className="surface-card h-full border-0 shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_-30px_rgba(15,23,42,0.35)]">
                <CardHeader className="pb-4 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-sky-500 shadow-lg">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-slate-950">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="leading-relaxed text-slate-600">
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
