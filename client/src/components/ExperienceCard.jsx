import React from "react";

const ExperienceCard = ({ title, company, duration, logo, className = "" }) => {
    return (
        <div
            className={[
                // outer card: same size across a row, but capped so it never gets huge
                "bg-dark-base/40 backdrop-blur-sm bg-opacity-60 rounded-lg shadow-sm shadow-slate-300/60 overflow-hidden",
                "aspect-[4/5] w-full sm:max-w-md md:max-w-[16rem]", // cap width responsively
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
                <div className="h-full w-full pt-2 px-4 flex flex-col items-center gap-1">
                    <div className="text-xs pt-2 font-medium text-portfolio-accent">
                        {duration}
                    </div>
                    <h3 className="text-base text-white font-bold mb-2 text-center">
                        {company}
                    </h3>
                    <p className="text-sm pt-2 font-normal text-white text-center line-clamp-3">
                        {title}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;