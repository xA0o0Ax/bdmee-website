import { useEffect, useRef } from 'react';

const TARGETS = [
  {
    id: 'A',
    title: 'Kill Switch — Synthetic Auxotrophy',
    subtitle: 'pstS knockout + ptxD (phosphite dehydrogenase) insertion',
    color: '#00ff87',
    organism: 'Cladosporium sphaerospermum & Bacillus subtilis',
    description: 'Mars regolith contains native phosphate (PO₄³⁻) at 0.5–0.8% mass concentration — a viable energy source for any escaped organism with standard phosphate metabolism. This edit replaces the phosphate uptake transporter (pstS knockout) with ptxD from Pseudomonas stutzeri, which exclusively processes phosphite (PO₃³⁻): a compound absent from all known natural planetary bodies. Survival outside the habitat\'s synthetic nutrient stream becomes biologically impossible — not improbable.',
    why: 'COSPAR Category IV planetary protection requirements prohibit the introduction of organisms capable of autonomous survival on Mars. A toxin-based kill switch fails — evolution selects against it within hundreds of generations. A metabolic kill switch cannot be escaped: you cannot evolve a need for a nutrient that does not exist in your environment.',
  },
  {
    id: 'B',
    title: 'Hyper-Melanization',
    subtitle: 'gpdA constitutive promoter driving pks1 overexpression',
    color: '#00e5b0',
    organism: 'Cladosporium sphaerospermum',
    description: 'Wild-type C. sphaerospermum upregulates melanin only in active radiation stress — a slow, reactive mechanism calibrated for individual survival, not construction timelines. Replacing the stress-responsive promoter with the constitutive gpdA promoter from Aspergillus converts melanin synthesis from a stress response into a manufacturing program: every cell division from germination onward produces maximum melanin density. The 21-day pre-crew deployment window requires this from the first hour of growth.',
    why: 'Galactic Cosmic Rays (GCR) are the single most unresolved barrier to human Mars missions. Earth\'s magnetosphere deflects >99% of GCR flux. Mars has <1% of Earth\'s magnetic field strength, providing essentially zero protection. Radiotrophic melanin (developed by C. sphaerospermum in Chernobyl\'s reactor exclusion zone) absorbs ionizing radiation and transduces it into chemical energy — the only known biological mechanism for this conversion at relevant radiation energies.',
  },
  {
    id: 'C',
    title: 'Bio-Pharmacy Chassis',
    subtitle: 'Δpps Δsrf protease-deficient chassis + amyE safe-harbor integration',
    color: '#b157ff',
    organism: 'Bacillus subtilis (Δpps Δsrf chassis)',
    description: 'The Δpps Δsrf chassis removes the two dominant protease pathways in B. subtilis that degrade heterologous proteins before they can be secreted, achieving a >10-fold increase in therapeutic protein yield. Pharmaceutical genes are integrated at the amyE locus — a genomically stable, transcriptionally neutral safe harbor that resists silencing over hundreds of generations. Orthogonal inducers (xylose, arabinose, IPTG, rhamnose) activate each drug node independently with zero cross-activation.',
    why: 'The International Space Station stocks over 200 pharmaceuticals. A 25-month Mars mission exceeds the stability window of every temperature-sensitive drug in that formulary. B. subtilis spores survive 250-million-year dormancy periods; they are impervious to space radiation in their dormant state. The amyE safe harbor was chosen specifically because native amylase expression at this locus has been eliminated — there is no competing metabolic context to silence the inserted therapeutic gene.',
  },
];

const SEQUENCE_DETAILS = [
  {
    target: 'A',
    color: '#00ff87',
    label: 'Synthetic Auxotrophy Cassette',
    sequence: '[HomArmA] — P_veg — RBS(AGGAGG) — ptxD — T_rrnB — [HomArmB]',
    note: 'ptxD from Pseudomonas stutzeri WD (GenBank M62908). Phosphite dehydrogenase catalyzes PO₃³⁻ → PO₄³⁻ with NAD⁺ as cofactor. pstS knockout ensures no residual phosphate uptake capacity remains.',
    organism: 'Both chassis',
  },
  {
    target: 'B',
    color: '#00e5b0',
    label: 'Hyper-Melanization Architecture',
    sequence: '[P_gpdA] — pks1 ATG — replaces endogenous stress-inducible TATA box',
    note: 'gpdA (glyceraldehyde-3-phosphate dehydrogenase) promoter from Aspergillus nidulans: constitutively active at maximum expression level from germination. Decouples melanin synthesis from radiation stress → continuous melanin factory during 21-day deployment.',
    organism: 'C. sphaerospermum',
  },
  {
    target: 'C',
    color: '#b157ff',
    label: 'Pharmacy Chassis Architecture',
    sequence: 'Δpps Δsrf — amyE::P_xylA-[therapeutic gene]-T_rrnB',
    note: 'Orthogonal promoter multiplexing: each drug occupies an isolated genomic locus activated by a unique inducer. 100 independent micro-chamber nodes per drug type. Spatial isolation eliminates cross-contamination between drug production lines.',
    organism: 'B. subtilis',
  },
];

