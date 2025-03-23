
import React from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Project } from "@/types/project";
import VideoPlayer from "./VideoPlayer";
import VideoUploader from "./VideoUploader";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

interface ProjectCardProps {
  project: Project;
  index: number;
  editingIndex: number | null;
  setEditingIndex: (index: number | null) => void;
  onVideoUpload: (index: number, file: File) => void;
  onRemoveVideo: (index: number) => void;
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  editingIndex,
  setEditingIndex,
  onVideoUpload,
  onRemoveVideo,
  delay
}) => {
  const isEditing = editingIndex === index;
  const hasVideo = project.videoUrl || project.youtubeUrl;

  return (
    <div 
      className="project-card glass-card overflow-hidden opacity-0" 
      style={{
        transitionDelay: `${delay}ms`
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

        {/* Video Upload UI - keeping for other project types that might use it */}
        {isEditing && (
          <VideoUploader 
            index={index}
            onUpload={onVideoUpload}
            onCancel={() => setEditingIndex(null)}
          />
        )}
        
        {/* Play Video Button */}
        {hasVideo && !isEditing && (
          <VideoPlayer 
            project={project}
            index={index}
            onRemoveVideo={onRemoveVideo}
          />
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-soft-black/70 mb-4">{project.description}</p>
        
        {hasVideo ? (
          <Dialog>
            <DialogTrigger asChild>
              <button className="inline-flex items-center text-soft-black font-medium hover:underline">
                View Project <ArrowRight size={16} className="ml-1" />
              </button>
            </DialogTrigger>
            {/* The VideoPlayer component will render the DialogContent */}
            <VideoPlayer 
              project={project}
              index={index}
              onRemoveVideo={onRemoveVideo}
              isViewProject={true}
            />
          </Dialog>
        ) : (
          <button 
            className="inline-flex items-center text-soft-black font-medium hover:underline"
            onClick={() => setEditingIndex(index)}
          >
            Add Video <ArrowRight size={16} className="ml-1" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
