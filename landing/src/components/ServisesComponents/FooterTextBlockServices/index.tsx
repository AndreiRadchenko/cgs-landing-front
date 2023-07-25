import React, { useRef } from "react";

import GetEstimationButton from "../../GetEstimationButton";
import ButtonShareComponent from "../../HomePage/ButtonShareComponent";

import * as Styled from "./FooterTextBlockServices.styled";

import { SplitBrackets } from "../../../utils/splitBrackets";

import { IHeaderFooterServicesProps } from "../../../types/Services.types";

const FooterTextBlockServices = ({
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
        <SplitBrackets text={title} />
      </Styled.Title>
      <Styled.Text className={className}>
        <SplitBrackets text={text} />
      </Styled.Text>

      <Styled.ButtonWrapper className={className} ref={elRef}>
        <GetEstimationButton
          buttonLink={btnLink}
          buttonText={btnText}
          withEstimation
          buttonClassName={`social-button ${className}`}
        />
        <ButtonShareComponent />
      </Styled.ButtonWrapper>
    </>
  );
};

export default FooterTextBlockServices;
