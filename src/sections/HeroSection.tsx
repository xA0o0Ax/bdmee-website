import { useEffect, useRef } from 'react';

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        src="/videos/hero-video.mp4"
        poster="/images/hero-bg.jpg"
        loop
        muted
        autoPlay
        playsInline
      />

      {/* Deep space gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-t from-bd-dark via-bd-dark/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-bd-dark/80 via-transparent to-transparent" />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 80% 20%, rgba(34,211,238,0.04) 0%, transparent 60%)',
      }} />

      {/* Scan line effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34,211,238,1) 2px, rgba(34,211,238,1) 3px)',
          backgroundSize: '100% 4px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-[14vh] px-6 max-w-[1400px] mx-auto">
        {/* Badge */}
        <div className="absolute top-[120px] left-6">
          <span className="pill-badge bg-bd-dark/70 backdrop-blur-xl border border-bd-accent/20 text-bd-accent/80">
            Deep Space Colonization Concept &middot; TRL 2
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-[13vw] font-normal text-bd-text leading-[0.85] tracking-[-0.04em]">
          BDMEE
        </h1>
        <h2 className="font-display text-[6.5vw] font-normal leading-[0.88] tracking-[-0.02em] -mt-2"
          style={{
            background: 'linear-gradient(135deg, #cde4ff 0%, #22d3ee 50%, #4ade80 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          The Living Frontier
        </h2>

        {/* Subline */}
        <p className="font-body text-[clamp(1rem,1.4vw,1.2rem)] text-bd-text/55 mt-5 max-w-lg leading-relaxed">
          Programming Life to Build Worlds — where DNA is the blueprint, organisms are the construction crew, and evolution is the quality-control system.
        </p>

        {/* Bottom stats bar */}
        <div className="flex gap-8 mt-10">
          {[
            { v: 'TRL 2', l: 'Technology Readiness' },
            { v: '3', l: 'Engineered Organisms' },
            { v: '95%', l: 'Mass Reduction' },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="font-display text-2xl text-bd-accent">{s.v}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-bd-text/35">{s.l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-bd-text/30">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-bd-accent/50 to-transparent animate-scroll-bounce" />
      </div>
    </section>
  );
}
