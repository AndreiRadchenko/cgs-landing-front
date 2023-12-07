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
