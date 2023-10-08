import React from 'react'
import HeroSection from './Components/HeroSection'
import NavBar from './Components/NavBar'
import AboutSection from './Components/AboutSection'
import ProjectSection from './Components/ProjectSection'
import EmailSection from './Components/EmailSection'
import Footer from './Components/Footer'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <NavBar />
      <div class="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
        </div>
        <Footer />
    </main>
  )
}
