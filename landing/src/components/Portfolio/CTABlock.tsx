import React from "react";
import Image from "next/image";

import GetEstimationButton from "../GetEstimationButton";
import ButtonShareComponent from "../HomePage/ButtonShareComponent";

import * as Styled from "../../styles/Portfolio.styled";
import * as Styles from "../../styles/HomePage/General.styled";
import { ICallToActionProps } from "../../types/Admin/AdminPortfolio.types";

export const CTABlock = ({ initValues }: ICallToActionProps) => {
  return (
    <Styled.CTACont>
      <Styled.BlockMainIcon>
        <Image
          src={initValues.image ? initValues.image.url : ""}
          alt="Call to action image"
          layout="fill"
          objectFit="contain"
        />
      </Styled.BlockMainIcon>

      <Styled.CTAHeading>{initValues.subtitle}</Styled.CTAHeading>
      <Styled.CTAText>{initValues.text}</Styled.CTAText>

      <Styles.ButtonWrapper>
        <GetEstimationButton
          buttonLink={initValues.buttonLink}
          buttonText={initValues.button}
          withEstimation
          buttonClassName="portfolio-button"
        />
        <ButtonShareComponent />
      </Styles.ButtonWrapper>
    </Styled.CTACont>
  );
};
