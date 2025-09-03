import StaticHero from "@/components/StaticHero"
import SimpleAbout from "@/components/SimpleAbout"
import SimpleProjects from "@/components/SimpleProjects"
import SimpleSkills from "@/components/SimpleSkills"
import SimpleContact from "@/components/SimpleContact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <StaticHero />
      <SimpleAbout />
      <SimpleProjects />
      <SimpleSkills />
  <SimpleContact />
    </main>
  )
}
