'use client'

import { useEffect, useRef, useState } from "react";

function hexToRgba(hex: string, alpha: number) {
    hex = hex.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  }

  interface PageLoaderProps {
    showBackground: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  export default function PageLoader({ showBackground }: PageLoaderProps) {

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
  
    // Get colors from CSS variables
    const rootStyles = getComputedStyle(document.documentElement);
    const backgroundColor = rootStyles.getPropertyValue('--background') || '#000';
    const foregroundColor = rootStyles.getPropertyValue('--foreground') || '#0f0';
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array.from({ length: columns }, () => 0); // Start at 0 for empty screen
  
    let alpha = 1; // for fade out
    let fading = false;
    let animationId: number;
  
    const draw = () => {
      // Fade trail effect
      ctx.fillStyle = hexToRgba(backgroundColor, 0.05); // lower alpha for long trails
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  
      ctx.fillStyle = foregroundColor.trim(); // use CSS variable
      ctx.font = `${fontSize}px monospace`; // if you want to use a CSS font, get it similarly
  
      for (let i = 0; i < drops.length; i++) {
        if (drops[i] > 0) { // only draw if the drop has started
          const text = letters[Math.floor(Math.random() * letters.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        }
  
        // Start drops randomly
        if (Math.random() > 0.975 && drops[i] === 0) {
          drops[i] = 1;
        }
  
        if (drops[i] > 0) drops[i]++;
        if (drops[i] * fontSize > canvas.height) drops[i] = 0;
      }
  
      // Handle fade out
      if (fading) {
        alpha -= 0.01; // adjust fade speed
        ctx.fillStyle = hexToRgba(backgroundColor, 1 - alpha);
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        if (alpha <= 0) {
          cancelAnimationFrame(animationId);
          setShow(true);
          showBackground(true);
          return;
        }
      }
  
      animationId = requestAnimationFrame(draw);
    };
  
    draw();
  
    const fadeTimer = setTimeout(() => {
      fading = true;
    }, 500);
  
    return () => {
      clearTimeout(fadeTimer);
      cancelAnimationFrame(animationId);
    };
  });
  

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute top-0 left-0 w-full h-full ${!show ? "opacity-100" : "opacity-0"}`} 
    />
  );
};
