import React from "react";
import * as UsefullStyled from "../../styles/usefull.Styled";
import * as Styled from "../../styles/evenMore.styled";
import Image from "next/image";
import blocks from "../../../public/blocks.png";
import BlocksRender from "./BlocksRender";

const EvenMore = () => {
  return (
    <UsefullStyled.TitlePlusContentBlock>
      <Styled.LeftSideBlock>
        <UsefullStyled.HeaderBig>even more</UsefullStyled.HeaderBig>
        <Styled.BlockImageWrapper>
          <Image src={blocks} />
        </Styled.BlockImageWrapper>
      </Styled.LeftSideBlock>
      <BlocksRender />
    </UsefullStyled.TitlePlusContentBlock>
  );
};

export default EvenMore;
