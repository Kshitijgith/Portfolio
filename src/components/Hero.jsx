import { useEffect, useRef } from 'react'
import ProfilePicture from '../assets/ProfilePicture.jpg'
import Typed from 'typed.js'

const Hero = () => {
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Fullstack Developer', 'Tech Enthusiast', 'Problem Solver'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-500 text-white dark:from-gray-800 dark:to-black dark:text-gray-300">
      <div className="text-center">
        <img
          src={ProfilePicture}
          alt="Your Name"
          className="w-48 h-50 rounded-full mx-auto mb-8 border-4 border-white shadow-lg"
        />
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Kshitij Kamble</h1>
        <h2 className="text-3xl mb-8">
          I'm a <span ref={typedRef}></span>
        </h2>
        <a
          href="#contact"
          className="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-indigo-100 transition duration-300"
        >
          Get in Touch
        </a>
      </div>
    </section>
  )
}

export default Hero


