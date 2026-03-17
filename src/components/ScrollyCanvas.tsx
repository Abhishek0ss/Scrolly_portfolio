"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Overlay } from "./Overlay";

// Using 120 since that's how many ezgif frames are in the folder
const FRAME_COUNT = 120; 
const getFramePath = (index: number) => {
  const paddedIndex = index.toString().padStart(3, "0");
  return `/ezgif-frame-${paddedIndex}.png`;
};

export function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Load all images up-front to prevent flickering
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];
    
    // We want 1-based indexing for these ezgif files
    for (let i = 1; i <= FRAME_COUNT; i++) {
        const img = new Image();
        img.src = getFramePath(i);
        img.onload = () => {
            loadedCount++;
            if (loadedCount === FRAME_COUNT) {
                setImagesLoaded(true);
            }
        };
        // Error handling in case frames are missing
        img.onerror = () => {
            console.warn("Failed to load image index " + i);
            loadedCount++;
            if (loadedCount === FRAME_COUNT) {
                setImagesLoaded(true);
            }
        };
        loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const renderFrame = (index: number) => {
    if (!imagesLoaded || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // We map 0-119 so we access 0-indexed array representing frame 1-120
    const img = images[index];
    if (!img || !img.complete || img.naturalHeight === 0) return;
    
    // Resize logic for object-fit: cover
    const canvasAspect = canvas.width / canvas.height;
    const imgAspect = img.width / img.height;
    
    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;
    
    if (canvasAspect > imgAspect) {
      drawHeight = canvas.width / imgAspect;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgAspect;
      offsetX = (canvas.width - drawWidth) / 2;
    }
    
    // Fill background to avoid transparent flashes
    ctx.fillStyle = "#121212";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (imagesLoaded && images.length > 0) {
      // mapped from 0 to FRAME_COUNT - 1
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(latest * FRAME_COUNT)
      );
      renderFrame(frameIndex);
    }
  });

  // Handle Resize and Initial Render
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        // High-DPI screen support 
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        
        // Re-render current frame on resize
        if (imagesLoaded) {
            const currentFrameIndex = Math.min(
                FRAME_COUNT - 1,
                Math.floor(scrollYProgress.get() * FRAME_COUNT)
            );
            renderFrame(currentFrameIndex);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial setup

    return () => window.removeEventListener("resize", handleResize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imagesLoaded, scrollYProgress]);

  // Read initial draw
  useEffect(() => {
     if (imagesLoaded) {
         renderFrame(0);
     }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imagesLoaded]);

  return (
    <div id="home" ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
        {!imagesLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-50 bg-[#121212]">
                <div className="w-12 h-12 border-4 border-zinc-800 border-t-white rounded-full animate-spin"></div>
                <p className="mt-6 text-zinc-400 font-mono text-sm tracking-widest uppercase">Initializing...</p>
                <div className="w-48 h-1 bg-zinc-800 rounded-full mt-4 overflow-hidden relative">
                   <div className="absolute top-0 left-0 h-full bg-white bg-opacity-70 animate-pulse w-full"></div>
                </div>
            </div>
        )}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: imagesLoaded ? 1 : 0 }}
        />
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
