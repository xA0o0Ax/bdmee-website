const SUBSYSTEMS = [
  {
    name: 'Exo-Crust Shield',
    organism: 'Cladosporium sphaerospermum',
    tag: 'organism-tag-clado',
    function: 'Binds Martian regolith via fungal mycelium; constitutive melanin production attenuates high-LET Galactic Cosmic Rays (GCR) and solar particle events (SPE).',
    trl: '4',
    validation: 'ISS exposure experiments (Mura et al., 2020) validated radiotrophic growth and melanin accumulation in Low Earth Orbit radiation flux equivalent to ~15% of Mars surface dose.',
    why: 'Melanin is the only known biological polymer that absorbs and dissipates ionizing radiation as chemical energy rather than heat — the same process Chernobyl fungi exploit. No engineered polymer replicates this property at equivalent areal density.',
  },
  {
    name: 'Vascular Mesh',
    organism: 'Abiotic / Hydrogel Composite',
    tag: '',
    function: 'Microfluidic circulation of synthetic phosphite nutrient, water, and chemical inducers to all biological nodes. Acts as the habitat\'s arterial system.',
    trl: '3',
    validation: 'Living materials with integrated vascular networks demonstrated at benchtop scale; microfluidic phosphite delivery validated in auxotrophic E. coli models.',
    why: 'Passive diffusion fails at habitat scales — nutrient gradients fall to zero within millimeters of a living mycelial matrix. Active vascular circulation ensures uniform metabolic support across the entire structure, and is the primary biocontainment enforcement mechanism (phosphite supply = survival).',
  },
  {
    name: 'Bio-Pharmacy Layer',
    organism: 'Bacillus subtilis (Spores)',
    tag: 'organism-tag-bacillus',
    function: 'Dormant spore nodes embedded in walls synthesize fresh therapeutics on-demand upon chemical inducer injection into the vascular node.',
    trl: '4',
    validation: 'B. subtilis spore viability in space radiation and vacuum confirmed via ISS experiments; robust terrestrial biomanufacturing chassis with >40 years validation.',
    why: 'B. subtilis spores are the most radiation-resistant prokaryotic state known outside extreme thermophiles. A spore is not a fragile living thing awaiting death — it is a dormant genome awaiting activation. This property converts an engineering liability (space radiation) into a feature: pharmacy nodes become more stable over time, not less.',
  },
  {
    name: 'Atmospheric Lungs',
    organism: 'Synechocystis sp. PCC 6803',
    tag: 'organism-tag-synecho',
    function: 'Photosynthetic CO₂ fixation producing O₂ and biomass; nitrogen cycling via nitrogenase pathway supplements habitat atmospheric management.',
    trl: '4',
    validation: 'Extensive validation in MELiSSA (Micro-Ecological Life Support System Alternative) closed-loop photobioreactors by the European Space Agency. PCC 6803 grown under Mars-simulated atmospheric CO₂ concentrations (95% CO₂).',
    why: 'Synechocystis PCC 6803 was selected because it is the only photosynthetic organism with a fully sequenced, completely annotated genome and a mature genetic toolkit. Every metabolic pathway is known, every regulator is characterized — making it the most predictable chassis for closed-loop life support engineering.',
  },
];

