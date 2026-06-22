export default function GradientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#050508]" />

      <div
        className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)",
          animation: "float 20s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -right-1/4 top-1/3 h-[500px] w-[500px] rounded-full opacity-25 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)",
          animation: "float 25s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full opacity-20 blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%)",
          animation: "float 18s ease-in-out infinite 2s",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050508]" />
    </div>
  );
}
