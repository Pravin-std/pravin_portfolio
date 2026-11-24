import React, { useMemo, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { Lightformer, Environment, ContactShadows } from '@react-three/drei';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/**
 * RED SHIFT / 001 — Freely Floating 3D Kinetic Sculpture
 *
 * Architecture Upgrades:
 * 1. Zero Canvas Clipping:
 *    - Parametric geometry scaled to fit comfortably inside camera frustum at all angles.
 *    - No rectangular borders, no corner crosshairs, no bounding box background.
 *    - Transparent WebGL rendering.
 * 2. Complete 3D Unconstrained Rotation:
 *    - Full 360-degree horizontal rotation.
 *    - Full 360-degree vertical tumbling.
 *    - Diagonal rolling with fluid gyroscopic inertia.
 *    - Mouse-hover tracking with smooth return to resting orientation on leave.
 *    - Continuous majestic idle rotation & floating breathing oscillation.
 * 3. Premium Metallic Materials:
 *    - Deep obsidian black chrome with liquid specular reflections.
 *    - Dark gunmetal titanium counter-manifold.
 *    - Illuminated glowing crimson (#E53935) collars & core beacon.
 * 4. Responsive Specular Lighting:
 *    - Interactive light source slides silver edge reflections across the chrome surface.
 *    - Core crimson point light breathes upon user interaction.
 */

// Primary 3D parametric spatial curve (Trefoil Manifold)
class PrimaryManifoldCurve extends THREE.Curve<THREE.Vector3> {
  scale: number;
  constructor(scale = 1) {
    super();
    this.scale = scale;
  }

  getPoint(t: number, target = new THREE.Vector3()): THREE.Vector3 {
    const phi = t * Math.PI * 2;
    // 3-fold undulating trefoil with dimensional twist
    const r = (1.35 + 0.55 * Math.cos(3 * phi)) * this.scale;
    const x = r * Math.cos(2 * phi);
    const y = r * Math.sin(2 * phi);
    const z = 0.75 * Math.sin(3 * phi) * this.scale;
    return target.set(x, y, z);
  }
}

// Interlocking counter-twisted spatial curve
class SecondaryManifoldCurve extends THREE.Curve<THREE.Vector3> {
  scale: number;
  constructor(scale = 1) {
    super();
    this.scale = scale;
  }

  getPoint(t: number, target = new THREE.Vector3()): THREE.Vector3 {
    const phi = t * Math.PI * 2;
    // Asymmetric counter-loop weaving through primary manifold
    const x = (1.05 * Math.cos(phi) + 0.45 * Math.cos(3 * phi)) * this.scale;
    const y = (1.05 * Math.sin(phi) - 0.45 * Math.sin(3 * phi)) * this.scale;
    const z = 0.65 * Math.cos(2 * phi) * this.scale;
    return target.set(x, y, z);
  }
}

export const RedShiftSculpture: React.FC = () => {
  const { gl } = useThree();
  const prefersReducedMotion = useReducedMotion();

  // Root group references
  const rootGroupRef = useRef<THREE.Group | null>(null);
  const floatGroupRef = useRef<THREE.Group | null>(null);
  const coreRef = useRef<THREE.Group | null>(null);

  // Lighting references
  const interactiveLightRef = useRef<THREE.PointLight | null>(null);
  const coreLightRef = useRef<THREE.PointLight | null>(null);

  // 360° Unconstrained Rotation & Interaction State
  const isHoveredRef = useRef(false);
  const isDraggingRef = useRef(false);
  const lastPointerPos = useRef({ x: 0, y: 0 });

  // Accumulated unconstrained rotation angles (supports infinite 360° turns)
  const dragEuler = useRef({ x: 0, y: 0 });
  const dragVelocity = useRef({ x: 0, y: 0 });
  const idleSpinY = useRef(0);
  const hoverFactor = useRef(0);
  const scrollTiltX = useRef(0);

  // Geometries calibrated to fit comfortably in frustum with generous margins at all angles
  const primaryGeometry = useMemo(() => {
    const curve = new PrimaryManifoldCurve(0.92);
    return new THREE.TubeGeometry(curve, 200, 0.088, 24, true);
  }, []);

  const secondaryGeometry = useMemo(() => {
    const curve = new SecondaryManifoldCurve(0.85);
    return new THREE.TubeGeometry(curve, 180, 0.070, 20, true);
  }, []);

  // Premium Materials (Deep Obsidian Black Chrome, Gunmetal & Glowing Neon Crimson)
  const blackChromeMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#121217', // Deep glossy obsidian black chrome
        metalness: 0.98,
        roughness: 0.07, // Liquid mirror gloss
        envMapIntensity: 2.6, // Brilliant silver edge reflections
      }),
    []
  );

  const gunmetalMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#1c1c22', // Dark metallic titanium
        metalness: 0.94,
        roughness: 0.20,
        envMapIntensity: 1.8,
      }),
    []
  );

  const neonRedMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#E53935',
        metalness: 0.80,
        roughness: 0.15,
        emissive: '#FF1E27',
        emissiveIntensity: 1.35, // Vivid glowing neon illumination
      }),
    []
  );

  const coreBeaconMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#E53935',
        emissive: '#FF2A30',
        emissiveIntensity: 2.0,
        roughness: 0.10,
      }),
    []
  );

  // Mouse & Drag event listeners (cleanly bound to canvas & window)
  useEffect(() => {
    const dom = gl.domElement;
    if (!dom) return;

    dom.style.touchAction = 'pan-y';

    const handlePointerEnter = () => {
      isHoveredRef.current = true;
    };

    const handlePointerLeave = () => {
      isHoveredRef.current = false;
      isDraggingRef.current = false;
    };

    const handlePointerDown = (e: PointerEvent) => {
      if (e.button !== 0) return;
      isDraggingRef.current = true;
      lastPointerPos.current = { x: e.clientX, y: e.clientY };
    };

    const handleWindowPointerMove = (e: PointerEvent) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - lastPointerPos.current.x;
      const deltaY = e.clientY - lastPointerPos.current.y;
      lastPointerPos.current = { x: e.clientX, y: e.clientY };

      // Full 360-degree rotation accumulation in horizontal, vertical, and diagonal directions
      dragVelocity.current.y += deltaX * 0.006;
      dragVelocity.current.x += deltaY * 0.006;
    };

    const handleWindowPointerUp = () => {
      isDraggingRef.current = false;
    };

    const handleScroll = () => {
      scrollTiltX.current = Math.min(window.scrollY * 0.0006, 0.4);
    };

    dom.addEventListener('pointerenter', handlePointerEnter);
    dom.addEventListener('pointerleave', handlePointerLeave);
    dom.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handleWindowPointerMove, { passive: true });
    window.addEventListener('pointerup', handleWindowPointerUp);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      dom.removeEventListener('pointerenter', handlePointerEnter);
      dom.removeEventListener('pointerleave', handlePointerLeave);
      dom.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handleWindowPointerMove);
      window.removeEventListener('pointerup', handleWindowPointerUp);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [gl]);

  // Main 60 FPS Render Loop
  useFrame((state, delta) => {
    if (prefersReducedMotion || !rootGroupRef.current) return;

    const dt = Math.min(delta, 0.1);
    const time = state.clock.getElapsedTime();

    // 1. Advance Idle Rotation (continuous, elegant 360° drift)
    idleSpinY.current += dt * 0.16;

    // 2. Smooth Hover Factor (blends between idle and mouse tracking)
    const targetHover = isHoveredRef.current || isDraggingRef.current ? 1 : 0;
    hoverFactor.current = THREE.MathUtils.damp(hoverFactor.current, targetHover, 3.5, dt);

    // 3. Full 360° Drag Rotation Accumulation & Inertia
    dragEuler.current.x += dragVelocity.current.x;
    dragEuler.current.y += dragVelocity.current.y;

    // Smooth inertia decay when released
    dragVelocity.current.x *= Math.pow(0.93, dt * 60);
    dragVelocity.current.y *= Math.pow(0.93, dt * 60);

    // 4. Mouse-reactive 3D Target Rotations (up to ~90° horizontal, ~72° vertical)
    const px = state.pointer.x;
    const py = state.pointer.y;

    const mouseHoverX = -py * 0.70;
    const mouseHoverY = px * 0.95;
    const mouseHoverZ = -px * py * 0.45; // Natural diagonal 360-rolling feel

    // Subtle harmonic idle breathing oscillations
    const idleOscillationX = Math.sin(time * 0.75) * 0.06;
    const idleOscillationZ = Math.cos(time * 0.55) * 0.04;

    // Integrated target angles
    const targetRotX = dragEuler.current.x + scrollTiltX.current + idleOscillationX + mouseHoverX * hoverFactor.current;
    const targetRotY = dragEuler.current.y + idleSpinY.current + mouseHoverY * hoverFactor.current;
    const targetRotZ = idleOscillationZ + mouseHoverZ * hoverFactor.current;

    // Smooth delta-damped rotation (frame-rate independent)
    rootGroupRef.current.rotation.x = THREE.MathUtils.damp(
      rootGroupRef.current.rotation.x,
      targetRotX,
      5.2,
      dt
    );
    rootGroupRef.current.rotation.y = THREE.MathUtils.damp(
      rootGroupRef.current.rotation.y,
      targetRotY,
      4.6,
      dt
    );
    rootGroupRef.current.rotation.z = THREE.MathUtils.damp(
      rootGroupRef.current.rotation.z,
      targetRotZ,
      4.8,
      dt
    );

    // 5. Floating Vertical Breathing Float
    if (floatGroupRef.current) {
      const floatY = Math.sin(time * 1.05) * 0.08;
      floatGroupRef.current.position.y = THREE.MathUtils.damp(
        floatGroupRef.current.position.y,
        floatY,
        3.2,
        dt
      );
    }

    // 6. Mechanical Core Gimbal Counter-Rotation
    if (coreRef.current) {
      coreRef.current.rotation.y -= dt * 0.35;
      coreRef.current.rotation.z += dt * 0.20;
      coreRef.current.rotation.x = THREE.MathUtils.damp(
        coreRef.current.rotation.x,
        py * 0.35,
        4.0,
        dt
      );
    }

    // 7. Dynamic Reactive Specular Light (slides silver highlights across chrome)
    if (interactiveLightRef.current) {
      const targetLightX = px * 5.5 + 2.5;
      const targetLightY = py * 4.5 + 3.0;
      interactiveLightRef.current.position.x = THREE.MathUtils.damp(
        interactiveLightRef.current.position.x,
        targetLightX,
        4.5,
        dt
      );
      interactiveLightRef.current.position.y = THREE.MathUtils.damp(
        interactiveLightRef.current.position.y,
        targetLightY,
        4.5,
        dt
      );
    }

    // 8. Dynamic Crimson Core Beacon Pulse
    if (coreLightRef.current) {
      const targetIntensity = 2.4 + hoverFactor.current * 2.4;
      coreLightRef.current.intensity = THREE.MathUtils.damp(
        coreLightRef.current.intensity,
        targetIntensity,
        4.0,
        dt
      );
    }
  });

  return (
    <>
      {/* Zero-download Procedural Studio Environment & Razor-sharp Reflections */}
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 4, 0.3, 0]}>
          {/* Main Cool Key Lightformer for razor-sharp silver edge reflections */}
          <Lightformer form="rect" intensity={4.5} position={[0, 8, -5]} scale={[14, 12, 1]} color="#FFFFFF" />
          {/* Lateral Rim Lightformers */}
          <Lightformer form="rect" intensity={3.2} rotation-y={Math.PI / 2} position={[-8, 1, 0]} scale={[16, 4, 1]} color="#F0F4FF" />
          <Lightformer form="rect" intensity={2.8} rotation-y={-Math.PI / 2} position={[8, -2, 0]} scale={[16, 4, 1]} color="#FFFFFF" />
          {/* Specular Red Highlight Lightformer underneath */}
          <Lightformer form="ring" color="#E53935" intensity={5.5} position={[0, -6, 3]} scale={[9, 9, 1]} />
        </group>
      </Environment>

      {/* Studio Lighting Rig */}
      <directionalLight position={[6, 9, 6]} intensity={2.2} color="#FFFFFF" />
      <directionalLight position={[-6, -4, -5]} intensity={1.1} color="#9090AA" />

      {/* Interactive Specular Point Light (Follows Pointer Coordinates) */}
      <pointLight ref={interactiveLightRef} position={[2.5, 3.5, 4.5]} intensity={2.4} color="#FFFFFF" distance={14} />

      {/* Dynamic Core Crimson Point Light (Pulses on interaction) */}
      <pointLight ref={coreLightRef} position={[0, 0, 0]} intensity={2.8} color="#E53935" distance={8} decay={2} />

      {/* Floating & Interactive Kinetic Sculpture Container */}
      <group ref={floatGroupRef} position={[0, 0.05, 0]}>
        <group
          ref={rootGroupRef}
          position={[0, 0, 0]}
          rotation={prefersReducedMotion ? [0.25, 0.6, 0] : [0.08, 0, 0]}
        >
          {/* Primary Polished Obsidian Black Chrome Manifold */}
          <mesh geometry={primaryGeometry} material={blackChromeMaterial} castShadow />

          {/* Secondary Interlocking Dark Gunmetal Manifold */}
          <group rotation={[0.65, 0.45, -0.2]}>
            <mesh geometry={secondaryGeometry} material={gunmetalMaterial} castShadow />
          </group>

          {/* Precision Core Gimbal & Red Shift Detail */}
          <group ref={coreRef}>
            {/* Gimbal Outer Chrome Ring */}
            <mesh rotation={[Math.PI / 3, 0, 0]}>
              <torusGeometry args={[0.52, 0.022, 16, 64]} />
              <primitive object={blackChromeMaterial} attach="material" />
            </mesh>

            {/* Gimbal Inner Gunmetal Ring */}
            <mesh rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
              <torusGeometry args={[0.36, 0.018, 16, 64]} />
              <primitive object={gunmetalMaterial} attach="material" />
            </mesh>

            {/* Core Crimson Illuminated Beacon */}
            <mesh>
              <sphereGeometry args={[0.13, 32, 32]} />
              <primitive object={coreBeaconMaterial} attach="material" />
            </mesh>
          </group>

          {/* Machined Neon Crimson Collars along Key Manifold Nodes */}
          {/* Node Collar 1 */}
          <mesh position={[1.12, 0.62, 0.32]} rotation={[0.4, 0.8, 0.2]}>
            <torusGeometry args={[0.13, 0.022, 16, 32]} />
            <primitive object={neonRedMaterial} attach="material" />
          </mesh>

          {/* Node Collar 2 */}
          <mesh position={[-1.08, -0.66, -0.30]} rotation={[-0.5, 0.3, 0.6]}>
            <torusGeometry args={[0.13, 0.022, 16, 32]} />
            <primitive object={neonRedMaterial} attach="material" />
          </mesh>

          {/* Node Collar 3 (Equidistant Harmonic Accent) */}
          <mesh position={[0.20, -1.15, 0.38]} rotation={[1.1, -0.4, 0.5]}>
            <torusGeometry args={[0.12, 0.020, 16, 32]} />
            <primitive object={neonRedMaterial} attach="material" />
          </mesh>

          {/* Node Collar 4 (Equidistant Harmonic Accent) */}
          <mesh position={[-0.30, 1.18, -0.35]} rotation={[-1.0, 0.6, -0.3]}>
            <torusGeometry args={[0.12, 0.020, 16, 32]} />
            <primitive object={neonRedMaterial} attach="material" />
          </mesh>
        </group>
      </group>

      {/* Realistic Deep Ground Contact Shadow */}
      <ContactShadows
        position={[0, -2.10, 0]}
        opacity={0.50}
        scale={8.0}
        blur={2.8}
        far={5.0}
        color="#000000"
      />
    </>
  );
};
