export function GradientBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Base gradient - flowing from top to bottom */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59, 164, 255, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 30%, rgba(0, 194, 255, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse 70% 50% at 20% 60%, rgba(124, 58, 237, 0.04) 0%, transparent 50%),
            radial-gradient(ellipse 80% 60% at 60% 90%, rgba(59, 164, 255, 0.06) 0%, transparent 50%),
            linear-gradient(180deg, #0a0b0d 0%, #0d0e12 30%, #0a0b0d 60%, #0d0e12 100%)
          `,
        }}
      />

      {/* Subtle grid pattern overlay */}
      <div className="fixed inset-0 -z-10 grid-pattern opacity-50" />

      {/* Noise texture for depth */}
      <div className="fixed inset-0 -z-10 noise" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
