import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const PILLARS = [
  {
    stat: '95%',
    label: 'Launch Mass Eliminated',
    desc: 'From Launching Materials to Launching Information',
    why: 'Conventional Mars habitats require 80–120 tonnes of pressurized steel per module. Every kilogram to Mars orbit costs $10,000–$50,000. BDMEE ships dormant biology — gram-scale seed payloads that self-assemble into full habitat structures on-site, collapsing the launch mass problem entirely.',
    color: '#00ff87',
  },
  {
    stat: '3',
    label: 'Specialized Organisms',
    desc: 'Distributed Architecture Over Monolithic Design',
    why: 'No single organism can simultaneously optimize radiation shielding, pharmaceutical synthesis, and atmospheric processing — the metabolic demands are antagonistic. Three specialized strains eliminate single-point failure: if one subsystem degrades, the others remain fully operational.',
    color: '#00e5b0',
  },
  {
    stat: '99.99%',
    label: 'Biocontainment Assured',
    desc: 'Planetary Protection via Synthetic Auxotrophy',
    why: 'Mars hosts native phosphate (PO₄³⁻) at ~0.6% regolith mass — a viable energy source for any escaped organism with standard phosphate metabolism. BDMEE organisms are re-engineered to require phosphite (PO₃³⁻), a compound absent from all known natural planetary environments. Escape equals metabolic starvation.',
    color: '#b157ff',
  },
  {
    stat: '∞',
    label: 'Pharmaceutical Shelf Life',
    desc: 'On-Demand Synthesis vs. Expiring Stockpiles',
    why: 'A 25-month Mars mission exceeds the stability window of most critical drugs. B. subtilis spores have been revived from 250-million-year-old salt deposits. BDMEE converts this biological property into a pharmaceutical distribution network: spores don\'t expire — they wait.',
    color: '#ffb300',
  },
  {
    stat: '4+',
    label: 'Target Environments',
    desc: 'One Blueprint, Infinite Destinations',
    why: 'Genetic programs are information, not hardware. The same biological blueprint re-expresses itself in Martian regolith, Europan ice, microgravity carbon-fiber scaffolds, or Lunar lava tubes — adapting to local substrate chemistry without mission-specific hardware redesign.',
    color: '#ff7043',
  },
];

function LiquidGlassCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const width = container.offsetWidth;
    const height = container.offsetHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 10;

    const envSize = 128;
    const envData = new Uint8Array(envSize * envSize * 4);
    for (let i = 0; i < envSize * envSize; i++) {
      const u = (i % envSize) / envSize;
      const v = Math.floor(i / envSize) / envSize;
      const dist = Math.sqrt((u - 0.5) ** 2 + (v - 0.5) ** 2);
      const brightness = Math.floor((1 - dist * 1.2) * 180);
      const clamped = Math.max(0, Math.min(255, brightness));
      envData[i * 4] = Math.floor(clamped * 0.1);
      envData[i * 4 + 1] = Math.floor(clamped * 0.9);
      envData[i * 4 + 2] = Math.floor(clamped * 0.5);
      envData[i * 4 + 3] = 255;
    }
    const envTexture = new THREE.DataTexture(envData, envSize, envSize, THREE.RGBAFormat);
    envTexture.mapping = THREE.EquirectangularReflectionMapping;
    envTexture.needsUpdate = true;
    scene.environment = envTexture;
    scene.background = null;

    const clock = new THREE.Clock();
    const mainBacksideRT = new THREE.WebGLRenderTarget(width, height);
    const mainNormalRT = new THREE.WebGLRenderTarget(Math.floor(width * 0.25), Math.floor(height * 0.25));
    const rippleWidth = Math.floor(width * 0.25);
    const rippleHeight = Math.floor(height * 0.25);
    const rippleRT = new THREE.WebGLRenderTarget(rippleWidth, rippleHeight, {
      type: THREE.UnsignedByteType,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
    });

    const rippleMaterial = new THREE.ShaderMaterial({
      transparent: true,
      defines: { PI: '3.14159265359' },
      uniforms: {
        uTime: { value: 0 },
        uHue: { value: 0.35 },
        uHueVariation: { value: 0.3 },
        uDensity: { value: 0.5 },
        uDisplacement: { value: 0.66 },
        uGradient: { value: 6.0 },
        uRes: { value: new THREE.Vector2(rippleWidth, rippleHeight) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform float uTime, uHue, uHueVariation, uDensity, uDisplacement, uGradient;

        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

        float snoise(vec2 v) {
          const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
          vec2 i = floor(v + dot(v, C.yy));
          vec2 x0 = v - i + dot(i, C.xx);
          vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
          vec4 x12 = x0.xyxy + C.xxzz;
          x12.xy -= i1;
          i = mod289(i);
          vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
          vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
          m = m*m; m = m*m;
          vec3 x = 2.0 * fract(p * C.www) - 1.0;
          vec3 h = abs(x) - 0.5;
          vec3 ox = floor(x + 0.5);
          vec3 a0 = x - ox;
          m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
          vec3 g;
          g.x = a0.x * x0.x + h.x * x0.y;
          g.yz = a0.yz * x12.xz + h.yz * x12.yw;
          return 130.0 * dot(m, g);
        }

        vec3 getColor(float noise) {
          float hue = uHue + noise * uHueVariation;
          float s = 0.4 + noise * 0.2;
          float l = 0.12 + noise * 0.08;
          vec3 hsl = vec3(hue, s, l);
          vec3 rgb = clamp(abs(mod(hsl.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
          return hsl.z + (rgb - 0.5) * (1.0 - abs(2.0 * hsl.z - 1.0)) * hsl.y;
        }

        vec3 getNormal(vec2 uv, float noise, float d) {
          float n1 = snoise(uv + vec2(d, 0.0));
          float n2 = snoise(uv + vec2(0.0, d));
          float n3 = snoise(uv - vec2(d, 0.0));
          float changeX = (n1 - n3) / (2.0 * d) * 0.05;
          float changeY = (n2 - noise) / d * 0.05;
          return vec3(changeX, 1.0 - (changeX * changeX + changeY * changeY), changeY);
        }

        void main() {
          float t = uTime * 0.005;
          vec2 uv = vUv;
          float a = sin(t * 0.3);
          float b = cos(t * 0.2);
          uv += 50.0 * (vec2(a, a) + vec2(b, b));
          float noise = snoise(uv);
          float dist = length(uv);
          noise *= pow(dist, uGradient);
          noise += sin(uv.x * 2.0 + t) + sin(uv.y * 2.0 + t);
          noise *= uDensity;
          gl_FragColor.rgb = getNormal(uv, noise, 0.01);
          gl_FragColor.a = 1.0;
          gl_FragColor.rgb += getColor(noise) * uDisplacement * 0.02;
        }
      `,
    });

    const rippleScene = new THREE.Scene();
    rippleScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), rippleMaterial));

    const liquidMaterial = new THREE.MeshPhysicalMaterial({
      metalness: 0.0,
      roughness: 0.0,
      ior: 1.5,
      thickness: 2.0,
      transmission: 1.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.0,
      dispersion: 1.0,
      color: 0xffffff,
      side: THREE.FrontSide,
      transparent: true,
      envMapIntensity: 1.5,
    });

    const planeGeo = new THREE.PlaneGeometry(16, 10, 1, 1);
    const mainMesh = new THREE.Mesh(planeGeo, liquidMaterial);
    scene.add(mainMesh);

    const backsideMat = liquidMaterial.clone();
    backsideMat.side = THREE.BackSide;
    const backsideScene = new THREE.Scene();
    backsideScene.add(new THREE.Mesh(planeGeo, backsideMat));

    let animationId: number;
    let onBeforeCompileSet = false;

    function animate() {
      animationId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      rippleMaterial.uniforms.uTime.value = time * 10;

      renderer.setRenderTarget(rippleRT);
      renderer.render(rippleScene, camera);
      renderer.setRenderTarget(null);

      const scene2 = new THREE.Scene();
      const mat2 = new THREE.ShaderMaterial({
        uniforms: { tMap: { value: rippleRT.texture } },
        vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        fragmentShader: `uniform sampler2D tMap; varying vec2 vUv; void main() { gl_FragColor = texture2D(tMap, vUv); }`,
      });
      scene2.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat2));
      renderer.setRenderTarget(mainNormalRT);
      renderer.render(scene2, camera);
      renderer.setRenderTarget(null);

      renderer.setRenderTarget(mainBacksideRT);
      renderer.render(backsideScene, camera);
      renderer.setRenderTarget(null);

      if (!onBeforeCompileSet) {
        onBeforeCompileSet = true;
        liquidMaterial.onBeforeCompile = (shader) => {
          shader.uniforms.uBackTexture = { value: mainBacksideRT.texture };
          shader.uniforms.uNormalTexture = { value: mainNormalRT.texture };
          shader.uniforms.uRefraction = { value: 1.0 };
          shader.uniforms.uSpecularRefraction = { value: 1.0 };
          shader.uniforms.uTextureScale = { value: 0.8 };
          shader.fragmentShader = shader.fragmentShader.replace(
            'void main() {',
            `uniform sampler2D uBackTexture; uniform sampler2D uNormalTexture;
             uniform float uRefraction, uSpecularRefraction, uTextureScale;
             void main() {`
          );
          shader.fragmentShader = shader.fragmentShader.replace(
            '#include <opaque_fragment>',
            `vec4 normalColor = texture2D(uNormalTexture, vUv);
             vec3 testNormal = (normalColor.xyz - 0.5) * 2.0;
             vec2 newUv = vUv - 0.5; newUv *= uTextureScale; newUv += 0.5;
             newUv += testNormal.xy * uRefraction * 0.1;
             newUv = clamp(newUv, vec2(0.0), vec2(1.0));
             diffuseColor.rgb = texture2D(uBackTexture, newUv).rgb;
             vec3 reflectDir = reflect(normalize(vViewPosition), geometryNormal);
             float fresnel = pow(1.0 - clamp(dot(normalize(vViewPosition), reflectDir), 0.0, 1.0), 3.0);
             diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0), fresnel * uSpecularRefraction);
             #include <opaque_fragment>`
          );
        };
        liquidMaterial.needsUpdate = true;
      }

      renderer.render(scene, camera);
    }

    animate();

    const onResize = () => {
      const w = container.offsetWidth;
      const h = container.offsetHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      mainBacksideRT.setSize(w, h);
      mainNormalRT.setSize(Math.floor(w * 0.25), Math.floor(h * 0.25));
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      mainBacksideRT.dispose();
      mainNormalRT.dispose();
      rippleRT.dispose();
      planeGeo.dispose();
      liquidMaterial.dispose();
      backsideMat.dispose();
      rippleMaterial.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }} />;
}

