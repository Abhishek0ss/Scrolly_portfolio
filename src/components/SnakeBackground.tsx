"use client";
import { useEffect, useRef, useState } from "react";

export function SnakeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const gridSize = 25;

    let snake = [
      { x: Math.floor(width / 2 / gridSize) * gridSize, y: Math.floor(height / 2 / gridSize) * gridSize }
    ];

    let direction = { x: gridSize, y: 0 };
    const food = { x: 0, y: 0 };

    let manualMode = false;
    let manualTimeout: ReturnType<typeof setTimeout>;

    const spawnFood = () => {
      food.x = Math.floor(Math.random() * (width / gridSize)) * gridSize;
      food.y = Math.floor(Math.random() * (height / gridSize)) * gridSize;
    };

    spawnFood();

    // particles background
    const particles = Array.from({ length: 150 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.25 + 0.05
    }));

    // RESET GAME FUNCTION
    const resetGame = () => {
      snake = [
        { x: Math.floor(width / 2 / gridSize) * gridSize, y: Math.floor(height / 2 / gridSize) * gridSize }
      ];
      direction = { x: gridSize, y: 0 };
      spawnFood();
    };

    // RESET EVERY 4 MINUTES
    const resetInterval = setInterval(() => {
      resetGame();
    }, 240000);

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();

      if (["w", "a", "s", "d"].includes(key)) {
        manualMode = true;

        clearTimeout(manualTimeout);
        manualTimeout = setTimeout(() => {
          manualMode = false;
        }, 10000);

        const up = { x: 0, y: -gridSize };
        const down = { x: 0, y: gridSize };
        const left = { x: -gridSize, y: 0 };
        const right = { x: gridSize, y: 0 };

        if (key === "w" && direction.y === 0) direction = up;
        if (key === "s" && direction.y === 0) direction = down;
        if (key === "a" && direction.x === 0) direction = left;
        if (key === "d" && direction.x === 0) direction = right;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    let lastTime = 0;
    const speed = 80;
    let animationFrameId: number;

    const frame = (time: number) => {
      if (time - lastTime > speed) {
        lastTime = time;
        update();
      }

      draw();
      animationFrameId = requestAnimationFrame(frame);
    };

    const update = () => {
      const head = { x: snake[0].x, y: snake[0].y };

      if (!manualMode) {
        const dx = food.x - head.x;
        const dy = food.y - head.y;

        if (Math.abs(dx) > Math.abs(dy)) {
          if (dx > 0 && direction.x === 0) direction = { x: gridSize, y: 0 };
          else if (dx < 0 && direction.x === 0) direction = { x: -gridSize, y: 0 };
          else if (dy > 0 && direction.y === 0) direction = { x: 0, y: gridSize };
          else if (dy < 0 && direction.y === 0) direction = { x: 0, y: -gridSize };
        } else {
          if (dy > 0 && direction.y === 0) direction = { x: 0, y: gridSize };
          else if (dy < 0 && direction.y === 0) direction = { x: 0, y: -gridSize };
          else if (dx > 0 && direction.x === 0) direction = { x: gridSize, y: 0 };
          else if (dx < 0 && direction.x === 0) direction = { x: -gridSize, y: 0 };
        }
      }

      head.x += direction.x;
      head.y += direction.y;

      if (head.x >= width) head.x = 0;
      if (head.x < 0) head.x = Math.floor(width / gridSize) * gridSize;
      if (head.y >= height) head.y = 0;
      if (head.y < 0) head.y = Math.floor(height / gridSize) * gridSize;

      snake.unshift(head);

      if (Math.abs(head.x - food.x) < gridSize && Math.abs(head.y - food.y) < gridSize) {
        spawnFood();
      } else {
        snake.pop();
      }
    };

    const draw = () => {
      ctx.fillStyle = "rgba(18,18,18,0.3)";
      ctx.fillRect(0, 0, width, height);

      // PARTICLES
      ctx.shadowBlur = 2;
      ctx.shadowColor = "#ffffff";
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
        
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      
      ctx.shadowBlur = 15;
      ctx.shadowColor = "#d03732ff";
      ctx.fillStyle = "#d03732ff";
      ctx.beginPath();
      ctx.arc(food.x + gridSize / 2, food.y + gridSize / 2, gridSize / 3, 0, Math.PI * 2);
      ctx.fill();

      
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#c6d2d0ff";

      for (let i = 0; i < snake.length; i++) {
        const alpha = 1 - i / (snake.length + 5);

        ctx.fillStyle = `rgba(161, 161, 170, ${Math.max(0.4, alpha)})`;

        ctx.beginPath();
        ctx.arc(
          snake[i].x + gridSize / 2,
          snake[i].y + gridSize / 2,
          (gridSize - 2) / 2,
          0,
          Math.PI * 2
        );

        ctx.fill();
      }

      ctx.shadowBlur = 0;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    animationFrameId = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(manualTimeout);
      clearInterval(resetInterval);
    };
  }, []);

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 4.5) {
        setOpacity(0.65);
      } else {
        setOpacity(0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed inset-0 z-30 pointer-events-none mix-blend-lighten transition-opacity duration-1000"
      style={{ opacity }}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
