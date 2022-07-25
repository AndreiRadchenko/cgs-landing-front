import React from "react";
import { Separator } from "../../styles/HomePage/General.styled";
import * as Styled from "../../styles/HomePage/General.styled";
import HeadBlock from "./HeadBlock";
import NextTech from "./NextTech";

const Content = () => {
  return (
    <>
      <Styled.ContentContainer>
        <HeadBlock />
        <NextTech />
      </Styled.ContentContainer>
      <Separator />
      <Styled.ContentContainer></Styled.ContentContainer>
    </>
  );
};

export default Content;
