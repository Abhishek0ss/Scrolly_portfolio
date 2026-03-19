"use client";
import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Machine Learning",
    skills: ["Supervised Learning", "Model Selection", "Feature Engineering", "Hyperparameter Tuning", "SVM", "HOG"]
  },
  {
    title: "Statistics & Analysis",
    skills: ["Statistical Reasoning", "Exploratory Data Analysis (EDA)", "Performance Metrics", "Validation"]
  },
  {
    title: "Libraries & Tools",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Git", "GitHub", "OpenCV", "dlib"]
  },
  {
    title: "Programming & Platforms",
    skills: ["Python", "Java", "C", "C++", "Docker", "Tableau", "Apache Maven", "Postman", "Automation Anywhere"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="w-full bg-[#121212] py-24 px-6 md:px-12 relative z-20">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl md:text-5xl font-black text-white mb-16 tracking-tighter uppercase border-b border-white/20 pb-6">
          Core <span className="text-zinc-300">Competencies</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col"
            >
              <h4 className="text-xl font-bold text-white mb-6 border-l-2 border-blue-500 pl-4 tracking-tight">
                {category.title}
              </h4>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <li 
                    key={sIdx}
                    className="px-3 py-2 bg-zinc-800 border border-white/10 text-zinc-100 text-sm font-mono tracking-tight rounded-md hover:bg-zinc-700 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
