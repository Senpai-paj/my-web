'use client';

import TerminalLoader from "@/components/TerminalLoader";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import SideNav from "@/components/Nav/SideNav";
import { useState, useEffect } from 'react';
import SymbolBackground from "@/components/SymbolBackground";
import Skills from "@/components/Skills/Skills";
import PageLoader from "@/components/PageLoader";

export default function Home() {
  const [show, setShow] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [firstVisit, setFirstVisit] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem("visitedBefore");
    if (!visited) {

      setFirstVisit(true);
      sessionStorage.setItem("visitedBefore", "true");

    } else {
      setShow(true);
    }
  }, []);

  const showPage = () => {
    setShow(true);
  };

  return (
    <>
      {firstVisit && <TerminalLoader show={showPage} />}
      {!firstVisit && <PageLoader showBackground = {setShowBackground}/>}

      <div
        className={`h-screen relative transition-opacity duration-1000 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        <SideNav />
        <main className="h-full overflow-y-auto snap-y snap-mandatory">
          {show && firstVisit && <SymbolBackground />}
          {showBackground && <SymbolBackground />}

          <Hero />
          <About />
          <Skills />
        </main>
      </div>
    </>
  );
}

