import styled from "styled-components";
import themes from "../../utils/themes";
import { cursorBlinking } from "../AnimationsStyled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5em 0 3em 0;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 45.5%;
  z-index: 2;
`;

export const Title = styled.h1`
  margin: 0;
  line-height: 120%;
  text-transform: uppercase;
  font-size: ${themes.primary.font.size.serviceTitle};
  position: relative;
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.tabletServiceTitle};
  }
`;

export const Description = styled.div`
  font-size: ${themes.primary.font.size.feedbackName};
  line-height: 160%;
  margin: 1.3em 0 2.4em;
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.oneAndHalf};
  }
`;

export const Telephone = styled.img`
  font-size: ${themes.primary.font.size.feedbackName};
  line-height: 160%;
  margin-top: 1rem;
  margin-right: 2rem;
  width: 45%;
`;

export const Cursor = styled.div`
  display: inline-block;
  position: absolute;
  width: 2px;
  height: 1.5em;
  background-color: ${themes.primary.colors.primary};
  right: -0.2em;
  bottom: -0.2em;
  animation: ${cursorBlinking} 0.8s infinite;
`;
