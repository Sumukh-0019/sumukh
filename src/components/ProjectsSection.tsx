import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

// Sample projects data
const projects = [{
  title: "Brand Commercial",
  description: "Cinematic product showcase with dynamic transitions and color grading",
  image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop",
  category: "Commercial"
}, {
  title: "Music Video Edit",
  description: "Rhythmic cuts and visual effects synchronized with beat patterns",
  image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop",
  category: "Music"
}, {
  title: "Documentary Short",
  description: "Narrative-driven editing with seamless interview integration",
  image: "https://images.unsplash.com/photo-1575318632721-f98d5f7825ff?q=80&w=2070&auto=format&fit=crop",
  category: "Documentary"
}];
const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-right");
          entry.target.classList.remove("opacity-0");
        }
      });
    }, {
      threshold: 0.1
    });
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach(card => observer.observe(card));
    return () => {
      projectCards.forEach(card => observer.unobserve(card));
    };
  }, []);
  return <section id="projects" ref={sectionRef} className="py-20 px-6 relative z-10 stagger-animate opacity-0 translate-y-10 transition-all duration-1000">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">Some Of My Projects</h2>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <div key={project.title} className="project-card glass-card overflow-hidden opacity-0" style={{
          transitionDelay: `${index * 150}ms`
        }}>
              <div className="relative h-60 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" loading="lazy" />
                <div className="absolute top-4 left-4 bg-glass-white backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-soft-black/70 mb-4">{project.description}</p>
                <a href="#" className="inline-flex items-center text-soft-black font-medium hover:underline">
                  View Project <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>)}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center gap-2 bg-soft-black text-beige px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            View All Projects
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>;
};
export default ProjectsSection;