import React from "react";
import * as Styled from "./AboutUs.styled";
import pin from "../../../public/AboutUsDecorations/pin.svg";

interface ISmallPhotoCard {
  degrees: string;
  pinPosition: string;
}

const SmallPhotoCard = ({ degrees, pinPosition }: ISmallPhotoCard) => {
  return (
    <Styled.RotateContainer degrees={degrees}>
      <Styled.RelativeContainerPhotoBlock>
        <Styled.Pin src={pin.src} right={pinPosition} />
        <Styled.SmallPhotoContainer>
          <Styled.RelativeContainerPhotoBlock>
            <Styled.BackgroundContainer
              right={"-6px"}
              bottom={"-1px"}
              border={"1px"}
            >
              <Styled.BackgroundBlackBlock />
            </Styled.BackgroundContainer>
            <Styled.SmallImage />
          </Styled.RelativeContainerPhotoBlock>
          <Styled.SmallImageText>
            only&nbsp;<span>sharp minds</span>
          </Styled.SmallImageText>
        </Styled.SmallPhotoContainer>
        <Styled.BlackBackground />
      </Styled.RelativeContainerPhotoBlock>
    </Styled.RotateContainer>
  );
};

export default SmallPhotoCard;
