
import React from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Project } from "@/types/project";

interface VideoPlayerProps {
  project: Project;
  index: number;
  onRemoveVideo: (index: number) => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ project, index, onRemoveVideo }) => {
  if (!project.videoUrl) return null;

  return (
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
        {project.customVideo && project.fileName && (
          <div className="absolute top-4 left-4 bg-black/50 text-white py-1 px-3 rounded-full text-xs">
            {project.fileName}
          </div>
        )}
        {project.customVideo && (
          <button 
            onClick={() => onRemoveVideo(index)}
            className="absolute top-4 right-12 bg-red-500/80 text-white p-1.5 rounded-full hover:bg-red-600"
          >
            <X size={16} />
          </button>
        )}
      </DialogContent>
    </Dialog>
  );
};

// Need to import Play icon
import { Play } from "lucide-react";

export default VideoPlayer;
