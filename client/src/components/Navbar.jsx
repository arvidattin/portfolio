import React, { useState, useEffect } from "react";
import { VscGithubAlt } from "react-icons/vsc";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      const scrollContainer = document.getElementById("scrollRoot");
      if (!scrollContainer) return;

      const scrollTop = scrollContainer.scrollTop;
      const isAtTop = scrollTop < 50;

      setIsScrolled(!isAtTop);

      // If at top, always transparent
      if (isAtTop) {
        setIsTransparent(true);
        clearTimeout(timeoutId);
      } else {
        // If scrolled, become opaque/blurred immediately
        setIsTransparent(false);

        // Reset timer to become transparent again after inactivity
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setIsTransparent(true);
        }, 2000); // 2 seconds of inactivity
      }
    };

    const scrollContainer = document.getElementById("scrollRoot");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 h-14
        flex items-center w-full justify-between gap-2 px-4 py-2
        transition-all duration-700
        ${!isTransparent ? "bg-dark-base/80 backdrop-blur-md shadow-lg" : "bg-transparent"}
       `}
    >
      <button onClick={() => smoothScrollTo("start", 1000)}
        className="text-2xl text-portfolio-accent font-bold p-2"> Portfolio </button>

      <div className="flex flex-row  justify-between gap-10 pt-2 ">
        <div className="hidden md:block flex items-center">
          <span className=" text-sm text-portfolio-accent mr-1">01.</span>
          <button
            onClick={() => smoothScrollTo("about", 1000)}
            className="text-sm font-bold  text-white hover:text-portfolio-accent transition-colors duration-300 underline-animation"
          >
            About
          </button>
        </div>
        <div className="hidden md:block flex items-center">
          <span className=" text-sm text-portfolio-accent mr-1">02.</span>
          <button
            onClick={() => smoothScrollTo("experience", 1000)}
            className="text-sm font-bold  text-white hover:text-portfolio-accent transition-colors duration-300 underline-animation"
          >
            Experience
          </button>
        </div>
        <div className="hidden md:block flex items-center">
          <span className=" text-sm text-portfolio-accent mr-1">03.</span>
          <button
            onClick={() => smoothScrollTo("projects", 1000)}
            className="text-sm font-bold  text-white hover:text-portfolio-accent transition-colors duration-300 underline-animation"
          >
            Projects
          </button>
        </div>
      </div>

      <div className="flex flex-row items-center">
        <div className="mr-5 logo-ring-animation">
          <VscGithubAlt className="text-xl hover:text-portfolio-accent transition-colors duration-300" />
        </div>
      </div>
    </nav>
  );
};


function smoothScrollTo(id, duration = 1000) {
  const container = document.getElementById("scrollRoot");
  const target = document.getElementById(id);
  if (!container || !target) return;

  const top =
    target.getBoundingClientRect().top -
    container.getBoundingClientRect().top +
    container.scrollTop;

  container.classList.add("snap-none");

  container.scrollTo({ top, behavior: "smooth" });

  window.clearTimeout(smoothScrollTo._t);
  smoothScrollTo._t = window.setTimeout(() => {
    container.classList.remove("snap-none");
  }, duration + 100);
}


export default Navbar;