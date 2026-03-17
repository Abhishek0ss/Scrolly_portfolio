"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, FileText, Eye } from "lucide-react";

export function Resume() {

  const [showPreview, setShowPreview] = useState(false);

  return (
    <section
      id="resume"
      className="w-full bg-[#121212] py-32 px-6 md:px-12 relative z-20 border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-10"
        >
          <div className="flex items-center gap-4 mb-6">
            <FileText className="w-8 h-8 text-blue-400" />
            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
              Curriculum Vitae
            </h3>
          </div>

          <p className="text-zinc-400 max-w-2xl font-light">
            Explore my background, professional experiences, and academic details.
          </p>
        </motion.div>



        {/* Resume Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl relative group"
        >
          <div className="w-full h-[420px] md:h-[520px] rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] shadow-2xl relative p-2">

            {/* Resume Preview */}
            <iframe
              src="/Abhishek_SS_CV.pdf#view=FitH"
              title="Abhishek SS Resume"
              className={`w-full h-full rounded-2xl transition-all duration-500 ${
                showPreview ? "blur-0 opacity-100" : "blur-md opacity-60"
              }`}
            />

            {/* Blur Overlay */}
            {!showPreview && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-2xl">
                <button
                  onClick={() => setShowPreview(true)}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium transition"
                >
                  <Eye className="w-4 h-4" />
                  Show Preview
                </button>
              </div>
            )}
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full scale-75 pointer-events-none" />
        </motion.div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >
          <a
            href="/Abhishek_SS_CV.pdf"
            download="Abhishek_SS_Resume.pdf"
            className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/10 hover:border-blue-400/30 transition-all duration-300 shadow-xl"
          >
            <Download className="w-5 h-5" />
            Download Resume (PDF)
          </a>
        </motion.div>

      </div>
    </section>
  );
}