import React from "react";
import * as Styled from "../../styles/HomePage/General.styled";
import Partners from "../Partners/Partners";
import film from "../../../public/HomePageDecoration/photoFilm.svg";
import longArrow from "../../../public/HomePageDecoration/longArrow.svg";
import buttonArrow from "../../../public/HomePageDecoration/buttonArrow.svg";

const NextTech = () => {
  return (
    <Styled.NextTech>
      <Styled.Subtitle>
        <Styled.RowContainer>
          The&nbsp;<span className={"blue"}>next-gen</span>&nbsp;
          <span className={"underline"}> tech </span>:
        </Styled.RowContainer>
        <Styled.RowContainer>Web, mobile, blockchain</Styled.RowContainer>
      </Styled.Subtitle>
      <Partners />
      <Styled.FilmContainer>
        <Styled.Film src={film.src} />
        <Styled.FilmText>
          Bug-free code, juicy architecture, codebase optimization, up-to-date
          maintenance, clear communication, and fluent English rolled into one.
          Imagined that? See it for real with CGS-team!
        </Styled.FilmText>
      </Styled.FilmContainer>
      <Styled.Subtitle>
        <Styled.RowContainer>
          wide&nbsp;<span className={"blue"}>tech-range</span>&nbsp;
          <Styled.LongArrow src={longArrow.src} />
        </Styled.RowContainer>
        <Styled.RowContainer>Innovative customer-value</Styled.RowContainer>
      </Styled.Subtitle>
      <Styled.RightContainer>
        <Styled.BlackButton size={"1.85em"} padding={"18px 17px"}>
          SEE ALL WORK
          <Styled.ButtonArrow src={buttonArrow.src} />
        </Styled.BlackButton>
      </Styled.RightContainer>
    </Styled.NextTech>
  );
};

export default NextTech;
