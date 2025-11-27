import React from "react";
import { motion, useInView } from 'framer-motion';

const HomeSection = ({ id }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { amount: 0.6 });

    return (
        <section id={id} ref={ref} className="h-[calc(100vh-4rem)] w-full snap-start snap-always grid place-items-center bg-transparent text-white text-4xl relative">
            <div className="absolute inset-0 flex items-center justify-center">
                {isInView && (
                    <motion.span
                        initial={{ opacity: 0, y: -200, filter: "blur(20px)" }}
                        whileInView={{
                            opacity: [0, 1, 1, 0],
                            y: [0, 0, 0, -12],
                            filter: ["blur(20px)", "blur(0px)", "blur(0px)", "blur(20px)"],
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

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left">
                <div className="mb-2">
                    {isInView && (
                        <motion.div
                            initial={{ opacity: 0, filter: "blur(10px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            transition={{ delay: 3.1, duration: 1, ease: "easeIn" }}
                            viewport={{ once: false, amount: 0.5 }}
                            className="text-portfolio-accent whitespace-nowrap text-lg font-bold"
                        >
                            Hi, my name is
                        </motion.div>
                    )}
                    {isInView && (
                        <motion.div
                            initial={{ opacity: 0, filter: "blur(10px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
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
                            initial={{ opacity: 0, filter: "blur(10px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            transition={{ delay: 8, duration: 2, ease: "easeIn" }}
                            viewport={{ once: false, amount: 0.5 }}
                            className="text-gray-500 text-base whitespace-nowrap font-bold"
                        >
                            I'm a dedicated and passionate
                        </motion.div>
                    )}
                    {isInView && (
                        <motion.div
                            initial={{ opacity: 0, filter: "blur(10px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            transition={{ delay: 5, duration: 1, ease: "easeIn" }}
                            viewport={{ once: false, amount: 0.5 }}
                            className="text-slate-300 mb-2 text-2xl whitespace-nowrap font-bold"
                        >
                            Fullstack developer
                        </motion.div>
                    )}
                    {isInView && (
                        <motion.div
                            initial={{ opacity: 0, filter: "blur(10px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            transition={{ delay: 8, duration: 2, ease: "easeIn" }}
                            viewport={{ once: false, amount: 0.5 }}
                            className="text-gray-500 text-base whitespace-nowrap font-bold"
                        >
                            with a Master of Science in
                        </motion.div>
                    )}
                    {isInView && (
                        <motion.div
                            initial={{ opacity: 0, filter: "blur(10px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
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
    );
};

export default HomeSection;
