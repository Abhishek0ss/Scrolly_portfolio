"use client";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EDUCATION = [
  {
    institution: "Lovely Professional University",
    location: "Punjab, India",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    score: "CGPA: 7.6",
    date: "August 2023 - Present"
  },
  {
    institution: "Govt Boys Higher Secondary",
    location: "Attingal-Trivandrum",
    degree: "Intermediate",
    score: "Percentage: 90%",
    date: "June 2020 - March 2022"
  },
  {
    institution: "Govt Vocational Higher Secondary",
    location: "Attingal-Trivandrum",
    degree: "Matriculation",
    score: "Percentage: 96%",
    date: "June 2019 - March 2020"
  }
];

export function Education() {
  return (
    <section className="w-full bg-[#121212] py-24 px-6 md:px-12 relative z-20 border-t border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col justify-center">
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-16"
         >
            <GraduationCap className="w-8 h-8 text-zinc-300" />
            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">Education</h3>
         </motion.div>

         <div className="space-y-12 pl-4 border-l-2 border-[#222]">
           {EDUCATION.map((edu, idx) => (
              <motion.div 
                 key={idx} 
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 0.6, delay: 0.1 * idx }}
                 className="relative group pl-8"
              >
                 <span className="absolute left-[-9px] top-[6px] w-[14px] h-[14px] bg-[#121212] border-2 border-zinc-500 rounded-full group-hover:border-blue-400 group-hover:bg-blue-400/20 transition-colors" />
                 
                 <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                    <h5 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {edu.institution}
                    </h5>
                    <span className="text-sm font-mono text-zinc-300 tracking-wider shrink-0 mt-2 sm:mt-0">
                      {edu.date}
                    </span>
                 </div>
                 
                 <p className="text-blue-200/80 font-medium mb-1 text-lg">
                    {edu.degree}
                 </p>
                 
                 <div className="flex justify-between items-center text-zinc-200 text-sm mt-3">
                    <span className="bg-white/5 px-3 py-1 rounded-md border border-white/10 font-mono tracking-wide text-xs">{edu.score}</span>
                    <span className="italic">{edu.location}</span>
                 </div>
              </motion.div>
           ))}
         </div>
      </div>
    </section>
  );
}
