import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
    return (
        <div className="fixed inset-0 z-[-1] bg-dark-base overflow-hidden">
            {/* Ambient Light 1 - Top Left - Cyan/Teal */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-portfolio-accent/20 blur-[120px]"
            />

            {/* Ambient Light 2 - Bottom Right - Blue/Purple */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute -bottom-[10%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-blue-600/20 blur-[140px]"
            />

            {/* Ambient Light 3 - Center/Random - Subtle */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-purple-500/10 blur-[100px]"
            />

            {/* Grid Pattern Overlay (Optional, adds texture) */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
        </div>
    );
};

export default Background;
