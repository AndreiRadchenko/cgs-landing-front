import styled from "styled-components";
import themes from "../../utils/themes";
import { cursorBlinking } from "../Animations.styled";

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 7.5em 0 0;
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    padding-top: 0.625em;
    flex-direction: column;

    & > a {
      font-size: 1em !important;
      padding: 1.195em 2.91em !important;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 44.5%;
  width: 61%;

  @media (max-width: 1350px) {
    width: 50%;
    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  margin: 0;
  line-height: 120%;
  text-transform: uppercase;
  font-size: 4.125em;
  position: relative;

  @media (min-width: 400px) {
    span:nth-child(2) > br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 2.375em;
    br {
      display: block;
    }
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
      bottom: -0.2em;
      right: -0.2em;
    }
  }
`;

export const Description = styled.div`
  font-size: 1.375em;
  line-height: 160%;
  margin: 0.9em 0 1.8185em;
  max-width: 41.5vw;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    margin: 16px 0 28px;
    max-width: 100%;

    & br {
      display: none;
    }
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 8em;
  right: -3.5em;
  max-width: 55em;
  width: 45vw;

  @media (max-width: 1350px) {
    width: 32em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 30em;
    right: -5em;
    top: 20em;
  }
  @media ${themes.primary.media.maxMobile} {
    position: relative;
    width: 21.875em;
    height: 15.94em;
    top: 1.625em;
    left: -1px;
  }
`;
