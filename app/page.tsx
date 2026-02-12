import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/ProjectsSection'
import ProjectsMotion from '@/components/ProjectsMotion'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Skills />
      <Experience />

      <ProjectsMotion>
        <Projects />
      </ProjectsMotion>

      <Contact />
    </main>
  )
}
