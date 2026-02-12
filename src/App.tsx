import { FluidBackground } from "./components/FluidBackground";

export function App() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <FluidBackground />

      <div className="relative z-10 flex flex-col items-center gap-8 px-6">
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "12px",
            padding: "60px 80px",
            backdropFilter: "blur(12px)",
            background: "rgba(255,255,255,0.03)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <div className="flex items-center gap-4">
            <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-white/20" />
            <span className="text-xs font-medium tracking-[0.35em] uppercase text-white/30">
              Est. 2025
            </span>
            <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-white/20" />
          </div>

          <div className="relative">
            <span className="acoustic-title-glow select-none" aria-hidden="true">
              Acoustic
            </span>
            <h1 className="acoustic-title select-none">Acoustic</h1>
          </div>

          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <p className="text-sm sm:text-base font-light tracking-widest uppercase text-white/25 text-center">
            The crew
          </p>
        </div>

        <div className="flex items-center gap-5 mt-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: `rgba(${150 + i * 20}, ${150 + i * 20}, ${155 + i * 20}, ${0.25 + i * 0.12})`,
                animation: `pulse-glow ${3 + i}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
