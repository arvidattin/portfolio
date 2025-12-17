import React from "react";
import ProfilePicture from "../assets/ProfilePicture.png";
import { motion, useInView } from 'framer-motion';

const AboutSection = ({ id }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { amount: 0.6 });

    return (
        <section
            id={id}
            ref={ref}
            className="relative h-[calc(100vh-4rem)] w-full grid place-items-stretch snap-start snap-always bg-transparent text-white"
        >
            {/* Centered animated heading (absolute overlay) */}
            <div className="absolute inset-0 z-10 flex items-center justify-center px-4 pointer-events-none">
                {isInView && (
                    <motion.div className="inline-block">
                        <motion.span
                            initial={{ opacity: 0, y: 12, filter: "blur(10px)" }}
                            whileInView={{
                                opacity: [0, 1, 1, 0],
                                y: [0, 0, 0, -30],
                                filter: ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]
                            }}
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
            {isInView && (
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="box-border h-full w-full p-2 self-stretch flex items-center justify-center"
                >
                    <div className="bg-dark-base/60 ring-1 ring-portfolio-accent/15 ring-offset-2 ring-offset-dark-base w-auto h-auto p-8 rounded-lg overflow-y-auto max-h-full">
                        <h1 className="text-2xl font-bold text-portfolio-accent">About Me</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="flex flex-col justify-center">
                                <h2 className="text-2xl md:text-4xl font-semibold mb-4">Who I Am</h2>
                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    I grew up in Malmö, Sweden, and later moved to study at Linköping University. I am a social and ambitious guy with a deep-seated passion for all things tech-related. During my time at university I have been head of the Pub Commitee and active in other student organizations, while working part-time as a supervisor for four years.  I love stepping outside of my comfort zone: I have worked in Austria,
                                    scuba dived throughout Asia, and done military service.
                                </p>

                                <h2 className="text-2xl font-semibold md:mb-4">My Journey</h2>
                                <div className="space-y-4">
                                    <div className="border-l-2 border-portfolio-accent pl-4">
                                        <h3 className="font-bold">Student</h3>
                                        <p className="text-sm text-gray-400">2021 - Present</p>
                                        <p className="text-gray-300">Master's program in Computer Science</p>
                                    </div>
                                    {/* Add more timeline items here */}
                                </div>
                            </div>

                            {/* Image */}
                            <div className="hidden md:flex  flex-col items-center justify-center">
                                <img
                                    src={ProfilePicture}
                                    alt="Arvid Attin"
                                    className="w-32 h-auto sm:w-30 sm:h-30 md:w-96 md:h-auto transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </section>
    );
};

export default AboutSection;
