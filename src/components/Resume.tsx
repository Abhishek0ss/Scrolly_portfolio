"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, FileText, Eye } from "lucide-react";

export function Resume() {
  const [showGeneral, setShowGeneral] = useState(false);
  const [showSpecialized, setShowSpecialized] = useState(false);

  const cvData = [
    {
      title: "General CV",
      file: "/Abhishek_SS_CV.pdf",
      show: showGeneral,
      setShow: setShowGeneral,
      color: "text-blue-300",
      btnColor: "bg-blue-500 hover:bg-blue-600",
      glowColor: "bg-blue-500/10",
    },
    {
      title: "Specialized CV",
      file: "/Specialized.pdf",
      show: showSpecialized,
      setShow: setShowSpecialized,
      color: "text-amber-400",
      btnColor: "bg-amber-500 hover:bg-amber-600",
      glowColor: "bg-amber-500/10",
    },
  ];

  return (
    <section
      id="resume"
      className="w-full bg-[#121212] py-32 px-6 md:px-12 relative z-20 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <FileText className="w-8 h-8 text-white/90" />
            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
              Curriculum Vitae
            </h3>
          </div>

          <p className="text-zinc-200 max-w-2xl font-light">
            Explore my background, professional experiences, and academic details.
          </p>
        </motion.div>

        {/* Resume Containers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          {cvData.map((cv, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Box Title */}


              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="w-full relative group"
              >
                <div className="w-full h-[450px] md:h-[550px] rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] shadow-2xl relative p-2">
                  {/* Resume Preview */}
                  <iframe
                    src={`${cv.file}#view=FitH`}
                    title={cv.title}
                    className={`w-full h-full rounded-2xl transition-all duration-500 ${
                      cv.show ? "blur-0 opacity-100" : "blur-md opacity-60"
                    }`}
                  />

                  {/* Blur Overlay */}
                  {!cv.show && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-2xl">
                      <button
                        onClick={() => cv.setShow(true)}
                        className={`flex items-center gap-2 px-6 py-3 ${cv.btnColor} text-white rounded-full font-medium transition`}
                      >
                        <Eye className="w-4 h-4" />
                        Show Preview
                      </button>
                    </div>
                  )}
                </div>

                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 ${cv.glowColor} blur-[100px] rounded-full scale-75 pointer-events-none`}
                />
              </motion.div>

              {/* Download Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="mt-8"
              >
                <a
                  href={cv.file}
                  download={`${cv.title.replace(" ", "_")}.pdf`}
                  className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl"
                >
                  <Download className="w-5 h-5" />
                  Download 
                </a>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}