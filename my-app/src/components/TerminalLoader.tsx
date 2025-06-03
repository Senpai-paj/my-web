'use client';

import { useState, useEffect } from 'react';

const TerminalLoader = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [text, setText] = useState('');
  const [dots, setDots] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [showOutput, setShowOutput] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [showPrompt, setShowPrompt] = useState(false);

  const steps = [
    {
      prompt: 'victorpirojoc@Victors-MacBook-Air ~ % ',
      command: 'ls',
      output: 'Applications\t\tLibrary\t\t\tPostman Agent\nDesktop\t\t\t\tMovies\t\t\tProgramming\nDocuments\t\t\tMusic\t\t\tPublic\nDownloads\t\t\tPictures'
    },
    {
      prompt: 'victorpirojoc@Victors-MacBook-Air ~ % ',
      command: 'cd Programming/my-web/my-appp',
      output: 'cd: no such file or directory: Programming/my-web/my-appp'
    },
    {
      prompt: 'victorpirojoc@Victors-MacBook-Air ~ % ',
      command: 'cd Programming/my-web/my-app'
    },
    {
      prompt: 'victorpirojoc@Victors-MacBook-Air my-app % ',
      command: 'clear',
      output: null,
      isClear: true
    },
    {
      prompt: 'victorpirojoc@Victors-MacBook-Air my-app % ',
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
    <div className="fixed inset-0 bg-black z-50 flex flex-col p-4">
      <div className="font-mono text-green-500 text-md">
        {steps.filter((_, index) => visibleSteps.includes(index)).map((step, index) => (
          <div key={index}>
            <div className="whitespace-pre">
              {step.prompt}<span>{step.command}</span>
            </div>
            {step.output && (
              <div className="whitespace-pre mt-2">
                {step.output}
              </div>
            )}
          </div>
        ))}
        {currentStep < steps.length && !showOutput && (
          <div className="whitespace-pre">
            {showPrompt && steps[currentStep].prompt}<span>{text}</span>
            <span className="inline-block w-[10px] h-5 bg-green-500 animate-pulse ml-0.5"></span>
          </div>
        )}
        {currentStep >= steps.length && (
          <div className="whitespace-pre">
            {text}{dots}
            {/*<span className="inline-block w-[10px] h-5 bg-green-500 animate-pulse ml-0.5"></span>*/}
          </div>
        )}
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute bottom-4 right-4 
                  text-green-500 hover:text-green-400 
                  font-mono text-sm hover:cursor-pointer"
      >
        Skip Intro
      </button>
    </div>
  );
};

export default TerminalLoader; 