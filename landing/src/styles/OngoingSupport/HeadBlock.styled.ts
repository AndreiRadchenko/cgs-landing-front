import styled from "styled-components";
import themes from "../../utils/themes";
import { cursorBlinking } from "../Animations.styled";

export const Container = styled.div`
  position: relative;
`;

export const Content = styled.div`
  padding-top: 12.75em;
`;

export const Title = styled.h1`
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: ${themes.primary.font.size.serviceTitle};
  line-height: 120%;
  text-transform: uppercase;
  max-width: 11.29em;
  margin: 0;

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

export const Description = styled.p`
  font-size: ${themes.primary.font.size.feedbackName};
  line-height: 160%;
  max-width: 30em;
  margin: 1.275em 0 2.32em;
`;

export const Image = styled.img`
  position: absolute;
  top: 2.3em;
  right: 2.07em;
  width: 48.61em;
  height: 45.22em;
`;
