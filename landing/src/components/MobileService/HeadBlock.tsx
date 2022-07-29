import React from "react";
import * as Styled from "../../styles/MobileService/HeadBlock";
import telephone from "../../../public/MobileSevice/mainTelephone.svg";
import { BlackButton, ButtonArrow } from "../../styles/HomePage/General.styled";
import themes from "../../utils/themes";
import arrow from "../../../public/HomePageDecoration/buttonArrow.svg";

const HeadBlock = () => {
  return (
    <Styled.Container>
      <Styled.ContentContainer>
        <Styled.Title>
          MOBILE <br />
          DEVELOPMENT
          <Styled.Cursor />
        </Styled.Title>
        <Styled.Description>
          What connects unicorns like Facebook, and Spotify? Maybe their apps
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          gave them unicorn wings. If your product needs it, CGS-team's mobile
          appdevelopment for ios and Android is here to help.
        </Styled.Description>
        <BlackButton
          padding={"1.15em 3.6em"}
          size={themes.primary.font.size.oneAndHalf}
        >
          Go mobile!
          <ButtonArrow src={arrow.src} />
        </BlackButton>
      </Styled.ContentContainer>
      <Styled.Telephone src={telephone.src} />
    </Styled.Container>
  );
};

export default HeadBlock;
