import React from "react";
import {
  Marquee as MarqueeBox,
  MarqueeContent,
  WrapperStyledH,
  StyledH,
} from "./index.styled";

const Marquee = () => {
  return (
    <WrapperStyledH>
      <MarqueeBox>
        <MarqueeContent aria-hidden="true">
          {[...Array(12)].map((_, i) => (
            <StyledH key={i}>Estimation Form </StyledH>
          ))}
        </MarqueeContent>

        <MarqueeContent aria-hidden="true">
          {[...Array(12)].map((_, i) => (
            <StyledH key={i}>Estimation Form </StyledH>
          ))}
        </MarqueeContent>
      </MarqueeBox>
    </WrapperStyledH>
  );
};

export default Marquee;
