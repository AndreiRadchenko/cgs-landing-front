import styled from "styled-components";
import themes from "../../utils/themes";
import { cursorBlinking } from "../Animations.styled";

export const Container = styled.div`
  position: relative;
`;

export const Content = styled.div`
  padding-top: 9.56em;
`;

export const Title = styled.h1`
  font-weight: inherit;
  font-size: 4.125em;
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
  font-size: 1.375em;
  line-height: 160%;
  max-width: 30em;
  margin: 1.275em 0 2.32em;
`;

export const Image = styled.img`
  position: absolute;
  top: 2.3em;
  right: 2.07em;
  width: 36.43em;
  height: 33.875em;
`;
