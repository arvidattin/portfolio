import React from "react";
import { motion, useInView } from 'framer-motion';
import ExperienceCard from "./ExperienceCard";
// Import logos if needed, or pass them as props from a data file
import axis_logo from "../assets/axis_logo.png";
import forsvaret_logo from "../assets/forsvaret_logo.png";
import kriminalvarden_logo from "../assets/kriminalvarden_logo.png";
import Coop_logo from "../assets/Coop_logo.png";
import TechCarousel from "./TechCarousel";

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
            title: "GSS/T - Part-time Soldier",
            company: "Försvarsmakten",
            duration: "2019 - 2024",
            logo: forsvaret_logo
        },
        {
            title: "Correctional Officer - Part-Time / Seasonal",
            company: "Kriminalvården",
            duration: "2022 - 2025",
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
            className="relative h-[calc(100vh-4rem)] w-full grid place-items-center snap-start bg-transparent text-white"
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
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.15, duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                    className="box-border h-full w-full p-2 sm:p-5 self-stretch flex flex-col sm:items-center sm:justify-center overflow-y-auto sm:overflow-hidden"
                >
                    <div className="flex flex-col items-center justify-center gap-6  max-w-7xl">
                        <div className="bg-dark-base/60 ring-1 ring-portfolio-accent/15 ring-offset-2 ring-offset-dark-base w-full p-3 sm:p-8 rounded-lg sm:overflow-y-auto sm:overscroll-y-contain sm:max-h-full">
                            <h1 className="text-4xl font-bold text-portfolio-accent mb-8 text-center">Career experience</h1>
                            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                                {experiences.map((exp, index) => (
                                    <ExperienceCard key={index} {...exp} />
                                ))}
                            </div>
                        </div>
                        <div className="bg-dark-base/60 ring-1 ring-portfolio-accent/15 ring-offset-2 ring-offset-dark-base w-full p-3 sm:p-8 rounded-lg overflow-hidden">
                            <h1 className="text-4xl font-bold text-portfolio-accent mb-8 text-center">Tech experience</h1>
                            <TechCarousel />
                        </div>
                    </div>
                </motion.div>
            )}
        </section>
    );
};

export default ExperienceSection;
