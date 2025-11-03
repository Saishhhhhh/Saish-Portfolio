import { useState } from 'react';
import SketchBackground from '../hero/SketchBackground';
import NameAnimation from '../hero/NameAnimation';
import HeroSubtitle from '../hero/HeroSubtitle';
import HeroButtons from '../hero/HeroButtons';
import ScrollArrow from '../hero/ScrollArrow';
import ContactButton from '../hero/ContactButton';
import ProfessionalTitle from '../hero/ProfessionalTitle';
import SocialLinks from '../hero/SocialLinks';
import FloatingBooks from '../hero/FloatingBooks';

/**
 * Main Hero section component
 */
const Hero = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [pencilPosition, setPencilPosition] = useState({ x: 0, y: 0 });
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 old-paper-bg overflow-hidden w-full">
      {/* Sketch-style background */}
      <SketchBackground />

      {/* Floating books on sides */}
      <FloatingBooks animationComplete={animationComplete} />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-16 relative z-10">
        <div className="max-w-5xl w-full text-center">
          {/* Hero Section */}
          <div className="mb-16">
            {/* SVG animation container */}
            <NameAnimation 
              name="Saish" 
              greeting="Hi, I'm" 
              setAnimationComplete={setAnimationComplete}
              setPencilPosition={setPencilPosition}
            />
            
            {/* Professional Title */}
            <ProfessionalTitle 
              animationComplete={animationComplete}
              title="AI Engineer | Full-Stack Developer | Data Scientist"
            />
            
            {/* Subtitle */}
            <HeroSubtitle 
              animationComplete={animationComplete}
              text="A full-stack dev blending AI finesse with data science depth"
            />
            
            {/* Social Links */}
            <SocialLinks animationComplete={animationComplete} />
            
            {/* CTA Buttons */}
            <HeroButtons animationComplete={animationComplete} />
          </div>
          
          {/* Hand-drawn arrow */}
          <ScrollArrow animationComplete={animationComplete} />
        </div>
      </main>

      {/* Floating contact button */}
      <ContactButton />
    </section>
  );
};

export default Hero; 