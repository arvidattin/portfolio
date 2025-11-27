import React from "react";
import { motion, useInView } from 'framer-motion';
import ExperienceCard from "./ExperienceCard";
// Import logos if needed, or pass them as props from a data file
import axis_logo from "../assets/axis_logo.png";
import forsvaret_logo from "../assets/forsvaret_logo.png";
import kriminalvarden_logo from "../assets/kriminalvarden_logo.png";
import Coop_logo from "../assets/Coop_logo.png";

const ExperienceSection = ({ id }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { amount: 0.6 });

    const experiences = [
        {
            title: "Developer Intern",
            company: "Axis Communications",
            duration: "Summer 2025",
            logo: axis_logo
        },
        {
            title: "Software Developer Intern",
            company: "Försvarsmakten",
            duration: "Summer 2023",
            logo: forsvaret_logo
        },
        {
            title: "Summer Worker",
            company: "Kriminalvården",
            duration: "Summer 2022",
            logo: kriminalvarden_logo
        },
        {
            title: "Store Associate",
            company: "Coop",
            duration: "2018 - 2021",
            logo: Coop_logo
        }
    ];

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
                            02. Experience
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.2, duration: 0.8 }}
                    className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center"
                >
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} {...exp} />
                    ))}
                </motion.div>
            )}
        </section>
    );
};

export default ExperienceSection;
