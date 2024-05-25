import { Canvas, MeshProps, useFrame } from "@react-three/fiber/native";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import { Suspense } from "react";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Sky, Torus } from "@react-three/drei/native";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";

export default function Home() {
  const { width, height } = useSafeAreaFrame();
  return (
    <Canvas style={{ width, height }}>
      <Suspense>
        <Physics debug>
          <Sky sunPosition={[100, 20, 100]} />w
          <RigidBody colliders={"hull"} restitution={2}>
            <Torus />
          </RigidBody>
          <CuboidCollider position={[0, -2, 0]} args={[20, 0.5, 20]} />
          <EffectComposer>
            <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
          </EffectComposer>
        </Physics>
      </Suspense>
    </Canvas>
  );
}
