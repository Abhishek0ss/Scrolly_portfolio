"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Connect", href: "#connect" },
  { name: "Resume", href: "#resume" },
];

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4 pointer-events-none"
    >
      <div className="pointer-events-auto flex items-center gap-2 md:gap-6 px-6 py-3 bg-[#121212]/50 backdrop-blur-md border border-white/10 rounded-full shadow-2xl">
        {LINKS.map((link) => {
          const isResume = link.name === "Resume";
          return (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm md:text-sm font-medium transition-colors relative group ${
                isResume
                  ? "text-[#F5BF03] drop-shadow-[0_0_10px_rgba(255,215,0,0.8)] hover:text-[#ffea00] hover:drop-shadow-[0_0_15px_rgba(255,215,0,1)]"
                  : "text-zinc-200 hover:text-white"
              }`}
            >
              {link.name}
              <span 
                className={`absolute left-0 -bottom-1 w-full h-[1px] scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${
                  isResume ? "bg-[#ffd700] drop-shadow-[0_0_8px_rgba(255,215,0,0.9)]" : "bg-blue-400"
                }`} 
              />
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}
