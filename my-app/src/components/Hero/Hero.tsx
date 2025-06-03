import Titles from "./Titles"

export default function Hero() {
    return (
        <section className="container mx-auto py-20">
          <div className="flex flex-col items-start text-center">
            <h1 className="text-6xl font-bold mb-4">Victor Pirojoc</h1>
            <Titles/>
            <div className="flex gap-4 my-5">
              <a
                href="https://github.com/Senpai-paj"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-lg border border-green-500 hover:bg-green-500 hover:text-black transition"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/victor-pirojoc/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-lg border border-green-500 hover:bg-green-500 hover:text-black transition"

              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
    );
}