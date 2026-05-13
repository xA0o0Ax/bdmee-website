export function ProposalFooterSection() {
  return (
    <footer id="proposal" className="bg-bd-dark">
      {/* Proposal Details */}
      <div className="border-t border-bd-border">
        <div className="max-w-[1400px] mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2 reveal-on-scroll">
              <h3 className="font-body text-2xl font-semibold text-bd-text">
                The Multi-Trophic Myco-Foundry
              </h3>
              <p className="font-body text-sm text-bd-text/55 mt-4 max-w-[480px] leading-relaxed">
                A Modular Engineered Living Material Ecosystem for Deep Space Habitation. A scientific research proposal for advanced concept development in biological space infrastructure.
              </p>
              <div className="mt-6 flex gap-3">
                <span className="pill-badge bg-bd-surface/60 border border-bd-accent/20 text-bd-accent/70">
                  Deep Space Biology
                </span>
                <span className="pill-badge bg-bd-surface/60 border border-bd-bio/20 text-bd-bio/70">
                  Synthetic Biology
                </span>
              </div>
            </div>

            <div className="md:w-1/2 space-y-4 reveal-on-scroll" style={{ transitionDelay: '0.15s' }}>
              {[
                { label: 'Program', value: 'Advanced Concepts Research Initiative', color: '#cde4ff' },
                { label: 'Integrated TRL', value: 'TRL 2 — Concept Formulated & Pathways Modeled', color: '#22d3ee' },
                { label: 'Biocontainment', value: '99.99% Assured via Synthetic Auxotrophy', color: '#34d399' },
                { label: 'Principal Investigator', value: 'Zarias Sacrati Aelius', color: '#cde4ff' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="font-mono text-xs text-bd-text/35 w-40 flex-shrink-0 pt-0.5">{item.label}</span>
                  <span className="font-mono text-sm" style={{ color: item.color }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 pt-8 border-t border-bd-border reveal-on-scroll">
            <p className="font-mono text-[10px] text-bd-text/25 max-w-[800px] leading-relaxed">
              All genetic modifications described in this proposal utilize established synthetic biology techniques applied to wild-type organisms with documented spaceflight history. No novel or undiscovered biochemistry is required. Validation pathways for each sub-system exist within current laboratory and spaceflight infrastructure. TRL assessments reflect component-level validation; integrated system TRL reflects the current concept-formulation stage.
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
            &copy; 2026 BDMEE Research Initiative
          </p>
        </div>
      </div>
    </footer>
  );
}
