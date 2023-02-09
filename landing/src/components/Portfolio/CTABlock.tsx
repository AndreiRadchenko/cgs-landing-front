import React from "react";

import * as Styled from "../../styles/Portfolio.styled";
import BlackButtonComponent from "../BlackButtonWithArrow";
import { BlockBottom } from "./svg/BlockBottom";

import WhatsUpIcon from "../../../public/whatsUp.svg";
import TelegramIcon from "../../../public/telegram.svg";

import Image from "next/image";

export const CTABlock = () => {
  return (
    <Styled.CTACont>
      <Styled.BlockMainIcon>
        <BlockBottom />
      </Styled.BlockMainIcon>

      <Styled.CTAHeading>Level up your project</Styled.CTAHeading>
      <Styled.CTAText>
        Level up your projectImplement your ideas quicker than your competitors
        do. Enhance your project with CGS-team.
      </Styled.CTAText>
      <Styled.CTABtnsBlock>
        <BlackButtonComponent
          style={{ fontSize: "22px", letterSpacing: "1px" }}
          text={"Launch our cooperation"}
        />
        <Styled.CTAIconsBlock>
          <Styled.CTAIconWrapper>
            <Styled.CTAIcon>
              <Image src={WhatsUpIcon} alt="Icon" />
            </Styled.CTAIcon>
            <Styled.CTAIconText>WhatsApp</Styled.CTAIconText>
          </Styled.CTAIconWrapper>
          <Styled.CTAIconWrapper>
            <Styled.CTAIcon>
              <Image src={TelegramIcon} alt="Icon" />
            </Styled.CTAIcon>
            <Styled.CTAIconText>Telegram</Styled.CTAIconText>
          </Styled.CTAIconWrapper>
        </Styled.CTAIconsBlock>
      </Styled.CTABtnsBlock>
    </Styled.CTACont>
  );
};
