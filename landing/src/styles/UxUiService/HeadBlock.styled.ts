import styled from "styled-components";
import themes from "../../utils/themes";
import { cursorBlinking } from "../Animations.styled";

export const Container = styled.div`
  font-size: 1rem;
  position: relative;
`;

export const ContentWrapper = styled.div`
  padding-top: ${themes.primary.font.size.bigTitle};
  max-width: 50%;
  font-weight: ${themes.primary.font.weight.heavy};
`;

export const Title = styled.h1`
  font-size: ${themes.primary.font.size.bigTitle};
  font-weight: inherit;
  line-height: 120%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
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
  margin: 2.125em 0 2.56em;
  font-size: 1.375em;
  line-height: 160%;
`;

export const Image = styled.img`
  position: absolute;
  top: 5.31em;
  right: -0.81em;
`;
