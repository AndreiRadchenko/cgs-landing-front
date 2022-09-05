import styled from "styled-components";
import themes from "../../utils/themes";
import { cursorBlinking } from "../Animations.styled";

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
  @media ${themes.primary.media.maxMobile} {
    font-size: 1.125rem;
    margin-block: 1.375rem 2.1875rem;
    & br {
      display: none;
    }
  }
`;

export const ButtonWrapper = styled.div`
  padding-bottom: 21.1em;

  @media ${themes.primary.media.maxMobile} {
    padding-bottom: 35.2em;
    & > a {
      padding-inline: 3.7em;
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
    width: 55%;
    transform: rotate(-11.06deg);
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 115%;
    right: -15%;
    bottom: 3.3rem;
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
