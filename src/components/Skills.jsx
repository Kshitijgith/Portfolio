import { useEffect } from 'react'
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'
import { SiJavascript, SiCplusplus, SiMongodb } from 'react-icons/si'
import AOS from 'aos'
import 'aos/dist/aos.css'

const skills = [
  { name: 'JavaScript', icon: SiJavascript, proficiency: 90 },
  { name: 'React', icon: FaReact, proficiency: 85 },
  { name: 'Node.js', icon: FaNodeJs, proficiency: 80 },
  { name: 'C++', icon: SiCplusplus, proficiency: 75 },
  { name: 'MongoDB', icon: SiMongodb, proficiency: 70 },
  { name: 'SQL DBMS', icon: FaDatabase, proficiency: 65 },
]

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <section id="skills" className="py-20  bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center mb-4">
                <skill.icon className="text-4xl text-indigo-600 dark:text-indigo-400 mr-4" />
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                      Proficiency
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-indigo-600">
                      {skill.proficiency}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                  <div
                    style={{ width: `${skill.proficiency}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

