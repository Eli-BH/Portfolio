import React from "react";
import FullStack from "./threeFiles/FullStack";
import Mobile from "./threeFiles/Mobile";
import Photography from "./threeFiles/Photography";
import { AboutSectionEnum } from "@/utils/enums";

const ModelSwitch = ({ selected = AboutSectionEnum.Full }) => {
  switch (selected) {
    case AboutSectionEnum.Photography:
      return <Photography />;
    case AboutSectionEnum.Full:
      return <FullStack />;
    case AboutSectionEnum.Mobile:
      return <Mobile />;
    default:
      return <FullStack />;
  }
};

export default ModelSwitch;
