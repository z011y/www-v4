'use client'

import { useState } from 'react'

import Header from './Header'
import Hero from './Hero'
import Skills from './Skills'
import Career from './Career'
import { CareerCompany } from '@/models/careerModel'
import { ProjectDetails } from '@/models/projectsModel'
import Projects from './Projects'

interface HomeClientProps {
  companies: CareerCompany[]
  projects: ProjectDetails[]
}

export default function HomeClient({ companies, projects }: HomeClientProps) {
  const [focusedProject, setFocusedProject] = useState(0)

  return (
    <>
      <Header />
      <main className="flex w-full flex-col justify-center">
        <Hero />
        <Career companies={companies} setFocusedProject={setFocusedProject} />
        <Projects projects={projects} focusedProjectId={focusedProject} />
        <Skills />
      </main>
    </>
  )
}
