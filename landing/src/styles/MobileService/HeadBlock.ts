import styled from "styled-components";
import themes from "../../utils/themes";
import { cursorBlinking } from "../Animations.styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 6.25em 0 3.1em 0;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    padding-top: 1.52em;
    padding-bottom: 0;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 45.5%;
  z-index: 2;
  margin-top: 6.3em;

  & > a {
    font-size: 1.54em;
    padding: 1.195em 2.805em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    margin-bottom: ${themes.primary.font.size.tertiary};
    margin-top: 0;
  }
`;

export const Title = styled.h1`
  margin: 0;
  line-height: 120%;
  text-transform: uppercase;
  font-size: ${themes.primary.font.size.serviceTitle};
  position: relative;

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

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.tabletServiceTitle};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 3.85em;
  }

  @media (max-width: 365px) {
    font-size: 3.5em;
  }
`;

export const Description = styled.div`
  font-size: ${themes.primary.font.size.feedbackName};
  line-height: 160%;
  margin: 1.3em 0 2.4em;
  white-space: nowrap;
  @media ${themes.primary.media.minPC} {
    font-size: ${themes.primary.font.size.oneAndHalf};
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: ${themes.primary.font.size.menuElement};
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.tertiary};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1rem;
    white-space: pre-wrap;
    margin-bottom: 1.815em;
    margin-top: 1.625em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    & br {
      display: none;
    }
  }
  & p {
    margin: 0;
  }
`;

export const Telephone = styled.img`
  margin-bottom: 0.2rem;
  margin-right: 2rem;
  width: 48.92em;

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 38%;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 108%;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-left: 4em;
  }
`;
