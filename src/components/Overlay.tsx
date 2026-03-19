"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

// Typewriter phrases
const phrases = [
  "Engineering Intelligent Systems",
  "Driven by Precision",
  "Building data-driven systems",
  "Computer Vision Enthusiast",
];

function TypewriterText() {
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
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
    <p className="mt-6 text-xl md:text-2xl text-zinc-100 font-[Arial] tracking-wide h-8">
      {text}
      <span className="animate-pulse">|</span>
    </p>
  );
}

export function Overlay({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // Section 1: 0% to 22%
  const opacity1 = useTransform(scrollYProgress, [0, 0.12, 0.20, 0.22, 1], [1, 1, 0, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.22, 1], [0, -40, -40]);

  // Section 2: 25% to 55%
  const opacity2 = useTransform(scrollYProgress, [0.22, 0.30, 0.50, 0.58, 1], [0, 1, 1, 0, 0]);
  const y2 = useTransform(scrollYProgress, [0.22, 0.30, 0.50, 0.58, 1], [30, 0, 0, -30, -30]);

  // Section 3: 60% to 88%
  const opacity3 = useTransform(scrollYProgress, [0.58, 0.65, 0.82, 0.90, 1], [0, 1, 1, 0, 0]);
  const y3 = useTransform(scrollYProgress, [0.58, 0.65, 0.82, 0.90, 1], [30, 0, 0, -30, -30]);

  if (!hasMounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] w-full h-full overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* Section 1 */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute w-full flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter drop-shadow-2xl">
            ABHISHEK S S
          </h1>
          <TypewriterText />
        </motion.div>

        {/* Section 2 */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute w-full flex flex-col items-start justify-center px-8 md:px-24 left-0"
        >
          <div className="max-w-xl text-left">
            <h2 className="text-4xl md:text-7xl font-bold text-white leading-[1.1] drop-shadow-2xl">
              I build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                data-driven solutions.
              </span>
            </h2>
          </div>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute w-full flex flex-col items-end justify-center px-8 md:px-24 right-0"
        >
          <div className="max-w-xl text-right">
            <h2 className="text-4xl md:text-7xl font-bold text-white leading-[1.1] drop-shadow-2xl">
              Bridging ML <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-rose-500 to-amber-500">
                and analytics.
              </span>
            </h2>
          </div>
        </motion.div>

      </div>
    </div>
  );
}