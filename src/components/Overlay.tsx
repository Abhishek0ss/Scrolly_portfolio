"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {

  // Scroll animations
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -100]);
  const scale1 = useTransform(scrollYProgress, [0, 0.25], [1, 0.95]);

  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.5, 0.6], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.6], [50, -50]);

  const opacity3 = useTransform(scrollYProgress, [0.6, 0.7, 0.85, 0.95], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.6, 0.95], [50, -50]);

  // Typewriter phrases
  const phrases = [
    "AI / ML Engineer",
    "Machine Learning Engineer",
    "Building data-driven systems",
    "Computer Vision Enthusiast"
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index];
    const speed = deleting ? 40 : 80;

    const timeout = setTimeout(() => {
      setText(
        deleting
          ? current.substring(0, text.length - 1)
          : current.substring(0, text.length + 1)
      );

      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1200);
      } 
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }

    }, speed);

    return () => clearTimeout(timeout);

  }, [text, deleting, index]);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-12">
      
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1, scale: scale1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >

        <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter drop-shadow-2xl mix-blend-difference">
          ABHISHEK S S
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-zinc-300 font-light tracking-wide mix-blend-difference">
          {text}
          <span className="animate-pulse">|</span>
        </p>

      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center text-left px-8 md:px-24"
      >
        <h2 className="text-4xl md:text-7xl font-bold text-white max-w-3xl leading-[1.1] drop-shadow-2xl mix-blend-difference">
          I build <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-400 drop-shadow-none">
            data-driven solutions.
          </span>
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-center text-right px-8 md:px-24"
      >
        <h2 className="text-4xl md:text-7xl font-bold text-white max-w-3xl leading-[1.1] drop-shadow-2xl mix-blend-difference">
          Bridging ML <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-red-600 to-red-300 drop-shadow-none">
            and analytics.
          </span>
        </h2>
      </motion.div>

    </div>
  );
}