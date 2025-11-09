import React from 'react';

const ExperienceCard = ({ title, company, duration, logo }) => {
    return (
        <div className="bg-zinc-800  rounded-lg shadow-sm shadow-slate-300/60 overflow-hidden 
        aspect-[4/5] flex flex-col w-60  ">
            {/* Top half */}
            <div className="bg-white h-1/2 px-10 w-full overflow-hidden">
                <img
                    src={logo}
                    alt={title}
                    className="w-full h-full object-scale-down "
                />
            </div>
            {/* Bottom half */}
            <div className="h-1/2 pt-2 px-4 flex gap-1 items-center flex-col">
                <div className="text-xs pt-2 font-medium text- text-portfolio-accent">{duration}</div>
                <h3 className="text-base text-white font-bold mb-2">{company}</h3>
                <p className="text-sm pt-4 font-normal text-white line-clamp-3">{title}</p>

            </div>
        </div>
    );
};

export default ExperienceCard;