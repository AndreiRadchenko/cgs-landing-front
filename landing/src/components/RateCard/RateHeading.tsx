import React from "react";

import MarqueeRate from "./MarqueeRate";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";

import { MobileRateTextWrapper } from "./index.styled";
import { RateCardContainer } from "../../styles/RateCard.styled";
import { useMediaQuery } from "@mui/material";

const RateHeading = ({ heading }: { heading: string }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return !isMobile ? (
    <MarqueeRate heading={heading} />
  ) : (
    <RateCardContainer>
      <MobileRateTextWrapper>
        <MobileInfiniteText isRateCard withoutMargin title={heading} />
      </MobileRateTextWrapper>
    </RateCardContainer>
  );
};

export default RateHeading;
