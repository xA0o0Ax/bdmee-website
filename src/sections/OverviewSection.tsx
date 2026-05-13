import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const PILLARS = [
  { stat: '95%', label: 'Mass-to-Orbit Reduction', desc: 'From Launching Materials to Launching Information' },
  { stat: '3', label: 'Engineered Organisms', desc: 'Synthetic Biology as Engineering' },
  { stat: '99.99%', label: 'Biocontainment Assurance', desc: 'Planetary Protection via Synthetic Auxotrophy' },
  { stat: '\u221e', label: 'Shelf-Life (No Expiration)', desc: 'On-Demand Pharmaceutical Synthesis' },
  { stat: '4+', label: 'Target Environments', desc: 'One Blueprint, Infinite Applications' },
];

function LiquidGlassCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for mobile
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const width = container.offsetWidth;
    const height = container.offsetHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    container.appendChild(renderer.domElement);

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 10;

    // Procedural environment (fallback HDR)
    const envSize = 128;
    const envData = new Uint8Array(envSize * envSize * 4);
    for (let i = 0; i < envSize * envSize; i++) {
      const u = (i % envSize) / envSize;
      const v = Math.floor(i / envSize) / envSize;
      const dist = Math.sqrt((u - 0.5) ** 2 + (v - 0.5) ** 2);
      const brightness = Math.floor((1 - dist * 1.2) * 200);
      const clamped = Math.max(0, Math.min(255, brightness));
      envData[i * 4] = clamped;
      envData[i * 4 + 1] = clamped;
      envData[i * 4 + 2] = clamped + 20;
      envData[i * 4 + 3] = 255;
    }
    const envTexture = new THREE.DataTexture(envData, envSize, envSize, THREE.RGBAFormat);
    envTexture.mapping = THREE.EquirectangularReflectionMapping;
    envTexture.needsUpdate = true;
    scene.environment = envTexture;
    scene.background = null;

    // Clock
    const clock = new THREE.Clock();

    // Render targets
    const mainBacksideRT = new THREE.WebGLRenderTarget(width, height);
    const mainNormalRT = new THREE.WebGLRenderTarget(
      Math.floor(width * 0.25),
      Math.floor(height * 0.25)
    );

    // Ripple normal generator
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
        uHue: { value: 0.6 },
        uHueVariation: { value: 0.4 },
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
          float s = 0.3 + noise * 0.2;
          float l = 0.15 + noise * 0.1;
          vec3 hsl = vec3(hue, s, l);
          vec3 rgb = clamp(abs(mod(hsl.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
          return hsl.z + (rgb - 0.5) * (1.0 - abs(2.0 * hsl.z - 1.0)) * hsl.y;
        }

        vec3 getNormal(vec2 uv, float noise, float d) {
          float n = noise;
          float n1 = snoise(uv + vec2(d, 0.0));
          float n2 = snoise(uv + vec2(0.0, d));
          float n3 = snoise(uv - vec2(d, 0.0));
          float changeX = (n1 - n3) / (2.0 * d);
          float changeY = (n2 - n) / d;
          changeX *= 0.05;
          changeY *= 0.05;
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
    const rippleMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      rippleMaterial
    );
    rippleScene.add(rippleMesh);

    // Liquid glass material
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

    // Backside
    const backsideMat = liquidMaterial.clone();
    backsideMat.side = THREE.BackSide;
    const backsideMesh = new THREE.Mesh(planeGeo, backsideMat);
    const backsideScene = new THREE.Scene();
    backsideScene.add(backsideMesh);

    // Animation loop
    let animationId: number;

    function animate() {
      animationId = requestAnimationFrame(animate);

      const time = clock.getElapsedTime();

      // Update ripple
      rippleMaterial.uniforms.uTime.value = time * 10;
      rippleMaterial.uniforms.uDisplacement.value = 0.66;

      // Render ripple normal
      renderer.setRenderTarget(rippleRT);
      renderer.render(rippleScene, camera);
      renderer.setRenderTarget(null);

      // Copy ripple to main normal RT
      {
        const scene2 = new THREE.Scene();
        const mat2 = new THREE.ShaderMaterial({
          uniforms: {
            tMap: { value: rippleRT.texture },
          },
          vertexShader: `
            varying vec2 vUv;
            void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
          `,
          fragmentShader: `
            uniform sampler2D tMap;
            varying vec2 vUv;
            void main() { gl_FragColor = texture2D(tMap, vUv); }
          `,
        });
        scene2.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat2));
        renderer.setRenderTarget(mainNormalRT);
        renderer.render(scene2, camera);
        renderer.setRenderTarget(null);
      }

      // Render backside
      renderer.setRenderTarget(mainBacksideRT);
      renderer.render(backsideScene, camera);
      renderer.setRenderTarget(null);

      // Update material uniforms
      liquidMaterial.onBeforeCompile = (shader) => {
        shader.uniforms.uBackTexture = { value: mainBacksideRT.texture };
        shader.uniforms.uNormalTexture = { value: mainNormalRT.texture };
        shader.uniforms.uRefraction = { value: 1.0 };
        shader.uniforms.uSpecularRefraction = { value: 1.0 };
        shader.uniforms.uTextureScale = { value: 0.8 };

        shader.fragmentShader = shader.fragmentShader.replace(
          'void main() {',
          `
          uniform sampler2D uBackTexture;
          uniform sampler2D uNormalTexture;
          uniform float uRefraction;
          uniform float uSpecularRefraction;
          uniform float uTextureScale;
          void main() {
          `
        );

        shader.fragmentShader = shader.fragmentShader.replace(
          '#include <opaque_fragment>',
          `
          vec4 normalColor = texture2D(uNormalTexture, vUv);
          vec3 testNormal = (normalColor.xyz - 0.5) * 2.0;
          vec2 newUv = vUv - 0.5;
          newUv *= uTextureScale;
          newUv += 0.5;
          newUv += testNormal.xy * uRefraction * 0.1;
          newUv = clamp(newUv, vec2(0.0), vec2(1.0));
          diffuseColor.rgb = texture2D(uBackTexture, newUv).rgb;
          vec3 reflectDir = reflect(normalize(vViewPosition), geometryNormal);
          float fresnel = dot(normalize(vViewPosition), reflectDir);
          fresnel = clamp(fresnel, 0.0, 1.0);
          fresnel = 1.0 - fresnel;
          fresnel = pow(fresnel, 3.0);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0), fresnel * uSpecularRefraction);
          #include <opaque_fragment>
          `
        );
      };

      // Render main
      renderer.render(scene, camera);
    }

    animate();

    // Resize
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
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}

