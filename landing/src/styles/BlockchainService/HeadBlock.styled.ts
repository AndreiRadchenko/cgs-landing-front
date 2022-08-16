import styled from "styled-components";
import themes from "../../utils/themes";
import { cursorBlinking } from "../AnimationsStyled";

export const Container = styled.div`
  margin-top: 12.67em;
  position: relative;
`;

export const Content = styled.div``;

export const Title = styled.h1`
  font-size: ${themes.primary.font.size.serviceTitle};
  line-height: 120%;
  display: inline-block;
  max-width: 12.27em;
  position: relative;
  margin: 0;
  text-transform: uppercase;

  & > span:last-child {
    position: relative;

    &::after {
      content: " ";
      display: inline-block;
      width: 2px;
      height: 1.45em;
      background-color: ${themes.primary.colors.primary};
      animation: ${cursorBlinking} 0.8s infinite;
      position: absolute;
      right: -0.2em;
    }
  }
`;

export const Description = styled.p`
  font-size: ${themes.primary.font.size.feedbackName};
  line-height: 160%;
  margin: 1.279em 0 3.278em;
  max-width: 600px;
`;

export const Image = styled.img`
  position: absolute;
  top: -3.8em;
  right: -2em;
  width: 56em;
  height: 45.58em;
`;
