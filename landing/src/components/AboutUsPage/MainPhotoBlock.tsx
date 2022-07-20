import React from "react";
import * as Styled from "./AboutUs.styled";
import pin from "../../../public/AboutUsDecorations/pin.svg";
import mainPhoto from "../../../public/AboutUsDecorations/mainPhoto.png";

const MainPhotoBlock = () => {
  return (
    <Styled.CenterBlock>
      <Styled.RelativeContainerPhotoBlock isMain>
        <Styled.Pin src={pin.src} />
        <Styled.MainPhotoContainer>
          <Styled.RelativeContainerPhotoBlock>
            <Styled.MainImage src={mainPhoto.src} />
            <Styled.BackgroundContainer right={"-8px"} bottom={"-8px"}>
              <Styled.BackgroundBlackBlock />
            </Styled.BackgroundContainer>
          </Styled.RelativeContainerPhotoBlock>
          <Styled.MainPhotoDescription>
            The very <span>beloved team</span>
          </Styled.MainPhotoDescription>
        </Styled.MainPhotoContainer>
        <Styled.BackgroundContainer right={"-10px"} bottom={"-12px"}>
          <Styled.BackgroundBlackBlock />
        </Styled.BackgroundContainer>
      </Styled.RelativeContainerPhotoBlock>
    </Styled.CenterBlock>
  );
};

export default MainPhotoBlock;
