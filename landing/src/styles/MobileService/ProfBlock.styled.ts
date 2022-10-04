import styled from "styled-components";
import themes from "../../utils/themes";
import { cursorBlinking } from "../Animations.styled";

export const ContentContainer = styled.div`
  margin-top: 15.1em;
  h2 {
    line-height: 132%;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 6.8em;
  }
`;

export const ProfText = styled.div`
  position: relative;
  margin-top: 1.7em;
  margin-bottom: 2.17em;
  font-size: ${themes.primary.font.size.secondary};
  line-height: 160%;

  & p > span.cursor {
    animation: ${cursorBlinking} 1s steps(1) infinite;
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: 1.125rem;
    margin-block: 1rem 2.56rem;
    & br {
      display: none;
    }
  }
`;

export const ButtonWrapper = styled.div`
  padding-bottom: 21.1em;

  @media ${themes.primary.media.maxMobile} {
    padding-bottom: 28.5em;
    & > a {
      font-size: 1.54em;
      padding: 1.195em 2.93em;
    }
  }
`;
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
`;
export const Image = styled.img`
  position: absolute;
  right: -0.7%;
  bottom: 200%;
  width: 36.3%;
  height: 29.16em;
  transform: rotate(2.06deg);

  @media ${themes.primary.media.maxMobile} {
    width: 94%;
    height: 28em;
    transform: rotate(-11.06deg);
    right: -20%;
    bottom: 1rem;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 113.5%;
    height: 24.8em;
  }
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
