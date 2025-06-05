'use client';

import { useState, useEffect } from 'react';

interface TerminalLoaderProps {
  show: () => void;
}

export default function TerminalLoader({ show }: TerminalLoaderProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [text, setText] = useState('');
  const [dots, setDots] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [showOutput, setShowOutput] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [showPrompt, setShowPrompt] = useState(false);

  const steps = [
    {
      prompt: '@Victors-MacBook-Air ~ % ',
      command: 'ls',
      output: 'Applications\t\tLibrary\t\t\tPostman Agent\nDesktop\t\t\t\tMovies\t\t\tProgramming\nDocuments\t\t\tMusic\t\t\tPublic\nDownloads\t\t\tPictures'
    },
    {
      prompt: '@Victors-MacBook-Air ~ % ',
      command: 'cd Programming/my-web/my-appp',
      output: 'cd: no such file or directory: Programming/my-web/my-appp'
    },
    {
      prompt: '@Victors-MacBook-Air ~ % ',
      command: 'cd Programming/my-web/my-app'
    },
    {
      prompt: '@Victors-MacBook-Air my-app % ',
      command: 'clear',
      output: null,
      isClear: true
    },
    {
      prompt: '@Victors-MacBook-Air my-app % ',
      command: 'npm run dev'
    }
  ];

  useEffect(() => {
    if (currentStep >= steps.length) {
      setText('Loading page, welcome')
      // Start dots animation
      let dotCount = 0;
      const dotsInterval = setInterval(() => {
        setDots('.'.repeat((dotCount % 3) + 1));
        dotCount++;
      }, 300);

      setTimeout(() => {
        clearInterval(dotsInterval);
        setIsVisible(false);
        show()
      }, 5000);
      return;
    }

    // First show the prompt
    setShowPrompt(true);
    setText('');

    // After a delay, start typing the command
    const typingTimeout = setTimeout(() => {
      const currentStepData = steps[currentStep];
      let currentIndex = 0;
      const fullCommand = currentStepData.command;

      const interval = setInterval(() => {
        if (currentIndex <= fullCommand.length) {
          setText(fullCommand.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setShowOutput(true);
          
          // Handle clear command
          if (currentStepData.isClear) {
            setVisibleSteps([]);
          } else {
            setVisibleSteps(prev => [...prev, currentStep]);
          }
          
          // Move to next step after a delay
          setTimeout(() => {
            setCurrentStep(prev => prev + 1);
            setText('');
            setShowOutput(false);
            setShowPrompt(false);
          }, 50);
        }
      }, 100);

      return () => clearInterval(interval);
    }, 500);

    return () => clearTimeout(typingTimeout);
  }, [currentStep]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col p-2 sm:p-4">
      <div className="font-mono text-green-500 text-sm sm:text-md overflow-x-auto">
        {steps.filter((_, index) => visibleSteps.includes(index)).map((step, index) => (
          <div key={index}>
            <div className="whitespace-pre-wrap sm:whitespace-pre">
              {step.prompt}<span>{step.command}</span>
            </div>
            {step.output && (
              <div className="whitespace-pre-wrap sm:whitespace-pre mt-2">
                {step.output}
              </div>
            )}
          </div>
        ))}
        {currentStep < steps.length && !showOutput && (
          <div className="whitespace-pre-wrap sm:whitespace-pre">
            {showPrompt && steps[currentStep].prompt}<span>{text}</span>
            <span className="inline-block w-[10px] h-5 bg-green-500 animate-pulse ml-0.5"></span>
          </div>
        )}
        {currentStep >= steps.length && (
          <div className="whitespace-pre-wrap sm:whitespace-pre">
            {text}{dots}
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
