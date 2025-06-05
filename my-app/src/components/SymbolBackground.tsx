import { useState, useRef, useEffect } from 'react';

// Pre-generated symbols for better performance
const SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
const GRID_SIZE = 25; // Space between symbols
const HOVER_RADIUS = 150; // Radius of hover effect
const GRID_SIZE_X = 2000; // Width of pre-generated grid
const GRID_SIZE_Y = 2000; // Height of pre-generated grid

// Pre-calculate positions for a large viewport
const generateSymbols = () => {
  const symbols = [];
  // Generate for a 2000x2000 viewport (should cover most screens)
  for (let x = 0; x < GRID_SIZE_X; x += GRID_SIZE) {
    for (let y = 0; y < GRID_SIZE_Y; y += GRID_SIZE) {
      symbols.push({
        x,
        y,
        char: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
      });
    }
  }
  return symbols;
};

// Pre-generate all symbols
const ALL_SYMBOLS = generateSymbols();

export default function SymbolBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateOffset = () => {
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      
      // Calculate offset to center the grid
      const xOffset = Math.max(0, (width - GRID_SIZE_X) / 2);
      const yOffset = Math.max(0, (height - GRID_SIZE_Y) / 2);
      
      setOffset({ x: xOffset, y: yOffset });
    };

    updateOffset();
    window.addEventListener('resize', updateOffset);
    return () => window.removeEventListener('resize', updateOffset);
  }, []);

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left - offset.x,
      y: e.clientY - rect.top - offset.y
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [offset]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
    >
      <div 
        className="absolute inset-0"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`
        }}
      >
        {ALL_SYMBOLS.map((symbol, index) => {
          // Simplified distance calculation
          const dx = symbol.x - mousePosition.x;
          const dy = symbol.y - mousePosition.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const opacity = Math.max(0, 1 - distance / HOVER_RADIUS);
          
          return (
            <div
              key={index}
              className="absolute text-green-500/30 transition-opacity duration-200 text-lg"
              style={{
                left: `${symbol.x}px`,
                top: `${symbol.y}px`,
                opacity: opacity,
                transform: 'translate(-50%, -50%)'
              }}
            >
              {symbol.char}
            </div>
          );
        })}
      </div>
    </div>
  );
} 