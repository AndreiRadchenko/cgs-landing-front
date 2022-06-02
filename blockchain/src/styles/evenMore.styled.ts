import styled, { css } from "styled-components";
import { IImageProps } from "../types/EvenMore.types";
import themes from "../utils/themes";
import { opacityAnimation, scaleAnimation } from "./animations";

export const LeftSideBlock = styled.div`
  position: relative;
`;

export const RightSideBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${themes.primary.spacing.horizontalGap};
  row-gap: ${themes.primary.spacing.verticalGap};
  padding-top: ${themes.primary.spacing.tertiary};
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    grid-template-columns: none;
    grid-column: 1;
    margin: auto;
    width: 40%;
  }
`;

export const HoverBlock = styled.a`
  &:hover div {
    cursor: pointer;
    border: 5px solid ${themes.primary.colors.allGreen};
  }
`;

export const Block = styled.div`
  z-index: 1;
  display: flex;
  background: ${themes.primary.colors.purpleBack};
  border: 1px solid ${themes.primary.colors.textColor};
  position: relative;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 10.5em;
  font-size: ${themes.primary.font.size.linkText};
  font-weight: 600;
  font-family: ${themes.primary.font.family.montserrat};
  color: ${themes.primary.colors.textColor};
  padding: 1.6em;
  white-space: pre-line;
  & p {
    text-align: center;
  }

  @media ${themes.primary.media.maxPCFullHD} {
    font-size: ${themes.primary.font.size.oneAndHalf};
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.tertiary};
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    height: 9em;
    font-size: ${themes.primary.font.size.tertiary};
  }
  @media ${themes.primary.media.maxMobile} {
    width: 100%;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 120%;
    right: 10%;
  }
`;

export const Number = styled.div`
  display: flex;
  border: 1px solid ${themes.primary.colors.allGreen};
  position: absolute;
  justify-content: center;
  align-items: center;
  top: -1px;
  left: -1px;
  width: 2.2em;
  height: 2.2em;
  font-weight: 700;
  font-size: 0.9em;
  font-family: ${themes.primary.font.family.sourceCode};
`;

export const greenText = styled.span`
  color: ${themes.primary.colors.allGreen};
`;

export const LineThrough = styled("div")<{
  topMarginTablet: number;
  topMarginMobile: number;
}>`
  border-top: 1px solid ${themes.primary.colors.textColor};
  width: 100%;
  position: absolute;
  top: ${(props) => props.theme + "em"};

  @media ${themes.primary.media.maxTabletLandScape} {
    top: ${(props) => props.topMarginTablet + "em"};
  }

  @media ${themes.primary.media.maxMobile} {
    top: ${(props) => props.topMarginMobile + "em"};
    left: 50%;
    border-top: none;
    width: 1%;
    height: 20rem;
    border-left: 1px solid ${themes.primary.colors.textColor};
  }
`;

export const BlockImageWrapper = styled.div`
  position: absolute;
  width: 120%;
  right: -3em;
  top: 8rem;

  @media ${themes.primary.media.maxPCFullHD} {
    width: 110%;
    top: 9em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 120%;
    top: 7em;
  }
  @media ${themes.primary.media.maxMobile} {
    position: relative;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 5rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export const BlockWrapper = styled.div`
  z-index: 2;
  position: absolute;
  width: 282px;
  height: 282px;
  @media ${themes.primary.media.maxLaptop} {
    width: 232px;
    height: 232px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 192px;
    height: 192px;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    width: 162px;
    height: 162px;
  }
  @media ${themes.primary.media.maxMobile} {
    width: 282px;
    height: 282px;
  }
`;

export const CoinsWrapper = styled("div")<IImageProps>`
  position: relative;
  width: 282px;
  height: 282px;
  animation: ${({ isScrolled }) =>
    isScrolled ? css`1.15s ${scaleAnimation} ease-in` : "none"};
  @media ${themes.primary.media.maxLaptop} {
    width: 232px;
    height: 232px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 192px;
    height: 192px;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    width: 162px;
    height: 162px;
  }
  @media ${themes.primary.media.maxMobile} {
    width: 282px;
    height: 282px;
  }
`;
export const ImageWrapper = styled("div")<IImageProps>`
  transform-origin: 50% bottom;
  animation: ${({ isScrolled }) =>
    isScrolled ? css`1.1s ${scaleAnimation} ease-in` : "none"};
`;

export const LinesWrapper = styled("div")<IImageProps>`
  position: absolute;
  left: 11rem;
  top: 0.3rem;
  width: 250px;
  height: 300px;
  animation: ${({ isScrolled }) =>
    isScrolled ? css`1.6s ${opacityAnimation} linear` : "none"};
  @media ${themes.primary.media.maxLaptop} {
    width: 160px;
    height: 250px;
    left: 8rem;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    width: 180px;
    height: 170px;
    left: 7rem;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    width: 100px;
    left: 6rem;
  }
`;
