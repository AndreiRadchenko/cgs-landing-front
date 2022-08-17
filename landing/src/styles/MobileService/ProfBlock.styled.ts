import styled from "styled-components";
import themes from "../../utils/themes";
import { cursorBlinking } from "../AnimationsStyled";

export const ContentContainer = styled.div`
  margin-top: 15.2em;
`;

export const ProfText = styled.div`
  position: relative;
  margin-top: 1.7em;
  margin-bottom: 2.17em;
  font-size: ${themes.primary.font.size.secondary};
  line-height: 160%;

  & p > span.cursor {
    animation: ${cursorBlinking} 0.8s infinite;
  }
`;

export const ButtonWrapper = styled.div`
  padding-bottom: 22.5em;
`;
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
`;
export const Image = styled.img`
  position: absolute;
  right: -2%;
  bottom: 200%;
  width: 36.3%;
  height: 39.1vh;
  transform: rotate(2.06deg);
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
