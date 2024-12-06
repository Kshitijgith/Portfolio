import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Senior Developer at TechCorp',
    content: 'Working with this developer was a pleasure. Their expertise in MERN stack and problem-solving skills are top-notch.',
    image: '/path/to/john-doe.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Project Manager at InnovateTech',
    content: 'I was impressed by their ability to quickly grasp complex concepts and deliver high-quality code on time.',
    image: '/path/to/jane-smith.jpg',
  },
  {
    id: 3,
    name: 'Alex Johnson',
    role: 'CTO at StartupX',
    content: 'Their expertise in IoT and MERN stack helped us build a cutting-edge product. Highly recommended!',
    image: '/path/to/alex-johnson.jpg',
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-24 h-24 rounded-full mx-auto mb-6"
                      />
                      <p className="text-gray-600 dark:text-gray-300 mb-6">{testimonial.content}</p>
                      <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                      <p className="text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={prevTestimonial}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300"
            >
              <FaChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300"
            >
              <FaChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

