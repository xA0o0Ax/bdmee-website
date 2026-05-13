export function ProposalFooterSection() {
  return (
    <footer id="proposal" className="bg-bd-dark">
      {/* Proposal Details */}
      <div className="border-t border-bd-border">
        <div className="max-w-[1400px] mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2 reveal-on-scroll">
              <h3 className="font-body text-2xl font-medium text-bd-text">
                The Multi-Trophic Myco-Foundry
              </h3>
              <p className="font-body text-sm text-bd-text/60 mt-4 max-w-[480px]">
                A Modular Engineered Living Material Ecosystem for Deep Space Habitation. Submitted to NASA Innovative Advanced Concepts (NIAC) Phase I.
              </p>
              <div className="mt-6">
                <span className="pill-badge bg-bd-surface/60 border border-bd-border text-bd-text">
                  NASA NIAC Phase I
                </span>
              </div>
            </div>
            <div className="md:w-1/2 space-y-4 reveal-on-scroll" style={{ transitionDelay: '0.15s' }}>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-bd-text/40 w-32">Program</span>
                <span className="font-mono text-sm text-bd-text">NASA NIAC Phase I</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-bd-text/40 w-32">Integrated TRL</span>
                <span className="font-mono text-sm text-bd-accent">TRL 2</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-bd-text/40 w-32">Biocontainment</span>
                <span className="font-mono text-sm text-bd-green">99.99% Assured</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-bd-text/40 w-32">Principal Investigators</span>
                <span className="font-mono text-sm text-bd-text">Zarias Aelius &amp; Arman Sheikhan</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="border-t border-bd-border">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 28 28"
              fill="none"
              className="text-bd-text/50"
            >
              <path
                d="M14 2L24.5 8V20L14 26L3.5 20V8L14 2Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <circle cx="14" cy="14" r="1.5" fill="currentColor" />
            </svg>
            <span className="font-body text-xs uppercase tracking-[0.15em] text-bd-text/50">
              BDMEE
            </span>
          </div>

          <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-bd-text/30 text-center">
            Bio-pharma Depot &amp; Modular Engineered-living-material Ecosystem
          </p>

          <p className="font-mono text-[10px] text-bd-text/30">
            &copy; 2025 BDMEE Research Initiative
          </p>
        </div>
      </div>
    </footer>
  );
}
