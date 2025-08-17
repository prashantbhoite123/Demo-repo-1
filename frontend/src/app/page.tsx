import Card from '../component/Card';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center relative">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Prashant
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-8 font-light">
            Full Stack Engineer &amp; Git Enthusiast
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Welcome to my digital space! I&apos;m passionate about building scalable web applications
            and mastering the art of version control. Let&apos;s explore and create something amazing together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              View My Projects
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
              Get In Touch with Prashant Bhoite
            </button>
          </div>

          {/* Skills Tags */}
          <div className="mt-16 flex flex-wrap justify-center gap-3">
            {['React', 'Next.js', 'Node.js', 'TypeScript', 'Git', 'Full Stack'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-full text-gray-700 text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What I Do</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate about creating digital experiences that make a difference
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card
              title="Frontend Development"
              description="Building responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks. Creating seamless user experiences across all devices."
              icon="🎨"
              gradient="from-blue-500 to-cyan-500"
              delay="100ms"
            />

            <Card
              title="Backend Development"
              description="Developing robust server-side applications with Node.js, APIs, and databases. Ensuring scalable and secure backend architectures."
              icon="⚙️"
              gradient="from-purple-500 to-pink-500"
              delay="200ms"
            />

            <Card
              title="Version Control"
              description="Mastering Git workflows, branching strategies, and collaborative development. Maintaining clean code history and efficient team collaboration."
              icon="🚀"
              gradient="from-green-500 to-teal-500"
              delay="300ms"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
