import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-lg bg-opacity-60 ${
        isScrolled ? 'bg-gray-900/80 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-bold text-indigo-400 tracking-wide">
            Kshitij Kamble
          </a>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${
                  activeSection === item.name.toLowerCase()
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-300 hover:bg-indigo-600 hover:text-white'
                } px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-indigo-600 transition-all"
          >
            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-90 transform transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } flex flex-col items-center justify-center space-y-6 z-40 md:hidden`}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-gray-300 text-2xl font-semibold hover:text-indigo-400 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
