import { OrganicNetwork } from '../components/OrganicNetwork';

const HGE_EDITS = [
  { gene: 'MSTN', mod: 'Ex vivo CRISPR KO', effect: 'Muscle mass +30–100%', trl: '5–6', priority: 'NOW' },
  { gene: 'LRP5 G171V', mod: 'Base edit', effect: 'High bone mass (HBM) — naturally occurring benign human variant', trl: '4', priority: 'NOW' },
  { gene: 'MURF1/FBXO32', mod: 'Muscle-targeted AAV shRNA', effect: 'Blocks proteasomal muscle atrophy — highest-leverage under-explored target', trl: '4', priority: 'NOW' },
  { gene: 'NRF2', mod: 'Overexpression', effect: 'ROS scavenging, radiation damage resistance', trl: '4', priority: 'NOW' },
  { gene: 'CXCL12/CXCR4', mod: 'Inducible retention edit', effect: 'Hematopoietic stem cell niche protection during radiation events', trl: '3', priority: 'INDUCIBLE ONLY' },
  { gene: 'ACAN/COL2A1/CHST3', mod: 'Gain-of-function / OE', effect: 'Spinal disc resilience under axial unloading — replaces the "height" frame', trl: '3', priority: 'NOW' },
  { gene: 'COMT/MAOA/SLC6A4', mod: 'Variant introduction', effect: 'Psychogenetic resilience, cognitive stress tolerance, serotonin regulation', trl: '3', priority: 'NOW' },
  { gene: 'PIEZO1', mod: 'Gain-of-function edit', effect: 'Mechanosensor layer preserves bone/cardiovascular signaling in microgravity', trl: '3', priority: 'ELECTIVE' },
];

const APH_STACK = [
  { num: 1, crop: 'Wolffia globosa', role: 'Primary protein source (~45% dry-weight protein per gram)', trl: '4', note: 'High-leucine strain via AHAS-FR + leuC/leuD edits — meets MSTN KO crew demand' },
  { num: 2, crop: 'Engineered Soybean (8-edit stack)', role: 'Cofactor crop — not protein. Arg/Gly (creatine precursors), Trp (serotonin), Pro (collagen)', trl: '3', note: 'Split across 2 cultivars to stay within regulatory precedent' },
  { num: 3, crop: '7-DHC Vitamin D Tomato', role: 'Vitamin D precursor via DWARF11/CYP90B1 KO — no UV-B lamp required', trl: '6', note: 'Cathie Martin 2022, Nature Plants. Essential LRP5 G171V mineralization cofactor' },
  { num: 4, crop: 'Beneforté Kale/Broccoli Microgreens', role: 'Sulforaphane hyperaccumulation — NRF2 co-activation ligand. Commercial.', trl: '9', note: 'MYB28/29 OE. Prevents NRF2 desensitization from constitutive expression' },
  { num: 5, crop: 'DHA-Camelina + Schizochytrium', role: 'DHA omega-3 primary (food) + supplement-grade oil (on-demand)', trl: '9', note: 'Both commercial. Run in parallel — Camelina as food, Schizochytrium as oil reserve' },
  { num: 6, crop: 'Dwarf Wheat (USU-Apogee × Rht-D1b)', role: 'Caloric anchor + dietary spermidine for senescence control', trl: '8', note: '' },
  { num: 7, crop: 'Sweet Potato + Cherry Tomato', role: 'Caloric density + crew psychological morale baseline', trl: '7', note: '' },
];

const THREE_WAY_TABLE = [
  { crop: 'High-leucine Wolffia', hge: 'MSTN KO + mIGF-1', bdmee: 'Replaces Synechocystis leucine', benefit: 'Primary edited protein source', risk: 'Purine load → uric acid [RG]' },
  { crop: '7-DHC Vit D Tomato', hge: 'LRP5 G171V', bdmee: 'Complements abaloparatide node', benefit: 'Safe bone mineralization stack', risk: 'DWARF11 pleiotropic effects' },
  { crop: 'Beneforté Kale', hge: 'NRF2 overexpression', bdmee: 'Reduces melanin shield load requirement', benefit: 'NRF2 activated without desensitization', risk: 'None — commercial product' },
  { crop: 'DHA-Camelina', hge: 'COMT/MAOA/SLC6A4', bdmee: 'Complements Selank/Semax nodes', benefit: 'Full omega-3 + psychogenetic profile', risk: 'GCR lipid peroxidation in storage [RG]' },
  { crop: 'Engineered Soybean', hge: 'ACAN/COL2A1, Follistatin, psychogenetic', bdmee: 'Reduces Anakinra/Sprifermin demand', benefit: 'Multi-target nutritional cofactor', risk: 'No 8-edit regulatory precedent — split cultivars' },
  { crop: 'B. subtilis K2 (BDMEE)', hge: 'LRP5 G171V', bdmee: 'Dedicated natto node, TRL 7', benefit: 'Bone mineralization cofactor', risk: 'None' },
];

