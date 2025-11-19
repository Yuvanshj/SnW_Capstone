import React, { useRef, useEffect } from "react";

interface StarfieldProps {
  count?: number;
  color?: string;
}

const Starfield: React.FC<StarfieldProps> = ({ count = 240, color = "#ffffff" }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number | null = null;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw();
    };

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < count; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const r = Math.random() * 1.6 + 0.2; // small radius
        const a = Math.random() * 0.85 + 0.1; // alpha
        ctx.beginPath();
        ctx.fillStyle = `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(
          color.slice(3, 5),
          16
        )}, ${parseInt(color.slice(5, 7), 16)}, ${a})`;
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    resize();
    window.addEventListener("resize", resize);

    // A gentle re-draw every 30-45s to slightly change distribution (keeps static feel)
    const redrawInterval = window.setInterval(() => {
      draw();
    }, 35000 + Math.random() * 10000);

    // no continuous animation needed for static dots; keep pointer-events off
    return () => {
      window.removeEventListener("resize", resize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      clearInterval(redrawInterval);
    };
  }, [count, color]);

  return (
    <canvas
      ref={canvasRef}
      className={`full-viewport-canvas pointer-events-none fixed top-0 left-0`}
      style={{ zIndex: -1 }}
      aria-hidden
    />
  );
};

export default Starfield;
