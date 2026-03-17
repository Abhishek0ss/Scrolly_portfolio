"use client";
import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, ExternalLink } from "lucide-react";
import { title } from "process";

const CERTIFICATIONS = [
  { title: "Oracle Database and AWS Architect Professional", provider: "Oracle", date: "Oct 25", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=AC77E38F528734C02D5AAFCEFB583C6A287DC59992B8CCA9E985A39A8C78DE8C" },
  { title: "Python", provider: "Hacker Rank", date: "Nov 25", link: "https://www.hackerrank.com/certificates/685aad68eda3" },
  { title: "C++ Programming: OOPs and DSA", provider: "CSE Pathshala", date: "Aug 25", link: "https://www.linkedin.com/posts/abhishekss7_cplusplus-dsa-oop-activity-7397288934310887425-QRdb?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFfRVwIB9VriBjeVB8mMzH_7rwqtYfOPnoQ" },
  { title: "Generative AI Apps and Solutions", provider: "Infosys", date: "Jul 25", link: "https://www.linkedin.com/posts/abhishekss7_generativeai-infosysspringboard-ailearning-activity-7399119077979451392-wVbu?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFfRVwIB9VriBjeVB8mMzH_7rwqtYfOPnoQ" },
  {title: "Essentials Automation Certification", provider: "Automation Anywhere", date: "Dec 25", link: "https://certificates.automationanywhere.com/daaea788-36c2-44a6-9a12-579b9e7bdbb5#acc.bjaDiPUM"}
];

const TRAINING = [
  { 
    title: "C++ Programming: OPPs and DSA", 
    provider: "Cse Pathshala", 
    date: "Jun 25 - Jul 25",
    link: "https://www.linkedin.com/posts/abhishekss7_cplusplus-dsa-oop-activity-7397288934310887425-QRdb?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFfRVwIB9VriBjeVB8mMzH_7rwqtYfOPnoQ",
    details: [
      "Completed hands-on training covering core syntax, memory management, and STL concepts.",
      "Applied OOP principles including inheritance, polymorphism, and abstraction.",
      "Strengthened understanding of Data Structures & Algorithms with time-complexity analysis."
    ]
  }
];

const ACHIEVEMENTS = [
  { title: "GenAI Powered Data Analytics Job Simulation", provider: "TATA Forage", date: "Oct 25", link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_68fdc7c78740460a8e291d29_1761847500551_completion_certificate.pdf" },
  { title: "Solution Architecture Job Simulation", provider: "AWS Forage", date: "Nov 25", link: "https://www.theforage.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_68fdc7c78740460a8e291d29_1761758295237_completion_certificate.pdf" }
];

export function Experience() {
  return (
    <section id="certifications" className="w-full bg-[#121212] py-24 px-6 md:px-12 border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Column: Training & Achievements */}
        <div className="flex flex-col space-y-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <BookOpen className="w-8 h-8 text-blue-400" />
              <h3 className="text-3xl font-black text-white tracking-tighter uppercase">Training</h3>
            </div>
            
            <div className="space-y-8">
              {TRAINING.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] hover:border-blue-500/50 transition-all group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors flex items-center gap-2">
                      {item.title}
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <span className="text-xs text-zinc-500 font-mono tracking-wider ml-4 shrink-0">{item.date}</span>
                  </div>
                  <p className="text-blue-300/80 text-sm font-medium mb-4">{item.provider}</p>
                  <ul className="space-y-2">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="text-zinc-400 text-sm leading-relaxed list-disc list-inside">
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
                  <div>
                    <h4 className="text-white font-medium group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                      {item.title}
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="text-sm text-indigo-300/70">{item.provider}</p>
                  </div>
                  <span className="text-xs text-zinc-500 font-mono">{item.date}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Certifications */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-4 mb-10">
            <Award className="w-8 h-8 text-cyan-400" />
            <h3 className="text-3xl font-black text-white tracking-tighter uppercase">Certifications</h3>
          </div>
          
          <div className="relative border-l border-white/10 ml-4 space-y-8 pb-4">
            {CERTIFICATIONS.map((item, idx) => (
              <a 
                key={idx} 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative pl-8 group block"
              >
                {/* Timeline Dot */}
                <span className="absolute left-[-5px] top-[6px] w-[10px] h-[10px] bg-[#121212] border-2 border-cyan-500 rounded-full group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all" />
                
                <span className="inline-block text-xs font-mono text-zinc-500 mb-1 tracking-wider uppercase group-hover:text-cyan-500/70 transition-colors">
                  {item.date}
                </span>
                <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                  {item.title}
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                </h4>
                <p className="text-sm text-zinc-400 mt-1">
                  Issued by <span className="text-white font-medium">{item.provider}</span>
                </p>
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
