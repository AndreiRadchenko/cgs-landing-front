import styled from "styled-components";
import themes from "../../utils/themes";
import { cursorBlinking } from "../Animations.styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 12.6em 0 0;
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    padding-top: 3.125em;
    flex-direction: column;

    & a {
      font-size: 1em;
      padding: 1.195em 2.91em;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 44.5%;
  z-index: 2;
  width: 61%;

  @media (max-width: 1350px) {
    width: 50%;
    & br {
      display: none;
    }
  }
`;

export const Title = styled.h1`
  margin: 0;
  line-height: 120%;
  text-transform: uppercase;
  font-size: 4.125em;
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    font-size: 2.375em;
  }

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
      bottom: -0.2em;
      right: -0.2em;
    }
  }
`;

export const Description = styled.div`
  font-size: 1.375em;
  line-height: 160%;
  margin: 1.27em 0 2.36em;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    margin: 1.625em 0 1.75em;

    & br {
      display: none;
    }
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 13.56em;
  right: -1.44em;
  width: 40.81em;
  height: 29.81em;

  @media (max-width: 1350px) {
    width: 35em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 30em;
    right: -4em;
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
