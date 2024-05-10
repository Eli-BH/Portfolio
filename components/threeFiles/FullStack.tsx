import { Center, OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Computer from "./Computer";

function FullStack() {
  return (
    <Canvas>
      <Center>
        <Stage
          adjustCamera={1}
          rotation={[0, 0, 0]}
          environment="apartment"
          intensity={0.6}
        >
          <Computer position={[0, 0, 0]} />
        </Stage>
      </Center>
      <OrbitControls enableZoom={false} autoRotate rotateSpeed={0.3} />
    </Canvas>
  );
}

export default FullStack;
