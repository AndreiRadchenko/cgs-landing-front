import React from "react";
import * as Styled from "../../styles/theyTrustUs.styled";
import ufoBig from "/public/ufoBig.png";
import ufoMedium from "/public/ufoMedium.png";
import ufoSmall from "/public/ufoSmall.png";
import ufoBottom from "/public/ufoBottomEl.png";
import ufoMiddle from "/public/ufoMiddleEl.png";
import ufoTop from "/public/ufoTopEl.png";
import ImagePreview from "../Image/ImagePreview";

const UfoImage = () => {
  const animationDelay = () => {
    return Math.floor(Math.random() * (5 - 1));
  };
  return (
    <>
      <Styled.UfoTopEl>
        <ImagePreview src={ufoTop.src} width={70} height={78} />
      </Styled.UfoTopEl>
      <Styled.UfoBigWrapper theme={`-3`}>
        <ImagePreview src={ufoBig.src} width={252.89} height={163.43} />
      </Styled.UfoBigWrapper>
      <Styled.UfoMiddleEl>
        <ImagePreview src={ufoMiddle.src} width={60} height={61} />
      </Styled.UfoMiddleEl>
      <Styled.UfoSmallWrapper theme={`-2`}>
        <ImagePreview src={ufoSmall.src} width={112.2} height={82.51} />
      </Styled.UfoSmallWrapper>
      <Styled.UfoMediumWrapper theme={`-1`}>
        <ImagePreview src={ufoMedium.src} width={161.76} height={104.54} />
      </Styled.UfoMediumWrapper>
      <Styled.UfoBottomEl>
        <ImagePreview src={ufoBottom.src} width={37} height={40} />
      </Styled.UfoBottomEl>
    </>
  );
};

export default UfoImage;
