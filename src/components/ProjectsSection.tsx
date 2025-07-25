
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Project } from "@/types/project";
import ProjectCard from "./projects/ProjectCard";

// Sample projects data with the proper type
const initialProjects: Project[] = [{
  title: "Introduction",
  description: "Cinematic product showcase with dynamic transitions and color grading",
  image: "/lovable-uploads/5315b76b-6d54-4cf5-8e83-04d0ddc4f4cc.png",
  category: "Introductory Edit",
  youtubeUrl: "https://www.youtube.com/watch?v=yaCLx8WF0ko"
}, {
  title: "Did It First",
  description: "Rhythmic cuts and visual effects synchronized with beat patterns",
  image: "/lovable-uploads/9febc6f1-6ce0-4332-b4bc-d6944e91d79f.png",
  category: "Music",
  youtubeUrl: "https://youtu.be/UWEYAi8XGco"
}, {
  title: "Thank you - Tyler, The Creator",
  description: "Simple edit using mo-graphs for visual enhancement and rhythm",
  image: "/lovable-uploads/46d64ad7-262b-4762-84c3-8f1fd6cbc944.png",
  category: "Music",
  youtubeUrl: "https://youtu.be/WedPCaVlh2k"
}, {
  title: "Flashing Lights - Kanye West",
  description: "Just a random quick edit",
  image: "/lovable-uploads/521fc31b-2bad-4027-b784-748a0fe809f8.png",
  category: "Music",
  youtubeUrl: "https://youtu.be/TOMjTeYAuPU"
}];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [projects, setProjects] = useState<Project[]>(initialProjects);
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
      const { videoUrl, customVideo, fileName, ...rest } = newProjects[index];
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
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              editingIndex={editingIndex}
              setEditingIndex={setEditingIndex}
              onVideoUpload={handleVideoUpload}
              onRemoveVideo={removeVideo}
              delay={index * 150}
            />
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
