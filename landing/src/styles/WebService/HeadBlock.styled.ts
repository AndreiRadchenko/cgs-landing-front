import styled from "styled-components";
import themes from "../../utils/themes";
import { cursorBlinking } from "../Animations.styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 9.5em 0 0 0;
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    padding-top: 3.125em;
    flex-direction: column;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 44.5%;
  z-index: 2;

  /* @media (max-width: 1360px) {
    width: 53%;
  }

  @media ${themes.primary.media.minPC} {
    width: auto;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 100%;
  } */

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    padding-bottom: 5.25em;

    & a {
      font-size: 1em;
      padding: 1.195em 1.88em;
    }
  }
`;

export const Title = styled.h1`
  margin: 0;
  line-height: 120%;
  text-transform: uppercase;
  font-size: 4.125em;
  font-weight: inherit;
  position: relative;

  @media ${themes.primary.media.maxTabletLandScape} {
    white-space: nowrap;
    /* font-size: ${themes.primary.font.size.tabletServiceTitle}; */
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 2.5em;
  }

  & > span:last-child {
    position: relative;

    &::after {
      content: "";
      display: inline-block;
      width: 2px;
      height: 1.45em;
      background-color: ${themes.primary.colors.primary};
      animation: ${cursorBlinking} 0.8s infinite;
      position: absolute;
      top: 0;
      right: -0.2em;
    }
  }
`;

export const Description = styled.div`
  font-size: 1.375em;
  line-height: 160%;
  margin: 1.27em 0 2.41em;

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.oneAndHalf};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    margin: 1.625em 0 1.75em;

    & br {
      display: none;
    }
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 8.75em;
  right: -0.2em;
  width: 45.31em;
  height: 29.19em;

  /* @media (max-width: 1360px) {
    width: 45%;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 50%;
  }

  @media ${themes.primary.media.minPC} {
    width: 50%;
  } */

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    left: 0;
    top: 0;
    width: 24.28em;
    height: auto;
  }
`;
