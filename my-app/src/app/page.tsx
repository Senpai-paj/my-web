import Image from "next/image";
import TerminalLoader from "@/components/TerminalLoader";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <>
      <TerminalLoader />
      <main className="bg-black text-green-500">
        {/* Hero Section */}
        <Hero/>

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
