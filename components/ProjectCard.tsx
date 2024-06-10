import React from "react";
import { motion as m } from "framer-motion";
import Image from "next/image";
import poet from "/images/picpoetcrop.jpg";
import { ProjectCardPropsI } from "@/utils/interfaces";

const ProjectCard = ({ project }: { project: ProjectCardPropsI }) => {
  return (
    <div className="w-80 h-80 xl:h-[40rem]  flex justify-center items-center">
      <m.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="w-full  h-full bg-purple-800 rounded-lg shadow-lg flex flex-col justify-between md:p-4 p-2"
      >
        <Image
          src={project.image}
          width={400}
          height={200}
          alt="project"
          className="xl:h-40 h-20 w-full object-cover rounded-lg"
        />

        <h1 className="text-white mt-4 text-lg xl:text-3xl font-bold text-LatoBold tracking-wide color-white ">
          {project.title}
        </h1>
        <div className="overflow-x-scroll hidden text-xs lg:flex flex-row space-x-2 p-2    ">
          {project.techStack.map((tech, index) => (
            <p
              key={index}
              className="xl:min-w-32 min-w-24 h-8 bg-orange-500 rounded-full flex justify-center items-center p-1 text-white"
            >
              {tech}
            </p>
          ))}
        </div>
        <div className="h-40 overflow-auto">
          <p className="text-slate-200 lg:text-sm mt-4 mb-4 text-xs ">
            {project.description}
          </p>
        </div>

        <div className="min-w-32 flex  h-12 justify-evenly items-center xl:gap-1 gap-3  ">
          <a href={project.demoLink} target="_blank" rel="noopener">
            <button className="xl:h-10 h-6 bg-rose-700 text-white tracking-wide rounded-full px-2 xl:px-7">
              Demo
            </button>
          </a>
          <a href={project.sourceLink} target="_blank" rel="noopener">
            <button className="xl:h-10 h-6 bg-rose-700 text-white tracking-wide rounded-full px-2 xl:px-7">
              Source
            </button>
          </a>
        </div>
      </m.div>
    </div>
  );
};

export default ProjectCard;
