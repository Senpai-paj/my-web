'use client';

import { useState, useEffect } from 'react';

const TerminalLoader = () => {

  const [text, setText] = useState('');
  const fullText = 'my-pages Loading...';
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const typeText = async () => {
      for (let i = 0; i <= fullText.length; i++) {
        setText(fullText.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 200));
      }
      // Wait for 2 seconds after typing is complete before hiding
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsVisible(false);
    };

    typeText();
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="font-mono text-green-500 text-xl">
        <span className="animate-pulse">$ </span> {text}
        <span className="animate-blink">|</span>
      </div>
    </div>
  );
};

export default TerminalLoader; 