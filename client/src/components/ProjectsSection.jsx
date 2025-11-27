import React from "react";
import { motion, useInView } from 'framer-motion';

const ProjectsSection = ({ id }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { amount: 0.6 });

    return (
        <section
            id={id}
            ref={ref}
            className="relative h-[calc(100vh-4rem)] w-full grid place-items-center snap-start snap-always bg-transparent text-white"
        >
            <div className="absolute inset-0 z-10 flex items-center justify-center px-4 pointer-events-none">
                {isInView && (
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
                            03. Projects
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

            {isInView && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.2, duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-gray-400">Coming soon...</p>
                </motion.div>
            )}
        </section>
    );
};

export default ProjectsSection;
