import React from "react";
import { motion as m } from "framer-motion";
import Image from "next/image";

const Projects = () => {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 100 }}
      className="text-gray-900 absolute top-0 left-0 w-full h-full bg-rose-900	 xl:px-48 items-center  pt-16 flex  justify-center center"
    >
      <div className="w-full  h-5/6 flex flex-col xl:px-40 px-4">
        <div className="w-full h-1/5 flex flex-col justify-end overflow-hidden pb-3">
          <m.h1
            animate={{ y: 0 }}
            initial={{ y: 120 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="xl:text-9xl text-6xl text-orange-500 mb-4"
          >
            My Projects
          </m.h1>
        </div>

        <div className="grid grid-cols-2  xl:grid-cols-3 xl:grid-rows-2 w-full h-full bg-orange-200 bg-confetti-doodles">
          <div className="w-full h-3/5 xl:h-full  flex justify-center items-center">
            <m.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="w-full lg:w-1/2 h-full bg-purple-800 rounded-lg shadow-lg flex flex-col justify-between p-4"
            >
              <img
                src={"https://via.placeholder.com/150"}
                alt="project"
                className="xl:h-40 h-20 w-full object-cover rounded-lg"
              />

              <h1 className="text-white text-lg xl:text-3xl font-bold text-LatoBold tracking-wide color-white ">
                Card Title
              </h1>
              <div className="overflow-x-scroll flex flex-row space-x-2 p-2   scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-orange-500 scrollbar-track-orange-200">
                <p className="xl:min-w-32 min-w-24 bg-orange-500 rounded-full flex justify-center items-center p-1 text-white">
                  React
                </p>
                <p className="xl:min-w-32 min-w-24 bg-orange-500 rounded-full flex justify-center items-center p-1 text-white">
                  Next.js
                </p>
                <p className="xl:min-w-32 min-w-24 bg-orange-500 rounded-full flex justify-center items-center p-1 text-white">
                  TypeScript
                </p>
                <p className="xl:min-w-32 min-w-24 bg-orange-500 rounded-full flex justify-center items-center p-1 text-white">
                  CSS
                </p>
                <p className="xl:min-w-32 min-w-24 bg-orange-500 rounded-full flex justify-center items-center p-1 text-white">
                  Three.js
                </p>
              </div>
              <p className="text-slate-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ac.
              </p>

              <div className="min-w-32 flex  h-12 justify-evenly items-center xl:gap-0 gap-3 ">
                <button className="xl:h-10 h-6 bg-rose-700 text-white tracking-wide rounded-full px-3 xl:px-10">
                  Demo
                </button>
                <button className="xl:h-10 h-6 bg-rose-700 text-white tracking-wide rounded-full px-3 xl:px-10">
                  Source
                </button>
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default Projects;
