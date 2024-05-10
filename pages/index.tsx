import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import HeroTextContainer from "@/components/HeroTextContainer";
import avatar from "@/images/avataaars.png";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { motion as m } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <m.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 100 }}
      className="text-gray-900 absolute top-0 left-0 w-full h-svh bg-orange-100 xl:px-48  pt-20 flex justify-center center"
    >
      <Head>
        <title>Eli Brown-Henderson</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Portfolio site for Elijah Brow-Henderson"
        />
      </Head>
      <main className="flex flex-col  md:flex-row w-full lg:h-full items-center ">
        <HeroTextContainer align={"start"}>
          <div className="overflow-hidden">
            <m.h1
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 250, opacity: 0 }}
              transition={{ delay: 0.25, duration: 1 }}
              className=" xl:text-9xl lg:text-7xl text-4xl text-orange-800 "
            >
              Hi, I&apos;m Eli
            </m.h1>
          </div>

          <m.p
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-sm lg:text-2xl lg:mt-16"
          >
            Hi, I&apos;m Elijah Brown-Henderson, a Full-stack Developer and
            Photographer passionate about creating innovative software solutions
            that enhance user experiences and streamline operations. Explore my
            portfolio to see how I connect technology and everyday life, one
            line of code (and one photo) at a time.
          </m.p>
          <a href="mailto:eli.i.henderson95@gmail.com">
            <m.button
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-12 lg:h-16 w-32 lg:w-40 rounded-full lg:shadow-lg text-white lg:text-xl tracking-wide bg-orange-400 hover:scale-95 ease-in-out transition hover:shadow-sm hover:shadow-gray-600"
            >
              Contact Me
            </m.button>
          </a>
        </HeroTextContainer>

        <HeroTextContainer align={"center"}>
          <Canvas className="hidden lg:block">
            <OrbitControls enableZoom={false} autoRotate={false} />
            <ambientLight intensity={2} />

            <Sphere args={[1, 100, 200]} scale={1.4}>
              <MeshDistortMaterial
                color="#9a3412"
                attach="material"
                distort={0.5}
                speed={1}
              />
            </Sphere>
          </Canvas>
          <Image
            src={avatar}
            alt={"Avatar image of eli"}
            className="rounded-full xl:h-[28rem] xl:w-[28rem] lg:h-[24rem] lg:w-[24rem] h-64 w-64 aspect-auto absolute top-0 bottom-16 left-0 right-0 m-auto"
          />
        </HeroTextContainer>
      </main>
    </m.div>
  );
}
