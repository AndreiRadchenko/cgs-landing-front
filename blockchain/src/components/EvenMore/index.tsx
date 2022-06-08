import React, { useEffect, useState, useRef } from "react";
import * as UsefullStyled from "../../styles/usefull.Styled";
import * as Styled from "../../styles/evenMore.styled";
import BlocksRender from "./BlocksRender";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import BlocksWithLines from "./BlocksWithLines";
import Blocks from "./Blocks";

const EvenMore = () => {
  const { width } = useWindowDimension();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const evenMoreRef = useRef<HTMLDivElement>(null);

  const onScroll = () => {
    const elTop = evenMoreRef?.current?.getBoundingClientRect().top || 0;
    const scrollY = window.scrollY;
    if (elTop - 100 <= scrollY) {
      setIsScrolled(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll, true);
    setIsMobile(width !== null && width <= 768);
    return window.removeEventListener("scroll", onScroll);
  }, [width]);

  const Header = <UsefullStyled.HeaderBig>even more</UsefullStyled.HeaderBig>;

  return (
    <UsefullStyled.TitlePlusContentBlock>
      {isMobile ? (
        <>
          {Header}
          <Styled.ContentWrapper>
            <Styled.LeftSideBlock ref={evenMoreRef}>
              <Styled.BlockImageWrapper>
                <Blocks isScrolled={isScrolled} />
              </Styled.BlockImageWrapper>
            </Styled.LeftSideBlock>
            <BlocksRender />
          </Styled.ContentWrapper>
        </>
      ) : (
        <>
          <Styled.LeftSideBlock>
            {Header}
            <Styled.BlockImageWrapper ref={evenMoreRef}>
              <BlocksWithLines isScrolled={isScrolled} />
            </Styled.BlockImageWrapper>
          </Styled.LeftSideBlock>
          <BlocksRender />
        </>
      )}
    </UsefullStyled.TitlePlusContentBlock>
  );
};

export default EvenMore;
