const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with IoT Development',
    summary: 'Learn the basics of IoT development and how to create your first connected device.',
    image: '/path/to/iot-blog-image.jpg',
    link: '/blog/getting-started-with-iot',
  },
  {
    id: 2,
    title: 'Advanced Data Structures in C++',
    summary: 'Explore advanced data structures and their implementations in C++ for efficient problem-solving.',
    image: '/path/to/cpp-blog-image.jpg',
    link: '/blog/advanced-data-structures-cpp',
  },
  {
    id: 3,
    title: 'Building Scalable MERN Stack Applications',
    summary: 'Best practices and techniques for creating scalable web applications using the MERN stack.',
    image: '/path/to/mern-blog-image.jpg',
    link: '/blog/scalable-mern-applications',
  },
]

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.summary}</p>
                <a
                  href={post.link}
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog

