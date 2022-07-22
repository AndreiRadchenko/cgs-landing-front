import React from "react";
import * as Styled from "../../styles/HomePage/General.styled";
import buttonArrow from "../../../public/HomePageDecoration/buttonArrow.svg";
import arrow from "../../../public/HomePageDecoration/arrow.svg";

const Content = () => {
  return (
    <Styled.ContentContainer>
      {/*<Styled.BlackButton size={"18px"} padding={"20px 27px"}>*/}
      {/*  Get estimation now*/}
      {/*  <Styled.ButtonArrow src={buttonArrow.src} />*/}
      {/*</Styled.BlackButton>*/}
      {/*<Styled.BigDigit>4 3 2 1</Styled.BigDigit>*/}
      <Styled.Title>CGS-TEAM</Styled.Title>
      <Styled.MainSubtitle>
        SHARP DEVS WITH PROF TECHS <Styled.LeftArrow src={arrow.src} />
      </Styled.MainSubtitle>
    </Styled.ContentContainer>
  );
};

export default Content;
