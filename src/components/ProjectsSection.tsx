
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Play, Pause, Upload, X } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

// Sample projects data 
const initialProjects = [{
  title: "Brand Commercial",
  description: "Cinematic product showcase with dynamic transitions and color grading",
  image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop",
  category: "Commercial",
  videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" // Sample video URL
}, {
  title: "Music Video Edit",
  description: "Rhythmic cuts and visual effects synchronized with beat patterns",
  image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop",
  category: "Music",
  videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" // Sample video URL
}, {
  title: "Documentary Short",
  description: "Narrative-driven editing with seamless interview integration",
  image: "https://images.unsplash.com/photo-1575318632721-f98d5f7825ff?q=80&w=2070&auto=format&fit=crop",
  category: "Documentary"
}];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [projects, setProjects] = useState(initialProjects);
  const { toast } = useToast();
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

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

  // Handle video upload
  const handleVideoUpload = (index: number, file: File) => {
    if (file) {
      // Check if file is a video
      if (!file.type.startsWith('video/')) {
        toast({
          title: "Invalid file",
          description: "Please upload a video file",
          variant: "destructive"
        });
        return;
      }

      // Create a URL for the uploaded video
      const videoUrl = URL.createObjectURL(file);
      
      // Update the project with the new video URL
      setProjects(prev => {
        const newProjects = [...prev];
        newProjects[index] = {
          ...newProjects[index],
          videoUrl,
          customVideo: true,
          fileName: file.name
        };
        return newProjects;
      });
      
      toast({
        title: "Video uploaded",
        description: `${file.name} has been added to the project`,
      });
      
      // Close edit mode
      setEditingIndex(null);
    }
  };

  // Remove a video
  const removeVideo = (index: number) => {
    setProjects(prev => {
      const newProjects = [...prev];
      const { videoUrl, ...rest } = newProjects[index];
      newProjects[index] = rest;
      return newProjects;
    });
    
    toast({
      title: "Video removed",
      description: "The video has been removed from the project"
    });
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className="py-20 px-6 relative z-10 stagger-animate opacity-0 translate-y-10 transition-all duration-1000"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">Some Of My Projects</h2>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="project-card glass-card overflow-hidden opacity-0" 
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                  loading="lazy" 
                />
                <div className="absolute top-4 left-4 bg-glass-white backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>

                {/* Edit Video Button */}
                {(project.title === "Brand Commercial" || project.title === "Music Video Edit") && (
                  <div className="absolute top-4 right-4">
                    {editingIndex === index ? (
                      <button 
                        onClick={() => setEditingIndex(null)}
                        className="bg-red-500/80 text-white p-2 rounded-full hover:bg-red-600"
                      >
                        <X size={20} />
                      </button>
                    ) : (
                      <button 
                        onClick={() => setEditingIndex(index)}
                        className="bg-gray-800/80 text-white p-2 rounded-full hover:bg-gray-900"
                      >
                        <Upload size={20} />
                      </button>
                    )}
                  </div>
                )}

                {/* Video Upload UI */}
                {editingIndex === index && (
                  <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4">
                    <label className="cursor-pointer bg-primary text-white py-2 px-4 rounded-full hover:bg-primary/80 transition-all mb-3">
                      <span>Upload Video</span>
                      <input
                        type="file"
                        accept="video/*"
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            handleVideoUpload(index, e.target.files[0]);
                          }
                        }}
                      />
                    </label>
                    <p className="text-white text-sm text-center">Upload your own video for {project.title}</p>
                  </div>
                )}
                
                {/* Play Video Button */}
                {project.videoUrl && !editingIndex && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="absolute bottom-4 right-4 bg-soft-black/80 text-white p-2 rounded-full hover:bg-soft-black">
                        <Play size={20} />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black">
                      <div className="relative aspect-video">
                        <video 
                          src={project.videoUrl} 
                          controls 
                          className="w-full h-full"
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      {project.customVideo && (
                        <div className="absolute top-4 left-4 bg-black/50 text-white py-1 px-3 rounded-full text-xs">
                          {project.fileName}
                        </div>
                      )}
                      {project.customVideo && (
                        <button 
                          onClick={() => removeVideo(index)}
                          className="absolute top-4 right-12 bg-red-500/80 text-white p-1.5 rounded-full hover:bg-red-600"
                        >
                          <X size={16} />
                        </button>
                      )}
                    </DialogContent>
                  </Dialog>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-soft-black/70 mb-4">{project.description}</p>
                <a href="#" className="inline-flex items-center text-soft-black font-medium hover:underline">
                  View Project <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center gap-2 bg-soft-black text-beige px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            View All Projects
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
