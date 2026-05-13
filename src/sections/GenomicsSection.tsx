import { useEffect, useRef } from 'react';

const TARGETS = [
  {
    id: 'A',
    title: 'Kill Switch',
    subtitle: 'Synthetic Auxotrophy via ptxD insertion',
    color: '#c8ff00',
    organism: 'Cladosporium sphaerospermum & Bacillus subtilis',
    description: 'Mars contains native phosphate (PO4^3-). If organisms escape, they could utilize it to survive, contaminating the planet. By knocking out phosphate metabolism (pstS knockout) and inserting ptxD — which only processes Phosphite (PO3^3-), an artificial nutrient supplied exclusively via the habitat\'s vascular system — escape becomes biologically impossible.',
  },
  {
    id: 'B',
    title: 'Hyper-Melanization',
    subtitle: 'gpdA promoter overexpression of pks1',
    color: '#00b8d4',
    organism: 'Cladosporium sphaerospermum',
    description: 'Native C. sphaerospermum produces melanin slowly in response to stress. For a habitat shield, maximum melanin saturation must be achieved immediately during the 3-week deployment growth phase to ensure walls are fully radiation-opaque before crew arrival. The gpdA promoter drives constitutive overexpression.',
  },
  {
    id: 'C',
    title: 'Bio-Pharmacy',
    subtitle: 'P_xylA inducible expression at amyE locus',
    color: '#ff6d00',
    organism: 'Bacillus subtilis (Δpps Δsrf chassis)',
    description: 'Medicine degrades in space. B. subtilis spores lie dormant in the walls. When the crew requires therapeutics, they inject chemical inducers into the vascular node, triggering transcription of drug genes at the amyE safe harbor locus.',
  },
];

const SEQUENCE_DETAILS = [
  {
    target: 'A',
    label: 'Synthetic Auxotrophy Cassette',
    sequence: '[HomArmA] - P_veg - RBS(AGGAGG) - ptxD - T_rrnB - [HomArmB]',
    note: 'ptxD from Pseudomonas stutzeri — phosphite dehydrogenase enables exclusive PO3^3- metabolism',
  },
  {
    target: 'B',
    label: 'Hyper-Melanization Architecture',
    sequence: '[P_gpdA] - pks1 ATG — replaces weak stress-induced TATA',
    note: 'Decouples melanin production from stress response → continuous melanin factory during 3-week deployment',
  },
  {
    target: 'C',
    label: 'Pharmacy Chassis',
    sequence: 'Δpps Δsrf — native proteases removed + amyE safe harbor insertion',
    note: 'Orthogonal promoter system with spatial multiplexing — isolated micro-chamber nodes per drug',
  },
];

