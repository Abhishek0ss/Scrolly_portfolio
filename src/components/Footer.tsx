"use client";
import { Github, Linkedin, Instagram, Heart, ArrowUp } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-white/5 py-12 px-6 md:px-12 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        <h2 className="text-2xl md:text-3xl font-bold text-[#e67e51] mb-4">
          Thanks for visiting!
        </h2>
        
        <p className="text-zinc-200 text-sm md:text-base max-w-2xl mb-8">
          I&apos;m always excited to work on new projects, explore internship opportunities, and collaborate with amazing people. Let&apos;s build something great together.
        </p>
        
        <div className="flex items-center justify-center gap-4 mb-8">
          <Link 
            href="https://github.com/Abhishek0ss" 
            target="_blank"
            className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#202020] hover:bg-[#2a2a2a] transition-colors border border-white/5"
          >
            <Github className="w-5 h-5 text-zinc-200 hover:text-white transition-colors" />
          </Link>
          <Link 
            href="https://www.linkedin.com/in/abhishekss7/" 
            target="_blank"
            className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#202020] hover:bg-[#2a2a2a] transition-colors border border-white/5"
          >
            <Linkedin className="w-5 h-5 text-zinc-200 hover:text-white transition-colors" />
          </Link>
          <Link 
            href="https://x.com/AbhishekSS24810" 
            target="_blank"
            className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#202020] hover:bg-[#2a2a2a] transition-colors border border-white/5"
          >
            {/* The screenshot has an Instagram icon, but X or an Instagram icon could be here. I'll use Instagram as a placeholder or X if preferred. I'll stick close to the screenshot's icon setup but adapt to Abhishek S S */}
            <Instagram className="w-5 h-5 text-zinc-200 hover:text-white transition-colors" />
          </Link>
        </div>
        
        <div className="flex items-center gap-2 text-zinc-200 text-sm font-medium mb-12">
          Made with <Heart className="w-4 h-4 text-[#e67e51] fill-transparent" /> by Abhishek S S
        </div>

        {/* Bottom bar */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-zinc-300">
          <div>
             © {new Date().getFullYear()} Abhishek S S. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="#connect" className="hover:text-white transition-colors">
              Contact Me
            </Link>
            <Link href="https://github.com/Abhishek0ss" target="_blank" className="hover:text-white transition-colors">
              GitHub
            </Link>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              Back to top <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