const RADIATION_LAYERS = [
  { layer: 'BDMEE Melanized Exo-Crust', mechanism: 'Physical/chemical GCR attenuation via radiotrophic melanin', protection: 'GCR heavy ions, secondary neutrons', dose: '60–70% dose reduction', color: '#00ff87' },
  { layer: 'HGE NRF2 + DNA Repair Edits', mechanism: 'Cellular ROS scavenging, DSB repair pathway overexpression', protection: 'Residual GCR, acute solar particle events', dose: '15–20% cellular damage reduction', color: '#00e5b0' },
  { layer: 'BDMEE Trilineage Pharmacy', mechanism: 'Filgrastim + TPO-mimetic + EMP-1 hematopoietic recovery', protection: 'Post-SPE bone marrow suppression', dose: 'Acute event response (on-demand)', color: '#b157ff' },
  { layer: 'APH MBW Anthocyanins', mechanism: 'Plant-side GCR absorption pigments (parallel to BDMEE melanin)', protection: 'Crop genome integrity under chronic GCR', dose: 'Crop-local protection', color: '#ffb300' },
  { layer: 'Beneforté Sulforaphane', mechanism: 'Dietary NRF2 co-activation — prevents tolerance/desensitization', protection: 'Maintains NRF2 edit efficacy over 2-year mission', dose: 'Synergistic with edit (not additive)', color: '#ff7043' },
];

const METABOLIC_LOOP = [
  { step: '01', from: 'Crew', action: 'Exhales CO₂, sheds biomarkers (cortisol, osteocalcin, EBV DNA) into habitat air and surfaces' },
  { step: '02', from: 'BDMEE', action: 'Synechocystis + APH crops fix CO₂ → O₂ + biomass. Biosensors in vascular mesh sample biomarkers → trigger pharmacy nodes' },
  { step: '03', from: 'APH', action: 'Wolffia / Spirulina / crops → protein + micronutrients → crew eats. Crew urine/sweat → nitrogen recovery → APH hydroponic loop (~80% N closed)' },
  { step: '04', from: 'APH → BDMEE', action: 'Crop waste (lignocellulose, roots, stalks) → Cladosporium dual-function upgrade: melanin shield + cellulase decomposition → mineral nutrients recycled into APH' },
  { step: '05', from: 'BDMEE → APH', action: 'PHOSPHITE FIREWALL: Crew is the only physical transfer point. Cross-contamination = biocontainment breach signal, not a chemistry problem' },
];

const DRIFT_TABLE = [
  { system: 'Crew AAV edits', mechanism: 'Episomal dilution + promoter silencing', timescale: '5–8 years', safeguard: 'T+18 mo booster re-dosing in BDMEE cold-node vials' },
  { system: 'APH crop seed library', mechanism: 'GCR somatic mutation accumulation across generations', timescale: '3–5 years', safeguard: 'Radiation-shielded seed backup; annual re-breeding' },
  { system: 'BDMEE plasmid edits', mechanism: 'Radiation + metabolic stress mutation drift', timescale: '1–3 years', safeguard: 'Constitutive GFP reporter; optical fluorescence monitoring' },
];

