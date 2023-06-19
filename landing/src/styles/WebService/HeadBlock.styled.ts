import styled from "styled-components";
import themes from "../../utils/themes";
import { cursorBlinking } from "../Animations.styled";

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 7.7em;
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    padding-top: 1em;
    flex-direction: column;
    align-items: center;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 44.5%;

  @media (max-width: 1360px) {
    width: 53%;
  }

  @media ${themes.primary.media.minPC} {
    width: auto;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 100%;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    padding-bottom: 48px;

    & a {
      font-size: 1em !important;
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

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 3em;
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
      animation: ${cursorBlinking} 1s steps(1) infinite;
      position: absolute;
      top: 0;
      right: -0.2em;
    }
  }
`;

export const Description = styled.div`
  font-size: 1.375em;
  line-height: 160%;
  margin: 0.9em 0 1.8em;

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.oneAndHalf};

    br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1.3em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    margin: 16px 0 1.75em;

    & br {
      display: none;
    }
  }
`;

export const Image = styled.img`
  margin-top: 12px;
  width: 45.31em;
  height: 29.19em;

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-top: 50px;
    width: 35em;
    height: 20em;
  }
  @media ${themes.primary.media.maxMobile} {
    width: 24.28em;
    height: auto;
    margin-top: 0;
  }
`;
