import styled from "styled-components";
import themes from "../../utils/themes";
import { cursorBlinking } from "../Animations.styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 12.6em 0 3em 0;
  position: relative;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 44.5%;
  z-index: 2;
  width: 61%;
  @media (max-width: 1360px) {
    width: fit-content;
  }
  @media ${themes.primary.media.minPC} {
    width: auto;
  }
  @media ${themes.primary.media.minPCFullHD} {
    width: 100%;
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
    white-space: nowrap;
    font-size: ${themes.primary.font.size.tabletServiceTitle};
  }
`;

export const Description = styled.div`
  font-size: ${themes.primary.font.size.feedbackName};
  line-height: 160%;
  margin: 0.65em 0 2.3em;
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.oneAndHalf};
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 16.6em;
  right: -1.7em;
  width: 48.8%;
  height: 76.4%;
  @media (max-width: 1360px) {
    width: 45%;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    width: 43%;
  }
  @media ${themes.primary.media.minPC} {
    width: 50%;
  }
`;
