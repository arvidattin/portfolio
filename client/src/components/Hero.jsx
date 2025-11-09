//Hero.jsx
import React from "react";
import { motion, useInView } from 'framer-motion';
import { Element } from "react-scroll";
import ExperienceCard from "./ExperienceCard";
import axis_logo from "../assets/axis_logo.png";
import forsvaret_logo from "../assets/forsvaret_logo.png";
import kriminalvarden_logo from "../assets/kriminalvarden_logo.png";
import Coop_logo from "../assets/Coop_logo.png";

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
    <div id="scrollRoot" className="h-screen snap-y overflow-y-scroll snap-mandatory overscroll-contain">
      {/* Page 0 */}
      <Element name="start">
        <section id="start" ref={startRef} className="h-screen w-full relative snap-start snap-always flex bg-dark-base text-white text-4xl">
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            {isInView && (
              <motion.span
                initial={{ opacity: 0, y: 12 }}
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

          <div className="absolute gap-0 left-0 top-1/4 ml-8 md:ml-16 lg:ml-32 flex flex-col">
            <div className="mb-2">
              {isInView && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.1, duration: 1, ease: "easeIn" }}
                  viewport={{ once: false, amount: 0.5 }}
                  className="text-portfolio-accent text-lg font-bold"
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
                  className="text-4xl mb-4 font-bold"
                >
                  Arvid Attin
                </motion.div>
              )}
            </div>
            {isInView && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 8, duration: 2, ease: "easeIn" }}
                viewport={{ once: false, amount: 0.5 }}
                className="text-gray-500 text-base font-bold"
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
                className="text-slate-300 mb-2 text-2xl font-bold"
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
                className="text-gray-500 text-base font-bold"
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
                className="text-slate-300 mb-2 text-2xl font-bold"
              >
                Information Technology
              </motion.div>
            )}
          </div>
        </section>
      </Element>

      {/* Page 1 */}
      <Element name="about">
        <section id="about" ref={aboutRef} className="h-screen w-full flex items-center justify-center marker:flex snap-start snap-always bg-gray-900 text-white text-4xl">
          <div className=" absolute inset-0 z-10 flex items-center justify-center">
            {inAbout && (
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
                  01. About
                  <motion.i
                    aria-hidden
                    className=" left-0 bottom-0 h-[3px] w-full bg-portfolio-accent origin-left"
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
          </div>
          {inAbout && (
            <div className="absolute flex justify-center items-center top-1/4 ml-8 mb-8 mr-8 md:ml-16 lg:ml-32 ">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <ExperienceCard
                  duration="Summer 2025"
                  company="Axis Communications"
                  title="Developer Intern"
                  logo={axis_logo}

                />
                <ExperienceCard
                  duration="June 2022 - March 2025"
                  company="Kriminalvården"
                  title="Correctional Officer"
                  logo={kriminalvarden_logo}

                />

                <ExperienceCard
                  duration="September 2019 - January 2024"
                  company="Armed Forces "
                  title="GSS/T - Part-time Soldier"
                  logo={forsvaret_logo}

                />

                <ExperienceCard
                  duration="August 2016 - August 2019"
                  company="Coop "
                  title="Store employee"
                  logo={Coop_logo}

                />


              </div>

            </div>
          )}
        </section>
      </Element>


      {/* Page 2 */}
      <Element name="projects">
        <section id="projects" ref={projectsRef} className="h-screen w-full snap-start snap-always flex items-center justify-center bg-gray-900 text-white text-4xl">
          {inProjects && (
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