import React from "react";
import FullStack from "@/components/threeFiles/FullStack";
import Mobile from "@/components/threeFiles/Mobile";
import Photography from "@/components/threeFiles/Photography";

enum AboutSectionEnum {
  Photography = "Photography",
  Full = "Full",
  Mobile = "Mobile",
  Default = "",
}

const ModelSwitch = ({ selected }: { selected: AboutSectionEnum }) => {
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
