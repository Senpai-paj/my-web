'use client';

import { useState, useEffect } from 'react';

const titles = [
  "Full Stack Developer",
  "Code Whisperer",
  "Bug Slayer",
  "Pixel Perfectionist",
  "Database Tamer",
  "API Alchemist",
  "UI/UX Magician",
  "Semantic Sorcerer",
  "Java Jedi",
  "React Ranger",
  "Debugger Extraordinaire",
  "Component Conjurer",
  "Logical Thinker",
  "Tech Explorer",
  "System Architect Apprentice",
  "Frontend Fanatic",
  "Back-End Beast",
  "Terminal Commander",
  "Dark Mode Advocate",
  "Ctrl+S Maniac",
  "Clean Code Evangelist",
  "Coffee-to-Code Converter",
  "Deployment Whisperer",
  "Console.Log Philosopher",
  "Night Owl Coder"
];


const Titles = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        if (text.length < currentTitle.length) {
          setText(currentTitle.slice(0, text.length + 1));
          setTypingSpeed(100);
        } else {
          // Pause at the end of typing
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        if (text.length > 0) {
          setText(currentTitle.slice(0, text.length - 1));
          setTypingSpeed(50);
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, currentIndex, typingSpeed]);

  return (
    <div className="h-8 ml-1">
      <span className="text-green-500 text-xl">{text}</span>
      <span className="inline-block w-[10px] h-5 bg-green-500 animate-pulse ml-0.5"></span>
    </div>
  );
};

export default Titles;