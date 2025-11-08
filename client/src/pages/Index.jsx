//Index.jsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import React from "react";


const Index = () => {
  return (

    <div className= "h-screen overflow-hidden flex flex-col">
      <Navbar />
      <Hero />
    </div>
  );
};


export default Index;
