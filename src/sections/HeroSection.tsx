import { useEffect, useRef } from 'react';
import { BioParticles } from '../components/BioParticles';

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
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        src="/videos/hero-video.mp4"
        poster="/images/hero-bg.jpg"
        loop
        muted
        autoPlay
        playsInline
      />

      {/* BioParticles overlay */}
      <BioParticles count={18} />

      {/* Deep space gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-t from-bd-dark via-bd-dark/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-bd-dark/90 via-transparent to-transparent" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 75% 25%, rgba(0,255,135,0.06) 0%, transparent 55%)',
      }} />

      {/* Scan line effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.012]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,135,1) 2px, rgba(0,255,135,1) 3px)',
          backgroundSize: '100% 4px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-[14vh] px-6 max-w-[1400px] mx-auto">
        {/* Badge */}
        <div className="absolute top-[120px] left-6">
          <span className="pill-badge bg-bd-dark/70 backdrop-blur-xl border border-bd-accent/25 text-bd-accent/90">
            Open-Source Deep Space Biology · TRL 2
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-[13vw] font-normal leading-[0.85] tracking-[-0.04em] bio-gradient-text">
          BDMEE
        </h1>
        <h2
          className="font-display text-[6vw] font-normal leading-[0.88] tracking-[-0.02em] -mt-2 bio-gradient-text"
        >
          The Living Frontier
        </h2>

        {/* Tagline */}
        <p className="font-body text-[clamp(0.95rem,1.3vw,1.15rem)] text-bd-text/55 mt-5 max-w-[520px] leading-relaxed">
          Programming Life to Build Worlds — where DNA is the blueprint, biology is the manufacturing process, and the organism is both factory and product.
        </p>

        {/* Green glow line above stat bar */}
        <div className="mt-10 h-px max-w-[560px]" style={{
          background: 'linear-gradient(90deg, rgba(0,255,135,0.6), rgba(0,229,176,0.3), transparent)',
        }} />

        {/* Bottom stat bar */}
        <div className="flex gap-10 mt-5">
          {[
            { v: 'TRL 2', l: 'Technology Readiness' },
            { v: '3', l: 'Engineered Organisms' },
            { v: '95%', l: 'Mass Reduction' },
            { v: '25mo', l: 'Mission Coverage' },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="font-display text-2xl text-bd-accent glow-text">{s.v}</span>
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
        <div className="w-px h-8 bg-gradient-to-b from-bd-accent/60 to-transparent animate-scroll-bounce" />
      </div>
    </section>
  );
}
