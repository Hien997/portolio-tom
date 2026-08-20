import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Stack } from '@/components/stack'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { Engineering } from '@/components/engineering'
import { Education } from '@/components/education'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Stack />
      <Experience />
      <Projects />
      <Engineering />
      <Education />
      <Contact />
    </main>
  )
}