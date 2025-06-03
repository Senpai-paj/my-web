'use client';

import { useEffect, useRef, useState } from 'react';

export const useScrollFade = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.3, // Trigger when 30% of the element is visible
                rootMargin: '0px 0px -100px 0px' // Adjust when the effect triggers
            }
        );

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return { ref, isVisible };
}; 