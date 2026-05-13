import { useEffect, useRef } from 'react';

const cx = 420;
const cy = 260;

function polarToXY(angleDeg: number, r: number) {
  const rad = (angleDeg - 90) * (Math.PI / 180);
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeArc(startAngle: number, endAngle: number, r: number) {
  const start = polarToXY(startAngle, r);
  const end = polarToXY(endAngle, r);
  const large = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${large} 1 ${end.x} ${end.y}`;
}

const melaninDots = [
  { angle: 15, r: 196 }, { angle: 42, r: 203 }, { angle: 78, r: 189 },
  { angle: 115, r: 207 }, { angle: 150, r: 194 }, { angle: 195, r: 210 },
  { angle: 240, r: 198 }, { angle: 285, r: 186 }, { angle: 320, r: 214 },
  { angle: 355, r: 200 }, { angle: 60, r: 210 }, { angle: 170, r: 188 },
  { angle: 290, r: 205 }, { angle: 335, r: 192 },
];

const vascularArcs = [
  { startAngle: 20, endAngle: 80, r: 162 },
  { startAngle: 100, endAngle: 160, r: 157 },
  { startAngle: 190, endAngle: 260, r: 165 },
  { startAngle: 280, endAngle: 350, r: 160 },
];

const sporeDots = [
  { angle: 10, r: 125 }, { angle: 38, r: 132 }, { angle: 60, r: 118 },
  { angle: 88, r: 138 }, { angle: 115, r: 122 }, { angle: 145, r: 130 },
  { angle: 175, r: 115 }, { angle: 205, r: 128 }, { angle: 235, r: 120 },
  { angle: 260, r: 136 }, { angle: 290, r: 112 }, { angle: 315, r: 124 },
  { angle: 345, r: 133 },
];

const oxygenBubbles = [
  { angle: 25, r: 97 }, { angle: 75, r: 92 }, { angle: 130, r: 100 },
  { angle: 185, r: 95 }, { angle: 240, r: 98 }, { angle: 305, r: 93 },
];

export function HabitatCrossSection() {
  const scanRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    let angle = 0;
    let raf: number;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      angle = (angle + 0.4) % 360;
      if (scanRef.current) {
        const rad = (angle - 90) * (Math.PI / 180);
        const ex = cx + 225 * Math.cos(rad);
        const ey = cy + 225 * Math.sin(rad);
        scanRef.current.setAttribute('x2', String(ex));
        scanRef.current.setAttribute('y2', String(ey));
      }
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 860 520"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 0 40px rgba(0,255,135,0.12))' }}
      >
        <defs>
          <radialGradient id="hcs-exo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1a2e1a" />
            <stop offset="100%" stopColor="#0a1a0a" />
          </radialGradient>
          <radialGradient id="hcs-vasc" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(0,229,176,0.14)" />
            <stop offset="100%" stopColor="rgba(0,229,176,0.04)" />
          </radialGradient>
          <radialGradient id="hcs-pharma" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,112,67,0.14)" />
            <stop offset="100%" stopColor="rgba(255,112,67,0.04)" />
          </radialGradient>
          <radialGradient id="hcs-atmos" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(0,229,176,0.22)" />
            <stop offset="100%" stopColor="rgba(0,255,135,0.06)" />
          </radialGradient>
          <radialGradient id="hcs-crew" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0e2416" />
            <stop offset="100%" stopColor="#030d06" />
          </radialGradient>
          <radialGradient id="hcs-scan" cx={cx} cy={cy} r="225" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(0,255,135,0)" />
            <stop offset="60%" stopColor="rgba(0,255,135,0.08)" />
            <stop offset="100%" stopColor="rgba(0,255,135,0.0)" />
          </radialGradient>
          <filter id="hcs-glow-g" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="hcs-glow-o" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="hcs-glow-t" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <clipPath id="hcs-clip">
            <circle cx={cx} cy={cy} r="222" />
          </clipPath>
          <style>{`
            @keyframes hcs-pulse1 { 0%,100%{opacity:0.75} 50%{opacity:1} }
            @keyframes hcs-pulse2 { 0%,100%{opacity:0.55} 50%{opacity:0.85} }
            @keyframes hcs-pulse3 { 0%,100%{opacity:0.6} 50%{opacity:0.9} }
            @keyframes hcs-bubble { 0%{opacity:0;r:2} 40%{opacity:0.7} 100%{opacity:0;r:5} }
            @keyframes hcs-flow1 { 0%{stroke-dashoffset:0} 100%{stroke-dashoffset:-80} }
            @keyframes hcs-flow2 { 0%{stroke-dashoffset:0} 100%{stroke-dashoffset:-80} }
            @keyframes hcs-flow3 { 0%{stroke-dashoffset:0} 100%{stroke-dashoffset:-80} }
            @keyframes hcs-flow4 { 0%{stroke-dashoffset:0} 100%{stroke-dashoffset:-80} }
            .hcs-l1 { animation: hcs-pulse1 4s ease-in-out infinite; }
            .hcs-l2 { animation: hcs-pulse2 5s ease-in-out infinite 0.8s; }
            .hcs-l3 { animation: hcs-pulse3 4.5s ease-in-out infinite 1.5s; }
            .hcs-varc1 { animation: hcs-flow1 3s linear infinite; }
            .hcs-varc2 { animation: hcs-flow2 3.5s linear infinite 0.7s; }
            .hcs-varc3 { animation: hcs-flow3 3s linear infinite 1.4s; }
            .hcs-varc4 { animation: hcs-flow4 3.5s linear infinite 2.1s; }
          `}</style>
        </defs>

        {/* Deep space label */}
        <text x={cx} y="18" textAnchor="middle" fill="rgba(184,240,204,0.3)" fontSize="8" fontFamily="'Space Mono', monospace" letterSpacing="3">DEEP SPACE ENVIRONMENT — GALACTIC COSMIC RAY FLUX</text>

        {/* Outer space glow ring */}
        <circle cx={cx} cy={cy} r="228" fill="none" stroke="rgba(0,255,135,0.06)" strokeWidth="12" />

        {/* Layer 1: Melanized Exo-Crust */}
        <circle cx={cx} cy={cy} r="222" fill="url(#hcs-exo)" className="hcs-l1" />
        <circle cx={cx} cy={cy} r="222" fill="none" stroke="#00ff87" strokeWidth="1.5" strokeOpacity="0.65" />
        <circle cx={cx} cy={cy} r="178" fill="none" stroke="#00ff87" strokeWidth="0.6" strokeOpacity="0.25" strokeDasharray="3 6" />

        {/* Scan sweep (animated via ref) */}
        <line
          ref={scanRef}
          x1={cx} y1={cy}
          x2={cx} y2={cy - 222}
          stroke="rgba(0,255,135,0.18)"
          strokeWidth="1"
          clipPath="url(#hcs-clip)"
        />
        {/* Scan wedge fill — subtle */}
        <circle cx={cx} cy={cy} r="222" fill="url(#hcs-scan)" clipPath="url(#hcs-clip)" opacity="0.5" />

        {/* Melanin dots */}
        {melaninDots.map((dot, i) => {
          const pos = polarToXY(dot.angle, dot.r);
          return (
            <g key={i} filter="url(#hcs-glow-g)">
              <circle cx={pos.x} cy={pos.y} r="5.5" fill="rgba(0,255,135,0.18)" />
              <circle cx={pos.x} cy={pos.y} r="2.5" fill="#00ff87" />
            </g>
          );
        })}

        {/* Layer 2: Vascular Mesh */}
        <circle cx={cx} cy={cy} r="178" fill="url(#hcs-vasc)" className="hcs-l2" />
        <circle cx={cx} cy={cy} r="143" fill="none" stroke="#00e5b0" strokeWidth="0.6" strokeOpacity="0.25" strokeDasharray="3 6" />

        {/* Vascular arcs with flow animation */}
        {vascularArcs.map((arc, i) => (
          <path
            key={i}
            d={describeArc(arc.startAngle, arc.endAngle, arc.r)}
            fill="none"
            stroke="#00e5b0"
            strokeWidth="2.5"
            strokeOpacity="0.6"
            strokeDasharray="10 5"
            className={`hcs-varc${i + 1}`}
          />
        ))}

        {/* Layer 3: Bio-Pharmacy */}
        <circle cx={cx} cy={cy} r="143" fill="url(#hcs-pharma)" className="hcs-l3" />
        <circle cx={cx} cy={cy} r="108" fill="none" stroke="#ff7043" strokeWidth="0.6" strokeOpacity="0.25" strokeDasharray="3 6" />

        {/* Spore dots */}
        {sporeDots.map((dot, i) => {
          const pos = polarToXY(dot.angle, dot.r);
          return (
            <g key={i} filter="url(#hcs-glow-o)">
              <circle cx={pos.x} cy={pos.y} r="4" fill="rgba(255,112,67,0.3)" />
              <circle cx={pos.x} cy={pos.y} r="2" fill="#ff7043" />
            </g>
          );
        })}

        {/* Layer 4: Atmospheric Interface */}
        <circle cx={cx} cy={cy} r="108" fill="url(#hcs-atmos)" />
        <circle cx={cx} cy={cy} r="83" fill="none" stroke="#00e5b0" strokeWidth="0.6" strokeOpacity="0.35" />

        {/* Oxygen bubble animations */}
        {oxygenBubbles.map((b, i) => {
          const pos = polarToXY(b.angle, b.r);
          return (
            <circle
              key={i}
              cx={pos.x}
              cy={pos.y}
              r="3"
              fill="none"
              stroke="#00e5b0"
              strokeWidth="1"
              strokeOpacity="0.5"
              style={{ animation: `hcs-bubble ${2.5 + i * 0.4}s ease-out infinite ${i * 0.6}s` }}
            />
          );
        })}

        {/* Layer 5: Crew Interior */}
        <circle cx={cx} cy={cy} r="83" fill="url(#hcs-crew)" />
        <circle cx={cx} cy={cy} r="83" fill="none" stroke="rgba(184,240,204,0.22)" strokeWidth="1" />

        {/* Center crosshair */}
        <line x1={cx - 12} y1={cy} x2={cx + 12} y2={cy} stroke="rgba(184,240,204,0.2)" strokeWidth="0.8" />
        <line x1={cx} y1={cy - 12} x2={cx} y2={cy + 12} stroke="rgba(184,240,204,0.2)" strokeWidth="0.8" />
        <circle cx={cx} cy={cy} r="3" fill="none" stroke="rgba(184,240,204,0.3)" strokeWidth="0.8" />

        {/* Center labels */}
        <text x={cx} y={cy - 6} textAnchor="middle" fill="rgba(184,240,204,0.85)" fontSize="8.5" fontFamily="'Space Mono', monospace" letterSpacing="2">CREW</text>
        <text x={cx} y={cy + 8} textAnchor="middle" fill="rgba(184,240,204,0.45)" fontSize="7" fontFamily="'Space Mono', monospace" letterSpacing="1.5">PRESSURIZED</text>

        {/* ── RIGHT SIDE LABELS ── */}
        {/* Exo-Crust */}
        <line x1={cx + 200} y1={cy - 72} x2={cx + 154} y2={cy - 55} stroke="rgba(0,255,135,0.3)" strokeWidth="0.8" />
        <line x1={cx + 200} y1={cy - 72} x2={cx + 248} y2={cy - 72} stroke="rgba(0,255,135,0.3)" strokeWidth="0.8" />
        <text x={cx + 252} y={cy - 82} fill="#00ff87" fontSize="8.5" fontFamily="'Space Mono', monospace" letterSpacing="1.5">MELANIZED EXO-CRUST</text>
        <text x={cx + 252} y={cy - 70} fill="rgba(0,255,135,0.65)" fontSize="7.5" fontFamily="'Space Mono', monospace">40 cm · TRL 4</text>
        <text x={cx + 252} y={cy - 57} fill="rgba(0,255,135,0.45)" fontSize="7" fontFamily="'Space Mono', monospace" fontStyle="italic">Cladosporium sphaerospermum</text>

        {/* Vascular Mesh */}
        <line x1={cx + 178} y1={cy + 30} x2={cx + 155} y2={cy + 30} stroke="rgba(0,229,176,0.3)" strokeWidth="0.8" />
        <line x1={cx + 178} y1={cy + 30} x2={cx + 248} y2={cy + 30} stroke="rgba(0,229,176,0.3)" strokeWidth="0.8" />
        <text x={cx + 252} y={cy + 20} fill="#00e5b0" fontSize="8.5" fontFamily="'Space Mono', monospace" letterSpacing="1.5">VASCULAR MESH</text>
        <text x={cx + 252} y={cy + 32} fill="rgba(0,229,176,0.65)" fontSize="7.5" fontFamily="'Space Mono', monospace">35 cm · TRL 3</text>
        <text x={cx + 252} y={cy + 45} fill="rgba(0,229,176,0.45)" fontSize="7" fontFamily="'Space Mono', monospace" fontStyle="italic">Microfluidic phosphite network</text>

        {/* ── LEFT SIDE LABELS ── */}
        {/* Bio-Pharmacy */}
        <line x1={cx - 148} y1={cy - 20} x2={cx - 112} y2={cy - 10} stroke="rgba(255,112,67,0.3)" strokeWidth="0.8" />
        <line x1={cx - 148} y1={cy - 20} x2={cx - 200} y2={cy - 20} stroke="rgba(255,112,67,0.3)" strokeWidth="0.8" />
        <text x={cx - 204} y={cy - 30} textAnchor="end" fill="#ff7043" fontSize="8.5" fontFamily="'Space Mono', monospace" letterSpacing="1.5">BIO-PHARMACY</text>
        <text x={cx - 204} y={cy - 18} textAnchor="end" fill="rgba(255,112,67,0.65)" fontSize="7.5" fontFamily="'Space Mono', monospace">35 cm · TRL 4</text>
        <text x={cx - 204} y={cy - 5} textAnchor="end" fill="rgba(255,112,67,0.45)" fontSize="7" fontFamily="'Space Mono', monospace" fontStyle="italic">Bacillus subtilis spore nodes</text>

        {/* Atmospheric Interface */}
        <line x1={cx - 115} y1={cy + 55} x2={cx - 88} y2={cy + 40} stroke="rgba(0,229,176,0.3)" strokeWidth="0.8" />
        <line x1={cx - 115} y1={cy + 55} x2={cx - 200} y2={cy + 55} stroke="rgba(0,229,176,0.3)" strokeWidth="0.8" />
        <text x={cx - 204} y={cy + 45} textAnchor="end" fill="#00e5b0" fontSize="8.5" fontFamily="'Space Mono', monospace" letterSpacing="1.5">ATMOSPHERIC LUNGS</text>
        <text x={cx - 204} y={cy + 57} textAnchor="end" fill="rgba(0,229,176,0.65)" fontSize="7.5" fontFamily="'Space Mono', monospace">25 cm · TRL 4</text>
        <text x={cx - 204} y={cy + 70} textAnchor="end" fill="rgba(0,229,176,0.45)" fontSize="7" fontFamily="'Space Mono', monospace" fontStyle="italic">Synechocystis sp. PCC 6803</text>

        {/* Bottom caption */}
        <text x={cx} y="508" textAnchor="middle" fill="rgba(184,240,204,0.18)" fontSize="7" fontFamily="'Space Mono', monospace" letterSpacing="1.5">HABITAT WALL CROSS-SECTION · LAYERS NOT TO SCALE · TOTAL WALL ~135 cm</text>
      </svg>
    </div>
  );
}
