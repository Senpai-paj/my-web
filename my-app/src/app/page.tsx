'use client';

import TerminalLoader from "@/components/TerminalLoader";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import CursorHighlight from "@/components/CursorHighlight";
import { useState } from 'react';

export default function Home() {

  const [show,setShow] = useState(false)

  const showPage =()=>{
    setShow(true);
  }
  
  return (
    <>
      <CursorHighlight />
      <TerminalLoader show={showPage}/>
      <main className={`bg-black text-green-500 transition-opacity duration-1000 ${show ? 'opacity-100' : 'opacity-0'} h-screen overflow-y-scroll snap-y snap-mandatory`}>
        {/* Hero Section */}
        <div className="snap-start">
          <Hero />
        </div>

        {/* About Section */}
        <div className="snap-start">
          <About />
        </div>

        {/* Skills Section */}
        <section className="container mx-auto px-4 py-16 snap-start min-h-screen flex items-center justify-center">
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

