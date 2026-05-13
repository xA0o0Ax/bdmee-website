import { useMemo } from 'react';

interface Particle {
  id: number;
  size: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
  opacity: number;
}

export function BioParticles({ count = 20, className = '' }: { count?: number; className?: string }) {
  const particles = useMemo<Particle[]>(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      size: 40 + (i * 47 % 180),
      left: (i * 31 + 7) % 100,
      top: (i * 53 + 13) % 100,
      duration: 6 + (i * 3 % 10),
      delay: (i * 1.3) % 8,
      opacity: 0.025 + (i % 5) * 0.012,
    }))
  , [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            background: 'radial-gradient(circle, rgba(0,255,135,0.7) 0%, rgba(0,255,135,0) 70%)',
            opacity: p.opacity,
            animation: `glow-float ${p.duration}s ${p.delay}s infinite ease-in-out`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
}
