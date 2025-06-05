import Titles from "./Titles"

export default function Hero() {
    return (
        <section className="container mx-auto py-20 relative flex items-center justify-center min-h-screen">
          <div className="flex flex-col items-center text-center relative z-10">
            <h1 className="text-6xl font-bold mb-4">Victor Pirojoc</h1>
            <Titles/>
            <div className="flex gap-4 m-5">
              <a
                href="https://github.com/Senpai-paj"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-lg border border-foreground hover:bg-foreground hover:text-background transition"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/victor-pirojoc/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-lg border border-foreground hover:bg-foreground hover:text-background transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
    );
}