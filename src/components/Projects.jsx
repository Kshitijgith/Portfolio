import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import AutoStart from '../assets/AutoStart.png'
import VIdeas from '../assets/VIdeas.png'
import HostelBank from '../assets/HostelBank.png'

const projects = [
  
  {
    id: 1,
    title: 'V-Ideas',
    description: 'A platform for students to showcase their projects and collaborate with guides',
    image: VIdeas,
    techStack: ['React', 'Node.js', 'MongoDB', 'Express','SocketIO','Brevo'],
    liveDemo: 'https://v-ideass.vercel.app/',
    github: 'https://github.com/Kshitijgith/V-Ideass',
  },
  {
    id: 2,
    title: 'Hostel Bank',
    description: 'A platform for managing and splitting day-to-day transactions among hostel mates',
    image: HostelBank,
    techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveDemo: 'https://hostel-bank1.vercel.app/',
    github: 'https://github.com/Kshitijgith/Hostel-Bank1',
  },
  {
    id: 3,
    title: 'Autostart',
    description: 'A car showroom management system for automatic car start functionality',
    image: AutoStart,
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveDemo: 'https://showroom-client.vercel.app/',
    github: 'https://github.com/Kshitijgith/showroomClient',
  },
]

const ProjectCard = ({ project, onClick }) => (
  <div className="bg-white dark:bg-gray-00 rounded-lg shadow-md overflow-hidden">
    <img src={project.image} alt={project.title} className="w-full h-48 object-fit" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => onClick(project)}
          className="text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          Learn More
        </button>
        <div className="flex space-x-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            <FaExternalLinkAlt className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </div>
)

const ProjectModal = ({ project, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-2xl w-full mx-4">
      <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
      <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-4" />
      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
        >
          View on GitHub
        </a>
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300"
        >
          Live Demo
        </a>
      </div>
      <button
        onClick={onClose}
        className="mt-6 w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
      >
        Close
      </button>
    </div>
  </div>
)

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-20 bg-gray-300 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
          ))}
        </div>
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  )
}

export default Projects