function ArchitectureDiagram() {
  return (
    <div className="relative w-full aspect-square max-w-[420px] mx-auto animate-float">
      <svg viewBox="0 0 400 400" className="w-full h-full">
        {/* Outer ring */}
        <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(34,211,238,0.06)" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="200" cy="200" r="140" fill="none" stroke="rgba(34,211,238,0.04)" strokeWidth="1" />

        {/* Center hub */}
        <circle cx="200" cy="200" r="52" fill="rgba(34,211,238,0.04)" stroke="rgba(34,211,238,0.25)" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="30" fill="rgba(34,211,238,0.08)" stroke="rgba(34,211,238,0.15)" strokeWidth="1" />
        <text x="200" y="196" textAnchor="middle" fill="#cde4ff" fontSize="9" fontFamily="Space Mono" letterSpacing="0.1em">BDMEE</text>
        <text x="200" y="209" textAnchor="middle" fill="rgba(34,211,238,0.6)" fontSize="7" fontFamily="Space Mono" letterSpacing="0.06em">CLOSED LOOP</text>

        {/* Cladosporium — top */}
        <circle cx="200" cy="72" r="46" fill="rgba(34,211,238,0.06)" stroke="rgba(34,211,238,0.35)" strokeWidth="1.5" />
        <circle cx="200" cy="72" r="10" fill="rgba(34,211,238,0.5)" />
        <circle cx="200" cy="72" r="4" fill="rgba(34,211,238,0.9)" />
        <text x="200" y="48" textAnchor="middle" fill="#22d3ee" fontSize="8.5" fontFamily="Space Grotesk" fontWeight="600">Cladosporium</text>
        <text x="200" y="60" textAnchor="middle" fill="rgba(34,211,238,0.55)" fontSize="7" fontFamily="Space Mono">SHIELD / STRUCTURE</text>

        {/* Bacillus — bottom left */}
        <circle cx="92" cy="296" r="46" fill="rgba(251,146,60,0.06)" stroke="rgba(251,146,60,0.35)" strokeWidth="1.5" />
        <circle cx="92" cy="296" r="10" fill="rgba(251,146,60,0.5)" />
        <circle cx="92" cy="296" r="4" fill="rgba(251,146,60,0.9)" />
        <text x="92" y="270" textAnchor="middle" fill="#fb923c" fontSize="8.5" fontFamily="Space Grotesk" fontWeight="600">Bacillus</text>
        <text x="92" y="282" textAnchor="middle" fill="rgba(251,146,60,0.55)" fontSize="7" fontFamily="Space Mono">PHARMACY</text>

        {/* Synechocystis — bottom right */}
        <circle cx="308" cy="296" r="46" fill="rgba(74,222,128,0.06)" stroke="rgba(74,222,128,0.35)" strokeWidth="1.5" />
        <circle cx="308" cy="296" r="10" fill="rgba(74,222,128,0.5)" />
        <circle cx="308" cy="296" r="4" fill="rgba(74,222,128,0.9)" />
        <text x="308" y="270" textAnchor="middle" fill="#4ade80" fontSize="8.5" fontFamily="Space Grotesk" fontWeight="600">Synechocystis</text>
        <text x="308" y="282" textAnchor="middle" fill="rgba(74,222,128,0.55)" fontSize="7" fontFamily="Space Mono">ATMOSPHERE</text>

        {/* Connection lines */}
        <line x1="200" y1="118" x2="200" y2="148" stroke="rgba(34,211,238,0.2)" strokeWidth="1.5" strokeDasharray="3 4" />
        <line x1="152" y1="245" x2="137" y2="258" stroke="rgba(251,146,60,0.2)" strokeWidth="1.5" strokeDasharray="3 4" />
        <line x1="248" y1="245" x2="263" y2="258" stroke="rgba(74,222,128,0.2)" strokeWidth="1.5" strokeDasharray="3 4" />

        {/* Curved connections between organisms */}
        <path d="M 148 102 Q 120 200 130 265" fill="none" stroke="rgba(205,228,255,0.07)" strokeWidth="1" />
        <path d="M 252 102 Q 280 200 270 265" fill="none" stroke="rgba(205,228,255,0.07)" strokeWidth="1" />
        <path d="M 138 296 Q 200 310 262 296" fill="none" stroke="rgba(205,228,255,0.07)" strokeWidth="1" />

        {/* Vascular flow indicators */}
        <circle cx="200" cy="133" r="2.5" fill="rgba(34,211,238,0.5)" />
        <circle cx="144" cy="251" r="2.5" fill="rgba(251,146,60,0.5)" />
        <circle cx="256" cy="251" r="2.5" fill="rgba(74,222,128,0.5)" />
      </svg>
    </div>
  );
}

