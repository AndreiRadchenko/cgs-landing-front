import React from "react";
import * as Styled from "./AboutUs.styled";
import pin from "../../../public/AboutUsDecorations/pin.svg";
import parse from "html-react-parser";

interface ISmallPhotoCard {
  degrees: string;
  pinPosition: string;
  data: { image: { url: string }; text: string };
}

const SmallPhotoCard = ({ degrees, pinPosition, data }: ISmallPhotoCard) => {
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
            <Styled.SmallImage src={data.image.url} />
          </Styled.RelativeContainerPhotoBlock>
          <Styled.SmallImageText>{parse(data.text)}</Styled.SmallImageText>
        </Styled.SmallPhotoContainer>
        <Styled.BlackBackground />
      </Styled.RelativeContainerPhotoBlock>
    </Styled.RotateContainer>
  );
};

export default SmallPhotoCard;
