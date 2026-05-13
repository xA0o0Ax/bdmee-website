const ACRONYMS = [
  {
    abbr: 'BDMEE',
    full: 'Bio-pharma Depot & Modular Engineered-living-material Ecosystem',
    color: '#00ff87',
    def: 'The habitat system itself. A three-organism engineered living material (ELM) that self-assembles from dormant spores into a radiation-shielded, pharmaceutical-producing, oxygen-generating structure — shipped as gram-scale biology rather than tonnes of steel.',
  },
  {
    abbr: 'CATAPHRACT',
    full: 'Coupled Adaptive Trans-organism Architecture for Planetary Habitation, Resilience, And Crew Transit',
    color: '#00e5b0',
    def: 'The name for the complete three-pillar integrated framework. BDMEE is one pillar of CATAPHRACT. The framework is named after the Sasanian-Parthian heavy cavalry unit where horse and rider were fully armored and trained as a single inseparable weapon system.',
  },
  {
    abbr: 'HGE',
    full: 'Human Genomic Edits',
    color: '#00e5b0',
    def: 'Pillar I of CATAPHRACT. Pre-flight genomic modifications to the crew\'s own biology — editing bone density genes, anti-atrophy pathways, radiation resistance, and cognitive resilience — so the human body is adapted to space rather than merely tolerating it.',
  },
  {
    abbr: 'APH',
    full: 'Advanced Plant Habitat',
    color: '#b157ff',
    def: 'Pillar III of CATAPHRACT. A genome-matched crop system engineered for the nutritional demands of a genomically-edited crew. Standard astronaut food fails for MSTN KO crew requiring 150 g/day protein; APH is designed around the crew genome.',
  },
  {
    abbr: 'ELM',
    full: 'Engineered Living Material',
    color: '#00ff87',
    def: 'A structural material whose properties emerge from living biology rather than inert chemistry. BDMEE is an ELM: the habitat wall is alive, self-repairing, and metabolically active.',
  },
  {
    abbr: 'TRL',
    full: 'Technology Readiness Level',
    color: '#ffb300',
    def: 'NASA\'s 1–9 scale for measuring how mature a technology is. TRL 1 = basic principle observed. TRL 4 = validated in lab. TRL 6 = demonstrated in relevant environment. TRL 9 = flight-proven. BDMEE as an integrated system is TRL 2; individual subsystems range from TRL 3–9.',
  },
  {
    abbr: 'GCR',
    full: 'Galactic Cosmic Rays',
    color: '#ff7043',
    def: 'High-energy atomic nuclei accelerated to near-light-speed by supernovae and other galactic events. The most lethal unresolved threat to long-duration deep space habitation. Earth\'s magnetosphere deflects >99% of GCR flux. Mars deflects essentially none.',
  },
  {
    abbr: 'SPE',
    full: 'Solar Particle Events',
    color: '#ff7043',
    def: 'Bursts of high-energy protons ejected by solar flares and coronal mass ejections. Shorter but far more intense than chronic GCR exposure. A major SPE without shielding can deliver a lethal dose in hours.',
  },
  {
    abbr: 'ISRU',
    full: 'In-Situ Resource Utilization',
    color: '#00ff87',
    def: 'Using materials found at the destination to build or sustain a mission, rather than shipping everything from Earth. BDMEE is a biological ISRU strategy: organisms bind Martian regolith directly into structural walls.',
  },
  {
    abbr: 'AAV',
    full: 'Adeno-Associated Virus',
    color: '#00e5b0',
    def: 'A gene delivery vector used to insert therapeutic DNA into human cells. The vehicle for delivering HGE modifications to crew muscle, bone, and hematopoietic tissues. AAV episomal inserts dilute over 5–8 years as cells divide — a key decay timeline in the CATAPHRACT framework.',
  },
  {
    abbr: 'CRISPR',
    full: 'Clustered Regularly Interspaced Short Palindromic Repeats',
    color: '#b157ff',
    def: 'A precision molecular editing tool derived from bacterial immune systems. Used in CATAPHRACT for ex vivo human gene knockouts (MSTN, PIEZO1) and precise base edits (LRP5 G171V). All edits described use established, well-characterized CRISPR techniques.',
  },
  {
    abbr: 'mSv',
    full: 'Millisievert',
    color: '#ff7043',
    def: 'The unit of biological radiation dose. Earth surface: ~3 mSv/year. Annual occupational limit for radiation workers: ~50 mSv/year. Mars surface without shielding: ~230 mSv/year. ISS: ~150 mSv/year. BDMEE target: <50 mSv/year inside habitat.',
  },
];

const PILLARS = [
  {
    id: 'I',
    name: 'HGE',
    full: 'Human Genomic Edits',
    color: '#00e5b0',
    role: 'Adapt the crew',
    summary: 'Edit the human genome before departure so bones resist unloading, muscles resist atrophy, cells resist radiation, and cognition resists isolation stress.',
  },
  {
    id: 'II',
    name: 'BDMEE',
    full: 'Bio-pharma Depot & Modular ELM Ecosystem',
    color: '#00ff87',
    role: 'Build and medicate the habitat',
    summary: 'Grow the habitat from dormant biology. Shield the crew from radiation. Synthesize medicine on-demand from living walls. Generate breathable air from CO₂.',
  },
  {
    id: 'III',
    name: 'APH',
    full: 'Advanced Plant Habitat',
    color: '#b157ff',
    role: 'Feed the crew',
    summary: 'Cultivate genome-matched crops that meet the elevated nutritional demands of an edited crew — closing the protein, vitamin D, omega-3, and micronutrient loops.',
  },
];

