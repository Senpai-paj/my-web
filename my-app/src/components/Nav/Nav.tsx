'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from '../ThemeToggle';
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Nav = () => {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const redirect = (sectionId: string) => {
    if (pathname === "/") {
      scrollToSection(sectionId);
    } else {
      // navigate to main page with query param
      router.push(`/?scrollTo=${sectionId}`);
    }
  };

  // Optional: handle scrolling after redirect
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sectionId = params.get('scrollTo');
    if (sectionId) {
      scrollToSection(sectionId);
    }
  }, []);

  return (
    <nav className="hidden md:block">
      <div className="container mx-auto">
        <div className="flex justify-around items-center p-6">
        <div className="flex items-center space-x-8  font-mono text-xl transition-colors">
            <button 
              onClick={() => redirect('hero')}
              className="group relative "
            >
              <span className="relative z-10">home</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground group-hover:w-full transition-all duration-300"></span>
            </button>

            
            <button 
              onClick={() => redirect('about-me')}
              className="group relative "
            >
              <span className="relative z-10">about</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground group-hover:w-full transition-all duration-300"></span>
            </button>


            <button 
              onClick={() => redirect('experience')}
              className="group relative "
            >
              <span className="relative z-10">experience</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground group-hover:w-full transition-all duration-300"></span>
            </button>

            <button 
              onClick={() => redirect('education')}
              className="group relative "
            >
              <span className="relative z-10">education</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground group-hover:w-full transition-all duration-300"></span>
            </button>

            <button 
              onClick={() => redirect('skills')}
              className="group relative "
            >
              <span className="relative z-10">skills</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground group-hover:w-full transition-all duration-300"></span>
            </button>

            <Link href="/projects" passHref>
              <button className="group relative">
                <span className="relative z-10">projects</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground group-hover:w-full transition-all duration-300"></span>
              </button>
            </Link>
            
            <ThemeToggle isLightTheme={isLightTheme} onThemeChange={setIsLightTheme}/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
