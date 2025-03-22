
import React from "react";
import { X } from "lucide-react";

interface VideoUploaderProps {
  index: number;
  onUpload: (index: number, file: File) => void;
  onCancel: () => void;
}

const VideoUploader: React.FC<VideoUploaderProps> = ({ 
  index, 
  onUpload, 
  onCancel 
}) => {
  return (
    <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4">
      <label className="cursor-pointer bg-primary text-white py-2 px-4 rounded-full hover:bg-primary/80 transition-all mb-3">
        <span>Upload Video</span>
        <input
          type="file"
          accept="video/*"
          className="hidden"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              onUpload(index, e.target.files[0]);
            }
          }}
        />
      </label>
      <p className="text-white text-sm text-center">Upload your own video</p>
      <button 
        onClick={onCancel}
        className="absolute top-4 right-4 bg-red-500/80 text-white p-2 rounded-full hover:bg-red-600"
      >
        <X size={20} />
      </button>
    </div>
  );
};

export default VideoUploader;
