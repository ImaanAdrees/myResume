"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function DistortedSphere() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={meshRef} scale={1.6}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#EAB308"
          attach="material"
          distort={0.45}
          speed={1.8}
          roughness={0.2}
          metalness={0.7}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function InnerCore() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.6}>
      <mesh scale={0.55}>
        <icosahedronGeometry args={[1, 2]} />
        <MeshDistortMaterial
          color="#F472B6"
          attach="material"
          distort={0.6}
          speed={3}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 3, 3]} intensity={1.2} color="#F472B6" />
      <directionalLight position={[-3, -2, 1]} intensity={0.8} color="#EAB308" />
      <pointLight position={[0, 0, 3]} intensity={0.6} color="#F8FAFC" />

      <Suspense fallback={null}>
        <DistortedSphere />
        <InnerCore />
        <Sparkles
          count={80}
          scale={6}
          size={3}
          speed={0.4}
          color="#EAB308"
          opacity={0.8}
        />
      </Suspense>
    </Canvas>
  );
}
