import React from "react";

const ExperienceCard = ({ title, company, duration, logo, className = "" }) => {
    return (
        <div
            className={[
                // 1. CONTAINER: Use w-full and min-w-0 to force it to fit the grid column
                "w-full min-w-0",
                "aspect-[4/6]", // Keep your vertical shape
                "bg-dark-base/40 transition-transform duration-300 hover:scale-105 hover:-translate-y-1 backdrop-blur-sm bg-opacity-60 rounded-lg shadow-sm shadow-slate-300/60 overflow-hidden",
                "flex flex-col",
                className,
            ].join(" ")}
        >
            {/* --- TOP HALF (Image) --- */}
            {/* On mobile, we reduce padding significantly so the logo is visible */}
            <div className="basis-1/2 shrink-0 overflow-hidden bg-white">
                <div className="h-full w-full p-2 md:p-4 lg:p-6">
                    <img
                        src={logo}
                        alt={title}
                        className="h-full w-full object-contain object-center"
                    />
                </div>
            </div>

            {/* --- BOTTOM HALF (Content) --- */}
            <div className="basis-1/2 shrink-0 flex flex-col items-center justify-center bg-transparent">
                <div className="w-full px-2 md:px-4 flex flex-col items-center gap-1">

                    {/* 1. DURATION: Hidden on tiny screens, Visible on Medium+ */}
                    <div className="hidden sm:block text-xs lg:text-base font-medium text-portfolio-accent text-center truncate w-full">
                        {duration}
                    </div>

                    {/* 2. COMPANY: Always visible, but scales aggressively */}
                    {/* text-[0.7rem] prevents it from breaking on 4-col mobile grids */}
                    <h3 className="text-[0.7rem] sm:text-sm md:text-base lg:text-xl text-white font-bold text-center w-full truncate">
                        {company}
                    </h3>

                    {/* 3. TITLE/DESC: Hidden on Small & Medium, Visible ONLY on Large */}
                    {/* This is usually the cause of the overflow. We hide it until the screen is big enough. */}
                    <p className="hidden xl:block text-sm text-slate-400 text-center line-clamp-2 mt-2">
                        {title}
                    </p>

                    {/* Mobile Only: A tiny visual indicator (like a dot) if you want */}
                    <div className="xl:hidden w-1 h-1 rounded-full bg-portfolio-accent/50 mt-1"></div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;