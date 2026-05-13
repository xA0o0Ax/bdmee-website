const FEASIBILITY_COLORS: Record<string, string> = {
  GREEN: '#00e676',
  YELLOW: '#ffb300',
  RED: '#ff4444',
  'GREEN/YELLOW': '#7bc67e',
  'YELLOW/RED': '#ff7043',
  'GREEN/YEL': '#7bc67e',
  'TRL 7': '#00ff87',
};

const EDIT_COUPLING_TABLE = [
  { edit: 'LRP5 G171V', drug: 'Abaloparatide', inducer: 'Xylose', feasibility: 'GREEN', interaction: 'Synergistic (Wnt×cAMP)', benefit: 'Best bone protection', risk: 'Hypercalcemia risk in first 60 days' },
  { edit: 'MSTN KO + mIGF-1', drug: 'BCAA + APH Wolffia', inducer: 'Constitutive', feasibility: 'YELLOW', interaction: 'Interdependent', benefit: 'Muscle mass maintenance', risk: 'Under-nutrition if unmodified' },
  { edit: 'MURF1/FBXO32 shRNA', drug: 'ActRIIB-Fc + FS-288 + ABA', inducer: 'Biosensor', feasibility: 'YELLOW', interaction: 'Insurance/backup', benefit: 'Slow Bleed protection', risk: 'Year 2 compound decay' },
  { edit: 'CXCL12/CXCR4', drug: 'Trilineage cassette', inducer: 'Ara/Man/IPTG', feasibility: 'GREEN', interaction: 'Synergistic if inducible', benefit: 'Full hematopoietic coverage', risk: 'Futile cycle if constitutive' },
  { edit: 'NRF2 overexpression', drug: 'Melanin shield + Filgrastim', inducer: 'Passive/Ara', feasibility: 'GREEN', interaction: 'Redundant', benefit: 'Layered radiation defense', risk: 'Oncogenic if shielding fails' },
  { edit: 'COMT/MAOA/SLC6A4', drug: 'Selank+Semax+Davunetide+DSIP', inducer: 'Cortisol biosensor', feasibility: 'GREEN', interaction: 'Synergistic', benefit: 'Cognitive/stress protection', risk: 'Cortisol sensor false-positive' },
];

const ORIGINAL_NODES = [
  {
    node: 'A',
    name: 'Bone Density',
    inject: 'Xylose',
    trigger: 'P_xylA',
    produce: 'AmyQ-hPTH → Teriparatide',
    treats: 'Microgravity-induced Osteoporosis',
    detail: 'XylR repressor blocks RNA polymerase. Xylose binding releases operator.',
    color: '#00ff87',
  },
  {
    node: 'B',
    name: 'Radiation/WBC',
    inject: 'Arabinose',
    trigger: 'P_ara',
    produce: 'Filgrastim',
    treats: 'Radiation Sickness / Neutropenia',
    detail: 'Orthogonal lock-and-key — completely independent of Node A.',
    color: '#00e5b0',
  },
  {
    node: 'C',
    name: 'Infection',
    inject: 'IPTG',
    trigger: 'P_spac',
    produce: 'Antimicrobial Peptides',
    treats: 'Deep Space Infection',
    detail: 'Synthetic lactose analog — zero cross-activation with other nodes.',
    color: '#b157ff',
  },
];

