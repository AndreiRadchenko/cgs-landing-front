import styled from "styled-components";
import themes from "../../utils/themes";
import { cursorBlinking } from "../AnimationsStyled";

export const ContentContainer = styled.div`
  margin-top: 16em;
`;

export const ProfText = styled.div`
  position: relative;
  margin-top: 1.7em;
  margin-bottom: 3em;
  font-size: ${themes.primary.font.size.secondary};
  line-height: 160%;

  & p > span.cursor {
    animation: ${cursorBlinking} 0.8s infinite;
  }
`;

export const ButtonWrapper = styled.div`
  padding-bottom: 23em;
`;
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
`;
export const Image = styled.img`
  position: absolute;
  right: -4%;
  bottom: 200%;
`;

export const Cursor = styled.div`
  display: inline-block;
  position: absolute;
  width: 2px;
  height: 1.5em;
  background-color: ${themes.primary.colors.primary};
  right: -0.2em;
  bottom: -0.2em;
`;
