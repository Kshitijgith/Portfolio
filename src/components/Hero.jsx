import { useEffect, useRef } from 'react'
import ProfilePicture from '../assets/ProfilePicture.jpg'
import Typed from 'typed.js'

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Fullstack Developer', 'Tech Enthusiast', 'Problem Solver'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white to-gray-500 text-white dark:from-gray-800 dark:to-black dark:text-gray-300">
      {/* Stardust particles for a magical effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-indigo-400 opacity-20 blur-xl dark:opacity-30 animate-twinkle"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 2}s`,
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10">
        {/* Animated profile picture with neon glow */}
        <div className="relative mx-auto mb-8 animate-float">
          <div className="absolute inset-0 rounded-full bg-indigo-500 blur-2xl opacity-40 animate-neon-pulse" />
          <img
            src={ProfilePicture || "/placeholder.svg"}
            alt="Your Name"
            className="md:w-64 md:h-64 sm:w-60 sm:h-64 w-60 h-64 rounded-full mx-auto border-4 border-indigo-500 shadow-lg relative hover:scale-110 transition-transform duration-300"
          />
        </div>

        <h1 className="text-5xl font-bold mb-4 text-black dark:text-gray-300 relative">
          <span className="relative inline-block">
            Hi, I'm 
            <span className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 animate-gradient">
              Kshitij Kamble
            </span>
          </span>
        </h1>

        <h2 className="text-3xl mb-8 text-black dark:text-gray-300">
          I'm a <span ref={typedRef} className="text-indigo-600 dark:text-indigo-400"></span>
        </h2>

        {/* Neon glowing button */}
        <div className="relative inline-block group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-300 animate-glow"></div>
          <a
            href="#contact"
            className="relative bg-white text-indigo-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-indigo-100 transition duration-300 group-hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Additional animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes glow {
          0%, 100% { opacity: 0.75; filter: blur(10px); }
          50% { opacity: 1; filter: blur(15px); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }

        @keyframes neon-pulse {
          0%, 100% { opacity: 0.3; filter: blur(8px); }
          50% { opacity: 0.8; filter: blur(12px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        .animate-neon-pulse {
          animation: neon-pulse 3s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
