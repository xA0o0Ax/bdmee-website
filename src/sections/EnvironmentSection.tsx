import { useState } from 'react';

const ENVIRONMENTS = [
  {
    name: 'Martian Surface',
    status: 'Baseline Target',
    statusColor: '#34d399',
    description: 'C. sphaerospermum binds local silicate regolith to form the primary radiation exo-crust. Phosphite vascular system operates via gravity-fed circulation at 0.38g. The Martian sol (24h 37min) is close enough to Earth\'s 24-hour circadian period that bacterial gene regulation circuits function without recalibration.',
    challenge: 'High GCR flux (~230 mSv/year surface dose), low atmospheric pressure (0.6 kPa vs Earth\'s 101 kPa), perchlorates in regolith, −60°C average temperature',
    solution: 'Hyper-melanized fungal exo-crust attenuates GCR. Habitat internal pressurization. Perchlorate tolerance present in C. sphaerospermum wild type. Thermal management via metabolic heat generation and insulating mycelial structure.',
    why: 'Mars was selected as the baseline environment because the BDMEE parameter space was optimized for it: regolith provides silicate substrate for mycelial adhesion, atmospheric CO₂ supports cyanobacterial photosynthesis, and subsurface ice provides vascular fluid. Every other environment represents an adaptation from this validated baseline — not an independent design problem.',
    trl: '4',
  },
  {
    name: 'Ice Moons (Europa / Enceladus)',
    status: 'Adapted',
    statusColor: '#22d3ee',
    description: 'Regolith replaced by water-ice and silicate dust. Fungal matrix acts as a biological antifreeze and binder, generating a Pykrete-like composite (organic-ice) with compression strength exceeding pure ice by 4–14×. The deep-ocean proximity of these moons makes them scientifically critical habitation targets.',
    challenge: 'Extreme cold (−160°C surface), Europa\'s 540 mSv/day surface radiation from Jupiter\'s magnetosphere, limited sunlight for photosynthesis, ice substrate instead of silicate',
    solution: 'Thermal vascular system maintains 20°C habitat core via electrically-heated fluid. Outer exo-crust intentionally freezes into radiation-attenuating ice-armor composite. Photosynthesis replaced by chemolithotrophy from hydrothermal vent chemistry in subsurface deployment.',
    why: 'Europa and Enceladus are confirmed to harbor liquid water oceans beneath their ice shells — the most likely locations for extraterrestrial life in our solar system. A BDMEE habitat deployed above these oceans enables crewed scientific research that robotic probes cannot substitute. The ice-armor adaptation requires cold-active enzyme engineering (psychrophilic proteins, Tm ≈ 0–10°C) — a 12–18 month engineering task, not a fundamental redesign.',
    trl: '2',
  },
  {
    name: 'Zero-Gravity Transit Stations',
    status: 'Modified',
    statusColor: '#c084fc',
    description: 'No local regolith available. BDMEE is seeded onto pre-fabricated lightweight carbon-fiber scaffold frames. Vascular mesh relies on capillary-action microfluidics (<500 μm channel diameter) rather than gravity-driven circulation. Organisms function identically in microgravity — multiple ISS experiments confirm this.',
    challenge: 'Complete microgravity (no gravity-driven flow), no planetary material for substrate, radiation from both GCR and trapped radiation belts in medium Earth orbit',
    solution: 'Carbon-fiber scaffold substrate — mycelium binds to carbon fiber with tensile adhesion of ~2.1 MPa, comparable to silicate. Capillary-action microfluidics at sub-500 μm channel diameter maintain fluid flow via surface tension in 0g. Standard melanin shielding applies.',
    why: 'Long-duration transit between planetary bodies (7-month Earth-Mars, 2–3 year Earth-Jupiter) requires crew habitats that are not just launched-mass-efficient, but also continuously biologically active. A BDMEE transit station self-maintains, self-repairs micro-damage, and synthesizes medicine throughout the transit — capabilities that cannot be replicated with passive structural materials.',
    trl: '3',
  },
  {
    name: 'Venusian Surface',
    status: 'Non-Viable',
    statusColor: '#f87171',
    description: '465°C surface temperature and 92× Earth atmospheric pressure (9.2 MPa). All biological carbon-bond structures (proteins, nucleic acids, lipid membranes) denature completely above ~122°C — the absolute upper limit of known life. The BDMEE system cannot operate in this environment.',
    challenge: '465°C surface temperature, 9.2 MPa atmospheric pressure, sulfuric acid clouds, no liquid water, extreme CO₂ atmosphere',
    solution: 'System physical limit — biological carbon-bond architecture breaks down irreversibly at these temperatures. No known engineering pathway exists to overcome this constraint within carbon-based biology.',
    why: 'This non-viability boundary is stated explicitly because transparent failure-mode analysis is essential to credible engineering proposals. However, the Venusian atmosphere at 50–60 km altitude maintains temperatures of 0–60°C and pressures near 1 atm — conditions compatible with a separate, future BDMEE atmospheric variant operating in aerostatic balloon habitats. That is a distinct research program.',
    trl: 'N/A',
  },
];

