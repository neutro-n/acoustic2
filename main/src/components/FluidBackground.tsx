import { useEffect, useRef } from "react";

export function FluidBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Subtle mouse-reactive parallax for the blobs
    let animId: number;
    let mouseX = 0.5;
    let mouseY = 0.5;
    let currentX = 0.5;
    let currentY = 0.5;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth;
      mouseY = e.clientY / window.innerHeight;
    };

    const animate = () => {
      // Smooth lerp towards mouse position
      currentX += (mouseX - currentX) * 0.02;
      currentY += (mouseY - currentY) * 0.02;

      if (containerRef.current) {
        const offsetX = (currentX - 0.5) * 20;
        const offsetY = (currentY - 0.5) * 20;
        containerRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      }

      animId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden" style={{ background: "#06060b" }}>
      {/* Fluid blobs container - reacts to mouse */}
      <div ref={containerRef} className="absolute inset-[-10%] will-change-transform">
        <div className="fluid-blob blob-1" />
        <div className="fluid-blob blob-2" />
        <div className="fluid-blob blob-3" />
        <div className="fluid-blob blob-4" />
        <div className="fluid-blob blob-5" />
        <div className="fluid-blob blob-6" />
      </div>

      {/* Vignette overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(6,6,11,0.6) 100%)",
        }}
      />

      {/* Noise texture overlay */}
      <div className="noise-overlay" />
    </div>
  );
}
