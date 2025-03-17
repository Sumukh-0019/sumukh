
import React, { useEffect, useRef } from "react";

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
    name: "Alight Motion",
    logo: "https://play-lh.googleusercontent.com/QHFG0ufXC_l3kk8-7aSqi5RSRFbV54ZJZzkEKBiZ5sCKrw60E-WNa3vI7CSGWNdKz_I=w240-h480-rw",
    description: "Mobile motion graphics and effects"
  }
];

const VideoTools = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const toolCards = document.querySelectorAll(".tool-card");
    toolCards.forEach((card) => observer.observe(card));
    
    return () => {
      toolCards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section 
      id="tools" 
      ref={sectionRef}
      className="py-20 px-6 relative z-10 stagger-animate opacity-0 translate-y-10 transition-all duration-1000"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">Video Editing Tools</h2>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {tools.map((tool, index) => (
            <div 
              key={tool.name}
              className="tool-card opacity-0"
              style={{ transitionDelay: `${index * 150}ms` }}
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
        
        <div className="mt-20 glass-panel p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 animate-text-reveal">My Editing Approach</h3>
          <p className="text-lg text-soft-black/80 leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
            I blend technical precision with creative storytelling to deliver video content that captures attention and communicates effectively. From color grading to motion graphics, my goal is to enhance your message through thoughtful, purposeful editing that elevates your vision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoTools;
