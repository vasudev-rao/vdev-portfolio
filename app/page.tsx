import GridBanner from '@/components/GridBanner'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'

import ProjectsSection from '@/components/ProjectsSection'
import ProjectsMotion from '@/components/ProjectsMotion'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />

      {/* ✅ Projects (SSR + animation-safe) */}
      <ProjectsMotion>
        <ProjectsSection />
      </ProjectsMotion>

      <Contact />
    </>
  )
}
