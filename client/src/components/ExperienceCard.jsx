import React from "react";

const ExperienceCard = ({ title, company, duration, logo }) => {
    return (
        <div className="group relative w-full h-full flex flex-col rounded-xl overflow-hidden ring-1 ring-white/10 bg-dark-base/40 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-portfolio-accent/20 hover:ring-portfolio-accent/50">
            {/* --- Logo Section --- */}
            {/* A premium light container for the logo to ensure it pops, with a subtle gradient */}
            <div className="relative h-48 sm:h-40 md:h-48 w-full bg-gradient-to-br from-slate-50 to-slate-200 flex items-center justify-center p-6 overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate-500/[0.05] [mask-image:linear-gradient(0deg,white,transparent)]" />
                <img
                    src={logo}
                    alt={`${company} logo`}
                    className="relative z-10 w-full h-full object-contain filter transition-transform duration-500 group-hover:scale-110 drop-shadow-sm"
                />

                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shine" />
                </div>
            </div>

            {/* --- Content Section --- */}
            <div className="flex-1 flex flex-col items-center justify-between p-5 bg-gradient-to-b from-white/5 to-transparent text-center border-t border-white/5">
                <div className="w-full flex flex-col gap-1 items-center">
                    <h3 className="text-lg sm:text-lg md:text-xl font-bold text-white tracking-wide group-hover:text-portfolio-accent transition-colors duration-300">
                        {company}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-portfolio-accent uppercase tracking-wider">
                        {title}
                    </p>
                </div>

                <div className="mt-4 pt-4 w-full border-t border-white/10 flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-xs text-slate-300 font-medium group-hover:bg-portfolio-accent/10 group-hover:text-portfolio-accent transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {duration}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;