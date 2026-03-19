"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, X } from "lucide-react";

const SOCIALS = [
  { 
    platform: "Email", 
    value: "arabhishekk2004@gmail.com", 
    href: "mailto:arabhishekk2004@gmail.com",
    icon: <Mail className="w-5 h-5" />
  },
  { 
    platform: "LinkedIn", 
    value: "linkedin.com/in/abhishekss7/", 
    href: "https://www.linkedin.com/in/abhishekss7/",
    icon: <Linkedin className="w-5 h-5" />
  },
  { 
    platform: "GitHub", 
    value: "github.com/Abhishek0ss", 
    href: "https://github.com/Abhishek0ss",
    icon: <Github className="w-5 h-5" />
  },
  { 
    platform: "X", 
    value: "x.com/AbhishekSS24810", 
    href: "https://x.com/AbhishekSS24810",
    icon: <X className="w-5 h-5" />
  }
];

export function Connect() {
  return (
    <section id="connect" className="w-full bg-[#121212] py-32 px-6 md:px-12 border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
        <div className="max-w-2xl">
          <motion.h3 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase mb-6"
          >
            Let&apos;s <span className="text-zinc-300">Connect</span>
          </motion.h3>
          <motion.p 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.1 }}
             className="text-xl md:text-xl text-zinc-200 font-light"
          >
            Open to opportunities in Machine Learning, Statistical Analysis, and Software Development.
          </motion.p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SOCIALS.map((social, idx) => (
          <motion.a 
            key={idx}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group flex flex-col justify-between h-40 p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] hover:border-white/30 transition-all duration-300 relative overflow-hidden"
          >
            <div className="flex justify-between items-start text-zinc-300 group-hover:text-white transition-colors relative z-10">
              <span className="font-mono text-xs font-bold tracking-widest uppercase">{social.platform}</span>
              {social.icon}
            </div>
            
            <span className="text-white text-sm md:text-base font-bold truncate relative z-10 group-hover:text-blue-300 transition-colors">
              {social.value}
            </span>

            {/* Hover Glow */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-400/30 transition-colors pointer-events-none" />
          </motion.a>
        ))}
      </div>
      
    </section>
  );
}
