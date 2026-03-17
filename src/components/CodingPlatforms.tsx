"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const PLATFORMS = [
  { 
    name: "GeeksforGeeks", 
    image: "/gfg.png", 
    link: "https://www.geeksforgeeks.org/profile/ssabhi2004", 
    color: "group-hover:border-green-500/50" 
  },
  { 
    name: "LeetCode", 
    image: "/leetcode.png", 
    link: "https://leetcode.com/u/Appuabhi2004/", 
    color: "group-hover:border-yellow-500/50" 
  },
  { 
    name: "HackerRank", 
    image: "/hackerrank.png", 
    link: "https://www.hackerrank.com/profile/arabhishek2004", 
    color: "group-hover:border-green-400/50" 
  }
];

export function CodingPlatforms() {
  return (
    <section id="platforms" className="w-full bg-[#121212] py-24 px-6 md:px-12 border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase text-center">
          Coding <span className="text-zinc-600">Platforms</span>
        </h3>
        <p className="text-center text-zinc-400 max-w-2xl mx-auto mb-16">
          Proof of work on competitive programming and algorithms. Continuous learning and problem solving track record.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PLATFORMS.map((platform, idx) => (
            <motion.a 
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`group relative flex flex-col items-center justify-start h-[280px] md:h-[320px] border border-white/10 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all cursor-pointer overflow-hidden ${platform.color}`}
            >
              <div className="w-full h-[80%] relative overflow-hidden bg-black flex items-center justify-center">
                 <Image 
                    src={platform.image} 
                    alt={`${platform.name} profile snapshot`}
                    fill
                    className="object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/40 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 w-full h-[20%] flex items-center justify-center bg-[#121212]/90 backdrop-blur-md border-t border-white/5 z-10">
                 <span className="text-lg font-bold text-white tracking-tight uppercase px-4 text-center">
                   {platform.name}
                 </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