export function OverviewSection() {
  return (
    <section id="overview" className="relative min-h-screen overflow-hidden section-glow-green">
      <LiquidGlassCanvas />

      <div className="relative z-10 bg-bd-dark/90 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-6 py-[80px]">
          <span className="section-label reveal-on-scroll">CORE PROPOSITION</span>

          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-normal text-bd-text leading-[0.88] tracking-[-0.03em] mt-4 reveal-on-scroll">
            Five Pillars of the<br />Living Frontier
          </h2>

          <p className="font-body text-lg text-bd-text/65 max-w-[640px] mt-6 reveal-on-scroll leading-relaxed">
            BDMEE is not a construction project. It is a programming project — where the code is DNA, the compiler is evolution, and the factory is the organism itself.
          </p>

          {/* Pillar Cards */}
          <div className="flex flex-col md:flex-row gap-5 mt-12">
            {PILLARS.map((pillar, i) => (
              <div
                key={i}
                className={`stat-card reveal-on-scroll reveal-delay-${i + 1} group`}
                style={{
                  borderColor: `${pillar.color}18`,
                  borderTopWidth: '3px',
                  borderTopColor: pillar.color,
                }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at top left, ${pillar.color}08 0%, transparent 70%)` }}
                />
                <span className="font-display text-5xl" style={{ color: pillar.color }}>
                  {pillar.stat}
                </span>
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-bd-text/45 mt-3">
                  {pillar.label}
                </p>
                <p className="font-body text-sm text-bd-text/35 mt-1 mb-4">
                  {pillar.desc}
                </p>
                <div className="why-block" style={{ borderLeftColor: `${pillar.color}50` }}>
                  <p className="font-body text-xs text-bd-text/60 leading-relaxed">
                    {pillar.why}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pull Quote */}
          <div className="mt-14 max-w-[900px] mx-auto text-center reveal-on-scroll">
            <div className="w-[80px] h-px mx-auto mb-10" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,255,135,0.45), transparent)' }} />
            <blockquote
              className="font-display text-[clamp(1.4rem,2.8vw,2.4rem)] font-normal leading-[1.2] glow-text"
              style={{ color: 'rgba(184,240,204,0.9)' }}
            >
              "We are not building habitats. We are programming them into existence. Every wall is a living factory. Every surface is a sensor. Every organism is a pillar to a system."
            </blockquote>
            <div className="w-[80px] h-px mx-auto mt-10" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,255,135,0.45), transparent)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
