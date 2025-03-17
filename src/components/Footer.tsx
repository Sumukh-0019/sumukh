
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 px-6 relative z-10">
      <div className="max-w-7xl mx-auto border-t border-glass-border pt-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold">Sumukh</h2>
            <p className="text-soft-black/70 mt-1">Video Editor & Motion Designer</p>
          </div>
          
          <nav className="flex space-x-6">
            <a href="#home" className="text-soft-black/70 hover:text-soft-black transition-colors">Home</a>
            <a href="#tools" className="text-soft-black/70 hover:text-soft-black transition-colors">Tools</a>
            <a href="#projects" className="text-soft-black/70 hover:text-soft-black transition-colors">Projects</a>
            <a href="#contact" className="text-soft-black/70 hover:text-soft-black transition-colors">Contact</a>
          </nav>
        </div>
        
        <div className="mt-10 text-center text-soft-black/60 text-sm">
          <p>&copy; {currentYear} Sumukh's Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
