'use client';

import { useState } from 'react';
import ThemeToggle from '../ThemeToggle';

const Nav = () => {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="hidden md:block">
      <div className="container mx-auto">
        <div className="flex justify-around items-center p-6">
          <div className="flex items-center space-x-8  font-mono text-xl transition-colors">
            <button 
              onClick={() => scrollToSection('hero')}
              className="group relative "
            >
              <span className="relative z-10">home</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground group-hover:w-full transition-all duration-300"></span>
            </button>

            
            <button 
              onClick={() => scrollToSection('about-me')}
              className="group relative "
            >
              <span className="relative z-10">about</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground group-hover:w-full transition-all duration-300"></span>
            </button>


            <button 
              onClick={() => scrollToSection('experience')}
              className="group relative "
            >
              <span className="relative z-10">experience</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground group-hover:w-full transition-all duration-300"></span>
            </button>

            <button 
              onClick={() => scrollToSection('education')}
              className="group relative "
            >
              <span className="relative z-10">education</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground group-hover:w-full transition-all duration-300"></span>
            </button>

            <button 
              onClick={() => scrollToSection('skills')}
              className="group relative "
            >
              <span className="relative z-10">skills</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground group-hover:w-full transition-all duration-300"></span>
            </button>
            
            <ThemeToggle isLightTheme={isLightTheme} onThemeChange={setIsLightTheme}/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav; 