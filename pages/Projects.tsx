import React from "react";
import { motion as m } from "framer-motion";
import Image from "next/image";
import poet from "/images/picpoetcrop.jpg";
import { projects } from "@/utils/arrays";
import ProjectCard from "@/components/ProjectCard";

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
        <div className="w-full  h-1/5 mb-40 flex flex-col justify-end">
          <m.h1
            animate={{ y: 0 }}
            initial={{ y: 150 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="xl:text-9xl lg:text-6xl text-4xl text-orange-500 mb-4"
          >
            My Projects
          </m.h1>
        </div>

        <div className="flex justify-evenly gap-10 w-full overflow-auto h-full bg-orange-200 bg-confetti-doodles">
          {
            /* Project Cards go here */

            projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))
          }
        </div>
      </div>
    </m.div>
  );
};

export default Projects;
