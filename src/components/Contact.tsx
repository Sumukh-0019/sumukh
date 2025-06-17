
import React from "react";
import { Youtube, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section 
      id="contact" 
      className="py-20 px-6 relative z-10 scroll-animate"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="glass-panel p-8 md:p-12">
          <p className="text-xl text-soft-black/80 mb-8">
            Ready to collaborate on your next video project? Connect with me through any of these platforms.
          </p>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.youtube.com/@EditWithSumukh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon group"
              aria-label="YouTube"
            >
              <Youtube 
                size={24} 
                className="text-soft-black/70 group-hover:text-soft-black transition-colors duration-300" 
              />
            </a>
            
            <a 
              href="https://www.instagram.com/sumukh_0019/profilecard/?igsh=MTVuZmtvMGpkajdhZg%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon group"
              aria-label="Instagram"
            >
              <Instagram 
                size={24} 
                className="text-soft-black/70 group-hover:text-soft-black transition-colors duration-300" 
              />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/sumukh-awasthi-11b773334" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon group"
              aria-label="LinkedIn"
            >
              <Linkedin 
                size={24} 
                className="text-soft-black/70 group-hover:text-soft-black transition-colors duration-300" 
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