const EXPANDED_NODES = [
  { num: 1, name: 'BONE — LRP5 G171V', drug: 'Abaloparatide [UPGRADED]', inducer: 'Xylose (P_xylA)', feasibility: 'GREEN', rationale: '3× higher anabolic-to-resorptive ratio vs Teriparatide. Synergistic with LRP5 G171V Wnt drive.', risk: 'Hypercalcemia highest risk in first 60 days. [HIGHEST PRIORITY]' },
  { num: 2, name: 'HEMATOPOIETIC TRILINEAGE', drug: 'Filgrastim + TPO-mimetic + EMP-1', inducer: 'Ara / Man / IPTG', feasibility: 'GREEN', rationale: 'Neutrophils + platelets + RBC trilineage coverage. XTEN-fusion for half-life extension (Pegfilgrastim DISQUALIFIED — PEGylation is RED in prokaryotes).', risk: 'None — all GREEN peptides' },
  { num: 3, name: 'DISC RESILIENCE [NEW]', drug: 'Sprifermin + rhGDF-5 + Anakinra', inducer: 'Rhamnose (P_rhaB) + IL-6 biosensor', feasibility: 'GREEN/YELLOW', rationale: 'Sprifermin → chondrocyte ECM; rhGDF-5 → annulus fibrosus repair; Anakinra → disc inflammation block.', risk: 'rhGDF-5 requires oxidative folding engineering' },
  { num: 4, name: 'MURF1/FBXO32 INSURANCE', drug: 'ActRIIB-Fc + Follistatin-288 + ABA', inducer: 'Cortisol/3-MH biosensor', feasibility: 'YELLOW', rationale: 'Three-layer redundancy when AAV shRNA silences by Year 2. Anti-atrophy fallback.', risk: 'Fc-fusion via XTEN substitute' },
  { num: 5, name: 'CARDIOVASCULAR / RAAS', drug: 'Ang(1-7) + Apelin-13 + Relaxin-2 + CNP', inducer: 'NT-proBNP biosensor', feasibility: 'GREEN', rationale: 'Microgravity causes cardiac atrophy, arrhythmia, orthostatic intolerance. All small peptides 7–22 aa.', risk: 'Auto-trigger calibration' },
  { num: 6, name: 'PSYCHOGENETIC / COGNITIVE', drug: 'Selank + Semax + Davunetide + DSIP', inducer: 'Cortisol biosensor', feasibility: 'GREEN', rationale: 'COMT/MAOA/SLC6A4 crew edits + peptide synergists. All 7–9 aa peptides — trivially expressible.', risk: 'Cortisol sensor false-positive' },
  { num: 7, name: 'CIRCADIAN', drug: 'Melatonin + VIP peptide', inducer: 'Light-cycle biosensor', feasibility: 'YELLOW', rationale: 'Mars 24h40m Non-24 sol adaptation. Melatonin requires tryptophan→serotonin→melatonin pathway.', risk: 'Tasimelteon optimal but RED — must be crew-stowed' },
  { num: 8, name: 'GCR-CNS NEUROPROTECTION', drug: 'Humanin + MOTS-c + Cerebrolysin + Li+', inducer: 'Cognitive decline threshold', feasibility: 'GREEN/YELLOW', rationale: 'GCR-induced white matter damage. Lithium is most evidence-backed neuroprotective in radiation models.', risk: 'Lithium accumulator calibration' },
  { num: 9, name: 'HERPESVIRUS REACTIVATION', drug: 'Thymosin α1 + LL-37 cathelicidin', inducer: 'EBV-qPCR biosensor', feasibility: 'GREEN', rationale: '>50% of ISS crew experience EBV/CMV/VZV reactivation under spaceflight stress.', risk: 'Off-switch architecture needed' },
  { num: 10, name: 'MICROBIOME RESILIENCE', drug: 'FOS/levan + Amuc_1100 + Butyrate', inducer: 'Constitutive (sacB)', feasibility: 'GREEN/YELLOW', rationale: 'Radiation + antibiotic use collapses microbiome diversity. Levan via sacB requires ZERO engineering.', risk: 'Butyrate pathway engineering' },
  { num: 11, name: 'SENESCENCE CLEARANCE', drug: 'Spermidine + FOXO4-DRI', inducer: 'Constitutive / P_xylA-secondary', feasibility: 'YELLOW/RED', rationale: 'Spermidine continuous autophagy + FOXO4-DRI episodic senolytic. Navitoclax DISQUALIFIED — thrombocytopenia.', risk: 'FOXO4-DRI D-aa synthesis TRL 3 (18-month project)' },
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
    <section id="pharmacy" className="py-[120px]" style={{
      background: 'linear-gradient(180deg, #010a06 0%, #04120a 50%, #010a06 100%)',
    }}>
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="text-center">
          <span className="section-label reveal-on-scroll justify-center">THE UNIVERSAL PHARMACY</span>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-normal text-bd-text leading-[0.88] tracking-[-0.03em] mt-4 reveal-on-scroll">
            Living Walls.<br />Living Medicine.
          </h2>
          <p className="font-body text-base text-bd-text/60 max-w-[720px] mx-auto mt-6 reveal-on-scroll leading-relaxed">
            Crew members don't carry degrading medicine stockpiles — they carry dormant bacterial spores embedded in their habitat walls. When a therapeutic is required, a chemical inducer is injected into the vascular node and the spores synthesize a fresh dose on-site, on-demand.
          </p>
          <div className="mt-4 max-w-[680px] mx-auto reveal-on-scroll">
            <div className="why-block text-left">
              <p className="font-body text-sm text-bd-text/65 leading-relaxed">
                B. subtilis spores have been revived from 250-million-year-old salt crystal inclusions. Space radiation accelerates molecular damage — but spores are impervious to it in their dormant state. The pharmacy improves in reliability over the mission duration compared to conventional drugs, which degrade continuously from the moment they are formulated.
              </p>
            </div>
          </div>
        </div>

        {/* Original 3 Nodes */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {ORIGINAL_NODES.map((node, i) => (
            <div
              key={i}
              className="bg-bd-surface/60 rounded-2xl p-10 reveal-on-scroll border"
              style={{
                transitionDelay: `${i * 0.15}s`,
                borderColor: `${node.color}25`,
                borderTopWidth: '3px',
                borderTopColor: node.color,
              }}
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.12em]" style={{ color: node.color }}>
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
                  <span className="font-body" style={{ color: node.color }}>{node.trigger}</span>
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

        {/* Expanded 12-Node Manifest */}
        <div className="mt-24 reveal-on-scroll">
          <span className="section-label">EXPANDED MANIFEST</span>
          <h3 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-normal text-bd-text mt-4">
            Optimized BDMEE Pharmaceutical Manifest
          </h3>
          <p className="font-body text-base text-bd-text/60 mt-4 max-w-[800px]">
            12 pharmacy nodes providing comprehensive medical coverage — from bone density and radiation sickness to cognitive support and senescence clearance. Each node operates on an orthogonal inducer system to prevent cross-activation.
          </p>

          <div className="mt-10 space-y-3">
            {EXPANDED_NODES.map((node, i) => {
              const fColor = FEASIBILITY_COLORS[node.feasibility] || '#00e676';
              return (
                <div
                  key={i}
                  className="bg-bd-surface/40 border border-bd-border rounded-xl p-5 flex flex-col md:flex-row md:items-start gap-5"
                >
                  <div className="flex-shrink-0">
                    <span
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full font-mono text-sm font-bold"
                      style={{
                        backgroundColor: `${fColor}20`,
                        color: fColor,
                        border: `1px solid ${fColor}40`,
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
                          backgroundColor: `${fColor}15`,
                          color: fColor,
                          border: `1px solid ${fColor}30`,
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
                    <p className="font-body text-xs mt-1" style={{ color: '#ff4444cc' }}>Risk: {node.risk}</p>
                  </div>
                </div>
              );
            })}
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
                className="data-pill"
              >
                {i + 1}. {inducer}
              </span>
            ))}
          </div>
        </div>

        {/* Biosensor Upgrade */}
        <div className="mt-16 reveal-on-scroll">
          <h4 className="font-body text-lg font-medium text-bd-text mb-2">
            Closed-Loop Biosensing Upgrade (Autonomous Pharmacy)
          </h4>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-bd-text/35 mb-4">Current State: Manual injection of chemical inducers by crew member</p>
          <p className="font-body text-sm text-bd-text/65 mb-4 max-w-[800px] leading-relaxed">
            Biosensor organisms embedded in the vascular mesh continuously sample crew biomarkers shed passively into the habitat environment through respiration, sweat, and skin contact. Boolean genetic logic gates within pharmacy nodes evaluate the incoming biomarker signal and trigger therapeutic synthesis autonomously — without crew intervention or manual inducer injection.
          </p>
          <p className="font-body text-sm text-bd-text/65 mb-6 max-w-[800px] leading-relaxed">
            Each biosensor circuit operates as a two-input AND gate: a biomarker threshold signal (input A) AND a time-delay confirmation (input B) must both be satisfied before therapeutic production is authorized. This prevents single-spike false positives from triggering drug synthesis. The confirmation window is tunable per node — from 2 hours for cardiac stress markers to 72 hours for bone resorption indices.
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
          <div className="mt-6 rounded-xl p-6" style={{ background: 'rgba(255,68,68,0.06)', border: '1px solid rgba(255,68,68,0.2)' }}>
            <p className="font-mono text-xs uppercase tracking-[0.1em]" style={{ color: 'rgba(255,68,68,0.8)' }}>Unsolved Problem</p>
            <p className="font-body text-sm text-bd-text/80 mt-2">
              Off-switch architecture: Without reliable reset, autonomous systems risk runaway drug production.
              TRL 2–3 currently. <span style={{ color: 'rgba(255,68,68,0.8)' }}>[RESEARCH GAP]</span>
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
              <span className="w-3 h-3 rounded-full mt-1 flex-shrink-0" style={{ background: '#00e676' }} />
              <div>
                <span className="font-mono text-xs uppercase" style={{ color: '#00e676' }}>GREEN</span>
                <p className="font-body text-xs text-bd-text/60 mt-1">
                  B. subtilis produces via standard recombinant expression (peptides/proteins under ~15 kDa, simple small molecules)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-3 h-3 rounded-full mt-1 flex-shrink-0" style={{ background: '#ffb300' }} />
              <div>
                <span className="font-mono text-xs uppercase" style={{ color: '#ffb300' }}>YELLOW</span>
                <p className="font-body text-xs text-bd-text/60 mt-1">
                  Requires metabolic pathway engineering or non-standard chassis (complex glycoproteins, multi-subunit proteins, steroids)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-3 h-3 rounded-full mt-1 flex-shrink-0" style={{ background: '#ff4444' }} />
              <div>
                <span className="font-mono text-xs uppercase" style={{ color: '#ff4444' }}>RED</span>
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
          <div className="rounded-xl p-6" style={{ background: 'rgba(255,68,68,0.05)', border: '1px solid rgba(255,68,68,0.18)' }}>
            <p className="font-body text-sm text-bd-text/70">
              By Year 2 of a Mars mission, two decay processes converge:
            </p>
            <ul className="mt-3 space-y-2">
              <li className="font-body text-sm text-bd-text/70 flex items-start gap-2">
                <span className="mt-1" style={{ color: 'rgba(255,68,68,0.8)' }}>•</span>
                BDMEE pharmacy drift: ~30% reduction in drug output (microbial mutation)
              </li>
              <li className="font-body text-sm text-bd-text/70 flex items-start gap-2">
                <span className="mt-1" style={{ color: 'rgba(255,68,68,0.8)' }}>•</span>
                AAV-shRNA silencing: ~50% reduction in MURF1 knockdown efficiency
              </li>
            </ul>
            <p className="font-body text-sm text-bd-text/70 mt-4">
              Result: Bone and muscle protection degrade with a <span style={{ color: 'rgba(255,68,68,0.9)' }} className="font-medium">MONTHS-LONG DETECTION LAG</span> before clinical signs appear.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <div className="bg-bd-dark/50 rounded-lg p-4 flex-1 min-w-[200px]">
                <span className="font-mono text-xs" style={{ color: '#00e676' }}>BDMEE SAFEGUARD</span>
                <p className="font-body text-xs text-bd-text/60 mt-1">
                  Constitutive GFP reporter in all pharmacy nodes — fluorescence detectable via optical sensor as production-rate proxy.
                </p>
              </div>
              <div className="bg-bd-dark/50 rounded-lg p-4 flex-1 min-w-[200px]">
                <span className="font-mono text-xs" style={{ color: '#00e676' }}>HUMAN SAFEGUARD</span>
                <p className="font-body text-xs text-bd-text/60 mt-1">
                  Schedule booster AAV re-dosing at T+18 months, pre-formulated and stored in BDMEE cold-node vials.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Master Integration Table */}
        <div className="mt-24 reveal-on-scroll">
          <span className="section-label">INTEGRATION WITH HUMAN GENOMIC EDITS (HGE)</span>
          <h3 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-normal text-bd-text mt-4">
            HGE × BDMEE Integration Matrix
          </h3>
          <p className="font-body text-base text-bd-text/60 mt-4 mb-8 max-w-[800px]">
            Complete mapping of human genomic edits (HGE) to BDMEE pharmacy nodes — showing drug-inducer pairs, feasibility ratings, interaction types, net benefits, and key risks.
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
                        style={{ color: FEASIBILITY_COLORS[row.feasibility] || '#00e676' }}
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
