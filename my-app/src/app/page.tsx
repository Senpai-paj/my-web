'use client';

import TerminalLoader from "@/components/TerminalLoader";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Nav from "@/components/Nav/Nav"
import SideNav from "@/components/SideNav/SideNav";
import { useState } from 'react';
import SymbolBackground from "@/components/Hero/SymbolBackground";

export default function Home() {
  const [show,setShow] = useState(false)

  const showPage =()=>{
    setShow(true);
  }
  
  return (
    <>
      <TerminalLoader show={showPage}/>
      <div className={`h-screen relative transition-opacity duration-1000 ${show ? 'opacity-100' : 'opacity-0'}`}>
        <SideNav />
        <main className=" h-full overflow-y-auto snap-y snap-mandatory">
          {show && <SymbolBackground/>}
          {/* Hero Section */}
          <section id="hero" className="h-screen snap-start flex flex-col">
            <Nav />
            <div className="flex-1 flex items-center justify-center">
              <Hero />
            </div>
          </section>

          {/* About Sections */}
          <About />

          {/* Skills Section */}
          
          <section id="skills" className="h-screen snap-start flex items-center justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-green-500 mb-8">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS'].map((skill) => (
                    <div
                      key={skill}
                      className="border border-green-500 p-4 rounded-lg hover:bg-green-500/10 transition"
                    >
                      <p className="text-green-500 font-medium">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

