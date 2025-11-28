import React from "react";

const ExperienceCard = ({ title, company, duration, logo, className = "" }) => {
    return (
        <div
            className={[
                // outer card: same size across a row, but capped so it never gets huge
                "bg-dark-base/40 transition-transform duration-300 hover:scale-105 hover:-translate-y-1 backdrop-blur-sm bg-opacity-60 rounded-lg shadow-sm shadow-slate-300/60 overflow-hidden",
                "aspect-[4/6] w-full max-w-[8rem] sm:max-w-[12rem] md:max-w-[14rem] lg:max-w-[16rem] 2xl:max-w-[22rem]", // cap width responsively
                "flex flex-col", // center inside grid cell
                className,
            ].join(" ")}
        >
            {/* TOP half (exact 50% height) */}
            <div className="basis-1/2 shrink-0 overflow-hidden bg-white">
                {/* Put padding on an INNER wrapper so padding doesn't change the half's height */}
                <div className="h-full w-full p-6">
                    <img
                        src={logo}
                        alt={title}
                        className="h-full w-full object-contain object-center"
                    />
                </div>
            </div>

            {/* BOTTOM half (exact 50% height) */}
            <div className="basis-1/2 shrink-0">
                {/* Again, padding on an inner wrapper */}
                <div className="h-full w-full  px-4 flex flex-col items-center gap-1">
                    <div className="text-xs sm:text-base md:text-sm lg:text-xl  2xl:text-xl pt-2 font-medium text-portfolio-accent">
                        {duration}
                    </div>
                    <h3 className="text-xs sm:text-lg sm:mt-1 lg:text-xl 2xl:text-2xl 2xl:pt-4  text-white font-bold text-center">
                        {company}
                    </h3>
                    <p className="text-xs sm:text-base sm:mt-1 lg:text-xl 2xl:text-xl 2xl:pt-4 font<-normal text-slate-400 text-center line-clamp-3">
                        {title}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;