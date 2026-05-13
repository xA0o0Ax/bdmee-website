export function HabitatCrossSection() {
  // Melanin dot positions in exo-crust layer (r 180-220), various angles
  const melaninDots = [
    { angle: 15, r: 196 },
    { angle: 42, r: 203 },
    { angle: 78, r: 189 },
    { angle: 115, r: 207 },
    { angle: 150, r: 194 },
    { angle: 195, r: 210 },
    { angle: 240, r: 198 },
    { angle: 285, r: 186 },
    { angle: 320, r: 214 },
    { angle: 355, r: 200 },
  ];

  // Vascular arcs in vascular layer (r 145-180)
  const vascularArcs = [
    { startAngle: 20, endAngle: 80, r: 162 },
    { startAngle: 100, endAngle: 160, r: 157 },
    { startAngle: 190, endAngle: 260, r: 165 },
    { startAngle: 280, endAngle: 350, r: 160 },
  ];

  // Spore dots in pharmacy layer (r 110-145)
  const sporeDots = [
    { angle: 10, r: 125 }, { angle: 38, r: 132 }, { angle: 60, r: 118 },
    { angle: 88, r: 138 }, { angle: 115, r: 122 }, { angle: 145, r: 130 },
    { angle: 175, r: 115 }, { angle: 205, r: 128 }, { angle: 235, r: 120 },
    { angle: 260, r: 136 }, { angle: 290, r: 112 }, { angle: 315, r: 124 },
    { angle: 345, r: 133 },
  ];

  function polarToXY(angleDeg: number, r: number, cx = 250, cy = 250) {
    const rad = (angleDeg - 90) * (Math.PI / 180);
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad),
    };
  }

  function describeArc(startAngle: number, endAngle: number, r: number, cx = 250, cy = 250) {
    const start = polarToXY(startAngle, r, cx, cy);
    const end = polarToXY(endAngle, r, cx, cy);
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`;
  }

  return (
    <div className="relative w-full max-w-[500px] mx-auto">
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 0 40px rgba(0,255,135,0.15))' }}
      >
        <defs>
          <radialGradient id="exoCrustGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1a2e1a" />
            <stop offset="100%" stopColor="#0d1a0d" />
          </radialGradient>
          <radialGradient id="vascularGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(0,229,176,0.12)" />
            <stop offset="100%" stopColor="rgba(0,229,176,0.04)" />
          </radialGradient>
          <radialGradient id="pharmacyGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,112,67,0.12)" />
            <stop offset="100%" stopColor="rgba(255,112,67,0.04)" />
          </radialGradient>
          <radialGradient id="atmosGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(0,229,176,0.18)" />
            <stop offset="100%" stopColor="rgba(0,255,135,0.06)" />
          </radialGradient>
          <radialGradient id="crewGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0a1f12" />
            <stop offset="100%" stopColor="#030d06" />
          </radialGradient>
          <filter id="glowGreen">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="glowOrange">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <style>{`
            @keyframes layerPulse1 { 0%,100%{opacity:0.7} 50%{opacity:1} }
            @keyframes layerPulse2 { 0%,100%{opacity:0.6} 50%{opacity:0.9} }
            @keyframes layerPulse3 { 0%,100%{opacity:0.65} 50%{opacity:0.95} }
            .layer1-pulse { animation: layerPulse1 4s ease-in-out infinite; }
            .layer2-pulse { animation: layerPulse2 5s ease-in-out infinite 0.8s; }
            .layer3-pulse { animation: layerPulse3 4.5s ease-in-out infinite 1.5s; }
          `}</style>
        </defs>

        {/* Space outer label */}
        <text x="250" y="22" textAnchor="middle" fill="rgba(184,240,204,0.35)" fontSize="9" fontFamily="Space Mono" letterSpacing="0.15em">DEEP SPACE ENVIRONMENT</text>

        {/* Layer 1: Exo-Crust (r=220 fill, melanized) */}
        <circle cx="250" cy="250" r="220" fill="url(#exoCrustGrad)" className="layer1-pulse" />
        <circle cx="250" cy="250" r="220" fill="none" stroke="#00ff87" strokeWidth="1.5" strokeOpacity="0.6" />
        <circle cx="250" cy="250" r="180" fill="none" stroke="#00ff87" strokeWidth="0.8" strokeOpacity="0.3" />

        {/* Melanin dots in exo-crust layer */}
        {melaninDots.map((dot, i) => {
          const pos = polarToXY(dot.angle, dot.r);
          return (
            <g key={i} filter="url(#glowGreen)">
              <circle cx={pos.x} cy={pos.y} r="5" fill="rgba(0,255,135,0.5)" />
              <circle cx={pos.x} cy={pos.y} r="2.5" fill="#00ff87" />
            </g>
          );
        })}

        {/* Layer 2: Vascular Mesh (r=180→145) */}
        <circle cx="250" cy="250" r="180" fill="url(#vascularGrad)" className="layer2-pulse" />
        <circle cx="250" cy="250" r="145" fill="none" stroke="#00e5b0" strokeWidth="0.8" strokeOpacity="0.3" />

        {/* Vascular channel arcs */}
        {vascularArcs.map((arc, i) => (
          <path
            key={i}
            d={describeArc(arc.startAngle, arc.endAngle, arc.r)}
            fill="none"
            stroke="#00e5b0"
            strokeWidth="2"
            strokeOpacity="0.55"
            strokeDasharray="6 4"
          />
        ))}

        {/* Layer 3: Pharmacy (r=145→110) */}
        <circle cx="250" cy="250" r="145" fill="url(#pharmacyGrad)" className="layer3-pulse" />
        <circle cx="250" cy="250" r="110" fill="none" stroke="#ff7043" strokeWidth="0.8" strokeOpacity="0.3" />

        {/* Spore dots in pharmacy layer */}
        {sporeDots.map((dot, i) => {
          const pos = polarToXY(dot.angle, dot.r);
          return (
            <g key={i} filter="url(#glowOrange)">
              <circle cx={pos.x} cy={pos.y} r="3.5" fill="rgba(255,112,67,0.45)" />
              <circle cx={pos.x} cy={pos.y} r="1.8" fill="#ff7043" />
            </g>
          );
        })}

        {/* Layer 4: Atmospheric Interface (r=110→85) */}
        <circle cx="250" cy="250" r="110" fill="url(#atmosGrad)" />
        <circle cx="250" cy="250" r="85" fill="none" stroke="#00e5b0" strokeWidth="0.8" strokeOpacity="0.4" />

        {/* Crew Interior */}
        <circle cx="250" cy="250" r="85" fill="url(#crewGrad)" />
        <circle cx="250" cy="250" r="85" fill="none" stroke="rgba(184,240,204,0.2)" strokeWidth="1" />

        {/* Center label */}
        <text x="250" y="245" textAnchor="middle" fill="rgba(184,240,204,0.8)" fontSize="9" fontFamily="Space Mono" letterSpacing="0.12em">CREW</text>
        <text x="250" y="258" textAnchor="middle" fill="rgba(184,240,204,0.5)" fontSize="7.5" fontFamily="Space Mono" letterSpacing="0.08em">PRESSURIZED</text>

        {/* External labels with connectors — right side */}
        {/* Exo-Crust label */}
        <line x1="446" y1="175" x2="388" y2="200" stroke="rgba(0,255,135,0.35)" strokeWidth="1" />
        <text x="450" y="162" textAnchor="start" fill="#00ff87" fontSize="8.5" fontFamily="Space Mono" letterSpacing="0.1em">MELANIZED</text>
        <text x="450" y="175" textAnchor="start" fill="#00ff87" fontSize="8.5" fontFamily="Space Mono" letterSpacing="0.1em">EXO-CRUST</text>
        <text x="450" y="188" textAnchor="start" fill="rgba(0,255,135,0.5)" fontSize="7" fontFamily="Space Mono">Cladosporium sphaerospermum</text>

        {/* Vascular Mesh label */}
        <line x1="446" y1="235" x2="395" y2="247" stroke="rgba(0,229,176,0.35)" strokeWidth="1" />
        <text x="450" y="228" textAnchor="start" fill="#00e5b0" fontSize="8.5" fontFamily="Space Mono" letterSpacing="0.1em">VASCULAR</text>
        <text x="450" y="241" textAnchor="start" fill="#00e5b0" fontSize="8.5" fontFamily="Space Mono" letterSpacing="0.1em">MESH</text>
        <text x="450" y="254" textAnchor="start" fill="rgba(0,229,176,0.5)" fontSize="7" fontFamily="Space Mono">Microfluidic phosphite</text>

        {/* Pharmacy label — left side */}
        <line x1="54" y1="265" x2="113" y2="258" stroke="rgba(255,112,67,0.35)" strokeWidth="1" />
        <text x="50" y="252" textAnchor="end" fill="#ff7043" fontSize="8.5" fontFamily="Space Mono" letterSpacing="0.1em">BIO-PHARMACY</text>
        <text x="50" y="265" textAnchor="end" fill="#ff7043" fontSize="8.5" fontFamily="Space Mono" letterSpacing="0.1em">SPORE NODES</text>
        <text x="50" y="278" textAnchor="end" fill="rgba(255,112,67,0.5)" fontSize="7" fontFamily="Space Mono">Bacillus subtilis</text>

        {/* Atmospheric Interface label — left side */}
        <line x1="54" y1="320" x2="155" y2="305" stroke="rgba(0,229,176,0.35)" strokeWidth="1" />
        <text x="50" y="310" textAnchor="end" fill="#00e5b0" fontSize="8.5" fontFamily="Space Mono" letterSpacing="0.1em">ATMOSPHERIC</text>
        <text x="50" y="323" textAnchor="end" fill="#00e5b0" fontSize="8.5" fontFamily="Space Mono" letterSpacing="0.1em">INTERFACE</text>
        <text x="50" y="336" textAnchor="end" fill="rgba(0,229,176,0.5)" fontSize="7" fontFamily="Space Mono">Synechocystis PCC 6803</text>

        {/* Layer dimension markers */}
        <text x="250" y="490" textAnchor="middle" fill="rgba(184,240,204,0.2)" fontSize="7" fontFamily="Space Mono" letterSpacing="0.08em">HABITAT WALL CROSS-SECTION · NOT TO SCALE</text>
      </svg>
    </div>
  );
}
