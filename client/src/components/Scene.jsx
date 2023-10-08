
import { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf');


  const earthRef = useRef();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  // UseFrame for rotation animation
  useFrame((state, delta) => {
    earthRef.current.rotation.y -= 0.15 * delta; // Adjust the rotation speed as needed
    earthRef.current.rotation.x -= 0.15 * delta; // Adjust the rotation speed as needed
  });
  return (
    <>

      <directionalLight color={0xffffff} intensity={3} position={[5, 5, 5]} />

      {/* Point Light (Localized Lighting) */}
      <pointLight color={0xff0000} intensity={1} position={[0, 10, 0]} />

      {/* Ambient Light (Global Illumination) */}
      <ambientLight color={0x404040} />
      <OrbitControls enableZoom={false} />
      <group {...props} dispose={null} scale={isMobile ? [0.025, 0.025, 0.025] : [0.03, 0.03, 0.03]} ref={earthRef}>
        <group scale={96.724}>
          <mesh geometry={nodes.pSphere1_phong1_0.geometry} material={materials.phong1} />
          <mesh geometry={nodes.pSphere1_phong1_0_1.geometry} material={materials.phong1} />
        </group>
        <group scale={97.464}>
          <mesh geometry={nodes.pSphere4_lambert6_0.geometry} material={materials.lambert6} />
          <mesh geometry={nodes.pSphere4_lambert6_0_1.geometry} material={materials.lambert6} />
        </group>
        <group scale={98.098}>
          <mesh geometry={nodes.pSphere5_lambert7_0.geometry} material={materials.lambert7} />
          <mesh geometry={nodes.pSphere5_lambert7_0_1.geometry} material={materials.lambert7} />
        </group>
      </group>
    </>
  )
}

useGLTF.preload('/scene.gltf')
