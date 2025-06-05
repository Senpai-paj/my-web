'use client';

import { useScrollFade } from '@/hooks/useScrollFade';
import AnimatedBorder from '../AnimatedBorder';

export default function About() {
    const aboutRef = useScrollFade();
    const experienceRef = useScrollFade();
    const educationRef = useScrollFade();

    return (
        <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
                {/* About Section */}
                <section id="about-me" className="min-h-screen flex items-center justify-center snap-start">
                    <div className="space-y-6 w-full">
                        <AnimatedBorder />
                        <div 
                            ref={aboutRef.ref}
                            className={`transition-all duration-700 ${
                                aboutRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                        >
                            <div className="space-y-6">
                                <h2 className="text-4xl font-bold">About Me</h2>
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
                </section>

                {/* Experience Section */}
                <section id="experience" className="min-h-screen flex items-center justify-center snap-start">
                    <div className="space-y-6 w-full">
                        <AnimatedBorder />
                        <div 
                            ref={experienceRef.ref}
                            className={`space-y-8 transition-all duration-700 ${
                                experienceRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                        >
                            <h2 className="text-4xl font-bold">Experience</h2>
                            <div className="grid gap-6">
                                <div className="p-6 bg-foreground rounded-lg">
                                    <h3 className="text-2xl text-background">System Developer</h3>
                                    <p className="text-background">Sigma Technology • 2024 - 2025</p>
                                    <p className="text-background mt-4">
                                        Developed an advanced reporting system for vehicle sensor analysis. 
                                        Integrated backend logic with UX/UI components for real-time monitoring.
                                    </p>
                                </div>
                                <div className="p-6 bg-foreground rounded-lg">
                                    <h3 className="text-2xl text-background">Full-Stack Developer | Team Lead</h3>
                                    <p className="text-background">SARSYS • 2024 - 2025</p>
                                    <p className="text-background mt-4">
                                        Designed and developed a dashboard system improving airport workflows and customer management.
                                        Implemented frontend and backend solutions using TypeScript.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <AnimatedBorder />
                    </div>
                </section>
                
                {/* Education Section */}
                <section id="education" className="min-h-screen flex items-center justify-center snap-start">
                    <div className="space-y-6 w-full">
                        <AnimatedBorder />
                        <div 
                            ref={educationRef.ref}
                            className={`space-y-8 transition-all duration-700 ${
                                educationRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                        >
                            <h2 className="text-4xl font-bold">Education</h2>
                            <div className="grid gap-6">
                                <div className="p-6 bg-foreground rounded-lg">
                                    <h3 className="text-2xl text-background">Bachelor of Science in Computer Science with specialization in Computer Systems
                                    Development</h3>
                                    <p className="text-background">Malmö University • 2022 - 2025</p>
                                    <p className="text-background mt-4">
                                    Focused on modern system development and software engineering. 
                                    Specialized in full-stack development, cloud computing, and agile methodologies. 
                                    Developed practical skills through hands-on projects and industry collaborations. 
                                    Participated in hackathons and coding competitions, gaining experience in rapid prototyping and team development. 
                                    Graduated with a strong foundation in both theoretical knowledge and practical implementation.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <AnimatedBorder />
                    </div>
                </section>
            </div>
        </div>
    );
}