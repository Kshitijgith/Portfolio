import { useEffect, useRef } from 'react';
import ProfilePicture from '../assets/ProfilePicture.jpg';
import Typed from 'typed.js';

const AboutMe = () => {
  const typedRef = useRef(null);

 

  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-400 text-gray-800 dark:from-gray-800 dark:to-black dark:text-gray-300 py-16">
      {/* Profile Picture */}
      

      {/* Background Animation */}
      
    

      <div className="text-center px-6 md:px-12 max-w-4xl mx-auto relative z-10 mt-6">
  <h1 className="text-4xl font-semibold mb-4 animate-slide-in">About Me</h1>

  <p className="text-lg mb-4">
    Hi, I'm <span className="font-bold text-indigo-600">Kshitij Kamble</span>, a final-year engineering student passionate about building scalable and efficient web applications. I specialize in modern web technologies, including <span className="font-bold text-indigo-600">React.js, Node.js, Express.js, MongoDB, and Tailwind CSS</span>.
  </p>

  <p className="text-lg mb-4">
    I have worked on several personal projects, such as <span className="font-bold text-indigo-600">V-Ideas</span>, a platform for showcasing student projects, and <span className="font-bold text-indigo-600">Autostart</span>, a car showroom management system.
  </p>

  <p className="text-lg mb-4">
    One of my other projects, <span className="font-bold text-indigo-600">Hostel Bank</span>, helps hostel mates manage shared expenses by simplifying financial tracking.
  </p>

  <p className="text-lg mb-6">
    My most recent project, <span className="font-bold text-indigo-600">URL Shortener</span>, efficiently shortens long URLs and utilizes <span className="font-bold text-indigo-600">Redis</span> for caching to enhance performance.
  </p>
</div>


      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }
        @keyframes slide-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-twinkle {
          animation: twinkle 5s ease-in-out infinite;
        }
        .animate-slide-in {
          animation: slide-in 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default AboutMe;
