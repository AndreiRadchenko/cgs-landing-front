import React, { useRef } from "react";

import GetEstimationButton from "../../GetEstimationButton";
import ButtonShareComponent from "../../HomePage/ButtonShareComponent";
import TextTypingAnimation from "../../Typewrite";

import * as Styled from "./HeaderTextBlockServices.styled";

import { SplitBrackets } from "../../../utils/splitBrackets";

import { IHeaderFooterServicesProps } from "../../../types/Services.types";

const HeaderTextBlockServices = ({
  title,
  text,
  btnText,
  btnLink,
  className,
}: IHeaderFooterServicesProps) => {
  const elRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Styled.Title className={className}>
        <TextTypingAnimation text={title} />
      </Styled.Title>
      <Styled.Description className={className}>
        <SplitBrackets text={text} />
      </Styled.Description>

      <Styled.ButtonWrapper ref={elRef}>
        <GetEstimationButton
          buttonLink={btnLink}
          withEstimation
          buttonText={btnText}
          buttonClassName="services header"
        />
        <ButtonShareComponent />
      </Styled.ButtonWrapper>
    </>
  );
};

export default HeaderTextBlockServices;
