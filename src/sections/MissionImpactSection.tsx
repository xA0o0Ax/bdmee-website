import { useCountUp } from '../hooks/useCountUp';

function StatBlock({ value, label, title, description, suffix = '' }: {
  value: number;
  label: string;
  title: string;
  description: string;
  suffix?: string;
}) {
  const { ref, display } = useCountUp(value, 1500, suffix);

  return (
    <div ref={ref} className="flex-1 min-w-[220px] reveal-on-scroll">
      <span className="font-display text-[5rem] text-bd-text leading-none">{display}</span>
      <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-bd-text/50 mt-1">{label}</p>
      <h3 className="font-body text-lg font-medium text-bd-text mt-4">{title}</h3>
      <p className="font-body text-sm text-bd-text/60 mt-2">{description}</p>
    </div>
  );
}

export function MissionImpactSection() {
  return (
    <section id="mission" className="bg-bd-dark py-[120px]">
      <div className="max-w-[1400px] mx-auto px-6">
        <span className="section-label reveal-on-scroll">MISSION IMPACT</span>
        <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-normal text-bd-text leading-[0.85] tracking-[-0.02em] mt-4 reveal-on-scroll">
          Three Problems.<br />One Solution.
        </h2>
        <p className="font-body text-base text-bd-text/70 mt-4 reveal-on-scroll">
          By editing the DNA of our construction materials, BDMEE simultaneously solves three critical deep-space hurdles.
        </p>

        <div className="flex flex-col md:flex-row gap-12 mt-16">
          <StatBlock
            value={95}
            label="reduction"
            title="Mass-to-Orbit"
            description="Launching microscopic spores instead of steel and concrete. A single payload of dormant biology replaces tons of conventional construction material."
            suffix="%"
          />
          <div className="reveal-on-scroll flex-1 min-w-[220px]" style={{ transitionDelay: '0.15s' }}>
            <span className="font-display text-[5rem] text-bd-text leading-none">GCR</span>
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-bd-text/50 mt-1">attenuation</p>
            <h3 className="font-body text-lg font-medium text-bd-text mt-4">Radiation Shielding</h3>
            <p className="font-body text-sm text-bd-text/60 mt-2">
              Hyper-melanized radiotrophic fungal exo-crust attenuates Galactic Cosmic Rays. Validated in ISS experiments at LEO.
            </p>
          </div>
          <div className="reveal-on-scroll flex-1 min-w-[220px]" style={{ transitionDelay: '0.3s' }}>
            <span className="font-display text-[5rem] text-bd-text leading-none">∞</span>
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-bd-text/50 mt-1">shelf life</p>
            <h3 className="font-body text-lg font-medium text-bd-text mt-4">Medical Logistics</h3>
            <p className="font-body text-sm text-bd-text/60 mt-2">
              Bypassing pharmaceutical expiration dates via programmable on-site biosynthesis. Fresh drugs synthesized on demand, eliminating the cold-chain problem.
            </p>
          </div>
          <StatBlock
            value={60}
            label="cost reduction"
            title="Mission Cost"
            description="For the first time, deep space exploration becomes sustainable — not through better rockets, but through better biology."
            suffix="%"
          />
        </div>
      </div>
    </section>
  );
}
