import React from "react";

import MarqueeRate from "./MarqueeRate";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";

import { MobileRateTextWrapper } from "./index.styled";

const RateHeading = ({ heading }: { heading: string }) => {
  return (
    <>
      <MarqueeRate heading={heading} />
      <MobileRateTextWrapper>
        <MobileInfiniteText isRateCard withoutMargin title={heading} />
      </MobileRateTextWrapper>
    </>
  );
};

export default RateHeading;
