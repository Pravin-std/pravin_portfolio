import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Float, Lightformer, Environment, ContactShadows } from '@react-three/drei';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/**
 * RED SHIFT / 001 - Signature Procedural Sculpture
 *
 * Mathematical curves forming an interlocking dimensional loop:
 * - Primary Loop: 3-lobed spatial trefoil manifold in polished mirror chrome.
 * - Secondary Interlocking Loop: Counter-twisted helical manifold in dark gunmetal.
 * - Node Collars: Machined accent rings in metallic crimson (#E53935).
 * - Central Core: Dual gimbal alignment rings and crimson core indicator.
 */

// Primary 3D parametric spatial curve
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
    // Asymmetric counter-loop weaving through the primary manifold
    const x = (1.05 * Math.cos(phi) + 0.45 * Math.cos(3 * phi)) * this.scale;
    const y = (1.05 * Math.sin(phi) - 0.45 * Math.sin(3 * phi)) * this.scale;
    const z = 0.65 * Math.cos(2 * phi) * this.scale;
    return target.set(x, y, z);
  }
}

export const RedShiftSculpture: React.FC = () => {
  const groupRef = useRef<THREE.Group | null>(null);
  const coreRef = useRef<THREE.Group | null>(null);
  const prefersReducedMotion = useReducedMotion();

  // Procedural geometries memoized for performance
  const primaryGeometry = useMemo(() => {
    const curve = new PrimaryManifoldCurve(1.0);
    return new THREE.TubeGeometry(curve, 180, 0.09, 24, true);
  }, []);

  const secondaryGeometry = useMemo(() => {
    const curve = new SecondaryManifoldCurve(0.92);
    return new THREE.TubeGeometry(curve, 160, 0.075, 20, true);
  }, []);

  // Material definitions for high-end studio aesthetic
  const chromeMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#E8E8EE',
        metalness: 0.98,
        roughness: 0.1,
        envMapIntensity: 1.4,
      }),
    []
  );

  const gunmetalMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#151515',
        metalness: 0.92,
        roughness: 0.28,
        envMapIntensity: 1.1,
      }),
    []
  );

  const redAccentMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#E53935',
        metalness: 0.85,
        roughness: 0.2,
        emissive: '#380707',
        emissiveIntensity: 0.35,
      }),
    []
  );

  // Smooth continuous rotation & cursor velocity responsiveness
  useFrame((state, delta) => {
    if (prefersReducedMotion || !groupRef.current) return;

    // Organic continuous rotation
    groupRef.current.rotation.y += delta * 0.18;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      state.pointer.y * 0.35 + 0.1,
      0.04
    );
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      state.pointer.x * 0.2,
      0.04
    );

    // Subtle counter-rotation on inner gimbal
    if (coreRef.current) {
      coreRef.current.rotation.y -= delta * 0.3;
      coreRef.current.rotation.z += delta * 0.15;
    }
  });

  return (
    <>
      {/* Zero-download Procedural Studio Environment & Reflections */}
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 4, 0.3, 0]}>
          {/* Main cool key lightformer */}
          <Lightformer form="rect" intensity={3.5} position={[0, 6, -5]} scale={[10, 10, 1]} />
          {/* Edge rim lightformer */}
          <Lightformer form="rect" intensity={2.2} rotation-y={Math.PI / 2} position={[-8, 1, 0]} scale={[14, 3, 1]} />
          <Lightformer form="rect" intensity={1.8} rotation-y={-Math.PI / 2} position={[8, -2, 0]} scale={[14, 3, 1]} />
          {/* Red Shift specular highlight lightformer */}
          <Lightformer form="ring" color="#E53935" intensity={4.5} position={[0, -6, 3]} scale={[8, 8, 1]} />
        </group>
      </Environment>

      {/* Studio Lighting Rig */}
      <directionalLight position={[5, 8, 6]} intensity={1.8} color="#FFFFFF" />
      <directionalLight position={[-6, -3, -4]} intensity={0.7} color="#9090AA" />
      <pointLight position={[-2.5, 1.8, -2.5]} intensity={2.8} color="#E53935" distance={12} />
      <pointLight position={[3, -2, 3]} intensity={1.5} color="#FFFFFF" distance={8} />

      {/* Floating Sculpture Container */}
      <Float
        speed={prefersReducedMotion ? 0 : 1.6}
        rotationIntensity={prefersReducedMotion ? 0 : 0.35}
        floatIntensity={prefersReducedMotion ? 0 : 0.55}
      >
        <group
          ref={groupRef}
          position={[0, 0.1, 0]}
          rotation={prefersReducedMotion ? [0.25, 0.6, 0] : [0.1, 0, 0]}
        >
          {/* Primary Mirror Chrome Manifold */}
          <mesh geometry={primaryGeometry} material={chromeMaterial} castShadow />

          {/* Secondary Interlocking Gunmetal Manifold */}
          <group rotation={[0.65, 0.45, -0.2]}>
            <mesh geometry={secondaryGeometry} material={gunmetalMaterial} castShadow />
          </group>

          {/* Core Gimbal & Red Shift Detail */}
          <group ref={coreRef}>
            {/* Gimbal Outer Ring */}
            <mesh rotation={[Math.PI / 3, 0, 0]}>
              <torusGeometry args={[0.55, 0.022, 16, 64]} />
              <primitive object={chromeMaterial} attach="material" />
            </mesh>

            {/* Gimbal Inner Ring */}
            <mesh rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
              <torusGeometry args={[0.38, 0.018, 16, 64]} />
              <primitive object={gunmetalMaterial} attach="material" />
            </mesh>

            {/* Core Crimson Beacon */}
            <mesh>
              <sphereGeometry args={[0.13, 32, 32]} />
              <primitive object={redAccentMaterial} attach="material" />
            </mesh>
          </group>

          {/* Node Precision Rings along key nodal transitions */}
          <mesh position={[1.2, 0.65, 0.35]} rotation={[0.4, 0.8, 0.2]}>
            <torusGeometry args={[0.14, 0.022, 16, 32]} />
            <primitive object={redAccentMaterial} attach="material" />
          </mesh>
          <mesh position={[-1.15, -0.7, -0.3]} rotation={[-0.5, 0.3, 0.6]}>
            <torusGeometry args={[0.14, 0.022, 16, 32]} />
            <primitive object={redAccentMaterial} attach="material" />
          </mesh>
        </group>
      </Float>

      {/* Realistic Ground Contact Shadow */}
      <ContactShadows
        position={[0, -2.1, 0]}
        opacity={0.5}
        scale={7}
        blur={2.4}
        far={4.5}
        color="#000000"
      />
    </>
  );
};
