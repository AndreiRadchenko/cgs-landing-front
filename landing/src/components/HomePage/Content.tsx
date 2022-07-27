import React from "react";
import { Separator } from "../../styles/HomePage/General.styled";
import * as Styled from "../../styles/HomePage/General.styled";
import HeadBlock from "./HeadBlock";
import NextTech from "./NextTech";
import CarouselFeedback from "../Feedback/CarouselFeedback";
import Technologies from "../Technologies/Technologies";
import CardsBlock from "../CardsBlock";
import BookBlock from "../BookBlock";

const Content = () => {
  return (
    <>
      <Styled.ContentContainer>
        <HeadBlock />
        <NextTech />
      </Styled.ContentContainer>
      <Separator />
      <Styled.ContentContainer>
        <CarouselFeedback />
        <Technologies />
        <CardsBlock />
        <BookBlock />
      </Styled.ContentContainer>
    </>
  );
};

export default Content;
