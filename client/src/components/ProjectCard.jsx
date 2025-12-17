import React from "react";

const ProjectCard = ({ title, description, tags, image, className = "" }) => {
    return (
        <div className={`group relative w-full h-full flex flex-col rounded-xl overflow-hidden ring-1 ring-white/10 bg-dark-base/40 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-portfolio-accent/20 hover:ring-portfolio-accent/50 ${className}`}>
            {/* --- Image Section --- */}
            <div className="relative h-48 w-full overflow-hidden bg-slate-800">
                {/* Placeholder or Actual Image */}
                {image ? (
                    <img
                        src={image}
                        alt={`${title} preview`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-700/50">
                        <span className="text-slate-500 text-sm">No Preview</span>
                    </div>
                )}


                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-base/90 to-transparent opacity-60" />

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />
                </div>
            </div>

            {/* --- Content Section --- */}
            <div className="flex-1 flex flex-col p-5 border-t border-white/5">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-portfolio-accent transition-colors duration-300">
                    {title}
                </h3>

                <p className="text-sm text-slate-300 mb-4 line-clamp-3">
                    {description}
                </p>

                {/* Tags */}
                <div className="mt-auto flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="text-[0.65rem] uppercase tracking-wider font-semibold px-2 py-1 rounded bg-white/5 text-portfolio-accent border border-white/5"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
