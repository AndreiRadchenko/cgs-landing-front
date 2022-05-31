import React, { useEffect, useState } from "react";
import * as UsefullStyled from "../../styles/usefull.Styled";
import * as Styled from "../../styles/evenMore.styled";
import Image from "next/image";
import blocks from "../../../public/blocks.png";
import mobileBlocks from "../../../public/blocksMobile.png";
import BlocksRender from "./BlocksRender";
import { useWindowDimension } from "../../hooks/useWindowDimension";

const EvenMore = () => {
  const { width } = useWindowDimension();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(width !== null && width <= 768);
  }, [width]);

  return (
    <UsefullStyled.TitlePlusContentBlock>
      {isMobile ? (
        <>
          <UsefullStyled.HeaderBig>even more</UsefullStyled.HeaderBig>
          <Styled.ContentWrapper>
            <Styled.LeftSideBlock>
              <Styled.BlockImageWrapper>
                <Image src={mobileBlocks} alt="even more blocks" />
              </Styled.BlockImageWrapper>
            </Styled.LeftSideBlock>
            <BlocksRender />
          </Styled.ContentWrapper>
        </>
      ) : (
        <>
          <Styled.LeftSideBlock>
            <UsefullStyled.HeaderBig>even more</UsefullStyled.HeaderBig>
            <Styled.BlockImageWrapper>
              <Image src={blocks} alt="even more blocks" />
            </Styled.BlockImageWrapper>
          </Styled.LeftSideBlock>
          <BlocksRender />
        </>
      )}
    </UsefullStyled.TitlePlusContentBlock>
  );
};

export default EvenMore;
