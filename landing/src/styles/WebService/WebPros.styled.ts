import styled, { css } from "styled-components";
import { ISlide } from "../../types/Decoration.types";
import themes from "../../utils/themes";
import { slideDownText } from "../Animations.styled";

export const Container = styled.section`
  margin-top: 11em;
  position: relative;
  background-color: ${themes.primary.colors.blogBackground};
  padding-bottom: 4.8%;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 65px;
    padding: 0;

    ::after {
      content: "";
      height: 1px;
      position: absolute;
      background-color: ${themes.primary.colors.headerBorder};
      width: 130%;
      bottom: -8.25%;
      left: -10%;
    }
  }
`;

export const BgImage = styled.img`
  position: absolute;
  width: 106.25em;
  top: -2.53em;
  left: -7.81em;

  @media ${themes.primary.media.minPC} {
    top: -4.28em;
    left: -12.19em;
    width: 131.25em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 100.25em;
    top: -2.08em;
  }

  @media (min-width: 2500px) {
    width: 115vw;
    top: -3.08vw;
  }

  @media (max-width: 1250px) {
    top: -2.03em;
    width: 93.75em;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    left: -200px;
    width: 1400px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    display: none;
  }
`;

export const BgMobileImage = styled.img`
  display: none;

  @media ${themes.primary.media.maxTabletPortrait} {
    display: block;
    position: absolute;
    height: 103%;
    top: 3.3em;
    left: -7.2em;
  }

  @media ${themes.primary.media.maxMobile} {
    left: -5.3em;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    height: 93%;
    top: 5.4em;
  }
`;

export const CategorySubtitle = styled.h3`
  font-weight: inherit;
  font-size: 2.5em;
  line-height: 48px;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 0;

  @media ${themes.primary.media.minPCFullHD} {
    margin-bottom: 1.15em;
  }

  @media (max-width: 1250px) {
    font-size: 1.8em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1.5em;
    margin-bottom: 0.67em;
  }

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const CategoryListItem = styled.p<ISlide>`
  font-size: 1.125em;
  line-height: 160%;
  margin-top: 1.5em;
  margin-bottom: 0;
  opacity: 0;

  &.scrolled {
    transform-origin: top center;
    animation: ${({ ind }) =>
      css`
        ${slideDownText} 700ms ${ind * 100}ms ease-in forwards
      `};
  }

  @media (max-width: 1250px) {
    font-size: 1em;
    margin-top: 1.6em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 0.91em;
  }

  @media ${themes.primary.media.minPC} {
    margin-top: 2.15em;
    font-size: 1.15em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 1.3em;
  }

  @media (min-width: 2500px) {
    margin-top: 2.05vw;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1em;
    line-height: 132%;
    margin-top: 1.6em;
  }
`;

export const ContentWrapper = styled.div`
  padding-left: 10.5%;
  display: flex;
  column-gap: 35em;

  @media ${themes.primary.media.minPC} {
    column-gap: 45em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding-left: 5.5%;
    padding-right: 0;
    column-gap: 32em;
  }

  @media (min-width: 2500px) {
    column-gap: 40vw;
  }

  @media (max-width: 1410px) {
    padding-left: 10.5%;
  }

  @media (max-width: 1310px) {
    padding-left: 11%;
  }

  @media (max-width: 1250px) {
    padding-left: 10.5%;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    padding-left: 3%;
    column-gap: 29em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    flex-direction: column;
    padding-left: 4em;

    & > div {
      position: relative;

      &:first-child {
        margin-bottom: 60px;
      }
    }
  }
`;
