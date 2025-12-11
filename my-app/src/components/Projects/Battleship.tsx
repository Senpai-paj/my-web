import AnimatedBorder from '../AnimatedBorder';
import Browser from '../Browser';
import { useScrollFade } from '@/hooks/useScrollFade';


const Battleship = () => {

const projectRef = useScrollFade();

  return (
    <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
            <section id="skills" className="min-h-screen flex items-center justify-center snap-start">
                <div className="space-y-6 w-full">

                        <div ref={projectRef.ref} className={`space-y-8 transition-all duration-700 ${projectRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} >
                            <h2 className="text-4xl font-bold text-center md:text-left">Projects /* Under Construction */</h2>
                            <Browser url='https://battleship-demo.vercel.app/' />
                        </div>

                </div>
            </section>
        </div>
    </div>
  );
};

export default Battleship; 