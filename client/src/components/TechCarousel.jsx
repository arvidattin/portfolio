import React from "react";
import { motion } from "framer-motion";
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiPython,
    SiCplusplus,
    SiHtml5,
    SiCss3,
    SiGit,
    SiDocker,
    SiNodedotjs,
    SiPostgresql,
    SiMongodb,
    SiTailwindcss,
    SiNextdotjs,

    SiRaspberrypi,
    SiSwift
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const technologies = [
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Java", icon: FaJava, color: "#007396" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },

    { name: "Raspberry Pi", icon: SiRaspberrypi, color: "#C51A4A" },
    { name: "Swift", icon: SiSwift, color: "#F05138" },
    { name: "Git", icon: SiGit, color: "#F05032" },
];

const TechCarousel = () => {
    return (
        <div className="w-full overflow-hidden relative flex items-center py-4 mask-gradient">
            {/* Gradient masks for smooth fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-transparent to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-transparent to-transparent pointer-events-none" />

            <motion.div
                className="flex gap-8 sm:gap-12 md:gap-16 flex-nowrap"
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 70, // Adjust speed here
                        ease: "linear",
                    },
                }}
                style={{ width: "max-content" }}
            >
                {/* Duplicate the list to ensure seamless looping */}
                {[...technologies, ...technologies].map((tech, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center gap-2 min-w-[4rem] sm:min-w-[5rem] group"
                    >
                        <tech.icon
                            className="text-4xl sm:text-5xl transition-transform duration-300 group-hover:scale-110"
                            style={{ color: tech.color }} // Use brand color or override with theme
                        />
                        <span className="text-xs sm:text-sm text-gray-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-6 whitespace-nowrap">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default TechCarousel;
