const SUBSYSTEMS = [
  {
    name: 'Exo-Crust (Shield)',
    organism: 'Cladosporium sphaerospermum',
    function: 'Binds Martian regolith; radiotrophic melanin production for high-LET radiation attenuation.',
    trl: '4',
    validation: 'ISS experiments (Shunk et al., 2020) validated radiotropism and shielding in LEO.',
  },
  {
    name: 'Vascular Mesh',
    organism: 'Abiotic / Hydrogel',
    function: 'Microfluidic circulation of synthetic nutrients (phosphite), water, and chemical inducers.',
    trl: '3',
    validation: 'Lab-scale living materials with vascular networks demonstrated at benchtop.',
  },
  {
    name: 'Bio-Pharmacy',
    organism: 'Bacillus subtilis (Spores)',
    function: 'On-demand synthesis of short-shelf-life therapeutics within habitat walls.',
    trl: '4',
    validation: 'Spore viability in space proven; robust terrestrial biomanufacturing chassis.',
  },
  {
    name: 'Atmospheric Lungs',
    organism: 'Synechocystis sp. PCC 6803',
    function: 'Photosynthetic carbon capture (CO2 → O2) and biomass generation.',
    trl: '4',
    validation: 'Extensive validation in space-equivalent photobioreactors (ESA MELiSSA project).',
  },
];

function ArchitectureDiagram() {
  return (
    <div className="relative w-full aspect-square max-w-[400px] mx-auto animate-float">
      <svg viewBox="0 0 400 400" className="w-full h-full">
        {/* Center circle */}
        <circle cx="200" cy="200" r="60" fill="none" stroke="rgba(242,243,240,0.1)" strokeWidth="1" />
        <text x="200" y="195" textAnchor="middle" fill="#f2f3f0" fontSize="10" fontFamily="Space Mono" letterSpacing="0.1em">BDMEE</text>
        <text x="200" y="210" textAnchor="middle" fill="rgba(242,243,240,0.5)" fontSize="8" fontFamily="Space Mono" letterSpacing="0.05em">CLOSED LOOP</text>

        {/* Cladosporium - top */}
        <circle cx="200" cy="80" r="50" fill="rgba(0,184,212,0.08)" stroke="rgba(0,184,212,0.3)" strokeWidth="1" />
        <circle cx="200" cy="80" r="8" fill="rgba(0,184,212,0.4)" />
        <text x="200" y="55" textAnchor="middle" fill="#00b8d4" fontSize="9" fontFamily="Space Grotesk" fontWeight="500">Cladosporium</text>
        <text x="200" y="68" textAnchor="middle" fill="rgba(0,184,212,0.6)" fontSize="7" fontFamily="Space Mono">sphaerospermum</text>

        {/* Bacillus - bottom left */}
        <circle cx="100" cy="290" r="50" fill="rgba(255,109,0,0.08)" stroke="rgba(255,109,0,0.3)" strokeWidth="1" />
        <circle cx="100" cy="290" r="8" fill="rgba(255,109,0,0.4)" />
        <text x="100" y="265" textAnchor="middle" fill="#ff6d00" fontSize="9" fontFamily="Space Grotesk" fontWeight="500">Bacillus</text>
        <text x="100" y="278" textAnchor="middle" fill="rgba(255,109,0,0.6)" fontSize="7" fontFamily="Space Mono">subtilis</text>

        {/* Synechocystis - bottom right */}
        <circle cx="300" cy="290" r="50" fill="rgba(0,200,83,0.08)" stroke="rgba(0,200,83,0.3)" strokeWidth="1" />
        <circle cx="300" cy="290" r="8" fill="rgba(0,200,83,0.4)" />
        <text x="300" y="265" textAnchor="middle" fill="#00c853" fontSize="9" fontFamily="Space Grotesk" fontWeight="500">Synechocystis</text>
        <text x="300" y="278" textAnchor="middle" fill="rgba(0,200,83,0.6)" fontSize="7" fontFamily="Space Mono">PCC 6803</text>

        {/* Connecting lines */}
        <line x1="200" y1="130" x2="200" y2="140" stroke="rgba(242,243,240,0.1)" strokeWidth="1" />
        <line x1="145" y1="250" x2="155" y2="240" stroke="rgba(242,243,240,0.1)" strokeWidth="1" />
        <line x1="255" y1="240" x2="245" y2="250" stroke="rgba(242,243,240,0.1)" strokeWidth="1" />

        {/* Curved connections */}
        <path d="M 160 110 Q 200 150 140 240" fill="none" stroke="rgba(242,243,240,0.06)" strokeWidth="1" />
        <path d="M 240 110 Q 200 150 260 240" fill="none" stroke="rgba(242,243,240,0.06)" strokeWidth="1" />
        <path d="M 150 290 Q 200 300 250 290" fill="none" stroke="rgba(242,243,240,0.06)" strokeWidth="1" />
      </svg>
    </div>
  );
}

