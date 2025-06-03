'use client';

import { useScrollFade } from '@/hooks/useScrollFade';
import AnimatedBorder from '../AnimatedBorder';

export default function About() {
    const aboutRef = useScrollFade();
    const experienceRef = useScrollFade();
    const educationRef = useScrollFade();

    return (
        <section className="container mx-auto px-4 bg-black">
            <div className="max-w-6xl mx-auto">
                {/* About Section */}
                <div className="min-h-screen flex items-center justify-center snap-start">
                    <div className="space-y-6 w-full">
                        <AnimatedBorder />
                        <div 
                            ref={aboutRef.ref}
                            className={`transition-all duration-700 ${
                                aboutRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                        >
                            <div className="space-y-6">
                                <h2 className="text-4xl font-bold text-green-500">About Me</h2>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    I&apos;m a passionate Full Stack Developer with a keen eye for creating elegant solutions 
                                    in the least amount of time. I specialize in building modern systems 
                                    using cutting-edge technologies.
                                </p>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    My journey in tech started with a curiosity about how things work in development, 
                                    which evolved into a deep passion for creating seamless user experiences and 
                                    robust backend systems.
                                </p>
                            </div>
                        </div>
                        <AnimatedBorder />
                    </div>

                </div>

                {/* Experience Section */}
                <div className="min-h-screen flex items-center justify-center snap-start">
                    <div className="space-y-6 w-full">
                        <AnimatedBorder />
                        <div 
                            ref={experienceRef.ref}
                            className={`space-y-8 transition-all duration-700 ${
                                experienceRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                        >
                            <h2 className="text-4xl font-bold text-green-500">Experience</h2>
                            <div className="grid gap-6">
                                <div className="p-6 bg-green-500/10 rounded-lg hover:bg-green-500/20 transition-colors cursor-none">
                                    <h3 className="text-2xl text-green-500">Senior Developer</h3>
                                    <p className="text-gray-400">Company Name • 2022 - Present</p>
                                    <p className="text-gray-400 mt-4">
                                        Leading development of enterprise applications using React and Node.js. 
                                        Spearheading the implementation of microservices architecture and CI/CD pipelines.
                                    </p>
                                </div>
                                <div className="p-6 bg-green-500/10 rounded-lg hover:bg-green-500/20 transition-colors cursor-none">
                                    <h3 className="text-2xl text-green-500">Full Stack Developer</h3>
                                    <p className="text-gray-400">Previous Company • 2020 - 2022</p>
                                    <p className="text-gray-400 mt-4">
                                        Developed and maintained multiple web applications. Implemented responsive 
                                        designs and optimized database queries for better performance.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <AnimatedBorder />
                    </div>
                </div>
                

                {/* Education Section */}
                <div className="min-h-screen flex items-center justify-center snap-start">
                    <div className="space-y-6 w-full">
                        <AnimatedBorder />
                        <div 
                            ref={educationRef.ref}
                            className={`space-y-8 transition-all duration-700 ${
                                educationRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                        >
                            <h2 className="text-4xl font-bold text-green-500">Education</h2>
                            <div className="grid gap-6">
                                <div className="p-6 bg-green-500/10 rounded-lg hover:bg-green-500/20 transition-colors cursor-none">
                                    <h3 className="text-2xl text-green-500">Computer Science</h3>
                                    <p className="text-gray-400">University Name • 2016 - 2020</p>
                                    <p className="text-gray-400 mt-4">
                                        Focused on software engineering and web development. Participated in various 
                                        hackathons and coding competitions. Graduated with honors.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <AnimatedBorder />
                    </div>
                </div>
            </div>
        </section>
    );
}