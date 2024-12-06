import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import AboutMe from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import DarkModeToggle from './components/DarkModeToggle'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects',  'experience', 'contact']
      const scrollPosition = window.scrollY

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && scrollPosition >= section.offsetTop - 100) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`${darkMode ? 'dark' : ''} `}>
      <div className=" dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen" style={{ scrollBehavior: 'smooth' }}>
        <Navbar activeSection={activeSection} />
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <AboutMe/>
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