export function BriefingSection() {
  return (
    <section className="py-[120px]" style={{
      background: 'linear-gradient(180deg, #010a06 0%, #040e08 50%, #010a06 100%)',
    }}>
      <div className="max-w-[1400px] mx-auto px-6">

        {/* ── HEADER ── */}
        <span className="section-label reveal-on-scroll">MISSION BRIEFING</span>
        <div className="flex flex-col lg:flex-row gap-16 mt-4">

          {/* Left: what this is */}
          <div className="lg:w-[55%]">
            <h2 className="font-display text-[clamp(2.2rem,3.8vw,3.2rem)] font-normal text-bd-text leading-[0.9] tracking-[-0.03em] reveal-on-scroll">
              What You Are<br />
              <span className="bio-gradient-text">About to Read</span>
            </h2>

            <p className="font-body text-base text-bd-text/70 mt-8 max-w-[560px] leading-relaxed reveal-on-scroll">
              <span className="text-bd-accent font-medium">BDMEE</span> (Bio-pharma Depot & Modular Engineered-living-material Ecosystem) is a scientific research proposal for a self-assembling, biology-based deep space habitat. Rather than shipping steel and concrete to Mars, BDMEE ships dormant microorganisms that grow into a radiation-shielded, pharmaceutical-producing, oxygen-generating structure on arrival.
            </p>

            <p className="font-body text-base text-bd-text/70 mt-5 max-w-[560px] leading-relaxed reveal-on-scroll">
              BDMEE is <span className="text-bd-text font-medium">Pillar II</span> of a larger three-part framework called <span className="text-bd-accent font-medium">CATAPHRACT</span> — which also encompasses genomic modifications to the human crew (<span className="text-bd-accent font-medium">HGE</span>) and a genome-matched crop system (<span className="text-bd-accent font-medium">APH</span>). The three pillars are not independent programs — they are one coupled system, each depending on the others to function.
            </p>

            <p className="font-body text-base text-bd-text/70 mt-5 max-w-[560px] leading-relaxed reveal-on-scroll">
              This site presents the BDMEE proposal in full scientific detail, with engineering rationale for every design decision. The CATAPHRACT master integration section toward the end brings all three pillars together. The acronym glossary to the right defines every technical term used throughout.
            </p>

            {/* Framework mini-diagram */}
            <div className="mt-10 reveal-on-scroll">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-bd-text/35 mb-5">The CATAPHRACT Framework</p>
              <div className="flex flex-col gap-3">
                {PILLARS.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl"
                    style={{ background: `${p.color}07`, border: `1px solid ${p.color}18` }}
                  >
                    <div
                      className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold mt-0.5"
                      style={{ background: `${p.color}15`, color: p.color, border: `1px solid ${p.color}35` }}
                    >
                      {p.id}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="font-mono text-sm font-bold" style={{ color: p.color }}>{p.name}</span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-bd-text/35">{p.role}</span>
                      </div>
                      <p className="font-body text-xs text-bd-text/55 mt-1 leading-relaxed">{p.summary}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Convergence note */}
              <div className="mt-5 p-4 rounded-xl" style={{
                background: 'linear-gradient(135deg, rgba(0,255,135,0.04), rgba(177,87,255,0.04))',
                border: '1px solid rgba(0,255,135,0.12)',
              }}>
                <p className="font-body text-sm text-bd-text/65 leading-relaxed">
                  A cataphract was a Sasanian-Parthian heavy cavalry unit where horse and rider were both fully armored and trained as one — <span className="text-bd-text/90 italic">neither survived without the other</span>. That is this framework: the crew (HGE), the habitat (BDMEE), and the crops (APH) are one coupled organism, armored together, none viable alone.
                </p>
              </div>
            </div>
          </div>

          {/* Right: acronym glossary */}
          <div className="lg:w-[45%]">
            <div className="sticky top-24">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-bd-text/35 mb-5 reveal-on-scroll">Acronym Reference</p>
              <div className="space-y-3 max-h-[78vh] overflow-y-auto pr-2" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,255,135,0.2) transparent' }}>
                {ACRONYMS.map((a, i) => (
                  <div
                    key={i}
                    className="reveal-on-scroll rounded-xl p-4"
                    style={{
                      transitionDelay: `${i * 0.04}s`,
                      background: `${a.color}07`,
                      border: `1px solid ${a.color}18`,
                    }}
                  >
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <span className="font-mono text-sm font-bold flex-shrink-0" style={{ color: a.color }}>{a.abbr}</span>
                      <span className="font-mono text-[9px] text-bd-text/35 text-right leading-tight">{a.full}</span>
                    </div>
                    <p className="font-body text-xs text-bd-text/55 leading-relaxed">{a.def}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom divider */}
        <div className="mt-16 h-px reveal-on-scroll" style={{
          background: 'linear-gradient(90deg, transparent, rgba(0,255,135,0.25), rgba(0,229,176,0.2), rgba(177,87,255,0.15), transparent)',
        }} />
      </div>
    </section>
  );
}