export function ArchitectureSection() {
  return (
    <section id="architecture" className="bg-bd-dark py-[120px]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column - 55% */}
          <div className="lg:w-[55%]">
            <span className="section-label reveal-on-scroll">SYSTEM ARCHITECTURE</span>
            <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-normal text-bd-text leading-[0.85] tracking-[-0.02em] mt-4 reveal-on-scroll">
              The Multi-Trophic<br />Myco-Foundry
            </h2>
            <p className="font-body text-base text-bd-text/70 max-w-[480px] mt-6 reveal-on-scroll">
              Rather than relying on a single monolithic &quot;super-bug,&quot; BDMEE utilizes a distributed genetic architecture across three distinct organisms, decoupling structural integrity from metabolic payload production.
            </p>
            <p className="font-body text-base text-bd-text/70 max-w-[480px] mt-4 reveal-on-scroll">
              The system operates as a closed-loop bio-industrial ecosystem. By shipping programmable, dormant biology rather than static steel and degrading pharmaceuticals, this ecosystem ensures that future explorers carry the <em>information</em> to survive — not the mass.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 reveal-on-scroll">
              <div>
                <span className="font-display text-4xl text-bd-text">60%</span>
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-bd-text/50 mt-1">Mission Cost Reduction</p>
              </div>
              <div>
                <span className="font-display text-4xl text-bd-text">95%</span>
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-bd-text/50 mt-1">Mass-to-Orbit Savings</p>
              </div>
              <div>
                <span className="font-display text-4xl text-bd-text">0</span>
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-bd-text/50 mt-1">Pharmaceutical Expiration</p>
              </div>
            </div>

            {/* TRL Badge */}
            <div className="mt-10 reveal-on-scroll">
              <div className="inline-flex items-center gap-4 px-6 py-4 bg-bd-surface/60 border border-bd-border rounded-xl">
                <div>
                  <span className="font-display text-3xl text-bd-accent">TRL 2</span>
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-bd-text/50 mt-1">Integrated System</p>
                </div>
                <div className="w-px h-10 bg-bd-border" />
                <p className="font-body text-sm text-bd-text/60 max-w-[280px]">
                  Concept Formulated &amp; Genetic Pathways Modeled. Sub-systems validated at higher readiness levels.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - 45% */}
          <div className="lg:w-[45%] flex items-center justify-center reveal-on-scroll">
            <ArchitectureDiagram />
          </div>
        </div>

        {/* Sub-System Table */}
        <div className="mt-20 reveal-on-scroll">
          <h3 className="font-body text-lg font-medium text-bd-text mb-6">Sub-System Component Breakdown</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-bd-border">
                  <th className="text-left font-mono text-[11px] uppercase tracking-[0.1em] text-bd-text/50 pb-3 pr-4">Sub-System</th>
                  <th className="text-left font-mono text-[11px] uppercase tracking-[0.1em] text-bd-text/50 pb-3 pr-4">Primary Organism</th>
                  <th className="text-left font-mono text-[11px] uppercase tracking-[0.1em] text-bd-text/50 pb-3 pr-4">Function</th>
                  <th className="text-left font-mono text-[11px] uppercase tracking-[0.1em] text-bd-text/50 pb-3 pr-4">TRL</th>
                  <th className="text-left font-mono text-[11px] uppercase tracking-[0.1em] text-bd-text/50 pb-3">Validation</th>
                </tr>
              </thead>
              <tbody>
                {SUBSYSTEMS.map((sys, i) => (
                  <tr key={i} className="border-b border-bd-border/50">
                    <td className="font-body text-sm text-bd-text py-4 pr-4">{sys.name}</td>
                    <td className="font-body text-sm text-bd-text/70 py-4 pr-4 italic">{sys.organism}</td>
                    <td className="font-body text-sm text-bd-text/70 py-4 pr-4 max-w-[300px]">{sys.function}</td>
                    <td className="py-4 pr-4">
                      <span className="font-mono text-xs text-bd-accent">{sys.trl}</span>
                    </td>
                    <td className="font-body text-sm text-bd-text/50 py-4 max-w-[300px]">{sys.validation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