function DNAHelix() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const helixEl = document.createElement('div');
    helixEl.className = 'absolute right-[10%] top-1/2 -translate-y-1/2 w-[300px] h-[600px]';
    helixEl.style.transformStyle = 'preserve-3d';
    helixEl.style.opacity = '0.4';
    helixEl.style.pointerEvents = 'none';
    container.appendChild(helixEl);

    const numDiscs = 24;
    const radius = 100;
    const spacing = 22;
    const rotationSpeed = 0.003;
    const nucleotides = ['a', 't', 'c', 'g'];
    const nucleotideColors: Record<string, string> = {
      a: '#c8ff00',
      t: '#ff3d00',
      c: '#00b8d4',
      g: '#ff6d00',
    };

    const strandA = document.createElement('div');
    strandA.style.cssText = 'position:absolute;top:0;width:100%;height:100%;transform-style:preserve-3d;transform:rotateY(0deg);';
    const strandB = document.createElement('div');
    strandB.style.cssText = 'position:absolute;top:0;width:100%;height:100%;transform-style:preserve-3d;transform:rotateY(180deg);';
    helixEl.appendChild(strandA);
    helixEl.appendChild(strandB);
    const strands = [strandA, strandB];

    interface DiscData {
      el: HTMLDivElement;
      index: number;
      strand: number;
    }
    const discs: DiscData[] = [];

    for (let i = 0; i < numDiscs; i++) {
      for (let s = 0; s < 2; s++) {
        const disc = document.createElement('div');
        disc.style.cssText = `position:absolute;left:50%;width:40px;height:40px;margin-left:-20px;border-radius:50%;background:rgba(255,255,255,0.1);border:2px solid rgba(242,243,240,0.2);backface-visibility:hidden;transform-style:preserve-3d;`;
        const nucleotide = nucleotides[(i + s) % 4];
        const color = nucleotideColors[nucleotide];

        const core = document.createElement('div');
        core.style.cssText = `position:absolute;top:50%;left:50%;width:16px;height:16px;margin:-8px 0 0 -8px;border-radius:50%;background:${color};`;
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
      if (container.contains(helixEl)) {
        container.removeChild(helixEl);
      }
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
    <section id="genomics" className="relative bg-bd-dark py-[120px] overflow-hidden">
      {/* DNA Helix Background */}
      <DNAHelix />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column - 55% */}
          <div className="lg:w-[55%]">
            <span className="section-label reveal-on-scroll">GENOMIC BLUEPRINT</span>
            <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-normal text-bd-text leading-[0.85] tracking-[-0.02em] mt-4 reveal-on-scroll">
              Synthetic Biology &amp;<br />Strain Engineering
            </h2>
            <p className="font-body text-base text-bd-text/70 max-w-[480px] mt-6 reveal-on-scroll">
              The feasibility of this Engineered Living Material relies entirely on precision gene editing to enforce biocontainment, maximize survivability, and control metabolic output.
            </p>
            <p className="font-body text-base text-bd-text/70 max-w-[480px] mt-4 reveal-on-scroll">
              Three critical genetic modifications transform wild-type organisms into precision-engineered components of a living habitat. Each edit serves a specific engineering purpose — not a biological one.
            </p>

            {/* Target Cards */}
            <div className="flex flex-col gap-4 mt-12">
              {TARGETS.map((target, i) => (
                <div
                  key={i}
                  className="reveal-on-scroll"
                  style={{ transitionDelay: `${i * 0.15}s` }}
                >
                  <div
                    className="pl-4 py-4"
                    style={{ borderLeft: `2px solid ${target.color}` }}
                  >
                    <span
                      className="font-mono text-[11px] uppercase tracking-[0.1em]"
                      style={{ color: target.color }}
                    >
                      TARGET {target.id}
                    </span>
                    <h3 className="font-body text-lg font-medium text-bd-text mt-1">
                      {target.title}
                    </h3>
                    <p className="font-body text-sm text-bd-text/60 mt-1">
                      {target.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - 45% - Sequence Details */}
          <div className="lg:w-[45%] lg:pt-20">
            <div className="space-y-6">
              {SEQUENCE_DETAILS.map((detail, i) => (
                <div
                  key={i}
                  className="bg-bd-surface/60 border border-bd-border rounded-xl p-6 reveal-on-scroll"
                  style={{ transitionDelay: `${i * 0.2}s` }}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-bd-accent">
                    TARGET {detail.target}
                  </span>
                  <h4 className="font-body text-base font-medium text-bd-text mt-2">
                    {detail.label}
                  </h4>
                  <code className="block mt-3 font-mono text-xs text-bd-accent/80 bg-bd-dark/50 rounded-lg px-4 py-3 break-all">
                    {detail.sequence}
                  </code>
                  <p className="font-body text-sm text-bd-text/50 mt-3">
                    {detail.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Integration Principles */}
        <div className="mt-24 reveal-on-scroll">
          <span className="section-label">GOVERNING PRINCIPLES</span>
          <h3 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-normal text-bd-text mt-4">
            Three Principles of Integration
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-bd-surface/40 border border-bd-border rounded-xl p-6">
              <span className="font-mono text-xs text-bd-accent">PRINCIPLE 1</span>
              <h4 className="font-body text-lg font-medium text-bd-text mt-2">The Shielding Substitution Theorem</h4>
              <p className="font-body text-sm text-bd-text/60 mt-3">
                Every dB of habitat shielding is one less dB of required genomic intervention. Habitat first, edit second. If BDMEE exo-crust achieves &lt;50 mSv/year crew dose, TERT activation and aggressive NRF2 edits become elective.
              </p>
            </div>
            <div className="bg-bd-surface/40 border border-bd-border rounded-xl p-6">
              <span className="font-mono text-xs text-bd-accent">PRINCIPLE 2</span>
              <h4 className="font-body text-lg font-medium text-bd-text mt-2">The Inducibility Imperative</h4>
              <p className="font-body text-sm text-bd-text/60 mt-3">
                Constitutive crew edits create antagonisms with acute pharmacology. Default to inducible architectures (tet-ON, riboswitch, light-gated). Constitutive CXCR4 edit + Filgrastim = futile cycle → paradoxical immune suppression.
              </p>
            </div>
            <div className="bg-bd-surface/40 border border-bd-border rounded-xl p-6">
              <span className="font-mono text-xs text-bd-accent">PRINCIPLE 3</span>
              <h4 className="font-body text-lg font-medium text-bd-text mt-2">The Pharmacy-as-Insurance Doctrine</h4>
              <p className="font-body text-sm text-bd-text/60 mt-3">
                AAV episomal edits: ~5–8 year half-life. Promoter silencing: 30–60% over 1–3 years. On a 2-year Mars mission, design assuming EDIT DECAY, not edit permanence. BDMEE pharmacy must function as PRIMARY FALLBACK.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
