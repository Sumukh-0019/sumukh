
import React from "react";
import { Linkedin, Mail, Send } from "lucide-react";

const Contact = () => {
  return (
    <section 
      id="contact" 
      className="py-20 px-6 relative z-10 stagger-animate opacity-0 translate-y-10 transition-all duration-1000"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="glass-panel p-8 md:p-12">
          <p className="text-xl text-soft-black/80 mb-8 animate-fade-in">
            Ready to collaborate on your next video project? Connect with me through any of these platforms.
          </p>
          
          <div className="flex justify-center space-x-6 mb-10">
            <a 
              href="https://t.me/sumukh_awasthi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon group"
              aria-label="Telegram"
            >
              <Send 
                size={24} 
                className="text-soft-black/70 group-hover:text-soft-black transition-colors duration-300" 
              />
            </a>
            
            <a 
              href="mailto:sumukhawasthi3456@gmail.com" 
              className="social-icon group"
              aria-label="Email"
            >
              <Mail 
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
          
          <div className="flex flex-col md:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <input 
              type="email" 
              placeholder="Your email" 
              className="flex-1 px-5 py-3 rounded-full bg-glass-white backdrop-blur-sm border border-glass-border focus:outline-none focus:ring-2 focus:ring-soft-black/20"
            />
            <button className="bg-soft-black text-beige px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
