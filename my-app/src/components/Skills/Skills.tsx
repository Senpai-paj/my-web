'use client';

import { useScrollFade } from '@/hooks/useScrollFade';
import AnimatedBorder from '../AnimatedBorder';

const Skills = () => {
  const skillsRef = useScrollFade();

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <section id="skills" className="min-h-screen flex items-center justify-center snap-start">
          <div className="space-y-6 w-full">
            <AnimatedBorder />
            <div 
              ref={skillsRef.ref}
              className={`transition-all duration-700 ${
                skillsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="space-y-8">
                <h2 className="text-4xl font-bold">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['Java','TypeScript','SpringBoot','React','C#','.NET', 'Node.js', 'Python', 'CSS & HTML','AWS'].map((skill) => (
                    <div
                      key={skill}
                      className="border text-center border-foreground p-4 rounded-lg hover:bg-foreground hover:text-background transition"
                    >
                      <p className="font-medium">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <AnimatedBorder />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills; 