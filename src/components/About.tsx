"use client";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="w-full bg-[#121212] py-40 px-6 md:px-12 relative z-20">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
<motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.6 }}
  className="flex flex-col justify-center items-center"
>
  <div className="mb-8 inline-block">
     <span className="font-mono text-xs tracking-[0.2em] text-blue-400 uppercase border border-blue-500/30 bg-blue-500/10 px-6 py-2 rounded-full">
       About Me
     </span>
  </div>

  <h3 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-tight">
    Building Intelligent <br/>
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-400">
      Systems With Data.
    </span>
  </h3>

  <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed mb-6 font-light max-w-3xl">
    An AI and Machine Learning undergraduate focused on turning complex data into meaningful insights and intelligent systems. Experience includes machine learning, statistical analysis, experimentation, and data exploration to uncover patterns and build practical solutions.
  </p>

  <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed font-light max-w-3xl">
    Work centers around designing data-driven approaches, interpreting analytical results, and iterating on models to improve performance and reliability. 
  </p>

</motion.div>

      </div>
    </section>
  );
}
