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
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero-video.mp4"
        poster="/images/hero-bg.jpg"
        loop
        muted
        autoPlay
        playsInline
      />

      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-bd-dark via-bd-dark/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-bd-dark/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-[15vh] px-6 max-w-[1400px] mx-auto">
        {/* Badge */}
        <div className="absolute top-[120px] left-6">
          <span className="pill-badge bg-bd-dark/60 backdrop-blur-lg border border-bd-text/15 text-bd-text">
            NASA NIAC Phase I Concept &middot; TRL 2
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-[15vw] font-normal text-bd-text leading-[0.85] tracking-[-0.03em]">
          BDMEE
        </h1>
        <h2 className="font-display text-[7.5vw] font-normal text-bd-text leading-[0.85] tracking-[-0.02em] -mt-2">
          The Living Frontier
        </h2>

        {/* Subline */}
        <p className="font-body text-[clamp(1rem,1.5vw,1.25rem)] text-bd-text/60 mt-4 max-w-lg">
          Programming Life to Build Worlds
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-bd-text/40">
          Scroll
        </span>
        <div className="w-px h-6 bg-bd-text/40 animate-scroll-bounce" />
      </div>
    </section>
  );
}
