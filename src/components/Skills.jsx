import { useEffect } from 'react'
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'
import { SiJavascript, SiCplusplus, SiMongodb } from 'react-icons/si'
import { BiLogoTailwindCss } from "react-icons/bi"
import AOS from 'aos'
import 'aos/dist/aos.css'

const skills = [
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'React', icon: FaReact },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Express.js', icon: FaNodeJs },
  { name: 'Tailwind CSS', icon: BiLogoTailwindCss },
  { name: 'C++', icon: SiCplusplus },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'SQL DBMS', icon: FaDatabase },
]

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-transform transform hover:scale-105 duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <skill.icon className="text-5xl text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
