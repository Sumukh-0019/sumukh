
import React, { useEffect, useRef } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

// Tools data with logos and descriptions
const tools = [
  {
    name: "After Effects",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/2101px-Adobe_After_Effects_CC_icon.svg.png",
    description: "Motion graphics and visual effects"
  },
  {
    name: "Premiere Pro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/2101px-Adobe_Premiere_Pro_CC_icon.svg.png",
    description: "Video editing and production"
  },
  {
    name: "DaVinci Resolve",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/DaVinci_Resolve_17_logo.svg/1200px-DaVinci_Resolve_17_logo.svg.png",
    description: "Color grading and editing"
  },
  {
    name: "Final Cut Pro",
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9f/2015_Final_Cut_Pro_Logo.png",
    description: "Professional video editing for Mac"
  }
];

const VideoTools = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollAnimation();

  return (
    <section 
      id="tools" 
      ref={sectionRef} 
      className="py-20 px-6 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="scroll-animate section-title text-center">Tools That I Use</h2>
        
        <div className="scroll-stagger mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {tools.map((tool, index) => (
            <div 
              key={tool.name} 
              className="tool-card"
            >
              <div className="w-20 h-20 mb-6 relative">
                <div className="absolute inset-0 bg-gray-100 rounded-full opacity-20"></div>
                <img 
                  src={tool.logo} 
                  alt={`${tool.name} logo`} 
                  className="w-full h-full object-contain relative z-10" 
                  loading="lazy" 
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
              <p className="text-soft-black/70 text-center">{tool.description}</p>
            </div>
          ))}
        </div>
        
        <div className="scroll-animate mt-20 glass-panel p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 animate-text-reveal">
            How I Work
          </h3>
          <p className="text-lg text-soft-black/80 leading-relaxed">
            I'm a video editor who works on demand but often make edits to be more efficient, specializing in motion graphics. With a strong passion for creating dynamic visuals, I focus on making each edit as polished and engaging as possible. Whether it's animations, transitions, or effects, I continuously refine my work to ensure the highest quality. If you're looking for smooth, professional motion graphics edits, I've got you covered!
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoTools;
