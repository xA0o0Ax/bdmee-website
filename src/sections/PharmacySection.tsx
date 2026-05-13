const EDIT_COUPLING_TABLE = [
  { edit: 'LRP5 G171V', drug: 'Abaloparatide', inducer: 'Xylose', feasibility: 'GREEN', interaction: 'Synergistic (Wnt×cAMP)', benefit: 'Best bone protection', risk: 'Hypercalcemia — untested' },
  { edit: 'MSTN KO + mIGF-1', drug: 'BCAA + APH Wolffia', inducer: 'Constitutive', feasibility: 'YELLOW', interaction: 'Interdependent', benefit: 'Muscle mass maintenance', risk: 'Under-nutrition if unmodified' },
  { edit: 'MURF1/FBXO32 shRNA', drug: 'ActRIIB-Fc + FS-288 + ABA', inducer: 'Biosensor', feasibility: 'YELLOW', interaction: 'Insurance/backup', benefit: 'Slow Bleed protection', risk: 'Year 2 compound decay' },
  { edit: 'CXCL12/CXCR4', drug: 'Trilineage cassette', inducer: 'Ara/Man/IPTG', feasibility: 'GREEN', interaction: 'Synergistic if inducible', benefit: 'Full hematopoietic coverage', risk: 'Futile cycle if constitutive' },
  { edit: 'NRF2 overexpression', drug: 'Melanin shield + Filgrastim', inducer: 'Passive/Ara', feasibility: 'GREEN', interaction: 'Redundant', benefit: 'Layered radiation defense', risk: 'Oncogenic if shielding fails' },
  { edit: 'COMT/MAOA/SLC6A4', drug: 'Selank+Semax+Davunetide+DSIP', inducer: 'Cortisol biosensor', feasibility: 'GREEN', interaction: 'Synergistic', benefit: 'Cognitive/stress protection', risk: 'Cortisol sensor false-positive' },
];

const FEASIBILITY_COLORS: Record<string, string> = {
  GREEN: '#00c853',
  YELLOW: '#ffd600',
  RED: '#ff3d00',
  'GREEN/YELLOW': '#80dc29',
  'YELLOW/RED': '#ff9a00',
  'GREEN/YEL': '#80dc29',
};

const ORIGINAL_NODES = [
  {
    node: 'A',
    name: 'Bone Density',
    inject: 'Xylose',
    trigger: 'P_xylA',
    produce: 'AmyQ-hPTH → Teriparatide',
    treats: 'Microgravity-induced Osteoporosis',
    detail: 'XylR repressor blocks RNA polymerase. Xylose binding releases operator.',
  },
  {
    node: 'B',
    name: 'Radiation/WBC',
    inject: 'Arabinose',
    trigger: 'P_ara',
    produce: 'Filgrastim',
    treats: 'Radiation Sickness / Neutropenia',
    detail: 'Orthogonal lock-and-key — completely independent of Node A.',
  },
  {
    node: 'C',
    name: 'Infection',
    inject: 'IPTG',
    trigger: 'P_spac',
    produce: 'Antimicrobial Peptides',
    treats: 'Deep Space Infection',
    detail: 'Synthetic lactose analog — zero cross-activation with other nodes.',
  },
];

