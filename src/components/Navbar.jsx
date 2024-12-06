import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              Kshitij Kamble
            </a>
          </div>
          {/* Desktop Menu (Hidden on Mobile) */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${
                  activeSection === item.name.toLowerCase()
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-indigo-600 hover:text-white'
                } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* Mobile Menu Toggle Button */}
          <div className="sm:block z-50 hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-white hover:bg-indigo-600 focus:outline-none "
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Visible on small screens, Hidden on md and larger) */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-40 sm:block md:hidden">
          <div className="flex justify-end p-4">
            
          </div>
          <div className="flex flex-col items-center space-y-6 pt-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${
                  activeSection === item.name.toLowerCase()
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-300 hover:bg-indigo-600 hover:text-white'
                } px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
