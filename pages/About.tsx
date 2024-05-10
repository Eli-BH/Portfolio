import React, { useState } from "react";
import { motion as m } from "framer-motion";
import { container, item } from "@/animations";
import { aboutArrs } from "@/utils/arrays";
import Image from "next/image";
import { returnAboutPassage } from "@/utils/switches";
import { AboutSectionEnum } from "@/utils/enums";
import ModelSwitch from "@/utils/ModelSwitch";

const About = () => {
  const [selected, setSelected] = useState<AboutSectionEnum>(
    AboutSectionEnum.Full
  );

  return (
    <m.main
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 100 }}
      className="text-gray-900 absolute top-0 left-0 w-full h-full bg-sky-300 xl:px-48 items-center  pt-20 flex  justify-center center"
    >
      <div className="w-full h-5/6 flex flex-col xl:flex-row">
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full  h-full flex flex-col-reverse xl:flex-col justify-center items-center"
        >
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className=" w-full flex-auto justify-center items-center lg:flex hidden "
          >
            <ModelSwitch selected={selected} />
          </m.div>

          <div className="  w-full h-60 xl:h-96 flex justify-center items-center  pb-12 xl:items-start xl:px-40  px-4 ">
            <p className="text-gray-700 tracking-wide text-sm  lg:text-2xl">
              {returnAboutPassage(selected)}
            </p>
          </div>
        </m.div>

        <m.div
          initial="hidden"
          animate="show"
          variants={container}
          className="w-full  h-full gap-6 flex flex-col justify-center items-center "
        >
          {aboutArrs.map((about, index) => {
            return (
              <m.div
                variants={item}
                key={index}
                className={`flex px-3 w-full lg:w-3/4 lg:h-32 h-20 xl:h-80 overflow-hidden  items-center  ${
                  selected === about.section && "text-orange-800"
                } hover:text-orange-600 cursor-pointer transistion duration-500 ease-in-out transform hover:-translate-y-1 xl:hover:scale-110`}
                onClick={() => setSelected(about.section)}
              >
                <div className=" justify-center  items-center flex  w-1/4">
                  <Image
                    height={150}
                    width={150}
                    className="w-10 xl:w-40 xl:h-40 h-10"
                    src={about.icon}
                    alt="icon"
                  />
                </div>

                <div className="gap-4  xl:gap-10 justify-center items-start flex flex-col pl-6 w-3/4">
                  <h1 className="text-xl lg:text-5xl font-latoBold">
                    {about.title}
                  </h1>

                  <p className="text-sm lg:text-xl hidden xl:block">
                    {about.description}
                  </p>
                </div>
              </m.div>
            );
          })}
        </m.div>
      </div>
    </m.main>
  );
};

export default About;
