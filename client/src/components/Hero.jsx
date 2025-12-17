import React from "react";
import { Element } from "react-scroll";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import Background from "./Background";

const Hero = () => {
  return (
    <div id="scrollRoot" className="h-[calc(100vh-4rem)] snap-y overflow-y-scroll snap-mandatory overscroll-contain relative">
      <Background />
      <Element name="start">
        <HomeSection id="start" />
      </Element>

      <Element name="about">
        <AboutSection id="about" />
      </Element>

      <Element name="experience">
        <ExperienceSection id="experience" />
      </Element>

      <Element name="projects">
        <ProjectsSection id="projects" />
      </Element>

      <Element name="contact">
        <ContactSection id="contact" />
      </Element>
    </div>
  );
};

export default Hero;