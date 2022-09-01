import styled from "styled-components";
import themes from "../../utils/themes";
import { cursorBlinking } from "../Animations.styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 4.85em 0 2.5em 0;
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
`;

export const Description = styled.div`
  font-size: ${themes.primary.font.size.feedbackName};
  line-height: 160%;
  margin: 1.3em 0 2.4em;
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.oneAndHalf};
  }
  & p {
    margin: 0;
  }
`;

export const Telephone = styled.img`
  font-size: ${themes.primary.font.size.feedbackName};
  line-height: 160%;
  margin-top: 1rem;
  margin-right: 2rem;
  width: 43.6%;
`;
