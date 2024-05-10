import { Center, OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Samsung from "@/components/threeFiles/Samsung";

function Mobile() {
  return (
    <Canvas>
      <Stage environment="city" intensity={1}>
        <Center>
          <Stage rotation={[0, 0, 0]} environment="apartment" intensity={0.6}>
            <Samsung position={[0, 0, 0]} />
          </Stage>
        </Center>
      </Stage>

      <OrbitControls enableZoom={false} autoRotate rotateSpeed={0.3} />
    </Canvas>
  );
}

export default Mobile;
