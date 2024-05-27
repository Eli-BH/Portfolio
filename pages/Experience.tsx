import React from "react";
import { motion as m } from "framer-motion";
import { experienceCards, experienceIcons } from "@/utils/arrays";
import { container, item } from "@/animations";
import Image from "next/image";

const Experience = () => {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 100 }}
      className="text-gray-900 absolute top-0 left-0 w-full h-full bg-emerald-300 xl:px-48 items-center  pt-20 flex  justify-center center"
    >
      <div className=" w-full h-5/6 flex justify-center items-center ">
        <m.div
          initial="hidden"
          animate="show"
          variants={container}
          className=" w-full h-3/4 justify-center items-center xl:grid grid-cols-3  grid-rows-3 hidden"
        >
          {experienceIcons?.map((icon, index) => {
            return (
              <m.div
                variants={item}
                key={index}
                className=" h-48 w-48 shadow-lg shadow-gray-700 m-auto flex justify-center items-center bg-green-200 border-4 border-orange-700 rounded-full flex-col gap-4"
              >
                <Image width={80} height={80} src={icon.icon} alt="icon" />
                <p className="text-lg text-orange-800 tracking-wide">
                  {icon.title}
                </p>
              </m.div>
            );
          })}
        </m.div>

        <m.div
          initial="hidden"
          animate="show"
          variants={container}
          className="w-full h-full gap-8 lg:gap-10 justify-center items-center flex flex-col px-2"
        >
          {experienceCards?.map((card, index) => (
            <m.div
              variants={item}
              key={index}
              className="lg:w-3/4  w-full gap-4  h-40  bg-green-700/25 lg:h-72 flex items-center justify-center rounded-md border-2  border-green-800/65 shadow-lg shadow-green-800/80 "
            >
              <div className="hidden lg:flex justify-center items-center  xl:w-64 w-40 h-full">
                <img
                  src={card.image}
                  alt="logo"
                  className={`xl:w-40 xl:h-40 w-20 h-20 rounded-full`}
                />
              </div>

              <div className=" w-11/12 py-3  overflow-hidden">
                <div>
                  <h1 className="md:text-3xl  text-md lg:text-lg font-latoBold text-orange-600 tracking-wide ">
                    {card.title}
                  </h1>
                  <h2 className="lg:text-xl text-xs  tracking-wide font-latoLite text-orange-900">
                    {card.subtitle}
                  </h2>
                </div>

                <ul className="lg:px-10 pl-5  lg:mt-4  list-disc">
                  {card.list.map((item, index) => (
                    <li key={index} className="my-0 lg:my-2">
                      <p className="text-xs lg:text-lg">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </m.div>
  );
};

export default Experience;
