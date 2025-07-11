
import React, { useEffect } from "react";
import Hero from "../components/Hero";
import VideoTools from "../components/VideoTools";
import AchievementsSection from "../components/AchievementsSection";
import ProjectsSection from "../components/ProjectsSection";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  // Add staggered entry animations on page load
  useEffect(() => {
    const sections = document.querySelectorAll('.stagger-animate');
    
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add('opacity-100');
        section.classList.remove('opacity-0', 'translate-y-10');
      }, 300 * (index + 1));
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <VideoTools />
        <AchievementsSection />
        <ProjectsSection />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
