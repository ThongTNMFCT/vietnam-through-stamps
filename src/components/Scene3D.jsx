import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Sparkles, OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';
import './Scene3D.css';

// 1. Waving Vietnamese Flag
function WavingFlag({ position }) {
  const meshRef = useRef();
  
  // Create Flag Texture using Canvas API
  const flagTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 682; // ~ 3:2 ratio
    const ctx = canvas.getContext('2d');
    
    // Red background
    ctx.fillStyle = '#DA251D';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Yellow star
    ctx.fillStyle = '#FFFF00';
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const outerRadius = canvas.height * 0.3;
    const innerRadius = canvas.height * 0.12;
    const spikes = 5;
    
    ctx.beginPath();
    for (let i = 0; i < spikes * 2; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      // Start from the top point (-PI/2)
      const angle = (Math.PI / spikes) * i - Math.PI / 2;
      ctx.lineTo(cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius);
    }
    ctx.closePath();
    ctx.fill();
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 16;
    return texture;
  }, []);

  // Waving animation logic
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const positionAttribute = meshRef.current.geometry.attributes.position;
    
    for (let i = 0; i < positionAttribute.count; i++) {
      const x = positionAttribute.getX(i);
      const y = positionAttribute.getY(i);
      // Sine waves based on X, Y, and time
      const z = Math.sin(x * 1.5 - time * 3) * 0.4 + Math.sin(y * 1 - time * 2) * 0.2;
      positionAttribute.setZ(i, z);
    }
    
    positionAttribute.needsUpdate = true;
    meshRef.current.geometry.computeVertexNormals();
  });

  return (
    <mesh ref={meshRef} position={position} rotation={[0, 0.2, 0]}>
      {/* High segment count to allow smooth bending of vertices */}
      <planeGeometry args={[8, 5.33, 64, 64]} />
      <meshStandardMaterial 
        map={flagTexture} 
        side={THREE.DoubleSide} 
        roughness={0.7}
        metalness={0.1}
      />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <div className="scene-container">
      <Canvas camera={{ position: [0, 0, 9], fov: 45 }}>
        <Environment preset="city" />
        <ambientLight intensity={0.6} />
        <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1} castShadow />
        <spotLight position={[-10, 0, 10]} angle={0.3} penumbra={1} intensity={0.5} />
        
        {/* Float the majestic Waving Flag in the center */}
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
          <WavingFlag position={[0, 0, 0]} />
        </Float>

        <Sparkles 
          count={150} 
          scale={12} 
          size={3} 
          speed={0.4} 
          opacity={0.5} 
          color="#D4A017" 
        />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2 + 0.1} 
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
