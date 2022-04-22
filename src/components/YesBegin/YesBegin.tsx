import React, { useState } from "react";
import * as Styles from "./YesBegin.styled";
import BaseButton from "../BaseButton/BaseButton";
import ButtonTextWrapper from "../ButtonText/ButtonTextWrapper";
import ImagePreview from "../Image/ImagePreview";
import { IYesBeginProps } from "./types";

const YesBegin = ({ clickHandler }: IYesBeginProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 8000);
    setTimeout(() => clickHandler(), 4000);
  };

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
        <BaseButton onClick={isClicked ? undefined : handleClick}>
          <ButtonTextWrapper fontSize="2em">yes! begin!</ButtonTextWrapper>
        </BaseButton>
      </Styles.ButtonContainer>
      <Styles.Circle>
        <Styles.ImageContainer isClicked={isClicked}>
          <ImagePreview src="/rocket.png" layout="fill" alt="rocket" />
        </Styles.ImageContainer>
      </Styles.Circle>
    </Styles.Container>
  );
};

export default YesBegin;
