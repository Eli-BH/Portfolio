import React from "react";

interface HeroTextContainerProps {
  children: React.ReactNode;
  align: "center" | "start" | "end";
}

const HeroTextContainer = ({ children, align }: HeroTextContainerProps) => {
  return (
    <div
      className={`flex-1 p-8 lg:p-0  h-1/2 lg:h-full w-full flex gap-5 lg:gap-24 justify-center flex-col xl:px-60 lg:px-9 md:px-40 items-${align} relative`}
    >
      {children}
    </div>
  );
};

export default HeroTextContainer;
