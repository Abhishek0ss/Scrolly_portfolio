"use client";
import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, ExternalLink } from "lucide-react";
import Image from "next/image";

const CERTIFICATIONS = [
  { 
    title: "Oracle Database and AWS Architect Professional", 
    provider: "Oracle", 
    date: "Oct 25", 
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=AC77E38F528734C02D5AAFCEFB583C6A287DC59992B8CCA9E985A39A8C78DE8C",
    logo: "/oracle.webp" 
  },
  { 
    title: "Python", 
    provider: "Hacker Rank", 
    date: "Nov 25", 
    link: "https://www.hackerrank.com/certificates/685aad68eda3",
    logo: "/hackerrank.webp" 
  },
  { 
    title: "C++ Programming: OOPs and DSA", 
    provider: "CSE Pathshala", 
    date: "Aug 25", 
    link: "https://drive.google.com/file/d/1CneQ8lMg1p2ozInsEHdLG4JVUgRbrhzz/view?usp=drive_link",
    logo: "/CSE Pathshala.png" 
  },
  { 
    title: "Generative AI Apps and Solutions", 
    provider: "Infosys", 
    date: "Jul 25", 
    link: "https://drive.google.com/file/d/1tTeKsYenLBVv3HBl_0RtLjsJTExoee12/view?usp=drive_link",
    logo: "/Infosys.jpg" 
  },
  {
    title: "Essentials Automation Certification", 
    provider: "Automation Anywhere", 
    date: "Dec 25", 
    link: "https://certificates.automationanywhere.com/daaea788-36c2-44a6-9a12-579b9e7bdbb5#acc.bjaDiPUM",
    logo: "/AW.png"
  },
  {
    title: "JAVA Programming", 
    provider: "iamneo", 
    date: "Dec 25", 
    link: "https://drive.google.com/file/d/1zn2x7mm0mLESeZ1squNOovJ1lh-3PiWx/view?usp=drive_link",
    logo: "/neo.webp"
  },
    {
    title: "ChatGPT-4 Prompt Engineering", 
    provider: "Infosys", 
    date: "Dec 25", 
    link: "https://drive.google.com/file/d/1cBs5nQJ0Y6l8GlEjnSodRl_oq7OnUeud/view?usp=drive_link",
    logo: "/Infosys.jpg"
  }
];

const TRAINING = [
  { 
    title: "C++ Programming: OPPs and DSA", 
    provider: "Cse Pathshala", 
    logo: "/CSE Pathshala.png",
    date: "Jun 25 - Jul 25",
    link: "https://drive.google.com/file/d/1CneQ8lMg1p2ozInsEHdLG4JVUgRbrhzz/view?usp=drive_link",
    details: [
      "Completed hands-on training covering core syntax, memory management, and STL concepts.",
      "Applied OOP principles including inheritance, polymorphism, and abstraction.",
      "Strengthened understanding of Data Structures & Algorithms with time-complexity analysis."
    ]
  }
];

const ACHIEVEMENTS = [
  { 
    title: "GenAI Powered Data Analytics Job Simulation", 
    provider: "TATA Forage", 
    logo: "/tata.jpg",
    date: "Oct 25", 
    link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_68fdc7c78740460a8e291d29_1761847500551_completion_certificate.pdf" 
  },
  { 
    title: "Solution Architecture Job Simulation", 
    provider: "AWS Forage", 
    logo: "/Aws.png",
    date: "Nov 25", 
    link: "https://www.theforage.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_68fdc7c78740460a8e291d29_1761758295237_completion_certificate.pdf" 
  }
];

export function Experience() {

  return (
    <section id="certifications" className="w-full bg-[#0a0a0a] py-24 px-6 md:px-12 border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <div className="flex flex-col space-y-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <BookOpen className="w-8 h-8 text-blue-300" />
              <h3 className="text-3xl font-black text-white tracking-tighter uppercase">Training</h3>
            </div>
            
            <div className="space-y-8">
              {TRAINING.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-2xl bg-[#1f1f23] border border-white/10 hover:bg-white/[0.04] hover:border-blue-500/50 transition-all group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 p-2 flex items-center justify-center border border-white/10 overflow-hidden">
                      <Image src={item.logo} alt={item.provider} width={40} height={40} className="object-contain" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors flex items-center gap-2">
                        {item.title}
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-blue-300/80 text-sm font-medium">{item.provider}</p>
                    </div>
                    <span className="text-xs text-white-500 font-mono tracking-wider shrink-0">{item.date}</span>
                  </div>
                  <ul className="space-y-2 mt-4 ml-16">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="text-zinc-200 text-sm leading-relaxed list-disc list-inside">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <GraduationCap className="w-8 h-8 text-indigo-400" />
              <h3 className="text-3xl font-black text-white tracking-tighter uppercase">Achievements</h3>
            </div>
            
            <div className="flex flex-col gap-4">
              {ACHIEVEMENTS.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center p-5 rounded-xl border border-white/10 hover:border-indigo-500/50 hover:bg-white/[0.02] transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 p-1.5 flex items-center justify-center border border-white/10 overflow-hidden">
                      <Image src={item.logo} alt={item.provider} width={30} height={30} className="object-contain" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                        {item.title}
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-sm text-indigo-300/70">{item.provider}</p>
                    </div>
                  </div>
                  <span className="text-xs text-white-500 font-mono">{item.date}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Certifications with Running Animation */}
        <div className="flex flex-col h-full max-h-[800px]">
          <div className="flex items-center gap-4 mb-10">
            <Award className="w-8 h-8 text-cyan-300" />
            <h3 className="text-3xl font-black text-white tracking-tighter uppercase">Certifications</h3>
          </div>
          
          <div className="relative flex-1 overflow-hidden group/marquee h-full cursor-pointer">
            {/* Fade Overlays */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#121212] to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#121212] to-transparent z-10 pointer-events-none" />
            
            <style jsx>{`
              @keyframes marquee-vertical {
                0% { transform: translateY(0); }
                100% { transform: translateY(-50%); }
              }
              .animate-marquee-vertical {
                animation: marquee-vertical 25s linear infinite;
              }
              .animate-marquee-vertical:hover {
                animation-play-state: paused;
              }
            `}</style>

            <div 
               className="flex flex-col gap-6 animate-marquee-vertical"
            >
              {[...CERTIFICATIONS, ...CERTIFICATIONS].map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] hover:border-cyan-500/40 transition-all duration-300 group-hover/marquee:opacity-30 hover:!opacity-100 hover:scale-[1.02] shrink-0 h-[130px] group/item"
                >
                  <div className="w-16 h-16 rounded-xl bg-white/5 p-3 flex items-center justify-center border border-white/10 overflow-hidden group-hover/item:scale-110 transition-transform">
                    <Image src={item.logo} alt={item.provider} width={50} height={50} className="object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-[10px] font-mono text-white-500 tracking-wider uppercase">{item.date}</span>
                    </div>
                    <h4 className="text-base font-bold text-white truncate group-hover/item:text-cyan-300 transition-colors flex items-center gap-2">
                      {item.title}
                      <ExternalLink className="w-3 h-3 text-cyan-300" />
                    </h4>
                    <p className="text-xs text-zinc-200 mt-0.5">
                      Issued by <span className="text-zinc-200">{item.provider}</span>
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
