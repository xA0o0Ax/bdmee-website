import { useState } from 'react';

const ENVIRONMENTS = [
  {
    name: 'Martian Surface',
    status: 'Baseline',
    statusColor: '#00c853',
    description: 'C. sphaerospermum binds local silicate regolith to form the primary radiation exo-crust. Phosphite vascular system operates normally.',
    challenge: 'High GCR radiation, low atmospheric pressure',
    solution: 'Hyper-melanized fungal exo-crust attenuates radiation; synthetic auxotrophy prevents planetary contamination.',
  },
  {
    name: 'Ice Moons (Europa / Enceladus)',
    status: 'Adapted',
    statusColor: '#ffd600',
    description: 'Regolith replaced by water-ice and silicate dust. Fungal matrix acts as biological antifreeze and binder, generating Pykrete-like composite.',
    challenge: 'Extreme cold, Jupiter/Saturn radiation',
    solution: 'Thermal vascular system maintains 20°C core; outer exo-crust freezes into ice-armor.',
  },
  {
    name: 'Zero-Gravity Transit Stations',
    status: 'Modified',
    statusColor: '#00b8d4',
    description: 'No local regolith available. BDMEE seeded onto lightweight carbon-fiber scaffold. Vascular mesh relies on capillary action and micro-pumps.',
    challenge: 'Complete microgravity, no planetary material',
    solution: 'Carbon-fiber scaffold substrate; capillary-action nutrient circulation replaces gravity-fed flow.',
  },
  {
    name: 'Venusian Surface',
    status: 'Non-Viable',
    statusColor: '#ff3d00',
    description: '475°C surface temperature and 92× Earth atmospheric pressure. Biological carbon-bonds denature completely. The system cannot survive.',
    challenge: '900°F, crushing pressure',
    solution: 'System limit — biological carbon-bond breakdown is irreversible at these temperatures.',
  },
];

export function EnvironmentSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="bg-bd-dark py-[120px]">
      <div className="max-w-[1400px] mx-auto px-6">
        <span className="section-label reveal-on-scroll">ENVIRONMENTAL PORTABILITY</span>
        <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-normal text-bd-text leading-[0.85] tracking-[-0.02em] mt-4 reveal-on-scroll">
          One Blueprint.<br />Infinite Worlds.
        </h2>
        <p className="font-body text-base text-bd-text/70 mt-4 reveal-on-scroll">
          Biology is inherently adaptable. The BDMEE calibrates to its target environment — from Martian regolith to Europan ice.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {ENVIRONMENTS.map((env, i) => (
            <div
              key={i}
              className="bg-bd-surface/60 border border-bd-border rounded-2xl p-10 transition-all duration-500 reveal-on-scroll"
              style={{
                transitionDelay: `${i * 0.15}s`,
                transform: hoveredIdx === i ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: hoveredIdx === i ? `0 0 40px ${env.statusColor}15` : 'none',
              }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-body text-xl font-medium text-bd-text">{env.name}</h3>
                <span
                  className="px-4 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-[0.1em] border"
                  style={{
                    borderColor: env.statusColor,
                    color: env.statusColor,
                    backgroundColor: `${env.statusColor}15`,
                  }}
                >
                  {env.status}
                </span>
              </div>
              <p className="font-body text-sm text-bd-text/70">{env.description}</p>
              <div className="mt-6 pt-4 border-t border-bd-border space-y-3">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-bd-text/40">Challenge</span>
                  <p className="font-body text-sm text-bd-text/60 mt-1">{env.challenge}</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-bd-text/40">Solution</span>
                  <p className="font-body text-sm text-bd-text/60 mt-1">{env.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
