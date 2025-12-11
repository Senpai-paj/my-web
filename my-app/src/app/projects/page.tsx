'use client'

import Nav from "@/components/Nav/Nav";
import PageLoader from "@/components/PageLoader";
import Battleship from "@/components/Projects/Battleship";
import SymbolBackground from "@/components/SymbolBackground";

import { useState } from "react";

export default function ProjectsPage(){
  const [showBackground, setShowBackground] = useState(false);

  return (
<>
      <PageLoader showBackground = {setShowBackground}/>

      <div
        className={`h-screen relative transition-opacity duration-2000`}
      >
        <Nav/>
        <main className="h-full overflow-y-auto snap-y snap-mandatory">
        {showBackground && <SymbolBackground />}
          <Battleship />
        </main>
      </div>
    </>
  );
};