export function ArchitectureSection() {
  return (
    <section id="architecture" className="bg-bd-dark py-[120px]" style={{
      background: 'linear-gradient(180deg, #020610 0%, #040b18 50%, #020610 100%)',
    }}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column */}
          <div className="lg:w-[55%]">
            <span className="section-label reveal-on-scroll">SYSTEM ARCHITECTURE</span>
            <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-normal text-bd-text leading-[0.88] tracking-[-0.03em] mt-4 reveal-on-scroll">
              The Multi-Trophic<br />Myco-Foundry
            </h2>

            {/* Why distributed architecture */}
            <div className="mt-6 reveal-on-scroll">
              <p className="font-body text-base text-bd-text/70 max-w-[480px] leading-relaxed">
                Rather than a single monolithic "super-organism," BDMEE distributes biological functions across three distinct specialists — each optimized for its role without metabolic interference from competing functions.
              </p>
              <div className="mt-4 p-4 bg-bd-surface/50 border border-bd-accent/15 rounded-xl">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-bd-accent mb-2">Engineering Rationale</p>
                <p className="font-body text-sm text-bd-text/65 leading-relaxed">
                  Melanin synthesis and pharmaceutical biosynthesis compete for the same precursor metabolic pathways (acetyl-CoA, malonyl-CoA). Forcing both functions into one organism creates antagonistic trade-offs: maximum shielding output comes at the cost of pharmaceutical yield, and vice versa. Distributing functions across three strains eliminates this competition and — critically — eliminates single-point failure: no one genetic event can collapse the entire habitat system.
                </p>
              </div>
            </div>

            <p className="font-body text-base text-bd-text/65 max-w-[480px] mt-5 reveal-on-scroll leading-relaxed">
              The system operates as a closed-loop bio-industrial ecosystem. By shipping programmable, dormant biology rather than static steel and degrading pharmaceuticals, this ecosystem ensures that future explorers carry the <em>information</em> to survive — not the mass.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 reveal-on-scroll">
              {[
                { v: '60%', l: 'Mission Cost Reduction' },
                { v: '95%', l: 'Mass-to-Orbit Savings' },
                { v: '0', l: 'Pharmaceutical Expiration' },
              ].map((s, i) => (
                <div key={i}>
                  <span className="font-display text-4xl gradient-text-cyan">{s.v}</span>
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-bd-text/40 mt-1">{s.l}</p>
                </div>
              ))}
            </div>

            {/* TRL Badge */}
            <div className="mt-10 reveal-on-scroll">
              <div className="inline-flex items-center gap-4 px-6 py-4 bg-bd-surface/60 border border-bd-accent/20 rounded-xl">
                <div>
                  <span className="font-display text-3xl gradient-text-cyan">TRL 2</span>
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-bd-text/40 mt-1">Integrated System</p>
                </div>
                <div className="w-px h-10 bg-bd-border" />
                <div>
                  <p className="font-body text-sm text-bd-text/60 max-w-[280px]">
                    Concept formulated and genetic pathways computationally modeled. Individual sub-systems validated at TRL 3–4 in independent laboratory and spaceflight experiments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Diagram */}
          <div className="lg:w-[45%] flex items-center justify-center reveal-on-scroll">
            <ArchitectureDiagram />
          </div>
        </div>

        {/* Sub-System Table */}
        <div className="mt-24 reveal-on-scroll">
          <h3 className="font-body text-lg font-semibold text-bd-text mb-2">Sub-System Component Breakdown</h3>
          <p className="font-body text-sm text-bd-text/50 mb-8 max-w-[700px]">
            Each sub-system has been independently validated in relevant environments. The integrated TRL reflects the system-level readiness of all components operating in concert — the hardest engineering milestone.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-bd-border">
                  {['Sub-System', 'Primary Organism', 'Function', 'TRL', 'Validation Source', 'Why This Organism'].map((h) => (
                    <th key={h} className="text-left font-mono text-[10px] uppercase tracking-[0.12em] text-bd-text/35 pb-3 pr-6">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SUBSYSTEMS.map((sys, i) => (
                  <tr key={i} className="border-b border-bd-border/40 group">
                    <td className="font-body text-sm text-bd-text py-5 pr-6 font-medium">{sys.name}</td>
                    <td className="py-5 pr-6">
                      <span className={`font-mono text-[11px] px-2.5 py-1 rounded-md ${sys.tag}`} style={!sys.tag ? {
                        background: 'rgba(205,228,255,0.06)',
                        border: '1px solid rgba(205,228,255,0.12)',
                        color: '#cde4ff',
                      } : {}}>
                        {sys.organism}
                      </span>
                    </td>
                    <td className="font-body text-sm text-bd-text/60 py-5 pr-6 max-w-[260px]">{sys.function}</td>
                    <td className="py-5 pr-6">
                      <span className="font-mono text-xs gradient-text-cyan">{sys.trl}</span>
                    </td>
                    <td className="font-body text-xs text-bd-text/45 py-5 pr-6 max-w-[220px]">{sys.validation}</td>
                    <td className="font-body text-xs text-bd-text/50 py-5 max-w-[220px] italic">{sys.why}</td>
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
