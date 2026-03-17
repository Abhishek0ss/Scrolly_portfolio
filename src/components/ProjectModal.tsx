import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ProjectModalProps {
  projectId: string | null;
  onClose: () => void;
  onSelectProject?: (id: string | null) => void;
}

export function ProjectModal({ projectId, onClose, onSelectProject }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  const projectIndex = PROJECTS.findIndex((p) => p.id === projectId);
  const project = projectIndex >= 0 ? PROJECTS[projectIndex] : null;
  const nextProject = projectIndex >= 0 ? PROJECTS[(projectIndex + 1) % PROJECTS.length] : null;

  const projectNumber = (projectIndex + 1).toString().padStart(3, "0");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      setShowSplash(true);
      const timer = setTimeout(() => setShowSplash(false), 1200);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  if (!mounted) return null;

  const modalContent = (
    <AnimatePresence>
      {project && (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-[#050505] text-white overflow-y-auto overflow-x-hidden selection:bg-cyan-500/30 font-sans font-light"
        >
          <AnimatePresence mode="wait">
            {showSplash ? (
              <motion.div
                key="splash"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 z-[10000] flex flex-col items-center justify-center bg-[#050505]"
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-cyan-400 font-mono text-sm tracking-[0.5em] mb-4">
                    {projectNumber}
                  </div>
                  <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-white">
                    {project.title}
                  </h1>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="w-full min-h-full flex flex-col"
              >
                {/* Navigation */}
                <nav className="sticky top-0 w-full z-50 bg-[#050505]/95 backdrop-blur-xl border-b border-white/5">
                  <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
                    <button 
                      onClick={onClose}
                      className="flex items-center gap-2 text-zinc-500 hover:text-cyan-400 transition-colors group"
                    >
                      <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                      <span className="font-medium tracking-wide text-sm md:text-base font-['Arial']">Projects  /  Go Back</span>
                    </button>
                  </div>
                </nav>

                {/* Main Content Area */}
                <div className="pt-20 lg:pt-32 pb-32 max-w-[90rem] mx-auto px-6 lg:px-16 w-full flex-grow">
                  
                  {/* Header / Hero Section for Project */}
                  <div className="mb-16 lg:mb-24 flex flex-col gap-6 lg:gap-10">
                    <h1 className="text-5xl md:text-5xl lg:text-[5rem] font-bold tracking-tighter text-white uppercase leading-none">
                      {project.title}
                    </h1>
                    <p className="text-lg md:text-2xl lg:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  {/* Hero Image */}
                  {project.image && (
                    <div className="w-full relative aspect-[16/10] lg:aspect-[21/9] rounded-2xl md:rounded-[2rem] overflow-hidden mb-24 lg:mb-32 bg-[#121212] border border-white/5">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    
                    {/* Left Column (Metadata) */}
                    <div className="lg:col-span-3 flex flex-col gap-16">
                      
                      {/* Project Category */}
                      <div>
                        <h4 className="text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-[0.2em] mb-4">
                          Project {projectNumber}
                        </h4>
                        <p className="text-base md:text-lg text-white font-medium">
                          {project.category}
                        </p>
                      </div>

                      {/* Year */}
                      <div>
                        <h4 className="text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-[0.2em] mb-4">Year</h4>
                        <p className="text-base md:text-lg text-white font-medium">
                          {project.year}
                        </p>
                      </div>

                      {/* Client */}
                      <div>
                        <h4 className="text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-[0.2em] mb-4">Client</h4>
                        <p className="text-base md:text-lg text-white font-medium">
                          {project.client}
                        </p>
                      </div>

                      {/* Credits */}
                      <div>
                        <h4 className="text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-[0.2em] mb-4">Credits</h4>
                        <p className="text-base md:text-lg text-white font-medium">
                          {project.credits}
                        </p>
                      </div>
                      
                    </div>

                    {/* Right Column (Details) */}
                    <div className="lg:col-span-9 flex flex-col gap-20">
                      
                      {/* Info Section */}
                      <section>
                        <div className="flex items-center gap-4 mb-6">
                          <h4 className="text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-[0.2em] whitespace-nowrap">Info</h4>
                          <div className="h-px w-12 bg-white/10" />
                        </div>
                        <p className="text-xl md:text-xl text-zinc-300 leading-snug font-medium md:leading-[1.4] font-[Arial,Helvetica,sans-serif]">
                          {project.info}
                        </p>
                      </section>

                      {/* What I Did Section */}
                      <section>
                        <div className="flex items-center gap-4 mb-8">
                          <h4 className="text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-[0.2em] whitespace-nowrap">What I Did</h4>
                          <div className="h-px w-12 bg-white/10" />
                        </div>
                        
                        <div className="flex flex-col gap-10">
                          {project.whatIDid.map((item, index) => (
                            <div key={index} className="flex gap-6 md:gap-12 items-start">
                              <span className="text-xs md:text-sm font-mono text-zinc-600 mt-1">
                                {(index + 1).toString().padStart(2, '0')}
                              </span>
                              <p className="text-base md:text-lg text-zinc-300 leading-relaxed font-normal">
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>
                      </section>

                      {/* Stack Used Section */}
                      <section className="pt-10">
                        <div className="flex items-center gap-4 mb-10">
                          <h4 className="text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-[0.2em] whitespace-nowrap">Stack Used</h4>
                          <div className="h-px w-12 bg-white/10" />
                        </div>
                        <div className="flex flex-wrap gap-4 max-w-3xl">
                          {project.tech.split(",").map((tech, i) => (
                            <span 
                              key={i} 
                              className="px-6 py-2.5 rounded-full border border-white/5 bg-white/[0.02] text-cyan-400 text-xs md:text-sm font-bold tracking-wide font-[Arial,Helvetica,sans-serif] hover:bg-white/[0.05] hover:border-white/20 transition-all cursor-default"
                            >
                              {tech.trim()}
                            </span>
                          ))}
                        </div>
                      </section>
                      
                    </div>

                  </div>
                </div>

                {/* Full Width Footer: Next Project Section */}
                {nextProject && onSelectProject && (
                  <section className="mt-8 pt-24 border-t border-white/5 relative w-full bg-[#050505] pb-24 px-6 md:px-12">
                    <button
                      onClick={() => onSelectProject(nextProject.id)}
                      className="flex flex-col items-start text-left"
                    >
                      <motion.div
                        whileHover={{ x: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="text-6xl md:text-7xl lg:text-[10rem] font-bold tracking-tighter"
                      >
                        <span className="text-white">Next</span>{" "}
                        <span className="text-zinc-700 hover:text-white transition-colors duration-500">
                          Project
                        </span>
                      </motion.div>
                    </button>

                    <div className="mt-32 flex flex-col items-start gap-10">
                      <h4 className="text-xs tracking-[0.5em] text-zinc-400 uppercase">
                        LET&apos;S WORK TOGETHER
                      </h4>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-xs md:text-xs font-medium font-[Arial,Helvetica,sans-serif]">
                        <a
                          href="mailto:arabhishek2004@gmail.com"
                          className="tracking-[0.25em] text-zinc-400 hover:text-cyan-400 transition-colors"
                        >
                          EMAIL
                        </a>

                        <a
                          href="https://linkedin.com/in/abhishekss7"
                          target="_blank"
                          rel="noreferrer"
                          className="tracking-[0.25em] text-zinc-400 hover:text-cyan-400 transition-colors"
                        >
                          LINKEDIN
                        </a>
                      </div>
                    </div>
                  </section>
                )}

              </motion.div>

            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
