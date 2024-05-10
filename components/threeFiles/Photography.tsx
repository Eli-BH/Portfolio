import { Center, OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Camera from "./Camera";

function Photography() {
  return (
    <Canvas>
      <Center>
        <Stage
          adjustCamera={1.5}
          rotation={[0, 0, 0]}
          environment="apartment"
          intensity={0.6}
        >
          <Camera position={[0, 0, 0]} />
        </Stage>
      </Center>
      <OrbitControls enableZoom={false} autoRotate rotateSpeed={0.3} />
    </Canvas>
  );
}

export default Photography;