const EXPANDED_NODES = [
  { num: 1, name: 'BONE — LRP5 G171V', drug: 'Abaloparatide [UPGRADED]', inducer: 'Xylose (P_xylA)', feasibility: 'GREEN', rationale: '3× higher anabolic-to-resorptive ratio vs Teriparatide. Synergistic with LRP5 G171V Wnt drive.', risk: 'Hypercalcemia highest risk in first 60 days. [HIGHEST PRIORITY]' },
  { num: 2, name: 'HEMATOPOIETIC TRILINEAGE', drug: 'Filgrastim + TPO-mimetic + EMP-1', inducer: 'Ara / Man / IPTG', feasibility: 'GREEN', rationale: 'Neutrophils + platelets + RBC trilineage coverage. XTEN-fusion for half-life extension (Pegfilgrastim DISQUALIFIED — PEGylation is RED in prokaryotes).', risk: 'None — all GREEN peptides' },
  { num: 3, name: 'DISC RESILIENCE [NEW]', drug: 'Sprifermin + rhGDF-5 + Anakinra', inducer: 'Rhamnose (P_rhaB) + IL-6 biosensor', feasibility: 'GREEN / YELLOW', rationale: 'Sprifermin → chondrocyte ECM; rhGDF-5 → annulus fibrosus repair; Anakinra → disc inflammation block.', risk: 'rhGDF-5 requires oxidative folding engineering' },
  { num: 4, name: 'MURF1/FBXO32 INSURANCE', drug: 'ActRIIB-Fc + Follistatin-288 + ABA', inducer: 'Cortisol/3-MH biosensor', feasibility: 'YELLOW', rationale: 'Three-layer redundancy when AAV shRNA silences by Year 2. Anti-atrophy fallback.', risk: 'Fc-fusion via XTEN substitute' },
  { num: 5, name: 'CARDIOVASCULAR / RAAS', drug: 'Ang(1-7) + Apelin-13 + Relaxin-2 + CNP', inducer: 'NT-proBNP biosensor', feasibility: 'GREEN', rationale: 'Microgravity causes cardiac atrophy, arrhythmia, orthostatic intolerance. All small peptides 7–22 aa.', risk: 'Auto-trigger calibration' },
  { num: 6, name: 'PSYCHOGENETIC / COGNITIVE', drug: 'Selank + Semax + Davunetide + DSIP', inducer: 'Cortisol biosensor', feasibility: 'GREEN', rationale: 'COMT/MAOA/SLC6A4 crew edits + peptide synergists. All 7–9 aa peptides — trivially expressible.', risk: 'Cortisol sensor false-positive' },
  { num: 7, name: 'CIRCADIAN', drug: 'Melatonin + VIP peptide', inducer: 'Light-cycle biosensor', feasibility: 'YELLOW', rationale: 'Mars 24h40m Non-24 sol adaptation. Melatonin requires tryptophan→serotonin→melatonin pathway.', risk: 'Tasimelteon optimal but RED — must be crew-stowed' },
  { num: 8, name: 'GCR-CNS NEUROPROTECTION', drug: 'Humanin + MOTS-c + Cerebrolysin + Li+', inducer: 'Cognitive decline threshold', feasibility: 'GREEN/YELLOW', rationale: 'GCR-induced white matter damage. Lithium is most evidence-backed neuroprotective in radiation models.', risk: 'Lithium accumulator calibration' },
  { num: 9, name: 'HERPESVIRUS REACTIVATION', drug: 'Thymosin α1 + LL-37 cathelicidin', inducer: 'EBV-qPCR biosensor', feasibility: 'GREEN', rationale: '>50% of ISS crew experience EBV/CMV/VZV reactivation under spaceflight stress.', risk: 'Off-switch architecture needed' },
  { num: 10, name: 'MICROBIOME RESILIENCE', drug: 'FOS/levan + Amuc_1100 + Butyrate', inducer: 'Constitutive (sacB)', feasibility: 'GREEN/YELLOW', rationale: 'Radiation + antibiotic use collapses microbiome diversity. Levan via sacB requires ZERO engineering.', risk: 'Butyrate pathway engineering' },
  { num: 11, name: 'SENESCENCE CLEARANCE', drug: 'Spermidine + FOXO4-DRI', inducer: 'Constitutive / P_xylA-secondary', feasibility: 'YELLOW / RED', rationale: 'Spermidine continuous autophagy + FOXO4-DRI episodic senolytic. Navitoclax DISQUALIFIED — thrombocytopenia.', risk: 'FOXO4-DRI D-aa synthesis TRL 3 (18-month project)' },
  { num: 12, name: 'VITAMIN K2 (MK-7)', drug: 'Menaquinone-7 via natto fermentation', inducer: 'Constitutive', feasibility: 'TRL 7', rationale: 'LRP5 G171V bone mineralization cofactor. B. subtilis does this natively — no engineering needed.', risk: 'None — native pathway' },
];

const ORTHOGONAL_INDUCERS = [
  'Xylose', 'Arabinose', 'Mannose', 'Rhamnose', 'Sucrose', 'Nitrate', 'Tet-ON', 'Biosensor-synthetic'
];

