"use client";
import { motion } from "framer-motion";
import { User } from "lucide-react";

export function About() {
  const aboutItems = [
    {
      heading: "MY BELIEF",
      text: "I dont just work with data, I use it to shape systems that are precise, scalable, and built with intent."
    },
    {
      heading: "MY PHILOSOPHY",
      text: "I believe great systems are not just built, they are understood. I focus on clarity over unnecessary complexity, designing solutions that are efficient, scalable, and built to perform beyond controlled environments."
    },
    {
      heading: "MY FOCUS",
      text: "I am driven to work on complex problems, refine my approach, and contribute to AI systems that are efficient, reliable, and built for real-world challenges."
    }
  ];

  return (
    <section id="about" className="w-full bg-[#121212] py-24 px-6 md:px-12 relative z-20">
      <div className="max-w-5xl mx-auto flex flex-col gap-12 md:gap-16">
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.7 }}
           className="flex flex-col items-start mb-4"
        >
          <div className="flex items-center gap-4 mb-8">
            <User className="w-8 h-8 text-cyan-300" />
            <h3 className="text-3xl font-black text-white tracking-tighter uppercase">About Me</h3>
          </div>

          <motion.h3 
            className="text-4xl md:text-5xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-600 to-blue-400 mb-4 tracking-tighter leading-tight italic"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% auto" }}
          >
            "Data is a precious thing and will last longer than the systems themselves."
          </motion.h3>
          
          <p className="text-zinc-400 text-lg md:text-xl font-medium tracking-wide">
            — Tim Berners-Lee
          </p>
        </motion.div>

        <div className="flex flex-col gap-12 md:gap-16 w-full pt-8 border-t border-white/5">
          {aboutItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="flex flex-col md:flex-row md:items-start gap-4 md:gap-24"
          >
            <h4 className="text-zinc-200 font-mono text-sm tracking-[0.2em] font-[Arial] uppercase shrink-0 w-48 mt-[0.3rem]">
              {item.heading}
            </h4>
            <p className="text-white-600 text-xl md:text-2xl md:leading-relaxed font-[Arial]">
              {item.text}
            </p>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}