const PRINCIPLES = [
  {
    num: '01',
    title: 'The Shielding Substitution Theorem',
    color: '#00ff87',
    body: 'Every dB of habitat radiation shielding achieved by BDMEE exo-crust is one less dB of genomic intervention required in the crew. If the exo-crust reduces crew dose to <50 mSv/year (Earth surface equivalent), then TERT activation and aggressive NRF2 editing shift from necessary to elective enhancements. Habitat biology protects crew biology — sequentially, not in parallel.',
  },
  {
    num: '02',
    title: 'The Inducibility Imperative',
    color: '#00e5b0',
    body: 'Constitutive crew genomic edits create pharmacological antagonisms with acute drug therapy. A constitutive CXCR4 overexpression edit combined with Filgrastim (G-CSF) creates a futile signaling cycle leading to paradoxical immune suppression rather than neutrophil mobilization. Default to inducible architectures (tet-ON, riboswitch, light-gated promoters) for any crew edit intended to interact with the pharmacy layer.',
  },
  {
    num: '03',
    title: 'The Pharmacy-as-Insurance Doctrine',
    color: '#b157ff',
    body: 'AAV episomal edits carry a ~5–8 year half-life under ideal conditions. Promoter silencing of integrated transgenes runs 30–60% over 1–3 years in mammalian systems. On a 25-month Mars mission, engineering must assume edit decay from Day 1, not edit permanence. The BDMEE pharmacy exists not as a supplement to crew genomic edits — it exists as the primary fallback when those edits inevitably degrade.',
  },
];

