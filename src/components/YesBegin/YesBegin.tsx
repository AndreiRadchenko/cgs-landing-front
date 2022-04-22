import React from "react";
import * as Styles from "./YesBegin.styled";
import BaseButton from "../BaseButton/BaseButton";
import ButtonTextWrapper from "../ButtonText/ButtonTextWrapper";
import ImagePreview from "../Image/ImagePreview";
import { IYesBeginProps } from "./types";

const YesBegin = ({ clickHandler }: IYesBeginProps) => {
  return (
    <Styles.Container>
      <Styles.Title>
        And remember: that’s the only beginning of one pleasant trip <br /> to
        the stratosphere :)
      </Styles.Title>
      <Styles.SubTitle>
        Do you want to build a rocket with CGS-team?
      </Styles.SubTitle>
      <Styles.ButtonContainer>
        <BaseButton onClick={clickHandler}>
          <ButtonTextWrapper fontSize="1.8em">yes! begin!</ButtonTextWrapper>
        </BaseButton>
        <Styles.ImageContainer>
          <ImagePreview src="/rocket.png" layout="fill" alt="rocket" />
        </Styles.ImageContainer>
      </Styles.ButtonContainer>
    </Styles.Container>
  );
};

export default YesBegin;
