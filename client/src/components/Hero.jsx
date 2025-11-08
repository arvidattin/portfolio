//Hero.jsx
import React from "react";
import { motion } from 'framer-motion';
import { Element } from "react-scroll";

const Hero = () => {
  const sentence = "Creative Developer. Problem Solver.";

    return (
    
      <div id="scrollRoot" className = "relative h-screen snap-y overflow-y-scroll snap-mandatory overscroll-contain">
        

        {/* Page 0 */}
        <Element name="start">
          
        <section id="start" className="h-screen w-full snap-start snap-always flex items-center justify-center bg-gray-900 text-white text-4xl">
        
        
        <motion.div 
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: -250, x: -300 }}
        transition={{ delay: 5, duration: 2, ease: "easeInOut" }}
        
        className= "text-4xl font-bold text-indido-600"> Welcome
          
        </motion.div>

        </section>
        </Element>

       
        {/* Page 1 */}
        <Element name="about">
        <section id="about" className="h-screen w-full snap-start snap-always flex items-center justify-center bg-gray-900 text-white text-4xl">
        
        <motion.div className="inline-block">
        <motion.span
  initial={{ opacity: 0, y: 12 }}
  whileInView={{
    opacity: [0, 1, 1, 0],   // in → hold → out
    y:       [0, 0, 0, -12], // optional: slide up in, slide down out
  }}
  transition={{
    duration: 3.0,
    times: [0, 0.222, 0.833, 1],
  
    ease: ["easeOut", "linear", "easeIn"],
    delay: 0.0, // or add a start delay if you want
  }}
  viewport={{ once: false, amount: 0.5 }}
  className="relative inline-block pb-1 text-5xl font-bold"
>
  01. About

  <motion.i
    aria-hidden
    className="absolute left-0 bottom-0 h-[3px] w-full bg-portfolio-accent origin-left"
    initial={{ scaleX: 0, opacity: 0 }}
    whileInView={{ scaleX: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
    transition={{
      duration: 3.6,
      times: [0, 0.222, 0.833, 1],
      ease: ["easeOut", "linear", "easeIn"],
      // optional offset so the line starts after the text begins:
      // delay: 0.1,
    }}
    viewport={{ once: false, amount: 0.5 }}
  />
</motion.span>
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