function DNAHelix() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const helixEl = document.createElement('div');
    helixEl.className = 'absolute right-[8%] top-1/2 -translate-y-1/2 w-[260px] h-[560px]';
    helixEl.style.transformStyle = 'preserve-3d';
    helixEl.style.opacity = '0.35';
    helixEl.style.pointerEvents = 'none';
    container.appendChild(helixEl);

    const numDiscs = 26;
    const radius = 90;
    const spacing = 20;
    const rotationSpeed = 0.0025;
    const nucleotides = ['a', 't', 'c', 'g'];
    const nucleotideColors: Record<string, string> = {
      a: '#00ff87',
      t: '#00e5b0',
      c: '#b157ff',
      g: '#ff7043',
    };

    const strandA = document.createElement('div');
    strandA.style.cssText = 'position:absolute;top:0;width:100%;height:100%;transform-style:preserve-3d;';
    const strandB = document.createElement('div');
    strandB.style.cssText = 'position:absolute;top:0;width:100%;height:100%;transform-style:preserve-3d;transform:rotateY(180deg);';
    helixEl.appendChild(strandA);
    helixEl.appendChild(strandB);
    const strands = [strandA, strandB];

    interface DiscData { el: HTMLDivElement; index: number; strand: number; }
    const discs: DiscData[] = [];

    for (let i = 0; i < numDiscs; i++) {
      for (let s = 0; s < 2; s++) {
        const disc = document.createElement('div');
        disc.style.cssText = `position:absolute;left:50%;width:36px;height:36px;margin-left:-18px;border-radius:50%;background:rgba(5,15,10,0.8);border:1.5px solid rgba(184,240,204,0.15);backface-visibility:hidden;transform-style:preserve-3d;`;
        const nucleotide = nucleotides[(i + s) % 4];
        const color = nucleotideColors[nucleotide];
        const core = document.createElement('div');
        core.style.cssText = `position:absolute;top:50%;left:50%;width:14px;height:14px;margin:-7px 0 0 -7px;border-radius:50%;background:${color};box-shadow:0 0 8px ${color}60;`;
        disc.appendChild(core);
        disc.dataset.index = String(i);
        disc.dataset.strand = String(s);
        strands[s].appendChild(disc);
        discs.push({ el: disc, index: i, strand: s });
      }
    }

    let rotation = { y: 0 };
    let animationId: number;

    function animate() {
      animationId = requestAnimationFrame(animate);
      rotation.y += rotationSpeed;
      helixEl.style.transform = `translateY(-50%) rotateY(${rotation.y}rad)`;
      discs.forEach(({ el, index, strand }) => {
        const angle = (index / numDiscs) * Math.PI * 2 + rotation.y + (strand * Math.PI);
        const y = (index - numDiscs / 2) * spacing;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        el.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateY(${-angle}rad)`;
      });
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      if (container.contains(helixEl)) container.removeChild(helixEl);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hidden lg:block absolute inset-0 pointer-events-none"
      style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
    />
  );
}

export function GenomicsSection() {
  return (
    <section id="genomics" className="relative py-[80px] overflow-hidden" style={{
      background: 'linear-gradient(180deg, #010a06 0%, #030e08 50%, #010a06 100%)',
    }}>
      <DNAHelix />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column */}
          <div className="lg:w-[55%]">
            <span className="section-label reveal-on-scroll">GENOMIC BLUEPRINT</span>
            <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-normal text-bd-text leading-[0.88] tracking-[-0.03em] mt-4 reveal-on-scroll">
              Synthetic Biology &amp;<br />Precision Strain Engineering
            </h2>
            <p className="font-body text-base text-bd-text/65 max-w-[480px] mt-6 reveal-on-scroll leading-relaxed">
              The feasibility of BDMEE relies on three critical genomic modifications — each targeting a specific engineering requirement rather than a biological one. These are not improvements to the organisms. They are re-purposings.
            </p>
            <p className="font-body text-base text-bd-text/65 max-w-[480px] mt-4 reveal-on-scroll leading-relaxed">
              Each modification is grounded in published molecular biology, characterized genetic parts, and validated delivery mechanisms — ensuring the pathway from concept to testable prototype is clear.
            </p>

            {/* Target Cards */}
            <div className="flex flex-col gap-5 mt-12">
              {TARGETS.map((target, i) => (
                <div
                  key={i}
                  className="reveal-on-scroll glow-card group"
                  style={{ transitionDelay: `${i * 0.15}s`, borderColor: `${target.color}18` }}
                >
                  <div className="p-5">
                    <div className="flex items-start gap-4">
                      <div
                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold"
                        style={{ background: `${target.color}18`, color: target.color, border: `1px solid ${target.color}40` }}
                      >
                        {target.id}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-body text-base font-semibold text-bd-text">{target.title}</h3>
                        <p className="font-mono text-[10px] text-bd-text/40 mt-0.5">{target.subtitle}</p>
                        <p className="font-body text-sm text-bd-text/60 mt-3 leading-relaxed">{target.description}</p>
                        <div className="mt-3 p-3 rounded-lg" style={{ background: `${target.color}08`, borderLeft: `2px solid ${target.color}40` }}>
                          <p className="font-mono text-[9px] uppercase tracking-[0.18em] mb-1" style={{ color: `${target.color}80` }}>Why This Approach</p>
                          <p className="font-body text-xs text-bd-text/55 leading-relaxed">{target.why}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Sequence Details */}
          <div className="lg:w-[45%] lg:pt-16">
            <div className="space-y-5">
              {SEQUENCE_DETAILS.map((detail, i) => (
                <div
                  key={i}
                  className="bg-bd-surface/60 border border-bd-border rounded-2xl p-6 reveal-on-scroll"
                  style={{ transitionDelay: `${i * 0.2}s`, borderColor: `${detail.color}20` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: `${detail.color}90` }}>
                      Target {detail.target}
                    </span>
                    <span className="font-mono text-[9px] px-2 py-0.5 rounded" style={{
                      background: `${detail.color}10`,
                      color: `${detail.color}80`,
                      border: `1px solid ${detail.color}20`,
                    }}>
                      {detail.organism}
                    </span>
                  </div>
                  <h4 className="font-body text-sm font-semibold text-bd-text">{detail.label}</h4>
                  <code className="block mt-3 font-mono text-xs text-bd-accent/80 bg-bd-dark/70 rounded-lg px-4 py-3 break-all leading-relaxed border border-bd-accent/10">
                    {detail.sequence}
                  </code>
                  <p className="font-body text-xs text-bd-text/50 mt-3 leading-relaxed">{detail.note}</p>
                </div>
              ))}
            </div>

            {/* Integration Principles */}
            <div className="mt-8 space-y-4">
              <h4 className="font-body text-base font-semibold text-bd-text">Governing Design Principles</h4>
              <p className="font-body text-sm text-bd-text/50">
                Three system-level rules constrain all genomic decisions — preventing individual optimization from creating system-level failures.
              </p>
              {PRINCIPLES.map((p, i) => (
                <div
                  key={i}
                  className="reveal-on-scroll p-4 rounded-xl"
                  style={{
                    transitionDelay: `${i * 0.15}s`,
                    background: `${p.color}06`,
                    border: `1px solid ${p.color}18`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-[10px]" style={{ color: p.color }}>PRINCIPLE {p.num}</span>
                  </div>
                  <h5 className="font-body text-sm font-semibold text-bd-text mb-2">{p.title}</h5>
                  <p className="font-body text-xs text-bd-text/55 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
