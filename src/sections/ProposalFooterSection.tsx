export function ProposalFooterSection() {
  return (
    <footer id="proposal" className="bg-bd-dark">
      {/* Proposal Details */}
      <div className="border-t border-bd-border">
        <div className="max-w-[1400px] mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2 reveal-on-scroll">
              {/* Logo mark */}
              <div className="flex items-center gap-3 mb-5">
                <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                  <path d="M18 2L32 10V26L18 34L4 26V10L18 2Z" stroke="#00ff87" strokeWidth="1.5" fill="none" opacity="0.7" />
                  <circle cx="18" cy="18" r="6" stroke="#00ff87" strokeWidth="1.5" fill="none" opacity="0.5" />
                  <circle cx="18" cy="18" r="2.5" fill="#00ff87" opacity="0.9" />
                  <circle cx="18" cy="8" r="2" fill="rgba(0,255,135,0.4)" />
                  <circle cx="28" cy="24" r="2" fill="rgba(0,255,135,0.4)" />
                  <circle cx="8" cy="24" r="2" fill="rgba(0,255,135,0.4)" />
                </svg>
                <span className="font-display text-xl text-bd-accent">BDMEE</span>
              </div>

              <h3 className="font-body text-2xl font-semibold text-bd-text">
                The Multi-Trophic Myco-Foundry
              </h3>
              <p className="font-body text-sm text-bd-text/55 mt-4 max-w-[480px] leading-relaxed">
                A Modular Engineered Living Material Ecosystem for Deep Space Habitation. A scientific research proposal for advanced concept development in biological space infrastructure.
              </p>
              <div className="mt-6 flex gap-3 flex-wrap">
                <span className="pill-badge bg-bd-surface/60 border border-bd-accent/20 text-bd-accent/70">
                  Deep Space Biology
                </span>
                <span className="pill-badge bg-bd-surface/60 text-bd-teal/70" style={{ border: '1px solid rgba(0,229,176,0.2)' }}>
                  Synthetic Biology
                </span>
                <span className="pill-badge bg-bd-surface/60 text-bd-gene/70" style={{ border: '1px solid rgba(177,87,255,0.2)' }}>
                  Genomic Engineering
                </span>
              </div>
            </div>

            <div className="md:w-1/2 space-y-4 reveal-on-scroll" style={{ transitionDelay: '0.15s' }}>
              {[
                { label: 'Program', value: 'Advanced Concepts Research Initiative', color: '#b8f0cc' },
                { label: 'Integrated TRL', value: 'TRL 2 — Concept Formulated & Pathways Modeled', color: '#00ff87' },
                { label: 'Biocontainment', value: '99.99% Assured via Synthetic Auxotrophy', color: '#00e676' },
                { label: 'Principal Investigator', value: 'Zarias Sacrati Aelius', color: '#b8f0cc' },
                { label: 'Year', value: '2026', color: 'rgba(184,240,204,0.5)' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="font-mono text-xs text-bd-text/35 w-44 flex-shrink-0 pt-0.5">{item.label}</span>
                  <span className="font-mono text-sm" style={{ color: item.color }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 pt-8 border-t border-bd-border reveal-on-scroll">
            <p className="font-mono text-[10px] text-bd-text/25 max-w-[800px] leading-relaxed">
              All genetic modifications described in this proposal utilize established synthetic biology techniques applied to wild-type organisms with documented spaceflight history. No novel or undiscovered biochemistry is required. Validation pathways for each sub-system exist within current laboratory and spaceflight infrastructure. TRL assessments reflect component-level validation; integrated system TRL reflects the current concept-formulation stage. This proposal is for research and conceptual development purposes.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="border-t border-bd-border">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 28 28" fill="none" className="text-bd-accent/50">
              <path d="M14 2L24.5 8V20L14 26L3.5 20V8L14 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <circle cx="14" cy="14" r="1.5" fill="currentColor" />
            </svg>
            <span className="font-body text-xs uppercase tracking-[0.18em] text-bd-text/40">BDMEE</span>
          </div>

          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-bd-text/25 text-center">
            Bio-pharma Depot &amp; Modular Engineered-living-material Ecosystem
          </p>

          <p className="font-mono text-[10px] text-bd-text/25">
            &copy; 2026 BDMEE Research Initiative · Zarias Sacrati Aelius
          </p>
        </div>
      </div>
    </footer>
  );
}
