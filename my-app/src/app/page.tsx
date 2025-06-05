'use client';

import TerminalLoader from "@/components/TerminalLoader";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import SideNav from "@/components/Nav/SideNav";
import { useState } from 'react';
import SymbolBackground from "@/components/SymbolBackground";
import Skills from "@/components/Skills/Skills";

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
        <main className="h-full overflow-y-auto snap-y snap-mandatory">
          {show && <SymbolBackground/>}
          <Hero />
          <About />
          <Skills />
        </main>
      </div>
    </>
  );
}

