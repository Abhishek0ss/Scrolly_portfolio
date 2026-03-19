"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ACTIVITIES = [
  {
    id: 1,
    title: "CDP Project",
    description:
      "Done Community Development Project in my Village, Solar Dryer, Testing and Implementation, Research and Development",
    image:
      "/1725030131755.jpg"
  },
  {
    id: 2,
    title: "NABARD",
    description:
      "Development Solar Dryer, Testing and Implementation, Research and Development Under National Bank for Agriculture and Rural Development",
    image:
      "/1725032778587.jpg"
  },
  {
    id: 3,
    title: "Robotics Tech",
    description:
      "Contributed in Robotics and Automation Event, Development of Automated System",
    image:
      "/Robotics challenge.png"
  },
  {
    id: 4,
    title: "RC Extreme League",
    description:
      "Participated in RC Extreme League, Building and Programming of RC Car, Testing and Implementation",
    image:
      "/RC Extereme.png"
  },
  {
    id: 5,
    title: "Tech Event",
    description:
      "Attended Global Robotics Challenge, Competed in the Competition, Fun and Learning",
    image:
      "/Tech event.png"
  }
];

export function ExtraCurricular() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ACTIVITIES.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const getOffset = (index: number) => {
    const total = ACTIVITIES.length;
    let offset = index - activeIndex;

    if (offset > Math.floor(total / 2)) offset -= total;
    if (offset < -Math.floor(total / 2)) offset += total;

    return offset;
  };

  const getCardProps = (offset: number) => {
    if (offset === 0) {
      return {
        x: "0%",
        rotateY: 0,
        scale: 1,
        zIndex: 20,
        opacity: 1
      };
    }

    if (Math.abs(offset) === 1) {
      const sign = Math.sign(offset);
      return {
        x: `${sign * 90}%`,
        rotateY: sign * -40,
        scale: 0.85,
        zIndex: 10,
        opacity: 1
      };
    }

    if (Math.abs(offset) === 2) {
      const sign = Math.sign(offset);
      return {
        x: `${sign * 160}%`,
        rotateY: sign * -55,
        scale: 0.7,
        zIndex: 5,
        opacity: 0.7
      };
    }

    const sign = Math.sign(offset);

    return {
      x: `${sign * 220}%`,
      rotateY: sign * -65,
      scale: 0.55,
      zIndex: 0,
      opacity: 0
    };
  };

  return (
    <section
      id="extracurricular"
      className="w-full bg-[#121212] py-24 px-6 md:px-12 relative z-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl md:text-5xl font-black text-white mb-16 tracking-tight uppercase border-b border-white/20 pb-6 text-center">
          Beyond <span className="text-zinc-300">The Code</span>
        </h3>

        <div
          className="relative w-full h-[520px] flex items-center justify-center"
          style={{ perspective: "1800px" }}
        >
          <div className="relative w-full max-w-[360px] h-[460px]">
            {ACTIVITIES.map((activity, index) => {
              const offset = getOffset(index);
              const props = getCardProps(offset);

              return (
                <motion.div
                  key={activity.id}
                  animate={{
                    x: props.x,
                    rotateY: props.rotateY,
                    scale: props.scale,
                    zIndex: props.zIndex,
                    opacity: props.opacity
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 130,
                    damping: 20,
                    mass: 0.8
                  }}
                  className="absolute inset-0 bg-white rounded-[2rem] overflow-hidden flex flex-col shadow-[0_30px_80px_rgba(0,0,0,0.6)] cursor-pointer"
                  style={{
                    transformOrigin: "center center",
                    transformStyle: "preserve-3d"
                  }}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="relative w-full h-[55%] p-3 pb-0">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-200">
                      <Image
                        src={activity.image}
                        alt={activity.title}
                        fill
                        className="object-cover pointer-events-none"
                      />
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1 text-left justify-center bg-white">
                    <h4 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                      {activity.title}
                    </h4>

                    <p className="text-sm text-gray-900 leading-relaxed font-medium line-clamp-4">
                      {activity.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <button
            onClick={() =>
              setActiveIndex(
                (prev) => (prev - 1 + ACTIVITIES.length) % ACTIVITIES.length
              )
            }
            className="absolute left-2 md:left-12 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors z-30"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() =>
              setActiveIndex((prev) => (prev + 1) % ACTIVITIES.length)
            }
            className="absolute right-2 md:right-12 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors z-30"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}