import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import "hero-slider/dist/index.css";
import { motion as m } from "framer-motion";
import React from "react";
import { photos } from "@/utils/arrays";

const Gallery = () => {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 100 }}
      className="text-gray-900 absolute top-0 left-0 w-full h-full bg-blue-200   "
    >
      <HeroSlider
        height={"100vh"}
        width={"100vw"}
        autoplay
        controller={{
          initialSlide: 1,
          slidingDuration: 500,
          slidingDelay: 100,
        }}
      >
        {photos?.map((photo, index) => {
          return (
            <Slide
              key={index}
              label={photo.label}
              background={{
                backgroundImageSrc: photo.src,
                backgroundAnimation: "zoom",
                backgroundAnimationDuration: "15000",
              }}
            >
              <div className="w-full h-full flex justify-center items-center">
                <m.div
                  animate={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-orange-500 lg:text-9xl text-3xl font-latoBold stroke-black strock">
                    {photo.label}
                  </p>
                </m.div>
              </div>
            </Slide>
          );
        })}
        <MenuNav />
      </HeroSlider>
    </m.div>
  );
};

export default Gallery;
