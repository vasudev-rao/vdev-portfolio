import GridBanner from "@/components/GridBanner";
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/ProjectsSection'
import ProjectsMotion from '@/components/ProjectsMotion'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />

      {/* ✅ Animation-safe wrapper */}
      <ProjectsMotion>
        <Projects />
      </ProjectsMotion>

      <Contact />
    </>
  )
}
