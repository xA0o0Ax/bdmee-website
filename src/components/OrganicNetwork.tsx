import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  pulse: number;
  pulseSpeed: number;
  color: string;
}

const COLORS = ['#00ff87', '#00e5b0', '#b157ff', '#00ff87'];

export function OrganicNetwork({ opacity = 0.35 }: { opacity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf: number;
    let w = 0, h = 0;

    const nodes: Node[] = [];
    const NODE_COUNT = 28;
    const MAX_DIST = 160;

    function init() {
      w = canvas!.offsetWidth;
      h = canvas!.offsetHeight;
      canvas!.width = w;
      canvas!.height = h;
      nodes.length = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: (i * 137 + 50) % w,
          y: (i * 97 + 80) % h,
          vx: ((i * 13 % 7) - 3) * 0.12,
          vy: ((i * 17 % 5) - 2) * 0.12,
          r: 2 + (i % 3),
          pulse: (i * 0.4) % (Math.PI * 2),
          pulseSpeed: 0.012 + (i % 5) * 0.004,
          color: COLORS[i % COLORS.length],
        });
      }
    }

    function draw() {
      raf = requestAnimationFrame(draw);
      ctx!.clearRect(0, 0, w, h);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        n.pulse += n.pulseSpeed;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.18;
            ctx!.beginPath();
            ctx!.moveTo(nodes[i].x, nodes[i].y);
            ctx!.lineTo(nodes[j].x, nodes[j].y);
            ctx!.strokeStyle = `rgba(0,255,135,${alpha})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }

      for (const n of nodes) {
        const glow = 0.5 + 0.5 * Math.sin(n.pulse);
        const r = n.r + glow * 1.5;
        const grad = ctx!.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 4);
        grad.addColorStop(0, n.color + 'cc');
        grad.addColorStop(1, n.color + '00');
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, r * 4, 0, Math.PI * 2);
        ctx!.fillStyle = grad;
        ctx!.fill();
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx!.fillStyle = n.color;
        ctx!.globalAlpha = 0.7 + glow * 0.3;
        ctx!.fill();
        ctx!.globalAlpha = 1;
      }
    }

    init();
    draw();

    const ro = new ResizeObserver(() => init());
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity }}
    />
  );
}
