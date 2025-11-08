//Hero.jsx
import React from "react";
import { motion } from 'framer-motion';
import { Element } from "react-scroll";

const Hero = () => {
    return (
    
      <div id="scrollRoot" className = "relative h-screen snap-y overflow-y-scroll snap-mandatory overscroll-contain">
        
        {/* Page 1 */}
        <Element name="about">
        <section id="about" className="h-screen w-full snap-start snap-always flex items-center justify-center bg-green-500 text-white text-4xl">
        
        <motion.div className= "text-4xl font-bold text-indido-600"> 01. About
          
        </motion.div>

        </section>
        </Element>

        <Element name="projects">
        <section id="projects" className="h-screen w-full snap-start snap-always flex items-center justify-center bg-red-500 text-white text-4xl">
          <h1>Page 2: Key Feature</h1>
        </section>
      </Element>

      <Element name="skills">
        <section id="skills" className="h-screen w-full snap-start snap-always flex items-center justify-center bg-blue-500 text-white text-4xl">
          <h1>Page 3: Call to Action</h1>
        </section>
      </Element>
    </div>
    );
  };
  
  export default Hero;