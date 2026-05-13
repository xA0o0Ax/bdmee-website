const TIMELINE_ITEMS = [
  {
    day: 'T-0',
    label: 'Launch',
    title: 'Spore Payload Deployed',
    description: 'Microscopic dormant spores — the complete genetic blueprints for the entire habitat — are released onto the prepared surface. Total payload mass: grams, not tonnes.',
    why: 'Bacterial endospores achieve cryptobiosis: metabolic activity drops to near-zero, and DNA is encased in a calcium dipicolinate crystal lattice. Viking Lander sterilization protocols confirmed spore viability after conditions exceeding simulated Mars UV flux and desiccation. A gram of spores contains billions of construction units — each one a complete habitat blueprint waiting for the right environmental signal.',
    color: '#00ff87',
  },
  {
    day: 'T+3',
    label: 'Day 3',
    title: 'Germination Initiated',
    description: 'C. sphaerospermum spores detect substrate moisture and begin germinating. Mycelial threads extend and begin physically binding local regolith particles into the first structural matrix layer.',
    why: 'Germination is triggered by moisture detection — a property inherent to wild-type C. sphaerospermum that requires no additional engineering. The organism evolved in some of Earth\'s harshest environments and natively uses available water as its environmental go-signal. No external trigger needed; the local environment provides the cue.',
    color: '#00e5b0',
  },
  {
    day: 'T+7',
    label: 'Day 7',
    title: 'Vascular Mesh Primed',
    description: 'Hydrogel microfluidic channels are filled with phosphite (PO₃³⁻) solution. Nutrient circulation begins feeding all three organism layers. Synechocystis PCC 6803 begins photosynthetic CO₂ → O₂ conversion.',
    why: 'Phosphite solution serves a dual purpose: it is simultaneously the sole nutrient for all engineered organisms AND the primary biocontainment enforcement mechanism. A severed vascular line doesn\'t just starve local organisms — it removes their only viable metabolic lifeline. Vascular integrity is therefore both a life-support concern and a planetary protection concern, enforced by the same physical system.',
    color: '#b157ff',
  },
  {
    day: 'T+14',
    label: 'Day 14',
    title: 'Melanin Saturation Achieved',
    description: 'Hyper-melanization reaches critical density. The constitutive gpdA-driven pks1 overexpression has converted the fungal exo-crust into a radiation-opaque bio-composite capable of attenuating Galactic Cosmic Ray flux.',
    why: '21 days was calculated from organism doubling time (~3.6 hours under optimal conditions), melanin deposition rate (~0.3 mg/cm²/day under constitutive gpdA expression), and target shielding density of ≥20 g/cm² wet melanin biomass — the mass density estimated to achieve <50 mSv/year crew dose equivalent from GCR, equivalent to Earth surface background radiation.',
    color: '#ffb300',
  },
  {
    day: 'T+21',
    label: 'Day 21',
    title: 'Pharmacy Layer Validated',
    description: 'B. subtilis spore nodes in wall chambers are confirmed viable via diagnostic injection. Xylose pulse into Node A vascular channel triggers P_xylA promoter; Teriparatide analogue presence confirmed via ELISA biosensor.',
    why: 'Pharmacy validation is active, not passive. Rather than assuming spore viability, the diagnostic injection tests the full activation pathway: inducer delivery → promoter activation → transcription → translation → secretion → detection. A single diagnostic injection costs nothing and confirms the most critical life-support subsystem before any crew member enters the habitat.',
    color: '#ff7043',
  },
  {
    day: 'T+30',
    label: 'Day 30',
    title: 'Crew Arrival Authorized',
    description: 'Full habitat operational. Living walls provide radiation shielding, atmospheric processing, and on-demand pharmaceutical synthesis. The crew arrives not to a building — but to a symbiotic partner.',
    why: '30 days from dormant spore payload to fully operational habitat. By comparison, a conventional robotic construction sequence requires 12–18 months of hardware operation with no biological redundancy. BDMEE\'s timeline advantage is not engineering optimization — it is a fundamental property of biology: organisms self-organize and self-replicate. Construction is an emergent outcome of life itself.',
    color: '#00e676',
  },
];

export function DeploymentSection() {
  return (
    <section id="deployment" className="py-[120px]" style={{
      background: 'linear-gradient(180deg, #010a06 0%, #030d07 50%, #010a06 100%)',
    }}>
      <div className="max-w-[1400px] mx-auto px-6">
        <span className="section-label reveal-on-scroll">DEPLOYMENT SEQUENCE</span>
        <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-normal text-bd-text leading-[0.88] tracking-[-0.03em] mt-4 reveal-on-scroll">
          From Dormant Spores to<br />Living Habitat
        </h2>
        <p className="font-body text-base text-bd-text/60 mt-4 reveal-on-scroll max-w-[640px] leading-relaxed">
          T-0 to T+30 days: the habitat literally grows from dormant spores into a fully functional closed-loop ecosystem. Each phase is genetically programmed — no human intervention, no robotic assembly, no resupply required.
        </p>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Center Line */}
          <div
            className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5"
            style={{
              background: 'linear-gradient(180deg, rgba(0,255,135,0.0), rgba(0,255,135,0.4) 20%, rgba(0,229,176,0.4) 80%, rgba(0,229,176,0.0))',
            }}
          />

          <div className="space-y-14">
            {TIMELINE_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`relative flex items-start gap-8 reveal-on-scroll ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Dot */}
                <div
                  className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full z-10 mt-2"
                  style={{
                    background: item.color,
                    boxShadow: `0 0 14px ${item.color}70`,
                    border: `2px solid ${item.color}50`,
                  }}
                />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-[45%] ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                  <div
                    className="glow-card p-6"
                    style={{ borderColor: `${item.color}20` }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-display text-2xl" style={{ color: item.color }}>{item.day}</span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-bd-text/35">{item.label}</span>
                    </div>
                    <h3 className="font-body text-base font-semibold text-bd-text">{item.title}</h3>
                    <p className="font-body text-sm text-bd-text/60 mt-2 leading-relaxed">{item.description}</p>
                    <div className="mt-4 p-3 rounded-lg" style={{ background: `${item.color}07`, borderLeft: `2px solid ${item.color}35` }}>
                      <p className="font-mono text-[9px] uppercase tracking-[0.16em] mb-1" style={{ color: `${item.color}70` }}>Engineering Rationale</p>
                      <p className="font-body text-xs text-bd-text/55 leading-relaxed">{item.why}</p>
                    </div>
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block md:w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
