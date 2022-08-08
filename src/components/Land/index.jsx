import React, { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Land from './Land';
import styled from 'styled-components';

export default function LandModel() {
  return (
    <CanvasContainer>
      <Canvas mode='concurrent' camera={{ position: [1, 1, 1.5], fov: 5 }}>
        <ambientLight />
        <directionalLight
          position={[-5, 5, 5]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <group position={[0, 0, 0]}>
          <Suspense fallback={'loading'}>
            <Land />
          </Suspense>
        </group>
        <mesh rotation={[0, 0, 0]} position={[0, -1, 0]} receiveShadow>
          <planeBufferGeometry args={[10, 10, 1, 1]} />
          <shadowMaterial transparent opacity={0.2} />
        </mesh>
        <OrbitControls />
      </Canvas>
    </CanvasContainer>
  );
}

const CanvasContainer = styled.div`
  width: 100%;
  height: 400px;
`;
