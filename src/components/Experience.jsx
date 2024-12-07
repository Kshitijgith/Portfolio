import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FaBriefcase, FaGraduationCap, FaCode, FaLink } from 'react-icons/fa'

const experiences = [
  {
    id: 1,
    title: 'LeetCode & GeeksforGeeks Profiles',
    company: 'Personal Achievement',
    date: 'Ongoing',
    description: (
      <>
        Solved numerous DSA problems and enhanced problem-solving skills. 
        <div className="mt-2 dark:text-white  text-black">
          <a 
            href="https://www.geeksforgeeks.org/user/kshitijkxfvl/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-indigo-500 hover:underline"
          >
            geeksforgeeks Profile
          </a>
        </div>
        <div>
          <a 
            href="https://leetcode.com/u/kshitijkamble12/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-indigo-500 hover:underline"
          >
            Leetcode Profile
          </a>
        </div>
      </>
    ),
    icon: <FaCode />,
  },
  {
    id: 2,
    title: '100 Days of Code Challenge',
    company: 'Personal Project',
    date: 'Jun 2024 - Sept 2024',
    description: (
      <>
        Completed 100 days of consistent coding, focusing on DSA and web development. 
        <div className="mt-2">
          <a 
            href="https://x.com/KshitijKamble22/status/1787175459177857273" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-indigo-500 hover:underline"
          >
            View Challenge
          </a>
        </div>
      </>
    ),
    icon: <FaCode />,
  },
  {
    id: 3,
    title: 'IEEE Student Member',
    company: 'Collge',
    date: 'Aug 2022 - Jun 2023',
    description: 'Worked on IEEE VIT website and contributed for holding tech events.',
    icon: <FaGraduationCap />,
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-200 dark:bg-gray-900">
      <div className="container mx-auto px-4 dark:text-white  text-black">
        <h2 className="text-4xl font-bold text-center mb-12">Profiles and Extra Activities</h2>
        <VerticalTimeline className='dark:text-white  text-black'>
          {experiences.map((exp) => (
            <VerticalTimelineElement
              key={exp.id}
              className="vertical-timeline-element--work dark:text-white  text-black "
              contentStyle={{ background: 'rgb(var(--color-primary))', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid :rgb(var(--color-primary))' }}
              
              iconStyle={{ background: 'rgb(var(--color-primary))', dark: '#fff'  }}
              icon={exp.icon}
            >
              <h3 className="vertical-timeline-element-title text-xl font-bold dark:text-white  text-black ">{exp.title}</h3>
              <h4 className="vertical-timeline-element-subtitle text-lg dark:text-white  text-black ">{exp.company}</h4>
              <p className='dark:text-white  text-black'>{exp.description}</p>
              <h10 className='dark:text-white  text-black'>{exp.date}</h10>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  )
}

export default Experience
