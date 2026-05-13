const TIMELINE_ITEMS = [
  {
    day: 'T-0',
    label: 'Launch',
    title: 'Spore Payload Deployed',
    description: 'Microscopic dormant spores — genetic blueprints for the entire habitat — are released onto the Martian surface. Total payload mass: a fraction of conventional steel structures.',
    align: 'left' as const,
  },
  {
    day: 'T+3',
    label: 'Day 3',
    title: 'Germination Begins',
    description: 'Cladosporium sphaerospermum spores detect moisture and begin germinating. Mycelial threads start binding local regolith particles into the first structural matrix.',
    align: 'right' as const,
  },
  {
    day: 'T+7',
    label: 'Day 7',
    title: 'Vascular Mesh Activates',
    description: 'Hydrogel microfluidic channels are primed with phosphite solution. Nutrient circulation begins, feeding all three organism layers. Synechocystis begins photosynthetic O₂ production.',
    align: 'left' as const,
  },
  {
    day: 'T+14',
    label: 'Day 14',
    title: 'Melanin Saturation',
    description: 'Hyper-melanization reaches critical density. The gpdA-driven pks1 overexpression has converted the fungal exo-crust into a radiation-opaque bio-composite. Galactic Cosmic Ray attenuation begins.',
    align: 'right' as const,
  },
  {
    day: 'T+21',
    label: 'Day 21',
    title: 'Pharmacy Layer Online',
    description: 'Bacillus subtilis spores in wall nodes are confirmed viable. First diagnostic injection of xylose confirms Teriparatide synthesis. All three drug pathways validated.',
    align: 'left' as const,
  },
  {
    day: 'T+30',
    label: 'Day 30',
    title: 'Crew Arrival',
    description: 'Full habitat operational. Living walls provide radiation shielding, atmospheric processing, and on-demand pharmaceutical synthesis. The crew arrives not to a building — but to a symbiotic partner.',
    align: 'right' as const,
  },
];

export function DeploymentSection() {
  return (
    <section id="deployment" className="bg-bd-dark py-[120px]">
      <div className="max-w-[1400px] mx-auto px-6">
        <span className="section-label reveal-on-scroll">DEPLOYMENT SEQUENCE</span>
        <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-normal text-bd-text leading-[0.85] tracking-[-0.02em] mt-4 reveal-on-scroll">
          From Dormant Spores to<br />Living Habitat
        </h2>
        <p className="font-body text-base text-bd-text/70 mt-4 reveal-on-scroll">
          T-0 to T+30 days: the habitat literally grows from dormant spores into a fully functional ecosystem.
        </p>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Center Line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-bd-border" />

          <div className="space-y-16">
            {TIMELINE_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`relative flex items-start gap-8 reveal-on-scroll ${
                  item.align === 'right' ? 'md:flex-row-reverse' : ''
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-bd-accent bg-bd-dark z-10 mt-1.5" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-[45%] ${item.align === 'right' ? 'md:text-right' : ''}`}>
                  <div className={`bg-bd-surface/60 border border-bd-border rounded-xl p-6 ${item.align === 'right' ? 'md:ml-auto' : ''}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-display text-2xl text-bd-accent">{item.day}</span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-bd-text/40">
                        {item.label}
                      </span>
                    </div>
                    <h3 className="font-body text-lg font-medium text-bd-text">{item.title}</h3>
                    <p className="font-body text-sm text-bd-text/60 mt-2">{item.description}</p>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
