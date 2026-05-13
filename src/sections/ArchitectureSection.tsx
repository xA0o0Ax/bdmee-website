import { HabitatCrossSection } from '../components/HabitatCrossSection';

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

export function ArchitectureSection() {
  return (
    <section id="architecture" className="bg-bd-dark py-[80px]" style={{
      background: 'linear-gradient(180deg, #010a06 0%, #030f08 50%, #010a06 100%)',
    }}>
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Top: label + title + text in two columns */}
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-[55%]">
            <span className="section-label reveal-on-scroll">SYSTEM ARCHITECTURE</span>
            <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-normal text-bd-text leading-[0.88] tracking-[-0.03em] mt-4 reveal-on-scroll">
              The Multi-Trophic<br />Myco-Foundry
            </h2>
            <div className="mt-6 reveal-on-scroll">
              <p className="font-body text-base text-bd-text/70 max-w-[480px] leading-relaxed">
                Rather than a single monolithic "super-organism," BDMEE distributes biological functions across three distinct specialists — each optimized for its role without metabolic interference from competing functions.
              </p>
              <div className="mt-4 why-block">
                <p className="font-body text-sm text-bd-text/65 leading-relaxed">
                  Melanin synthesis and pharmaceutical biosynthesis compete for the same precursor metabolic pathways (acetyl-CoA, malonyl-CoA). Forcing both functions into one organism creates antagonistic trade-offs: maximum shielding output comes at the cost of pharmaceutical yield, and vice versa. Distributing functions across three strains eliminates this competition and — critically — eliminates single-point failure: no one genetic event can collapse the entire habitat system.
                </p>
              </div>
            </div>
            <p className="font-body text-base text-bd-text/65 max-w-[480px] mt-5 reveal-on-scroll leading-relaxed">
              The system operates as a closed-loop bio-industrial ecosystem. By shipping programmable, dormant biology rather than static steel and degrading pharmaceuticals, this ecosystem ensures that future explorers carry the <em>information</em> to survive — not the mass.
            </p>
          </div>

          {/* Stats + TRL badge stacked vertically on the right */}
          <div className="lg:w-[45%] flex flex-col justify-center gap-8 reveal-on-scroll">
            <div className="flex flex-wrap gap-8">
              {[
                { v: '60%', l: 'Mission Cost Reduction' },
                { v: '95%', l: 'Mass-to-Orbit Savings' },
                { v: '0', l: 'Pharmaceutical Expiration' },
              ].map((s, i) => (
                <div key={i}>
                  <span className="font-display text-4xl bio-gradient-text">{s.v}</span>
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-bd-text/40 mt-1">{s.l}</p>
                </div>
              ))}
            </div>
            <div className="inline-flex items-center gap-4 px-6 py-4 bg-bd-surface/60 border border-bd-accent/20 rounded-xl self-start">
              <div>
                <span className="font-display text-3xl bio-gradient-text">TRL 2</span>
                <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-bd-text/40 mt-1">Integrated System</p>
              </div>
              <div className="w-px h-10 bg-bd-border" />
              <p className="font-body text-sm text-bd-text/60 max-w-[260px]">
                Concept formulated and genetic pathways computationally modeled. Individual sub-systems validated at TRL 3–4 in independent laboratory and spaceflight experiments.
              </p>
            </div>
          </div>
        </div>

        {/* Full-width diagram — much larger */}
        <div className="mt-12 reveal-on-scroll" style={{ maxWidth: '960px', margin: '3rem auto 0' }}>
          <HabitatCrossSection />
        </div>

        {/* Sub-System Table */}
        <div className="mt-14 reveal-on-scroll">
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
                      <span
                        className={`font-mono text-[11px] px-2.5 py-1 rounded-md ${sys.tag}`}
                        style={!sys.tag ? {
                          background: 'rgba(184,240,204,0.06)',
                          border: '1px solid rgba(184,240,204,0.12)',
                          color: '#b8f0cc',
                        } : {}}
                      >
                        {sys.organism}
                      </span>
                    </td>
                    <td className="font-body text-sm text-bd-text/60 py-5 pr-6 max-w-[260px]">{sys.function}</td>
                    <td className="py-5 pr-6">
                      <span className="font-mono text-xs bio-gradient-text">{sys.trl}</span>
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
