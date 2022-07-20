import React from "react";
import * as Styled from "./AboutUs.styled";
import bottomImage from "../../../public/AboutUsDecorations/bottomImage.svg";
import pin from "../../../public/AboutUsDecorations/pin.svg";

const AboutUs = () => {
  return (
    <Styled.AboutUsContainer>
      <Styled.MainTitle>
        Idea-inspired, <br />
        <span>tech-driven</span> professionals
      </Styled.MainTitle>
      <Styled.Subtitle>We believe in</Styled.Subtitle>
      <Styled.Text>We believe in</Styled.Text>

      <Styled.BottomImage src={bottomImage.src} />
      <Styled.BonusContainer>
        <Styled.BonusPoint />
        <Styled.BonusText>
          Free PM services of our team with 50+ prof-developers
        </Styled.BonusText>
      </Styled.BonusContainer>

      <Styled.RelativeContainerPhotoBlock>
        <Styled.Pin src={pin.src} />
        <Styled.MainPhotoContainer>
          <Styled.MainPhotoDescription>
            The very <span>beloved team</span>
          </Styled.MainPhotoDescription>
        </Styled.MainPhotoContainer>
        <Styled.BackgroundContainer>
          <Styled.BackgroundBlackBlock />
        </Styled.BackgroundContainer>
      </Styled.RelativeContainerPhotoBlock>
    </Styled.AboutUsContainer>
  );
};

export default AboutUs;
