import styled from "styled-components";
import themes from "../../utils/themes";
import { cursorBlinking } from "../Animations.styled";

export const Container = styled.section`
  position: relative;
`;

export const Content = styled.div`
  padding-top: 8em;

  @media ${themes.primary.media.onlyTabletLandScape} {
    max-width: 75%;
  }

  @media (max-width: 992px) {
    padding-top: 5em;
  }

  @media ${themes.primary.media.maxMobile} {
    padding-top: 0.94em;

    & > a {
      font-size: 1em !important;
      padding: 1.195em 2.18em !important;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-weight: inherit;
  font-size: 4.125em;
  line-height: 120%;
  text-transform: uppercase;
  margin: 0;

  @media (max-width: 992px) {
    font-size: 55px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 2.5em;
    width: 340px;
    height: 144px;
  }

  & > span:last-child {
    position: relative;

    &::after {
      content: "";
      display: inline-block;
      width: 2px;
      height: 1.45em;
      background-color: ${themes.primary.colors.primary};
      animation: ${cursorBlinking} 1s steps(1) infinite;
      position: absolute;
      top: 0;
      right: -0.2em;
    }
  }
`;

export const Description = styled.div`
  font-size: 1.375em;
  line-height: 160%;
  max-width: 27.19em;
  margin: 1.275em 0 1.8184em;

  @media (max-width: 992px) {
    font-size: 20px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    margin: 1em 0 28px;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 2.3em;
  right: 2.07em;
  width: 36.43vw;

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 28.3em;
    right: -4em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 25em;
    top: 1em;
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    width: 22.125em;
    height: 331px;
    top: -2em;
    left: -0.81em;
  }
`;
