import React from "react";
import { motion as m } from "framer-motion";

import { container, item } from "@/animations";

const Contact = () => {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 100 }}
      className="text-gray-900 absolute top-0 left-0 w-full h-full bg-violet-700      lg:px-80 "
    >
      <div className="my-96 p-1 overflow-hidden hidden lg:block">
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: 120 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-6xl text-orange-400 text-center lg:text-right lg:text-9xl "
        >
          Let&apos;s Talk
        </m.h1>
      </div>
      <div className="flex flex-col mt-[50%] px-10 lg:px-0 lg:mt-0 lg:flex-row lg:gap-40 gap-16">
        <div className="lg:text-2xl text-5xl   text-orange-400">
          <h4>Find me here</h4>
        </div>
        <div className="lg:text-6xl text-2xl ">
          <m.ul
            variants={container}
            initial="hidden"
            animate="show"
            className="text-orange-400 font-latoLight"
          >
            <a
              target="_blank"
              rel="noopener"
              href="/resume1.pdf"
              download={"Eli Brown-Henderson Resume"}
              className="overflow-hidden"
            >
              <m.li
                variants={item}
                className="pb-10 hover:text-orange-700 cursor-pointer  transition ease-in-out duration-200 "
              >
                <p className="text-5xl">Resume</p>
              </m.li>
            </a>
            <a
              href="https://www.linkedin.com/in/elijah-brown-henderson-983768144"
              target="_blank"
              rel="noopener"
              className="overflow-hidden"
            >
              <m.li
                variants={item}
                className="pb-10 hover:text-orange-700 cursor-pointer  transition ease-in-out duration-200 "
              >
                <p className="text-5xl">LinkedIn</p>
              </m.li>
            </a>
            <a
              href="https://github.com/Eli-BH"
              target="_blank"
              rel="noopener"
              className="overflow-hidden"
            >
              <m.li
                variants={item}
                className="pb-10 hover:text-orange-700 cursor-pointer  transition ease-in-out duration-200 "
              >
                <p className="text-5xl">GitHub</p>
              </m.li>
            </a>
            <a
              href="https://dev.to/cosmiceli"
              target="_blank"
              rel="noopener"
              className="overflow-hidden"
            >
              <m.li
                variants={item}
                className="pb-10 hover:text-orange-700 cursor-pointer  transition ease-in-out duration-200 "
              >
                <p className="text-5xl">Dev.to</p>
              </m.li>
            </a>
          </m.ul>
        </div>
      </div>
    </m.div>
  );
};

export default Contact;
