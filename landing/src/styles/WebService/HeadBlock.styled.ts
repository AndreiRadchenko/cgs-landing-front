import styled from "styled-components";
import themes from "../../utils/themes";
import { cursorBlinking } from "../AnimationsStyled";

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

  @media (max-width: 1360px) {
    width: 53%;
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
  @media ${themes.primary.media.maxTabletLandScape} {
    white-space: nowrap;
    font-size: ${themes.primary.font.size.tabletServiceTitle};
  }
`;

export const Description = styled.div`
  font-size: ${themes.primary.font.size.feedbackName};
  line-height: 160%;
  margin: 1.3em 0 2.3em;
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.oneAndHalf};
  }
`;

export const Image = styled.img`
  position: absolute;
  font-size: ${themes.primary.font.size.feedbackName};
  line-height: 160%;
  top: 6.2em;
  right: -0.9em;

  @media (max-width: 1360px) {
    width: 45%;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 50%;
  }

  @media ${themes.primary.media.minPC} {
    width: 50%;
  }

  /* @media ${themes.primary.media.minPCFullHD} {
    width: 725px;
    height: 466px;
  } */
`;

export const Cursor = styled.div`
  display: inline-block;
  position: absolute;
  width: 2px;
  height: 1.3em;
  background-color: ${themes.primary.colors.primary};
  right: 0.38em;
  bottom: -0.1em;
  animation: ${cursorBlinking} 0.8s infinite;
`;
