import Image from "next/image";
import TerminalLoader from "@/components/TerminalLoader";

export default function Home() {
  return (
    <>
      <TerminalLoader />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-32 h-32 mb-8 rounded-full overflow-hidden">
              <Image
                src="/profile-placeholder.jpg"
                alt="Profile picture"
                fill
                className="object-cover"
                priority
              />
            </div>
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

        {/* About Section */}
        <section className="container mx-auto px-4 py-16 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate developer with expertise in building modern web applications.
              I love creating elegant solutions to complex problems and am constantly
              learning new technologies to improve my craft.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS'].map((skill) => (
                <div
                  key={skill}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <p className="text-gray-800 font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
