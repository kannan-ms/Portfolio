
import SimpleHero from "@/components/SimpleHero"
import SimpleAbout from "@/components/SimpleAbout"
import SimpleProjects from "@/components/SimpleProjects"
import SimpleSkills from "@/components/SimpleSkills"
import SimpleContact from "@/components/SimpleContact"

export default function Home() {
  return (
    <main>
      <SimpleHero />
      <SimpleAbout />
      <SimpleProjects />
      <SimpleSkills />
      <SimpleContact />
    </main>
  )
}
