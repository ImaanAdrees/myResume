"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Text } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import type { Group } from "three";

const skills = [
  "Next.js",
  "React",
  "React Native",
  "TypeScript",
  "JavaScript",
  "C#",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "SSMS",
  "GitHub",
  "Vercel",
  "HTML",
  "CSS",
];

// Distribute points on a sphere using fibonacci spiral
function fibonacciSphere(count: number, radius: number) {
  const points: [number, number, number][] = [];
  const phi = Math.PI * (Math.sqrt(5) - 1);
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;
    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;
    points.push([x * radius, y * radius, z * radius]);
  }
  return points;
}

function SkillCloud() {
  const groupRef = useRef<Group>(null);
  const points = useMemo(() => fibonacciSphere(skills.length, 2.4), []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.18;
    groupRef.current.rotation.x += delta * 0.04;
  });

  return (
    <group ref={groupRef}>
      {/* faint inner sphere */}
      <mesh>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshBasicMaterial color="#EAB308" wireframe transparent opacity={0.15} />
      </mesh>

      {skills.map((s, i) => {
        const [x, y, z] = points[i];
        const isAccent = i % 3 === 0;
        return (
          <Billboard key={s} position={[x, y, z]}>
            <Text
              fontSize={0.28}
              color={isAccent ? "#F472B6" : "#EAB308"}
              anchorX="center"
              anchorY="middle"
              outlineWidth={0.005}
              outlineColor="#0F172A"
            >
              {s}
            </Text>
          </Billboard>
        );
      })}
    </group>
  );
}

export default function SkillsOrb() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <SkillCloud />
      </Suspense>
    </Canvas>
  );
}
