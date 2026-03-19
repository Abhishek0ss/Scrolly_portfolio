"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Overlay } from "./Overlay";

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

  // ✅ FIX 1: Use container scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });


  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);

      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImagesLoaded(true);
        }
      };

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


  const renderFrame = useCallback((index: number) => {
    if (!imagesLoaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const img = images[index];
    if (!img || !img.complete) return;

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

    ctx.fillStyle = "#121212";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, [images, imagesLoaded]);

  // -------------------------------
  // Scroll → frame sync (optimized)
  // -------------------------------
  const lastFrameRef = useRef(-1);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!imagesLoaded || images.length === 0) return;

    // ✅ FIX 2: correct mapping
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.floor(latest * (FRAME_COUNT - 1))
    );

    // ✅ FIX 3: avoid re-rendering same frame
    if (frameIndex !== lastFrameRef.current) {
      renderFrame(frameIndex);
      lastFrameRef.current = frameIndex;
    }
  });

  // -------------------------------
  // Resize handling
  // -------------------------------
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      if (imagesLoaded) {
        const frameIndex = Math.min(
          FRAME_COUNT - 1,
          Math.floor(scrollYProgress.get() * (FRAME_COUNT - 1))
        );
        renderFrame(frameIndex);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded, scrollYProgress, renderFrame]);

  // -------------------------------
  // Initial frame render
  // -------------------------------
  useEffect(() => {
    if (imagesLoaded) {
      renderFrame(0);
    }
  }, [imagesLoaded, renderFrame]);

  return (
    <div ref={containerRef} id="home" className="relative h-[500vh] w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">

        {/* Loader */}
        {!imagesLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-50 bg-[#121212]">
            <div className="w-12 h-12 border-4 border-zinc-800 border-t-white rounded-full animate-spin"></div>
            <p className="mt-6 text-zinc-200 font-mono text-sm tracking-widest uppercase">
              Initializing...
            </p>
          </div>
        )}

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover transition-opacity duration-700 z-0"
          style={{ opacity: imagesLoaded ? 1 : 0 }}
        />

        {/* Overlay (text animations) */}
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}