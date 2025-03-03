import { useEffect } from 'react';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiCplusplus, SiMongodb, SiExpress } from 'react-icons/si';
import { BiLogoTailwindCss } from "react-icons/bi";
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', icon: FaReact, color: '#61DBFB' },
  { name: 'Node.js', icon: FaNodeJs, color: '#3C873A' },
  { name: 'Express.js', icon: SiExpress, color: '#000000' },
  { name: 'Tailwind CSS', icon: BiLogoTailwindCss, color: '#38BDF8' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'SQL DBMS', icon: FaDatabase, color: '#00758F' },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-gray-300 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-12 animate-slide-in">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center transition-transform transform hover:scale-110 duration-300 hover:shadow-2xl relative overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-20 h-20 flex items-center justify-center bg-opacity-20 rounded-full mb-4 transition-all duration-300 group-hover:scale-125"
                style={{ backgroundColor: skill.color }}>
                <skill.icon className="text-5xl text-white drop-shadow-lg" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white relative z-10">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-indigo-300/30 to-transparent animate-light-rays" />
    </section>
  );
};

export default Skills;