export function OverviewSection() {
  return (
    <section
      id="overview"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Liquid Glass Background */}
      <LiquidGlassCanvas />

      {/* Content Overlay */}
      <div className="relative z-10 bg-bd-dark/85 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-6 py-[120px]">
          {/* Label */}
          <span className="section-label reveal-on-scroll">CORE NARRATIVE</span>

          {/* Heading */}
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-normal text-bd-text leading-[0.85] tracking-[-0.02em] mt-4 reveal-on-scroll">
            Five Pillars of the<br />Living Frontier
          </h2>

          {/* Body */}
          <p className="font-body text-lg text-bd-text/70 max-w-[640px] mt-6 reveal-on-scroll">
            BDMEE is not a building project. It is a programming project — where the code is DNA and the compiler is evolution.
          </p>

          {/* Stat Cards */}
          <div className="flex flex-col md:flex-row gap-6 mt-20">
            {PILLARS.map((pillar, i) => (
              <div
                key={i}
                className={`stat-card reveal-on-scroll reveal-delay-${i + 1}`}
              >
                <span className="font-display text-5xl text-bd-text">
                  {pillar.stat}
                </span>
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-bd-text/50 mt-3">
                  {pillar.label}
                </p>
                <p className="font-body text-sm text-bd-text/40 mt-2">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Pull Quote */}
          <div className="mt-20 max-w-[900px] mx-auto text-center reveal-on-scroll">
            <div className="w-[120px] h-px bg-bd-text/20 mx-auto mb-10" />
            <blockquote className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-normal text-bd-text/90 leading-tight">
              "We're not building habitats. We're programming them into existence. Every wall is a living factory. Every surface is a sensor. Every organism is a redundant backup system."
            </blockquote>
            <div className="w-[120px] h-px bg-bd-text/20 mx-auto mt-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
