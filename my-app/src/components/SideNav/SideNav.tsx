'use client';

import { useEffect, useState } from 'react';

const SideNav = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about-me', 'experience', 'education', 'skills'];
      const scrollPosition = window.scrollY;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          console.log(`Section ${section}:`, {
            scrollPosition,
            elementTop,
            elementBottom,
            isInView: scrollPosition >= elementTop && scrollPosition < elementBottom
          });

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            console.log('Setting active section to:', section);
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Use both scroll and wheel events to catch all scroll interactions
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleScroll);
    handleScroll(); // Check initial position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  console.log('Current active section:', activeSection); // Debug current state

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-4">
      {['hero', 'about-me', 'experience', 'education', 'skills'].map((section) => (
        <button
          key={section}
          onClick={() => scrollToSection(section)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            activeSection === section
              ? 'bg-green-500 scale-125'
              : 'border-2 border-green-500 hover:scale-110'
          }`}
          aria-label={`Scroll to ${section}`}
        />
      ))}
    </div>
  );
};

export default SideNav;
