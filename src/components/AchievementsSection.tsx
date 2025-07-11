
import React, { useEffect, useRef } from "react";
import { Award, Trophy, Medal } from "lucide-react";

const AchievementsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    const certificateCards = document.querySelectorAll(".certificate-card");
    certificateCards.forEach((card) => observer.observe(card));

    return () => {
      certificateCards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const deeplearnCertificates = [
    {
      title: "Large Multimodal Model Prompting with Gemini",
      image: "/lovable-uploads/4cf208ae-872e-4b54-9cd6-6a9993e0d3d4.png"
    },
    {
      title: "Prompt Engineering for Vision Models",
      image: "/lovable-uploads/d48d5db9-4250-4275-8609-1c20a9fad0c7.png"
    },
    {
      title: "Build Rich-Context AI Apps with Anthropic",
      image: "/lovable-uploads/6038fa1f-57d9-48e7-b429-e86dae1e7507.png"
    },
    {
      title: "Getting Structured LLM Output",
      image: "/lovable-uploads/6e8e3e37-04cb-4c17-9c36-16ff9b2412bf.png"
    }
  ];

  const deloitteCertificates = [
    {
      title: "Cyber Job Simulation",
      image: "/lovable-uploads/5acdbdc3-a3e0-4b5e-83e7-c98f23bf56c3.png"
    },
    {
      title: "Technology Job Simulation",
      image: "/lovable-uploads/4ca3a114-aafb-4535-b267-196e140f51f9.png"
    }
  ];

  const googleCertificates = [
    {
      title: "Exploring Data Transformation with Google Cloud",
      image: "/lovable-uploads/d7309395-0060-4add-a54e-c54d315efc27.png"
    },
    {
      title: "Scaling with Google Cloud Operations",
      image: "/lovable-uploads/56ac61e6-2ab9-4b22-817c-3460e3e49346.png"
    }
  ];

  const CertificateGrid = ({ certificates, delay = 0 }: { certificates: any[], delay?: number }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {certificates.map((cert, index) => (
        <div
          key={cert.title}
          className="certificate-card opacity-0 glass-card p-4 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
          style={{ transitionDelay: `${delay + index * 100}ms` }}
        >
          <div className="aspect-video w-full mb-4 overflow-hidden rounded-lg">
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <h4 className="text-sm font-medium text-center text-soft-black/80">
            {cert.title}
          </h4>
        </div>
      ))}
    </div>
  );

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="py-20 px-6 relative z-10 stagger-animate opacity-0 translate-y-10 transition-all duration-1000"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">My Achievements</h2>
        
        {/* DeepLearn AI Certificates */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Award className="w-6 h-6 text-soft-black/70" />
            <h3 className="text-2xl md:text-3xl font-semibold text-center">
              DeepLearn AI Certificates
            </h3>
          </div>
          <CertificateGrid certificates={deeplearnCertificates} delay={0} />
        </div>

        {/* Deloitte Certificates */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Trophy className="w-6 h-6 text-soft-black/70" />
            <h3 className="text-2xl md:text-3xl font-semibold text-center">
              Deloitte Certificates
            </h3>
          </div>
          <CertificateGrid certificates={deloitteCertificates} delay={400} />
        </div>

        {/* Google Certificates */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Medal className="w-6 h-6 text-soft-black/70" />
            <h3 className="text-2xl md:text-3xl font-semibold text-center">
              Google Certificates
            </h3>
          </div>
          <CertificateGrid certificates={googleCertificates} delay={600} />
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
