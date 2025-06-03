export default function Hero() {
    return (
        <section className="container mx-auto px-4 py-20">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Your Name</h1>
            <p className="text-xl text-gray-600 mb-8">Full Stack Developer</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
    );
}