const BIOSENSORS = [
  { marker: 'Osteocalcin', target: 'Bone formation status → Abaloparatide node' },
  { marker: 'CTX', target: 'Bone resorption rate → Abaloparatide + disc triad' },
  { marker: 'IL-6', target: 'Inflammation/radiation stress → multiple nodes' },
  { marker: 'Cortisol', target: 'Metabolic/psychological stress → cognitive node' },
  { marker: 'NT-proBNP', target: 'Cardiac stress → CV/RAAS node' },
  { marker: 'EBV DNA', target: 'Viral reactivation → LL-37 surge node' },
];

export function PharmacySection() {
  return (
    <section id="pharmacy" className="bg-bd-dark py-[120px]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="text-center">
          <span className="section-label reveal-on-scroll">THE UNIVERSAL PHARMACY</span>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-normal text-bd-text leading-[0.85] tracking-[-0.02em] mt-4 reveal-on-scroll">
            Living Walls.<br />Living Medicine.
          </h2>
          <p className="font-body text-lg text-bd-text/70 max-w-[720px] mx-auto mt-6 reveal-on-scroll">
            Astronauts don&apos;t carry degrading medicines — they carry dormant bacterial spores. The habitat walls are the pharmacy, synthesizing fresh therapeutics on demand.
          </p>
        </div>

        {/* Original 3 Nodes */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {ORIGINAL_NODES.map((node, i) => (
            <div
              key={i}
              className="bg-bd-surface/60 border border-bd-border rounded-2xl p-10 reveal-on-scroll"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-bd-accent">
                Node {node.node}
              </span>
              <h3 className="font-body text-xl font-medium text-bd-text mt-2">
                {node.name}
              </h3>
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-mono text-[10px] uppercase text-bd-text/40">INJECT</span>
                  <span className="font-body text-bd-text">{node.inject}</span>
                </div>
                <div className="text-bd-text/30 text-center">↓</div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-mono text-[10px] uppercase text-bd-text/40">TRIGGER</span>
                  <span className="font-body text-bd-accent">{node.trigger}</span>
                </div>
                <div className="text-bd-text/30 text-center">↓</div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-mono text-[10px] uppercase text-bd-text/40">PRODUCE</span>
                  <span className="font-body text-bd-text">{node.produce}</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-bd-border">
                <p className="font-mono text-[10px] uppercase text-bd-text/40">TREATS</p>
                <p className="font-body text-sm text-bd-text/80 mt-1">{node.treats}</p>
                <p className="font-body text-xs text-bd-text/50 mt-2">{node.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Spatial Multiplexing Note */}
        <p className="font-mono text-xs text-bd-text/50 text-center mt-10 reveal-on-scroll">
          Spatial Multiplexing: 100 isolated micro-chambers per drug. If one node fails, 99 backups remain.
          {" "}Central computer routes inducer fluid to specific vascular pipes.
        </p>

        {/* Expanded 16-Node Manifest */}
        <div className="mt-24 reveal-on-scroll">
          <span className="section-label">EXPANDED MANIFEST</span>
          <h3 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-normal text-bd-text mt-4">
            Optimized BDMEE Pharmaceutical Manifest
          </h3>
          <p className="font-body text-base text-bd-text/60 mt-4 max-w-[800px]">
            16 pharmacy nodes providing comprehensive medical coverage — from bone density and radiation sickness to cognitive support and senescence clearance. Each node operates on an orthogonal inducer system to prevent cross-activation.
          </p>

          <div className="mt-10 space-y-4">
            {EXPANDED_NODES.map((node, i) => (
              <div
                key={i}
                className="bg-bd-surface/40 border border-bd-border rounded-xl p-6 flex flex-col md:flex-row md:items-start gap-6"
              >
                <div className="flex-shrink-0">
                  <span
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full font-mono text-sm font-bold"
                    style={{
                      backgroundColor: `${FEASIBILITY_COLORS[node.feasibility] || '#00c853'}20`,
                      color: FEASIBILITY_COLORS[node.feasibility] || '#00c853',
                    }}
                  >
                    {node.num}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <h4 className="font-body text-base font-medium text-bd-text">{node.name}</h4>
                    <span
                      className="font-mono text-[10px] uppercase tracking-[0.1em] px-2 py-0.5 rounded"
                      style={{
                        backgroundColor: `${FEASIBILITY_COLORS[node.feasibility] || '#00c853'}20`,
                        color: FEASIBILITY_COLORS[node.feasibility] || '#00c853',
                      }}
                    >
                      {node.feasibility}
                    </span>
                  </div>
                  <p className="font-body text-sm text-bd-text/70 mt-2">
                    <span className="text-bd-text/40">Drug: </span>
                    {node.drug}
                  </p>
                  <p className="font-body text-sm text-bd-text/70 mt-1">
                    <span className="text-bd-text/40">Inducer: </span>
                    <span className="text-bd-accent">{node.inducer}</span>
                  </p>
                  <p className="font-body text-sm text-bd-text/60 mt-2">{node.rationale}</p>
                  <p className="font-body text-xs text-bd-red mt-1">Risk: {node.risk}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Orthogonal Inducers */}
        <div className="mt-16 reveal-on-scroll">
          <h4 className="font-body text-lg font-medium text-bd-text mb-4">
            8 Orthogonal Inducers Required
          </h4>
          <div className="flex flex-wrap gap-3">
            {ORTHOGONAL_INDUCERS.map((inducer, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-bd-surface/60 border border-bd-border rounded-full font-mono text-xs text-bd-text/70"
              >
                {i + 1}. {inducer}
              </span>
            ))}
          </div>
        </div>

        {/* Biosensor Upgrade */}
        <div className="mt-16 reveal-on-scroll">
          <h4 className="font-body text-lg font-medium text-bd-text mb-4">
            Closed-Loop Biosensing Upgrade (Autonomous Pharmacy)
          </h4>
          <p className="font-body text-sm text-bd-text/60 mb-6 max-w-[800px]">
            Proposed upgrade: Biosensor organisms embedded in vascular mesh detect crew biomarkers shed into habitat environment. Boolean genetic logic gates in pharmacy nodes trigger autonomously.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {BIOSENSORS.map((sensor, i) => (
              <div
                key={i}
                className="bg-bd-surface/40 border border-bd-border rounded-lg p-4"
              >
                <span className="font-mono text-xs text-bd-accent">{sensor.marker}</span>
                <p className="font-body text-xs text-bd-text/60 mt-1">{sensor.target}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-bd-red/10 border border-bd-red/30 rounded-xl p-6">
            <p className="font-mono text-xs text-bd-red uppercase tracking-[0.1em]">Unsolved Problem</p>
            <p className="font-body text-sm text-bd-text/80 mt-2">
              Off-switch architecture: Without reliable reset, autonomous systems risk runaway drug production.
              TRL 2–3 currently. <span className="text-bd-red">[RESEARCH GAP]</span>
            </p>
          </div>
        </div>

        {/* Feasibility Key */}
        <div className="mt-16 reveal-on-scroll">
          <h4 className="font-body text-lg font-medium text-bd-text mb-4">
            Biosynthetic Feasibility Key
          </h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <span className="w-3 h-3 rounded-full bg-bd-green mt-1 flex-shrink-0" />
              <div>
                <span className="font-mono text-xs text-bd-green uppercase">GREEN</span>
                <p className="font-body text-xs text-bd-text/60 mt-1">
                  B. subtilis produces via standard recombinant expression (peptides/proteins under ~15 kDa, simple small molecules)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-3 h-3 rounded-full bg-bd-yellow mt-1 flex-shrink-0" />
              <div>
                <span className="font-mono text-xs text-bd-yellow uppercase">YELLOW</span>
                <p className="font-body text-xs text-bd-text/60 mt-1">
                  Requires metabolic pathway engineering or non-standard chassis (complex glycoproteins, multi-subunit proteins, steroids)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-3 h-3 rounded-full bg-bd-red mt-1 flex-shrink-0" />
              <div>
                <span className="font-mono text-xs text-bd-red uppercase">RED</span>
                <p className="font-body text-xs text-bd-text/60 mt-1">
                  Not tractable in B. subtilis — requires alternative organism or chemical synthesis node
                </p>
              </div>
            </div>
          </div>
          <p className="font-mono text-xs text-bd-text/40 mt-6">
            UNIVERSAL RULE: PEGylation is RED in ALL prokaryotes. Substitute: XTEN-fusion or Fc-fusion architectures.
          </p>
        </div>

        {/* Slow Bleed Warning */}
        <div className="mt-16 reveal-on-scroll">
          <h4 className="font-body text-lg font-medium text-bd-text mb-4">
            The Slow Bleed — Highest-Risk Compound Failure Mode
          </h4>
          <div className="bg-bd-red/5 border border-bd-red/20 rounded-xl p-6">
            <p className="font-body text-sm text-bd-text/70">
              By Year 2 of a Mars mission, two decay processes converge:
            </p>
            <ul className="mt-3 space-y-2">
              <li className="font-body text-sm text-bd-text/70 flex items-start gap-2">
                <span className="text-bd-red mt-1">•</span>
                BDMEE pharmacy drift: ~30% reduction in drug output (microbial mutation)
              </li>
              <li className="font-body text-sm text-bd-text/70 flex items-start gap-2">
                <span className="text-bd-red mt-1">•</span>
                AAV-shRNA silencing: ~50% reduction in MURF1 knockdown efficiency
              </li>
            </ul>
            <p className="font-body text-sm text-bd-text/70 mt-4">
              Result: Bone and muscle protection degrade with a <span className="text-bd-red font-medium">MONTHS-LONG DETECTION LAG</span> before clinical signs appear.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <div className="bg-bd-dark/50 rounded-lg p-4 flex-1 min-w-[200px]">
                <span className="font-mono text-xs text-bd-green">BDMEE SAFEGUARD</span>
                <p className="font-body text-xs text-bd-text/60 mt-1">
                  Constitutive GFP reporter in all pharmacy nodes — fluorescence detectable via optical sensor as production-rate proxy.
                </p>
              </div>
              <div className="bg-bd-dark/50 rounded-lg p-4 flex-1 min-w-[200px]">
                <span className="font-mono text-xs text-bd-green">HUMAN SAFEGUARD</span>
                <p className="font-body text-xs text-bd-text/60 mt-1">
                  Schedule booster AAV re-dosing at T+18 months, pre-formulated and stored in BDMEE cold-node vials.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Master Integration Table */}
        <div className="mt-24 reveal-on-scroll">
          <span className="section-label">MASTER INTEGRATION</span>
          <h3 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-normal text-bd-text mt-4">
            HGE × BDMEE Integration Matrix
          </h3>
          <p className="font-body text-base text-bd-text/60 mt-4 mb-8 max-w-[800px]">
            Complete mapping of human genomic edits (HGE) to BDMEE pharmacy nodes — showing drug-inducer pairs, feasibility ratings, interaction types, net benefits, key risks, and monitoring protocols.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="border-b border-bd-border">
                  <th className="text-left font-mono text-[10px] uppercase tracking-[0.1em] text-bd-text/50 pb-3 pr-4">Human Edit</th>
                  <th className="text-left font-mono text-[10px] uppercase tracking-[0.1em] text-bd-text/50 pb-3 pr-4">BDMEE Drug</th>
                  <th className="text-left font-mono text-[10px] uppercase tracking-[0.1em] text-bd-text/50 pb-3 pr-4">Inducer</th>
                  <th className="text-left font-mono text-[10px] uppercase tracking-[0.1em] text-bd-text/50 pb-3 pr-4">Feas.</th>
                  <th className="text-left font-mono text-[10px] uppercase tracking-[0.1em] text-bd-text/50 pb-3 pr-4">Interaction</th>
                  <th className="text-left font-mono text-[10px] uppercase tracking-[0.1em] text-bd-text/50 pb-3">Net Benefit</th>
                </tr>
              </thead>
              <tbody>
                {EDIT_COUPLING_TABLE.map((row, i) => (
                  <tr key={i} className="border-b border-bd-border/50">
                    <td className="font-body text-xs text-bd-text py-3 pr-4">{row.edit}</td>
                    <td className="font-body text-xs text-bd-text/70 py-3 pr-4">{row.drug}</td>
                    <td className="font-body text-xs text-bd-accent py-3 pr-4">{row.inducer}</td>
                    <td className="py-3 pr-4">
                      <span
                        className="font-mono text-[10px]"
                        style={{ color: FEASIBILITY_COLORS[row.feasibility] || '#00c853' }}
                      >
                        {row.feasibility}
                      </span>
                    </td>
                    <td className="font-body text-xs text-bd-text/60 py-3 pr-4">{row.interaction}</td>
                    <td className="font-body text-xs text-bd-text/70 py-3">{row.benefit}</td>
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
