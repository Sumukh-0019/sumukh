
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6",
          isScrolled ? "bg-glass-white backdrop-blur-lg shadow-sm" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-semibold tracking-tight">
            Sumukh
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="nav-link">Home</a>
            <a href="#tools" className="nav-link">Tools</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="p-2 md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
      
      {/* Mobile navigation */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-glass-white backdrop-blur-xl transform transition-transform duration-500 md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
          <a 
            href="#home" 
            className="hover:text-soft-black/70 transition-colors" 
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="#tools" 
            className="hover:text-soft-black/70 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Tools
          </a>
          <a 
            href="#projects" 
            className="hover:text-soft-black/70 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="hover:text-soft-black/70 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
