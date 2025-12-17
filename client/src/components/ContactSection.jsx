import React from "react";
import { motion, useInView } from 'framer-motion';

const ContactSection = ({ id }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { amount: 0.6 });

    return (
        <section
            id={id}
            ref={ref}
            className="relative h-[calc(100vh-4rem)] w-full grid place-items-center snap-start bg-transparent text-white"
        >
            <div className="flex flex-col items-center justify-center max-w-2xl px-4 text-center">
                {isInView && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-center gap-6"
                    >
                        <p className="text-portfolio-accent font-mono text-lg">04. What's Next?</p>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100">
                            Get In Touch
                        </h2>
                        <p className="text-slate-400 text-base sm:text-lg max-w-md">
                            I am currently looking for new opportunities. Whether you have a question, want a resume, or just want to say hi, I'll get back to you!
                        </p>

                        <motion.a
                            href="https://www.linkedin.com/in/arvid-attin-023b97231/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-8 px-8 py-4 bg-transparent border border-portfolio-accent text-portfolio-accent rounded text-sm font-mono font-bold tracking-wide hover:bg-portfolio-accent/10 transition-colors duration-300"
                        >
                            Connect on LinkedIn
                        </motion.a>
                    </motion.div>
                )}
            </div>

            {/* Footer / Copyright */}
            <div className="absolute bottom-10 w-full text-center text-xs text-slate-500 font-mono">
                <p>Designed & Built by Arvid Attin</p>
            </div>
        </section>
    );
};

export default ContactSection;
