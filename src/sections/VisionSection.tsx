export function VisionSection() {
  return (
    <section className="py-[180px]" style={{
      background: 'linear-gradient(180deg, #020610 0%, #050a18 40%, #020610 100%)',
    }}>
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(34,211,238,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-[900px] mx-auto px-6 text-center">
        <span className="section-label reveal-on-scroll justify-center">THE LONG VIEW</span>

        <h2 className="font-display text-[clamp(2.2rem,4.5vw,4rem)] font-normal text-bd-text leading-[0.9] tracking-[-0.03em] mt-6 reveal-on-scroll">
          Not surviving on Mars.<br />
          <span style={{
            background: 'linear-gradient(135deg, #22d3ee 0%, #4ade80 50%, #c084fc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Belonging there.
          </span>
        </h2>

        <blockquote className="font-display text-[clamp(1.3rem,2.6vw,2.2rem)] font-normal text-bd-text/70 leading-[1.25] mt-10 reveal-on-scroll">
          "Because we didn't bring a building.<br />We brought life itself."
        </blockquote>

        <p className="font-body text-base text-bd-text/55 mt-10 leading-relaxed reveal-on-scroll">
          BDMEE is the bridge between Earth biology and space infrastructure — the moment when life stops being cargo and starts being the vehicle. A Mars base that repairs itself. Walls that synthesize medicine. Surfaces that breathe. An ecosystem that adapts to threats in real time rather than waiting for a resupply from a planet 20 light-minutes away.
        </p>

        <p className="font-body text-base text-bd-text/55 mt-5 leading-relaxed reveal-on-scroll">
          This is not science fiction. Every organism in this proposal exists. Every genetic modification described uses established techniques. Every pathway has been independently validated in a relevant laboratory or spaceflight environment. What has never been done is their integration into a single, coherent biological architecture — and that is precisely what this proposal undertakes.
        </p>

        {/* Vision stats */}
        <div className="flex flex-wrap justify-center gap-12 mt-16 reveal-on-scroll">
          {[
            { v: '3', l: 'Known Organisms', sub: 'No novel life forms required' },
            { v: 'TRL 2', l: 'System Readiness', sub: 'Clear pathway to TRL 4 in 5 years' },
            { v: '25mo', l: 'Mission Duration', sub: 'Full pharmaceutical coverage' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <span className="font-display text-3xl gradient-text-cyan">{s.v}</span>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-bd-text/40 mt-1">{s.l}</p>
              <p className="font-body text-xs text-bd-text/30 mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-16 w-full h-px reveal-on-scroll" style={{
          background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.25), rgba(74,222,128,0.25), rgba(192,132,252,0.25), transparent)',
        }} />
      </div>
    </section>
  );
}