export function CataphractSection() {
  return (
    <section id="cataphract" className="relative py-[80px] overflow-hidden" style={{
      background: 'linear-gradient(180deg, #010a06 0%, #050e09 40%, #020c07 70%, #010a06 100%)',
    }}>
      <OrganicNetwork opacity={0.15} />

      {/* Top gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(0,255,135,0.3), rgba(177,87,255,0.25), rgba(0,229,176,0.3), transparent)',
      }} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">

        {/* ── SECTION LABEL + TITLE ── */}
        <span className="section-label reveal-on-scroll">MASTER INTEGRATION</span>
        <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-normal text-bd-text leading-[0.86] tracking-[-0.03em] mt-4 reveal-on-scroll">
          CATAPHRACT
        </h2>
        <p className="font-mono text-sm text-bd-accent/70 tracking-[0.06em] mt-2 reveal-on-scroll">
          Coupled Adaptive Trans-organism Architecture for Planetary Habitation, Resilience, And Crew Transit
        </p>

        {/* ── HISTORICAL METAPHOR ── */}
        <div className="mt-10 reveal-on-scroll max-w-[900px]">
          <div className="p-8 rounded-2xl" style={{
            background: 'linear-gradient(135deg, rgba(0,255,135,0.04), rgba(177,87,255,0.04))',
            border: '1px solid rgba(0,255,135,0.15)',
          }}>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bd-accent/60 mb-4">Origin of the Name</p>
            <p className="font-body text-base text-bd-text/80 leading-relaxed">
              A cataphract was a Sasanian-Parthian heavy cavalry unit where horse and rider were both fully armored and trained as a single coupled weapon system — neither survived without the other, and together they were the most resilient combat platform of the ancient world for nearly a thousand years. The Greek root <span className="font-mono text-bd-accent/80">kataphraktos</span> means "completely enclosed," "armored on all sides."
            </p>
            <p className="font-body text-base text-bd-text/80 leading-relaxed mt-4">
              That is exactly what this framework is: the crew (HGE) and the habitat-organisms (BDMEE) and the crop ecosystem (APH) are not three programs running in parallel — they are one coupled organism, armored together, none of them viable alone.
            </p>
          </div>
        </div>

        {/* ── THREE PILLARS ── */}
        <div className="mt-12 reveal-on-scroll">
          <span className="section-label">THE THREE PILLARS</span>
          <h3 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-normal text-bd-text mt-3">
            One System, Three Domains
          </h3>
          <p className="font-body text-base text-bd-text/55 mt-3 max-w-[700px] leading-relaxed">
            Each pillar solves problems the other two cannot. Remove any one and the system enters cascade failure within months. Together they form a closed adaptive platform that is more resilient than any of its components.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {/* HGE */}
          <div className="reveal-on-scroll glow-card p-8" style={{ borderColor: 'rgba(0,229,176,0.2)', borderTopWidth: '3px', borderTopColor: '#00e5b0' }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[10px] px-2.5 py-1 rounded" style={{ background: 'rgba(0,229,176,0.1)', color: '#00e5b0', border: '1px solid rgba(0,229,176,0.25)' }}>PILLAR I</span>
            </div>
            <h4 className="font-body text-xl font-semibold text-bd-text">Human Genomic Edits</h4>
            <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-bd-text/35 mt-1">HGE</p>
            <p className="font-body text-sm text-bd-text/60 mt-4 leading-relaxed">
              Pre-adapted crew with edited genomes — stronger bones, preserved muscle, radiation-resistant cells, optimized cognition. The human body is not a fixed system in space; it is an editable one.
            </p>
            <div className="mt-5 pt-4 border-t border-bd-border space-y-2">
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-bd-text/30">Priority Edits</p>
              {['MSTN KO — muscle mass +30–100%', 'LRP5 G171V — high bone mass phenotype', 'MURF1/FBXO32 shRNA — anti-atrophy', 'NRF2 OE — radiation/ROS defense', 'COMT/MAOA/SLC6A4 — psychogenetic'].map((e, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span style={{ color: '#00e5b0' }} className="text-xs mt-0.5 flex-shrink-0">—</span>
                  <p className="font-mono text-[10px] text-bd-text/55">{e}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 p-3 rounded-lg" style={{ background: 'rgba(0,229,176,0.07)', borderLeft: '2px solid rgba(0,229,176,0.35)' }}>
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] mb-1" style={{ color: 'rgba(0,229,176,0.7)' }}>Why Edit Humans?</p>
              <p className="font-body text-xs text-bd-text/55 leading-relaxed">Microgravity actively drives catabolic gene programs via Wnt inhibition and RANKL upregulation. Countermeasures must act at the terminal effector layer — editing the proteasomal pathway (MURF1/FBXO32) or the mechanosensor itself (PIEZO1) — not at the transcriptional middle layer that microgravity overrides.</p>
            </div>
          </div>

          {/* BDMEE */}
          <div className="reveal-on-scroll glow-card p-8" style={{ borderColor: 'rgba(0,255,135,0.2)', borderTopWidth: '3px', borderTopColor: '#00ff87', transitionDelay: '0.12s' }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[10px] px-2.5 py-1 rounded" style={{ background: 'rgba(0,255,135,0.1)', color: '#00ff87', border: '1px solid rgba(0,255,135,0.25)' }}>PILLAR II</span>
            </div>
            <h4 className="font-body text-xl font-semibold text-bd-text">Bio-Pharma Depot & Modular ELM Ecosystem</h4>
            <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-bd-text/35 mt-1">BDMEE</p>
            <p className="font-body text-sm text-bd-text/60 mt-4 leading-relaxed">
              The habitat that builds itself, shields itself, repairs itself, and synthesizes medicine on demand. Three engineered organisms as one closed-loop architecture — fungal shield, vascular mesh, bacterial pharmacy, photosynthetic atmosphere.
            </p>
            <div className="mt-5 pt-4 border-t border-bd-border space-y-2">
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-bd-text/30">Core Subsystems</p>
              {['Cladosporium — melanized radiation exo-crust', 'Vascular mesh — phosphite nutrient circulation', 'Bacillus subtilis — 12-node pharmaceutical spores', 'Synechocystis — CO₂→O₂ atmospheric lungs', 'Synthetic auxotrophy — 99.99% biocontainment'].map((e, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span style={{ color: '#00ff87' }} className="text-xs mt-0.5 flex-shrink-0">—</span>
                  <p className="font-mono text-[10px] text-bd-text/55">{e}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 p-3 rounded-lg" style={{ background: 'rgba(0,255,135,0.07)', borderLeft: '2px solid rgba(0,255,135,0.35)' }}>
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] mb-1" style={{ color: 'rgba(0,255,135,0.7)' }}>Why a Living Habitat?</p>
              <p className="font-body text-xs text-bd-text/55 leading-relaxed">Every kilogram to Mars orbit costs $10,000–$50,000. Steel habitats require 40–120 tonnes per module. A dormant spore payload weighs grams and self-assembles into a full radiation-shielded habitat with integrated pharmacy — collapsing the entire construction and medical logistics problem into a biology problem.</p>
            </div>
          </div>

          {/* APH */}
          <div className="reveal-on-scroll glow-card p-8" style={{ borderColor: 'rgba(177,87,255,0.2)', borderTopWidth: '3px', borderTopColor: '#b157ff', transitionDelay: '0.24s' }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[10px] px-2.5 py-1 rounded" style={{ background: 'rgba(177,87,255,0.1)', color: '#b157ff', border: '1px solid rgba(177,87,255,0.25)' }}>PILLAR III</span>
            </div>
            <h4 className="font-body text-xl font-semibold text-bd-text">Advanced Plant Habitat</h4>
            <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-bd-text/35 mt-1">APH — Space Agriculture</p>
            <p className="font-body text-sm text-bd-text/60 mt-4 leading-relaxed">
              A genome-matched crop system engineered specifically for this crew's edited nutritional demands — not generic astronaut food. Wolffia bioreactors producing 600 g/day protein with leucine fractions matched to MSTN KO metabolic requirements.
            </p>
            <div className="mt-5 pt-4 border-t border-bd-border space-y-2">
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-bd-text/30">Five-Plus-Two Stack</p>
              {['Wolffia globosa — primary protein (45% dw)', '7-DHC Tomato — Vitamin D, no UV-B needed', 'Beneforté Kale — sulforaphane, NRF2 ligand', 'DHA-Camelina + Schizochytrium — omega-3', 'Dwarf Wheat + Sweet Potato — caloric base'].map((e, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span style={{ color: '#b157ff' }} className="text-xs mt-0.5 flex-shrink-0">—</span>
                  <p className="font-mono text-[10px] text-bd-text/55">{e}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 p-3 rounded-lg" style={{ background: 'rgba(177,87,255,0.07)', borderLeft: '2px solid rgba(177,87,255,0.35)' }}>
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] mb-1" style={{ color: 'rgba(177,87,255,0.7)' }}>Why Genome-Matched Crops?</p>
              <p className="font-body text-xs text-bd-text/55 leading-relaxed">MSTN KO + mIGF-1 crew require 150 g/day protein — nearly double standard astronaut demand. Standard ISS crop portfolios fail to meet this at any realistic cultivation area. The APH stack is designed around the crew genome, not around Earth-normal human nutrition.</p>
            </div>
          </div>
        </div>

        {/* ── CLOSED METABOLIC LOOP ── */}
        <div className="mt-14 reveal-on-scroll">
          <span className="section-label">METABOLIC ARCHITECTURE</span>
          <h3 className="font-display text-[clamp(1.5rem,2.5vw,2.2rem)] font-normal text-bd-text mt-3">The Closed Metabolic Loop</h3>
          <p className="font-body text-sm text-bd-text/55 mt-3 max-w-[700px] leading-relaxed">
            No subsystem in CATAPHRACT is an isolated module. Every output of one pillar is an input to another. The loop closes mass, energy, and pharmaceutical cycles simultaneously.
          </p>
        </div>

        <div className="mt-8 space-y-0 reveal-on-scroll">
          {METABOLIC_LOOP.map((item, i) => (
            <div key={i} className="flex gap-6 items-stretch">
              <div className="flex flex-col items-center flex-shrink-0 w-10">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-[10px] font-bold flex-shrink-0"
                  style={{ background: 'rgba(0,255,135,0.12)', color: '#00ff87', border: '1px solid rgba(0,255,135,0.3)' }}
                >
                  {item.step}
                </div>
                {i < METABOLIC_LOOP.length - 1 && (
                  <div className="flex-1 w-px my-1" style={{ background: 'linear-gradient(to bottom, rgba(0,255,135,0.3), rgba(0,255,135,0.08))' }} />
                )}
              </div>
              <div className="pb-6 flex-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] mb-1" style={{ color: 'rgba(0,255,135,0.6)' }}>{item.from}</p>
                <p className="font-body text-sm text-bd-text/70 leading-relaxed">{item.action}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── HGE EDITS TABLE ── */}
        <div className="mt-14 reveal-on-scroll">
          <span className="section-label">PILLAR I DETAIL</span>
          <h3 className="font-display text-[clamp(1.5rem,2.5vw,2.2rem)] font-normal text-bd-text mt-3">Human Genomic Edit Targets</h3>
          <p className="font-body text-sm text-bd-text/55 mt-3 mb-8 max-w-[700px] leading-relaxed">
            Strategic principle: Edits must act at the mechanosensor layer (PIEZO1) or terminal effector layer (MURF1, RANKL) — never the transcriptional middle layer (RUNX2) that microgravity overrides directly.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-bd-border">
                  {['Gene', 'Modification', 'Effect', 'TRL', 'Priority'].map(h => (
                    <th key={h} className="text-left font-mono text-[10px] uppercase tracking-[0.1em] text-bd-text/35 pb-3 pr-5">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {HGE_EDITS.map((row, i) => (
                  <tr key={i} className="border-b border-bd-border/40">
                    <td className="font-mono text-xs text-bd-accent py-3.5 pr-5 whitespace-nowrap">{row.gene}</td>
                    <td className="font-body text-xs text-bd-text/65 py-3.5 pr-5">{row.mod}</td>
                    <td className="font-body text-xs text-bd-text/60 py-3.5 pr-5 max-w-[260px]">{row.effect}</td>
                    <td className="font-mono text-xs text-bd-text/50 py-3.5 pr-5 whitespace-nowrap">{row.trl}</td>
                    <td className="py-3.5">
                      <span
                        className="font-mono text-[10px] uppercase px-2 py-0.5 rounded whitespace-nowrap"
                        style={{
                          background: row.priority === 'NOW' ? 'rgba(0,255,135,0.1)' : row.priority === 'INDUCIBLE ONLY' ? 'rgba(255,179,0,0.1)' : 'rgba(177,87,255,0.1)',
                          color: row.priority === 'NOW' ? '#00ff87' : row.priority === 'INDUCIBLE ONLY' ? '#ffb300' : '#b157ff',
                          border: `1px solid ${row.priority === 'NOW' ? 'rgba(0,255,135,0.25)' : row.priority === 'INDUCIBLE ONLY' ? 'rgba(255,179,0,0.25)' : 'rgba(177,87,255,0.25)'}`,
                        }}
                      >
                        {row.priority}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 p-4 rounded-lg" style={{ background: 'rgba(255,68,68,0.06)', border: '1px solid rgba(255,68,68,0.2)' }}>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] mb-1" style={{ color: 'rgba(255,68,68,0.8)' }}>Critical Research Gap</p>
            <p className="font-body text-xs text-bd-text/65 leading-relaxed">Whether MSTN KO + mIGF-1 genomic pre-adaptation flattens the microgravity catabolic rate or merely raises the anabolic baseline is completely unknown. The Schuelke myostatin-null patient and Belgian Blue cattle have never been studied under simulated unloading. This is the single most important experiment the field is not running. Highest-priority pre-deployment animal study: Abaloparatide × LRP5 G171V hypercalcemic crisis risk in primate hindlimb unloading model.</p>
          </div>
        </div>

        {/* ── APH CROP STACK ── */}
        <div className="mt-14 reveal-on-scroll">
          <span className="section-label">PILLAR III DETAIL</span>
          <h3 className="font-display text-[clamp(1.5rem,2.5vw,2.2rem)] font-normal text-bd-text mt-3">APH Five-Plus-Two Mandatory Crop Stack</h3>
          <p className="font-body text-sm text-bd-text/55 mt-3 mb-8 max-w-[700px] leading-relaxed">
            Standard astronaut crop selection fails for a crew with MSTN KO + mIGF-1 edits requiring 150 g/day protein per person (600 g/day × 4 crew). The stacked-aquatic architecture below delivers 825 g/day with a 37% safety margin for crop failure.
          </p>
          <div className="space-y-3">
            {APH_STACK.map((crop, i) => (
              <div key={i} className="flex items-start gap-5 bg-bd-surface/40 border border-bd-border rounded-xl p-5 reveal-on-scroll" style={{ transitionDelay: `${i * 0.07}s` }}>
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold"
                  style={{ background: 'rgba(177,87,255,0.12)', color: '#b157ff', border: '1px solid rgba(177,87,255,0.3)' }}
                >
                  {crop.num}
                </span>
                <div className="flex-1 min-w-0">
                  <h5 className="font-body text-sm font-semibold text-bd-text">{crop.crop}</h5>
                  <p className="font-body text-sm text-bd-text/60 mt-1">{crop.role}</p>
                  {crop.note && <p className="font-mono text-[10px] text-bd-text/40 mt-1.5">{crop.note}</p>}
                </div>
                <span
                  className="flex-shrink-0 font-mono text-[10px] px-2 py-0.5 rounded self-start"
                  style={{ background: 'rgba(177,87,255,0.1)', color: '#b157ff', border: '1px solid rgba(177,87,255,0.2)' }}
                >
                  TRL {crop.trl}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── THREE-WAY INTERACTION TABLE ── */}
        <div className="mt-14 reveal-on-scroll">
          <span className="section-label">CROSS-PILLAR COUPLING</span>
          <h3 className="font-display text-[clamp(1.5rem,2.5vw,2.2rem)] font-normal text-bd-text mt-3">Crop × Human Edit × BDMEE Interaction Matrix</h3>
          <p className="font-body text-sm text-bd-text/55 mt-3 mb-8 max-w-[700px] leading-relaxed">
            Each row represents a coupled three-way interaction where the effect of one pillar amplifies, depends on, or constrains another. These interactions are not coincidental — they are the design.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="border-b border-bd-border">
                  {['APH Crop Output', 'HGE Edit Supported', 'BDMEE Node Effect', 'Net Benefit', 'Key Risk'].map(h => (
                    <th key={h} className="text-left font-mono text-[10px] uppercase tracking-[0.1em] text-bd-text/35 pb-3 pr-5">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {THREE_WAY_TABLE.map((row, i) => (
                  <tr key={i} className="border-b border-bd-border/40">
                    <td className="font-body text-xs text-bd-text font-medium py-3.5 pr-5">{row.crop}</td>
                    <td className="font-mono text-[10px] text-bd-accent/80 py-3.5 pr-5">{row.hge}</td>
                    <td className="font-body text-xs text-bd-text/60 py-3.5 pr-5">{row.bdmee}</td>
                    <td className="font-body text-xs text-bd-text/70 py-3.5 pr-5">{row.benefit}</td>
                    <td className="font-body text-xs py-3.5" style={{ color: row.risk === 'None' ? 'rgba(0,230,118,0.7)' : 'rgba(255,179,0,0.8)' }}>{row.risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── RADIATION LAYERED DEFENSE ── */}
        <div className="mt-14 reveal-on-scroll">
          <span className="section-label">LAYERED DEFENSE</span>
          <h3 className="font-display text-[clamp(1.5rem,2.5vw,2.2rem)] font-normal text-bd-text mt-3">Five-Layer Radiation Defense Matrix</h3>
          <p className="font-body text-sm text-bd-text/55 mt-3 mb-8 max-w-[700px] leading-relaxed">
            CATAPHRACT does not rely on any single radiation defense mechanism. It stacks five independent layers across all three pillars — physical, cellular, pharmaceutical, agricultural, and dietary. The key insight: NRF2 edits become elective when the habitat achieves target shielding. If the habitat degrades, NRF2 becomes essential. The crew's safety margin is only as good as the living habitat's structural integrity.
          </p>
          <div className="space-y-3">
            {RADIATION_LAYERS.map((layer, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row gap-5 p-5 rounded-xl reveal-on-scroll"
                style={{
                  transitionDelay: `${i * 0.09}s`,
                  background: `${layer.color}06`,
                  border: `1px solid ${layer.color}20`,
                }}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-0.5" style={{ background: layer.color, boxShadow: `0 0 12px ${layer.color}60` }} />
                <div className="flex-1 min-w-0">
                  <h5 className="font-body text-sm font-semibold text-bd-text">{layer.layer}</h5>
                  <p className="font-body text-sm text-bd-text/60 mt-1">{layer.mechanism}</p>
                  <p className="font-mono text-[10px] text-bd-text/40 mt-1">Protects: {layer.protection}</p>
                </div>
                <div className="flex-shrink-0 self-start">
                  <span
                    className="font-mono text-[10px] px-3 py-1 rounded-full whitespace-nowrap"
                    style={{ background: `${layer.color}15`, color: layer.color, border: `1px solid ${layer.color}30` }}
                  >
                    {layer.dose}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── DUAL-GENOME DRIFT ── */}
        <div className="mt-14 reveal-on-scroll">
          <span className="section-label">SYSTEMS-LEVEL RISK</span>
          <h3 className="font-display text-[clamp(1.5rem,2.5vw,2.2rem)] font-normal text-bd-text mt-3">The Dual-Genome Drift Problem</h3>
          <p className="font-body text-sm text-bd-text/55 mt-3 mb-8 max-w-[700px] leading-relaxed">
            Three biological systems degrade on overlapping timescales. No monitoring protocol currently spans all three pillars simultaneously. This is a novel synthesis — a gap in the literature that CATAPHRACT identifies for the first time. The solution is a <span className="text-bd-accent font-medium">Unified Genome-State Telemetry System</span>: periodically sequencing crew blood, crop seed samples, and BDMEE colony samples in parallel as a single integrated health check.
          </p>
          <div className="overflow-x-auto reveal-on-scroll">
            <table className="w-full">
              <thead>
                <tr className="border-b border-bd-border">
                  {['Biological System', 'Degradation Mechanism', 'Timescale', 'Active Safeguard'].map(h => (
                    <th key={h} className="text-left font-mono text-[10px] uppercase tracking-[0.1em] text-bd-text/35 pb-3 pr-6">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DRIFT_TABLE.map((row, i) => (
                  <tr key={i} className="border-b border-bd-border/40">
                    <td className="font-body text-sm font-medium text-bd-text py-4 pr-6">{row.system}</td>
                    <td className="font-body text-sm text-bd-text/60 py-4 pr-6">{row.mechanism}</td>
                    <td className="font-mono text-xs text-bd-accent py-4 pr-6 whitespace-nowrap">{row.timescale}</td>
                    <td className="font-body text-xs text-bd-text/55 py-4">{row.safeguard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── CONVERGENCE STATEMENT ── */}
        <div className="mt-12 reveal-on-scroll p-10 rounded-2xl" style={{
          background: 'linear-gradient(135deg, rgba(0,255,135,0.04), rgba(0,229,176,0.04), rgba(177,87,255,0.04))',
          border: '1px solid rgba(0,255,135,0.12)',
        }}>
          <p className="font-display text-[clamp(1.2rem,2vw,1.6rem)] text-bd-text/85 leading-[1.3] max-w-[900px]">
            "The crew's body is edited to survive space. The habitat is grown to shield and medicate them. The crops are engineered to feed the body those edits require. None of these is a program. Together, they are one organism — <span className="bio-gradient-text">completely enclosed, armored on all sides</span>, and alive."
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-bd-text/30 mt-6">— CATAPHRACT Framework · Zarias Sacrati Aelius · 2026</p>
        </div>
      </div>
    </section>
  );
}
