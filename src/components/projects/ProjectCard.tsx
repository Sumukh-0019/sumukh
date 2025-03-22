
import React from "react";
import { ArrowRight, Upload } from "lucide-react";
import { Project } from "@/types/project";
import VideoPlayer from "./VideoPlayer";
import VideoUploader from "./VideoUploader";

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
  const canUploadVideo = project.title === "Brand Commercial" || project.title === "Music Video Edit";

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

        {/* Edit Video Button */}
        {canUploadVideo && (
          <div className="absolute top-4 right-4">
            {isEditing ? (
              <></>
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
        {isEditing && (
          <VideoUploader 
            index={index}
            onUpload={onVideoUpload}
            onCancel={() => setEditingIndex(null)}
          />
        )}
        
        {/* Play Video Button */}
        {project.videoUrl && !isEditing && (
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
        <a href="#" className="inline-flex items-center text-soft-black font-medium hover:underline">
          View Project <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
