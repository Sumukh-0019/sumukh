
import React, { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Text animation effect
  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;
    const chars = title.textContent!.split("");
    title.textContent = "";
    chars.forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.opacity = "0";
      span.style.transform = "translateY(20px)";
      span.style.display = char === " " ? "inline" : "inline-block";
      span.style.transition = `opacity 0.6s ease-out ${index * 0.03}s, transform 0.6s ease-out ${index * 0.03}s`;
      setTimeout(() => {
        span.style.opacity = "1";
        span.style.transform = "translateY(0)";
      }, 100);
      title.appendChild(span);
    });
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-6"
    >
      <div className="absolute inset-0 z-0 animated-gradient">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-pink-100/40 filter blur-3xl animate-float"></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-100/40 filter blur-3xl animate-float" 
          style={{
            animationDelay: "1s"
          }}
        ></div>
        <div 
          className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-yellow-100/40 filter blur-3xl animate-float" 
          style={{
            animationDelay: "2s"
          }}
        ></div>
      </div>
      
      <div className="glass-panel max-w-5xl mx-auto p-12 md:p-16 relative z-10 stagger-animate opacity-0 translate-y-10 transition-all duration-1000">
        <div className="text-center">
          <h1 ref={titleRef} className="hero-title mb-6">
            Sumukh's Portfolio
          </h1>
          <p 
            style={{
              animationDelay: "0.5s"
            }} 
            className="text-xl md:text-2xl text-soft-black/80 max-w-3xl mx-auto mb-10 animate-fade-in font-semibold"
          >
            EDITOR MORE THAN AN AVERAGE, LESS THAN A PRO, BUT JUST PEFECT FOR YOU :)
          </p>
          
          <a 
            href="#tools" 
            className="inline-flex items-center gap-2 bg-soft-black text-beige px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in" 
            style={{
              animationDelay: "0.8s"
            }}
          >
            Explore My Work
            <ArrowDown size={18} className="animate-bounce mt-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