export function EnvironmentSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-[120px]" style={{
      background: 'linear-gradient(180deg, #020610 0%, #050912 50%, #020610 100%)',
    }}>
      <div className="max-w-[1400px] mx-auto px-6">
        <span className="section-label reveal-on-scroll">ENVIRONMENTAL PORTABILITY</span>
        <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-normal text-bd-text leading-[0.88] tracking-[-0.03em] mt-4 reveal-on-scroll">
          One Blueprint.<br />Multiple Worlds.
        </h2>
        <p className="font-body text-base text-bd-text/60 mt-4 reveal-on-scroll max-w-[640px] leading-relaxed">
          Genetic programs are substrate-independent. The BDMEE biological blueprint re-expresses itself according to local environmental parameters — the same way a seed grows into a desert cactus or a rainforest tree depending on where it lands.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mt-16">
          {ENVIRONMENTS.map((env, i) => (
            <div
              key={i}
              className="glow-card p-8 transition-all duration-500 reveal-on-scroll cursor-default"
              style={{
                transitionDelay: `${i * 0.12}s`,
                borderColor: hoveredIdx === i ? `${env.statusColor}35` : `${env.statusColor}14`,
                boxShadow: hoveredIdx === i ? `0 0 40px ${env.statusColor}08, inset 0 0 30px ${env.statusColor}04` : 'none',
              }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-body text-lg font-semibold text-bd-text">{env.name}</h3>
                <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                  <span
                    className="px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-[0.12em] border"
                    style={{
                      borderColor: `${env.statusColor}40`,
                      color: env.statusColor,
                      backgroundColor: `${env.statusColor}10`,
                    }}
                  >
                    {env.status}
                  </span>
                  {env.trl !== 'N/A' && (
                    <span className="font-mono text-[10px] text-bd-text/30">TRL {env.trl}</span>
                  )}
                </div>
              </div>

              <p className="font-body text-sm text-bd-text/65 leading-relaxed">{env.description}</p>

              <div className="mt-5 space-y-3 pt-4 border-t border-bd-border">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-bd-text/35">Engineering Challenge</span>
                  <p className="font-body text-sm text-bd-text/55 mt-1 leading-relaxed">{env.challenge}</p>
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-bd-text/35">BDMEE Solution</span>
                  <p className="font-body text-sm text-bd-text/55 mt-1 leading-relaxed">{env.solution}</p>
                </div>
                <div className="p-3 rounded-lg mt-2" style={{ background: `${env.statusColor}07`, borderLeft: `2px solid ${env.statusColor}30` }}>
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] mb-1" style={{ color: `${env.statusColor}70` }}>Rationale</p>
                  <p className="font-body text-xs text-bd-text/50 leading-relaxed">{env.why}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Environmental Limits note */}
        <div className="mt-12 p-6 bg-bd-surface/40 border border-bd-border rounded-2xl reveal-on-scroll">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-bd-text/30 mb-2">Design Boundary Condition</p>
          <p className="font-body text-sm text-bd-text/55 max-w-[800px] leading-relaxed">
            The biological viability boundary for all BDMEE chassis organisms is defined by three physical parameters: temperature (−20°C to +60°C operating range, with spore dormancy viable down to −196°C), radiation flux (surface dose ≤2,000 mSv/year operational; spore dormancy radiation-resistant beyond this), and liquid water availability (minimum water activity aw ≥ 0.85 for active growth; spore dormancy water-independent). All target environments have been assessed against these parameters.
          </p>
        </div>
      </div>
    </section>
  );
}
