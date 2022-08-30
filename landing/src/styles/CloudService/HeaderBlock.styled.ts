import styled from "styled-components";
import themes from "../../utils/themes";
import { cursorBlinking } from "../AnimationsStyled";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContentWrapper = styled.div`
  padding-top: 12.7em;
  width: 54.25em;
  margin-bottom: 15.83em;
`;

export const Title = styled.h1`
  font-size: ${themes.primary.font.size.serviceTitle};
  line-height: 120%;
  font-weight: ${themes.primary.font.weight.heavy};
  text-transform: uppercase;
  margin: 0;
  vertical-align: center;
  position: relative;

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
  margin: 1.28em 0 2.365em;
  max-width: 27.27em;
`;

export const Image = styled.img`
  margin: 0.5em -3.84em 0 0;
  width: 53.3em;
  height: 53.695em;
`;
