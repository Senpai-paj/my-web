'use client';

import Titles from "./Titles"
import Nav from "../Nav/Nav";
import { useScrollFade } from '@/hooks/useScrollFade';

export default function Hero() {
    const heroRef = useScrollFade();

    return (
        <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
                <section id="hero" className="min-h-screen flex flex-col snap-start">
                    <Nav />
                    <div className="flex-1 flex items-center justify-center">
                        <div className="w-full">
                            <div 
                                ref={heroRef.ref}
                                className={`transition-all duration-700 ${
                                    heroRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            >
                                <div className="flex flex-col items-center text-center relative z-10">
                                    <h1 className="text-6xl font-bold mb-4">Victor Pirojoc</h1>
                                    <Titles/>
                                    <div className="flex gap-4 m-5">
                                        <a
                                            href="https://github.com/Senpai-paj"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-2 rounded-lg border border-foreground hover:bg-foreground hover:text-background transition"
                                        >
                                            GitHub
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/victor-pirojoc/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-2 rounded-lg border border-foreground hover:bg-foreground hover:text-background transition"
                                        >
                                            LinkedIn
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}