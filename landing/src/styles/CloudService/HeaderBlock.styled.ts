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
`;

export const Title = styled.h1`
  font-size: ${themes.primary.font.size.serviceTitle};
  line-height: 120%;
  font-weight: ${themes.primary.font.weight.heavy};
  text-transform: uppercase;
  margin: 0;
  vertical-align: center;
  position: relative;
`;

export const Cursor = styled.div`
  display: inline-block;
  height: 1.45em;
  width: 2px;
  background-color: ${themes.primary.colors.primary};
  position: absolute;
  right: -0.18em;
  bottom: -0.18em;
  animation: ${cursorBlinking} 0.8s infinite;
`;

export const Description = styled.p`
  font-size: ${themes.primary.font.size.feedbackName};
  margin: 1.28em 0 3.28em;
`;

export const Image = styled.img`
  margin: 0.5em -3.84em 0 0;
  width: 53.3em;
`;
