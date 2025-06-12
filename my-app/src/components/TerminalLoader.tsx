'use client';

import { useState, useEffect } from 'react';

interface TerminalLoaderProps {
  show: () => void;
}

export default function TerminalLoader({ show }: TerminalLoaderProps) {
  const [commandText, setCommandText] = useState('');
  const [loadingText, setLoadingText] = useState('');
  const [dots, setDots] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const command = 'npm run dev';

  useEffect(() => {
    // First show the prompt
    setShowPrompt(true);
    setCommandText('');

    // After a delay, start typing the command
    const typingTimeout = setTimeout(() => {
      let currentIndex = 0;

      const interval = setInterval(() => {
        if (currentIndex <= command.length) {
          setCommandText(command.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsLoading(true);
          setLoadingText('Loading page, welcome');
          
          // Start dots animation
          let dotCount = 0;
          const dotsInterval = setInterval(() => {
            setDots('.'.repeat((dotCount % 3) + 1));
            dotCount++;
          }, 300);

          setTimeout(() => {
            clearInterval(dotsInterval);
            setIsVisible(false);
            show();
          }, 3000);
        }
      }, 100);

      return () => clearInterval(interval);
    }, 500);

    return () => clearTimeout(typingTimeout);
  }, [show]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col p-2 sm:p-4">
      <div className="font-mono text-green-500 text-sm sm:text-md overflow-x-auto">
        <div className="whitespace-pre-wrap sm:whitespace-pre">
          {showPrompt && '@Victors-MacBook-Air my-app % '}<span>{commandText}</span>
          {commandText === command && !isLoading && <span className="inline-block w-[10px] h-5 bg-green-500 animate-pulse ml-0.5"></span>}
        </div>
        {isLoading && (
          <div className="whitespace-pre-wrap sm:whitespace-pre mt-2">
            {loadingText}{dots}
          </div>
        )}
      </div>
      <button 
        onClick={() => {setIsVisible(false); show()}}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:bottom-1/2 sm:right-10  
                   text-lg sm:text-2xl hover:cursor-pointer"
      >
        Skip Intro
      </button>
    </div>
  );
};
