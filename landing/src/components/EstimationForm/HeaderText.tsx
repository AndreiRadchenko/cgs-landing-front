import React from "react";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";
import { MobleTextWrapper } from "./index.styled";
import Marquee from "./Marquee";

export const HeaderText = () => {
  return (
    <>
      <Marquee />
      <MobleTextWrapper>
        <MobileInfiniteText title="Estimation Form" />
      </MobleTextWrapper>
    </>
  );
};
