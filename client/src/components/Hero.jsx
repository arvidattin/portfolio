//Hero.jsx
import React from "react";
import { motion, useInView } from 'framer-motion';
import { Element } from "react-scroll";
import ExperienceCard from "./ExperienceCard";
import axis_logo from "../assets/axis_logo.png";
import forsvaret_logo from "../assets/forsvaret_logo.png";
import kriminalvarden_logo from "../assets/kriminalvarden_logo.png";
import Coop_logo from "../assets/Coop_logo.png";
import ProfilePicture from "../assets/ProfilePicture.png";

const Hero = () => {

  const rootRef = React.useRef(null);        // scroll container
  const startRef = React.useRef(null);
  const aboutRef = React.useRef(null);
  const projectsRef = React.useRef(null);
  const skillsRef = React.useRef(null);

  const isInView = useInView(startRef, { amount: 0.6, root: rootRef });
  const inAbout = useInView(aboutRef, { amount: 0.6, root: rootRef });
  const inProjects = useInView(projectsRef, { amount: 0.6, root: rootRef });
  const inSkills = useInView(skillsRef, { amount: 0.6, root: rootRef });


  return (
    <div id="scrollRoot" className="h-[calc(100vh-4rem)] snap-y overflow-y-scroll snap-mandatory overscroll-contain">
      {/* Page 0 */}
      <Element name="start">
        <section id="start" ref={startRef} className="h-[calc(100vh-4rem)] w-full snap-start snap-always  grid place-items-center  bg-dark-base text-white text-4xl">

          <div className="absolute inset-0 flex items-center justify-center">
            {isInView && (
              <motion.span
                initial={{ opacity: 0, y: -200 }}
                whileInView={{
                  opacity: [0, 1, 1, 0],
                  y: [0, 0, 0, -12],
                }}
                transition={{
                  duration: 3.0,
                  times: [0, 0.222, 0.833, 1],
                  ease: ["easeOut", "linear", "easeIn"],
                  delay: 0.0,
                }}
                viewport={{ once: false, amount: 0.5 }}
                className="text-4xl absolute font-bold text-indido-600"
              >
                Hi, I'm Arvid.
              </motion.span>
            )}
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row items-center justify-center gap-10">
            <div className="mb-2">
              {isInView && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.1, duration: 1, ease: "easeIn" }}
                  viewport={{ once: false, amount: 0.5 }}
                  className="text-portfolio-accent whitespace-nowrap text-lg font-bold"
                >
                  Hi, my name is
                </motion.div>
              )}
              {isInView && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.1, duration: 1, ease: "easeIn" }}
                  viewport={{ once: false, amount: 0.5 }}
                  className="text-4xl mb-4 whitespace-nowrap font-bold"
                >
                  Arvid Attin
                </motion.div>
              )}
            </div>

            <div>
              {isInView && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 8, duration: 2, ease: "easeIn" }}
                  viewport={{ once: false, amount: 0.5 }}
                  className="text-gray-500 text-base whitespace-nowrap font-bold"
                >
                  I'm a dedicated and passionate
                </motion.div>
              )}
              {isInView && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 5, duration: 1, ease: "easeIn" }}
                  viewport={{ once: false, amount: 0.5 }}
                  className="text-slate-300 mb-2 text-2xl whitespace-nowrap font-bold"
                >
                  Fullstack developer
                </motion.div>
              )}
              {isInView && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 8, duration: 2, ease: "easeIn" }}
                  viewport={{ once: false, amount: 0.5 }}
                  className="text-gray-500 text-base whitespace-nowrap font-bold"
                >
                  with a Master of Science in
                </motion.div>
              )}
              {isInView && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 6, duration: 1, ease: "easeIn" }}
                  viewport={{ once: false, amount: 0.5 }}
                  className="text-slate-300 mb-2 text-2xl whitespace-nowrap font-bold"
                >
                  Information Technology
                </motion.div>
              )}
            </div>
          </div>
        </section>
      </Element>
      {/* Page 1 */}
      <Element name="about">
        <section
          id="about"
          ref={aboutRef}
          className="relative h-[calc(100vh-4rem)] w-full grid place-items-stretch snap-start snap-always bg-dark-base text-white"
        >
          {/* Centered animated heading (absolute overlay) */}
          <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
            {inAbout && (
              <motion.div className="inline-block">
                <motion.span
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: [0, 1, 1, 0], y: [0, 0, 0, -30] }}
                  transition={{
                    duration: 3.0,
                    times: [0, 0.222, 0.833, 1],
                    ease: ["easeOut", "linear", "easeIn"],
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                  className="relative inline-block pb-1 text-3xl sm:text-4xl md:text-5xl font-bold text-center"
                >
                  01. About
                  <motion.i
                    aria-hidden
                    className="absolute left-0 bottom-0 h-[3px] w-full bg-portfolio-accent origin-left"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                    transition={{
                      duration: 3.0,
                      times: [0, 0.222, 0.833, 1],
                      ease: ["easeOut", "linear", "easeIn"],
                    }}
                    viewport={{ once: false, amount: 0.5 }}
                  />
                </motion.span>
              </motion.div>
            )}
          </div>

          {/* Content container — appears after the heading */}
          {inAbout && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className=" box-border h-full w-full p-5 self-stretch"
            >
              {/* This blue fills the content box (inside padding), so white padding stays visible */}
              <div className="bg-gray-800/50 shadow-inner  shadow-portfolio-accent/45 w-full h-full rounded-lg"> </div>
            </motion.div>
          )}
        </section>
      </Element>

      {/* Page 2 */}
      <Element name="projects">
        <section id="projects" ref={projectsRef} className="relative h-[calc(100vh-4rem)] w-full grid place-items-center snap-start snap-always bg-gray-900">
          {inProjects && (/*  */
            <motion.div className="inline-block">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                whileInView={{
                  opacity: [0, 1, 1, 0],
                  y: [0, 0, 0, -30],
                }}
                transition={{
                  duration: 3.0,
                  times: [0, 0.222, 0.833, 1],
                  ease: ["easeOut", "linear", "easeIn"],
                  delay: 0.0,
                }}
                viewport={{ once: false, amount: 0.5 }}
                className="relative inline-block pb-1 text-5xl font-bold"
              >
                01. Projects
                <motion.i
                  aria-hidden
                  className="absolute left-0 bottom-0 h-[3px] w-full bg-portfolio-accent origin-left"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                  transition={{
                    duration: 3.6,
                    times: [0, 0.222, 0.833, 1],
                    ease: ["easeOut", "linear", "easeIn"],
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                />
              </motion.span>
            </motion.div>
          )}
        </section>
      </Element >


      <Element name="skills">
        <section id="skills" className="h-screen w-full snap-start snap-always flex items-center justify-center bg-blue-500 text-white text-4xl">
          <h1>Page 3: Call to Action</h1>
        </section>
      </Element>
    </div >
  );
};

export default Hero;