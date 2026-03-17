"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { PROJECTS } from "@/data/projects";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section id="projects" className="w-full bg-[#050505] py-32 px-6 md:px-12 relative z-20 overflow-hidden">
      <div className="max-w-[85rem] mx-auto">
        <h2 className="text-5xl md:text-7xl font-black text-white mb-24 tracking-tighter uppercase drop-shadow-lg">
          Projects
        </h2>
        
        <div className="flex flex-col space-y-32">
          {PROJECTS.map((proj, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col xl:flex-row gap-8 xl:gap-16 items-center w-full"
            >
              {/* Left Image Section */}
              <div className="w-full xl:w-[55%] relative">
                <button 
                  onClick={() => setSelectedProject(proj.id)}
                  className="block w-full text-left relative aspect-[16/10] rounded-[2rem] overflow-hidden bg-[#121212] border border-white/5 p-2 sm:p-4 transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]"
                >
                  <div 
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="w-full h-full relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-zinc-900 cursor-none"
                  >
                    {proj.image ? (
                      <Image 
                        src={proj.image} 
                        alt={proj.title} 
                        fill 
                        className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 group-hover:brightness-110 transition-all duration-700 ease-out"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center group-hover:opacity-40 transition-opacity duration-700">
                        <span className="font-mono text-8xl font-black text-white/5 uppercase">
                          {proj.title.substring(0, 1)}
                        </span>
                      </div>
                    )}

                    {/* Interactive "View" Hover Circle */}
                    <motion.div
                      animate={{
                        x: mousePos.x - 64, // Centered horizontally (96/2)
                        y: mousePos.y - 64, // Centered vertically (96/2)
                        scale: hoveredIdx === idx ? 1 : 0,
                        opacity: hoveredIdx === idx ? 1 : 0,
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 600, 
                        damping: 30, 
                        mass: 0.5 
                      }}
                      className="absolute top-0 left-0 w-20 h-20 rounded-full bg-transparent border border-cyan-500/50 backdrop-blur-sm text-white flex items-center justify-center font-bold tracking-widest uppercase text-sm pointer-events-none z-20 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                    >
                      View
                    </motion.div>
                  </div>
                </button>
              </div>

              {/* Right Content Section */}
              <div className="w-full xl:w-[45%] flex flex-col justify-center relative py-6">
                <div className="flex items-center gap-2 text-zinc-200 font-medium text-sm mb-4 tracking-wide">
                  <span>India</span>
                  <span>•</span>
                  <span>{proj.year}</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                  <button onClick={() => setSelectedProject(proj.id)} className="text-left hover:text-cyan-400 transition-colors">
                    {proj.title}
                  </button>
                </h3>
                
                <h4 className="text-lg md:text-xl font-bold text-white mb-6 drop-shadow-md">
                  {proj.category}
                </h4>
                
                <div className="space-y-4 mb-10 text-white leading-relaxed text-sm md:text-base">
                  <div className="flex items-start gap-4">
                    <span className="text-white mt-1.5">•</span>
                    <p>{proj.desc}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pr-8">
                  {proj.tech.split(",").map((techName, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 rounded-full border border-zinc-700 text-xs md:text-sm font-medium text-zinc-300 hover:border-cyan-500 hover:text-cyan-400 hover:shadow-[0_0_12px_rgba(6,182,212,0.4)] transition-all bg-[#0a0a0a] cursor-default"
                    >
                      {techName.trim()}
                    </span>
                  ))}
                </div>

                {/* Vertical "PROJECTS" Tag */}
                <div className="absolute -right-4 lg:-right-8 top-1/2 -translate-y-1/2 hidden xl:flex items-center justify-center py-8 px-2 rounded-l-2xl border border-white/5 border-r-0 bg-[#0a0a0a]">
                  <span 
                    className="text-cyan-600 font-mono text-xs tracking-[0.25em] font-bold uppercase group-hover:text-cyan-400 transition-colors duration-500" 
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                  >
                    Projects
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Inline Modal */}
      <ProjectModal 
        projectId={selectedProject} 
        onClose={() => setSelectedProject(null)} 
        onSelectProject={setSelectedProject}
      />
    </section>
  );
}
