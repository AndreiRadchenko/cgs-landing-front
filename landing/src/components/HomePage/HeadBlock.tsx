import React from "react";
import * as Styled from "../../styles/HomePage/General.styled";
import leftArrow from "../../../public/HomePageDecoration/leftArrow.svg";
import rightArrow from "../../../public/HomePageDecoration/rightArrow.svg";
import buttonArrow from "../../../public/HomePageDecoration/buttonArrow.svg";
import tetris from "../../../public/HomePageDecoration/tetris.svg";

const HeadBlock = () => {
  return (
    <Styled.HeadBlockRow>
      <Styled.HeadBlockContent>
        <Styled.Title>CGS-TEAM</Styled.Title>
        <Styled.MainSubtitle>
          <Styled.RowContainer>
            <div>SHARP DEVS WITH PROF TECHS</div>
            <Styled.LeftArrow src={leftArrow.src} />
          </Styled.RowContainer>
          <Styled.RowContainer>
            <div>TODAY BRIEFED</div>
            <Styled.RightArrow src={rightArrow.src} />
            <div>YESTERDAY DONE</div>
          </Styled.RowContainer>
        </Styled.MainSubtitle>
        <Styled.BlackButton size={"18px"} padding={"20px 27px"}>
          Get estimation now
          <Styled.ButtonArrow src={buttonArrow.src} />
        </Styled.BlackButton>
      </Styled.HeadBlockContent>
      <Styled.Tetris src={tetris.src} />
    </Styled.HeadBlockRow>
  );
};

export default HeadBlock;
