
import React, { useEffect } from "react";
import Hero from "../components/Hero";
import VideoTools from "../components/VideoTools";
import ProjectsSection from "../components/ProjectsSection";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <VideoTools />
        <div className="scroll-animate">
          <ProjectsSection />
        </div>
        <div className="scroll-animate">
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
