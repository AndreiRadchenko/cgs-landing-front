import styled from "styled-components";
import themes from "../../utils/themes";
import { cursorBlinking } from "../Animations.styled";

export const ContentContainer = styled.section`
  display: flex;
  align-items: center;
  margin-top: 7.8em;
  margin-bottom: 9.67em;
  h2 {
    line-height: 132%;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 40px;
    flex-direction: column;
    margin-bottom: 0px;
  }
`;

export const ProfText = styled.div`
  position: relative;
  margin-top: 0.835em;
  margin-bottom: 1.667em;
  font-size: ${themes.primary.font.size.secondary};
  line-height: 160%;
  max-width: 38.5em;

  p {
    margin: 0;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    & br {
      display: none;
    }
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: 1.125rem;
    margin-block: 10px 28px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    & > a {
      font-size: 16px !important;
      padding: 19px 33px !important;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 352px;

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    height: 230px;
    margin-top: 20px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: rotate(2.06deg);
  position: absolute;
  top: 70px;

  @media ${themes.primary.media.maxMobile} {
    transform: rotate(-11.06deg);
    top: -10px;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 376px;
    height: 258px;
  }
`;

export const HighlightText = styled.span`
  transition: background-position 1.5s, color 1.5s;
  background: linear-gradient(
    90deg,
    ${themes.primary.colors.serviceHighlight} 50%,
    rgba(255, 255, 255, 0) 50%
  );

  background-size: 200% 100%;
  background-position: 100% 0;
`;

export const HighlightWrapper = styled.span`
  position: relative;

  &.onScreen {
    color: ${themes.primary.colors.secondary};

    & > span {
      background-position: 0 0;
      transform: translate(0, 0.3em);
    }
  }
`;

export const Cursor = styled.span`
  display: inline-block;
  width: 1px;
  height: 1.5em;
  background: ${themes.primary.colors.primary};
  animation: ${cursorBlinking} 1s steps(1) infinite;
  transition: transform 1.5s;
  transform: translate(-14em, 0.3em);
`;
