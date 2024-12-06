import { FaSun, FaMoon } from 'react-icons/fa'

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-4 right-4 sm:-translate-x-14 sm:-translate-y-1 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <FaSun className="w-6 h-6" /> : <FaMoon className="w-6 h-6" />}
    </button>
  )
}

export default DarkModeToggle

