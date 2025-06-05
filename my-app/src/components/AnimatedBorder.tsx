'use client';

import { useState, useEffect } from 'react';

const symbols = [
    
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    
    'ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ',
    'サ', 'シ', 'ス', 'セ', 'ソ', 'タ', 'チ', 'ツ', 'テ', 'ト',
    'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ',
    'マ', 'ミ', 'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ',
    'ラ', 'リ', 'ル', 'レ', 'ロ', 'ワ', 'ヲ', 'ン'
];

export default function AnimatedBorder() {
    const [borderSymbols, setBorderSymbols] = useState<string[]>([]);

    useEffect(() => {
        const generateInitialBorder = () => {
            const length = Math.floor(window.innerWidth / 24);
            const initialSymbols = Array.from({ length }, () => 
                symbols[Math.floor(Math.random() * symbols.length)]
            );
            setBorderSymbols(initialSymbols);
        };

        generateInitialBorder();

        const interval = setInterval(() => {
            setBorderSymbols(prevSymbols => {
                const newSymbols = [...prevSymbols];
                
                const numChanges = Math.floor(Math.random() * 3) + 1;
                
                for (let i = 0; i < numChanges; i++) {
                    const randomIndex = Math.floor(Math.random() * newSymbols.length);
                    newSymbols[randomIndex] = symbols[Math.floor(Math.random() * symbols.length)];
                }
                
                return newSymbols;
            });
        }, 100); // interval for changes

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full overflow-hidden flex justify-center">
            <div className="text-xl font-thin whitespace-nowrap tracking-wider text-center">
                {borderSymbols.join('')}
            </div>
        </div>
    );
} 