import React from "react";
import { useState, useEffect } from 'react';
import { VscGithubAlt } from "react-icons/vsc";
import { SiAdobeacrobatreader } from "react-icons/si";

const Navbar = () => {
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <nav className= "flex flex-row items-center justify-between gap-2 bg-dark-base w-full transition-shadow duration-500  shadow-[#00ADB5]/20 hover:shadow-xl hover:shadow-[#00ADB5]/40 shadow-lg ">
      {/* Navbar content */}
 <h1 className="text-xs text-portfolio-accent font-bold p-4">Portfolio</h1>
      <div className="flex flex-row justify-between gap-4">
        <div className="flex flex-row  items-center">
        <span className="text-[0.55rem] text-portfolio-accent mr-1" >01. </span> 
        <span className="text-[0.5rem] font-bold text-accent-light hover:text-portfolio-accent transition-colors duration-300 underline-animation"> About</span>
        </div>
        <div className="flex flex-row items-center">
        <span className="text-[0.55rem] text-portfolio-accent mr-1" >02. </span> 
        <span className="text-[0.5rem] font-bold text-accent-light hover:text-portfolio-accent transition-colors duration-300 underline-animation"> Projects</span>
        </div>
        <div className="flex flex-row  items-center">
        <span className="text-[0.55rem] text-portfolio-accent mr-1" >03. </span> 
        <span className="text-[0.5rem] font-bold text-accent-light hover:text-portfolio-accent transition-colors duration-300 underline-animation"> Skills</span>
        </div>
      
      </div>
      <div className="flex flex-row  items-center">
      <div className="mr-5 logo-ring-animation">
   {/* Github Icon Animation */}
    <VscGithubAlt className= "hover:text-portfolio-accent transition-colors duration-300" />
   

      </div>

      </div>
    </nav>
  );


}

export default Navbar;