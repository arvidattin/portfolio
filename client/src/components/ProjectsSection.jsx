import React, { useRef } from "react";
import { motion, useInView } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const ProjectsSection = ({ id }) => {
    const ref = useRef(null);
    const scrollContainerRef = useRef(null);
    const isInView = useInView(ref, { amount: 0.2, margin: "0px 0px -100px 0px" });

    const projects = [
        {
            title: "Portfolio Website (this)",
            description: "My personal portfolio website built with React, Tailwind CSS, and Framer Motion. Features a custom glassmorphic design, smooth animations, and a fully responsive layout.",
            tags: ["React", "Tailwind CSS", "Framer Motion"],
            image: "https://placehold.co/600x400/1e293b/64ffda?text=Portfolio"
        },
        {
            title: "Dota 2 Stats Tracker",
            description: "A full-stack application to track and analyze Dota 2 matches. Uses verify-able OpenDota API data to provide detailed insights into match performance.",
            tags: ["Node.js", "Express", "React", "OpenDota API"],
            image: "https://placehold.co/600x400/1e293b/64ffda?text=Dota+Stats"
        },
        {
            title: "Home NAS Server with Dashboard",
            description: "Centralized home NAS server with media automation. Features include a Pi-hole DNS sinkhole, Usenet-to-Plex pipeline, and Immich for decentralized image hosting.",
            tags: ["CasaOS", "Raspberry Pi", "Linux", "NAS", "Media/Image Server"],
            image: "https://placehold.co/600x400/1e293b/64ffda?text=Dashboard"
        },
        {
            title: "Smart Mirror",
            description: "A DIY magic mirror built with a Raspberry Pi and a two-way mirror. Displays weather, calendar, and news updates.",
            tags: ["JavaScript", "Electron", "IoT"],
            image: "https://placehold.co/600x400/1e293b/64ffda?text=Smart+Mirror"
        },
        {
            title: "Fitness Tracker API",
            description: "A RESTful API for tracking workouts and nutrition. Built with Node.js and MongoDB, featuring authentication and data visualization endpoints.",
            tags: ["Node.js", "MongoDB", "Express", "JWT"],
            image: "https://placehold.co/600x400/1e293b/64ffda?text=Fitness+API"
        },
        {
            title: "Weather Dashboard",
            description: "A weather dashboard application that displays current weather and 5-day forecast for any city using the OpenWeatherMap API.",
            tags: ["React", "API", "CSS"],
            image: "https://placehold.co/600x400/1e293b/64ffda?text=Weather"
        }
    ];

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = direction === 'left' ? -400 : 400;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section
            id={id}
            ref={ref}
            className="relative h-[calc(100vh-4rem)] w-full flex flex-col items-center justify-center snap-start bg-transparent text-white overflow-hidden py-10"
        >
            {/* Header Background Title (Absolute) */}
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.2, duration: 1.0 }}
                    className="w-full max-w-7xl px-4 flex flex-col gap-6 relative"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-portfolio-accent mb-2 text-center">Featured Projects</h2>

                    {/* Carousel Container */}
                    <div className="relative group">
                        {/* Scroll Buttons - Visible on Desktop */}
                        <button
                            onClick={() => scroll('left')}
                            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 items-center justify-center rounded-full bg-dark-base/80 border border-portfolio-accent/30 text-portfolio-accent hover:bg-portfolio-accent hover:text-dark-base transition-all duration-300 opacity-0 group-hover:opacity-100"
                        >
                            <FaChevronLeft size={20} />
                        </button>

                        <button
                            onClick={() => scroll('right')}
                            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 items-center justify-center rounded-full bg-dark-base/80 border border-portfolio-accent/30 text-portfolio-accent hover:bg-portfolio-accent hover:text-dark-base transition-all duration-300 opacity-0 group-hover:opacity-100"
                        >
                            <FaChevronRight size={20} />
                        </button>

                        {/* Scrolling Area */}
                        <div
                            ref={scrollContainerRef}
                            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 no-scrollbar px-2 md:px-4"
                        >
                            {projects.map((project, index) => (
                                <div
                                    key={index}
                                    className="snap-center shrink-0 w-[85vw] sm:w-[500px] md:w-[450px] lg:w-[400px] h-full"
                                >
                                    <div className="h-full">
                                        <ProjectCard {...project} />
                                    </div>
                                </div>
                            ))}
                            {/* Spacer to allow scrolling the last item fully into view if needed */}
                            <div className="shrink-0 w-4 md:w-8" />
                        </div>
                    </div>
                </motion.div>
            )}
        </section>
    );
};

export default ProjectsSection;
