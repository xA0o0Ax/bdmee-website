import { useCountUp } from '../hooks/useCountUp';

function StatBlock({ value, label, title, description, suffix = '', color = '#00ff87', why }: {
  value: number;
  label: string;
  title: string;
  description: string;
  why: string;
  suffix?: string;
  color?: string;
}) {
  const { ref, display } = useCountUp(value, 1500, suffix);

  return (
    <div ref={ref} className="flex-1 min-w-[220px] reveal-on-scroll">
      <span className="font-display text-[4.5rem] leading-none" style={{ color, textShadow: `0 0 30px ${color}40` }}>{display}</span>
      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-bd-text/40 mt-1">{label}</p>
      <h3 className="font-body text-base font-semibold text-bd-text mt-4">{title}</h3>
      <p className="font-body text-sm text-bd-text/60 mt-2 leading-relaxed">{description}</p>
      <div className="mt-3 p-3 rounded-lg" style={{ background: `${color}07`, borderLeft: `2px solid ${color}30` }}>
        <p className="font-mono text-[9px] uppercase tracking-[0.15em] mb-1" style={{ color: `${color}70` }}>Why This Matters</p>
        <p className="font-body text-xs text-bd-text/50 leading-relaxed">{why}</p>
      </div>
    </div>
  );
}

export function MissionImpactSection() {
  return (
    <section id="mission" className="py-[120px]" style={{
      background: 'linear-gradient(180deg, #010a06 0%, #040f08 50%, #010a06 100%)',
    }}>
      <div className="max-w-[1400px] mx-auto px-6">
        <span className="section-label reveal-on-scroll">MISSION IMPACT</span>
        <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-normal text-bd-text leading-[0.88] tracking-[-0.03em] mt-4 reveal-on-scroll">
          Three Problems.<br />One Biological Solution.
        </h2>
        <p className="font-body text-base text-bd-text/60 mt-4 reveal-on-scroll max-w-[640px] leading-relaxed">
          Deep space colonization has been blocked by three converging constraints for decades. BDMEE addresses all three simultaneously — not through incremental engineering improvements, but through a fundamental shift in what the construction material is.
        </p>

        <div className="flex flex-col md:flex-row gap-10 mt-16">
          <StatBlock
            value={95}
            label="Mass-to-Orbit Reduction"
            title="The Launch Mass Problem"
            description="Dormant biology in gram-scale payloads replaces tonnes of conventional construction material. The information to build a habitat replaces the mass of the habitat itself."
            why="Current Mars habitat proposals require 40–120 tonnes per pressurized module for launch. At $10,000–$50,000/kg to Mars transfer orbit, this makes large-scale colonization economically impossible within any realistic budget. BDMEE converts the construction problem from a logistics problem into an information problem — and information is effectively massless."
            suffix="%"
            color="#00ff87"
          />

          <div className="reveal-on-scroll flex-1 min-w-[220px]" style={{ transitionDelay: '0.15s' }}>
            <span
              className="font-display text-[4.5rem] leading-none"
              style={{ color: '#00e5b0', textShadow: '0 0 30px rgba(0,229,176,0.4)' }}
            >
              GCR
            </span>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-bd-text/40 mt-1">Attenuation Achieved</p>
            <h3 className="font-body text-base font-semibold text-bd-text mt-4">The Radiation Problem</h3>
            <p className="font-body text-sm text-bd-text/60 mt-2 leading-relaxed">
              Hyper-melanized radiotrophic fungal exo-crust attenuates Galactic Cosmic Rays and solar particle events — the most lethal unresolved threat to long-duration deep space habitation.
            </p>
            <div className="mt-3 p-3 rounded-lg" style={{ background: 'rgba(0,229,176,0.07)', borderLeft: '2px solid rgba(0,229,176,0.3)' }}>
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] mb-1" style={{ color: 'rgba(0,229,176,0.7)' }}>Why This Matters</p>
              <p className="font-body text-xs text-bd-text/50 leading-relaxed">
                Without shielding, a Mars crew receives ~230 mSv/year surface dose — 4.6× the annual occupational limit for radiation workers. Over 18 months on the surface, this approaches or exceeds career limits for many crew members. No conventional shielding material achieves equivalent protection at BDMEE's launch mass. Melanin's radiation-transduction mechanism has no synthetic equivalent.
              </p>
            </div>
          </div>

          <div className="reveal-on-scroll flex-1 min-w-[220px]" style={{ transitionDelay: '0.3s' }}>
            <span
              className="font-display text-[4.5rem] leading-none"
              style={{ color: '#b157ff', textShadow: '0 0 30px rgba(177,87,255,0.35)' }}
            >
              ∞
            </span>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-bd-text/40 mt-1">Pharmaceutical Shelf Life</p>
            <h3 className="font-body text-base font-semibold text-bd-text mt-4">The Medical Logistics Problem</h3>
            <p className="font-body text-sm text-bd-text/60 mt-2 leading-relaxed">
              Living walls synthesize therapeutics on-demand, eliminating pharmaceutical expiration dates and cold-chain requirements for the most critical drugs on a 25-month mission.
            </p>
            <div className="mt-3 p-3 rounded-lg" style={{ background: 'rgba(177,87,255,0.07)', borderLeft: '2px solid rgba(177,87,255,0.3)' }}>
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] mb-1" style={{ color: 'rgba(177,87,255,0.7)' }}>Why This Matters</p>
              <p className="font-body text-xs text-bd-text/50 leading-relaxed">
                The ISS stocks 200+ pharmaceuticals with expiry dates ranging from 6 months to 5 years. For a Mars mission, resupply is impossible — there is no emergency pharmacy delivery from Earth. BDMEE's on-demand biosynthesis doesn't just solve the expiration problem; it solves the storage problem, the resupply problem, and the personalized-dosing problem simultaneously.
              </p>
            </div>
          </div>

          <StatBlock
            value={60}
            label="Mission Cost Reduction"
            title="The Economics of Colonization"
            description="For the first time, deep space colonization becomes economically sustainable — not through better rockets, but through better biology."
            why="The cost reduction compounds across every mission parameter: reduced launch mass (−95% materials), reduced supply missions (pharmacy on-site), reduced infrastructure complexity (self-assembling structure). Biology doesn't just reduce one cost driver — it replaces the entire cost structure of deep space habitation."
            suffix="%"
            color="#ffb300"
          />
        </div>

        {/* Systems convergence note */}
        <div className="mt-20 p-8 bg-bd-surface/40 border border-bd-border rounded-2xl reveal-on-scroll" style={{
          background: 'linear-gradient(135deg, rgba(0,255,135,0.04), rgba(0,229,176,0.04), rgba(177,87,255,0.04))',
          borderColor: 'rgba(0,255,135,0.12)',
        }}>
          <h4 className="font-body text-lg font-semibold text-bd-text mb-3">The Convergence Argument</h4>
          <p className="font-body text-sm text-bd-text/65 max-w-[900px] leading-relaxed">
            These three problems — mass, radiation, and medicine — have historically been addressed by three separate engineering programs, each with its own budget, timeline, and failure modes. BDMEE collapses them into a single biological platform. The same organisms that shield the habitat also generate the oxygen inside it. The same vascular system that feeds the organisms also delivers the pharmaceuticals they synthesize. This convergence is not an accident of the design — it is the design principle.
          </p>
        </div>
      </div>
    </section>
  );
}
