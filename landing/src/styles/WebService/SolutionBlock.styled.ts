﻿import styled from "styled-components";
import solutionBg from "../../../public/WebService/solutionBg.svg";
import themes from "../../utils/themes";

export const Container = styled.section`
  position: relative;
  margin-top: 8.5em;
  padding-bottom: 12%;
  background-image: url(${solutionBg.src});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-bottom: 7.5em;

  @media ${themes.primary.media.maxServiceWeb} {
    margin-top: 6.4em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 6.4em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 88px;
    background: none;
    margin-bottom: 92px;

    ::after {
      content: "";
      height: 1px;
      position: absolute;
      background-color: ${themes.primary.colors.headerBorder};
      width: 130%;
      bottom: -1%;
      left: -10%;
    }

    &.withoutShowcase {
      margin-bottom: 4.25em;
    }
  }
`;

export const BgImageFirst = styled.img`
  display: none;

  @media ${themes.primary.media.maxMobile} {
    display: block;
    width: 25.19em;
    margin-left: -3em;
  }
`;

export const BgImageSecond = styled.img`
  display: none;

  @media ${themes.primary.media.maxMobile} {
    display: block;
    margin-top: 2em;
    width: 26.25em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 22em;
  }
`;

export const LeftSideText = styled.div`
  font-size: 2.5em;
  line-height: 140%;
  width: 40%;
  padding-top: 0.34em;

  @media (max-width: 1400px) {
    padding-top: 2em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 2em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1.5em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding-top: 1em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    font-size: 1.5em;
    padding: 0;
    margin-bottom: 1.6em;
  }
`;

export const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 12.875em;
  line-height: 160%;

  width: 100%;
  font-size: 1.5em;

  @media ${themes.primary.media.maxServiceWeb} {
    margin-top: 7em;
    font-size: 1.7em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 1.2em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1em;
  }

  @media ${themes.primary.media.minPC} {
    font-size: 1.5em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 9.4em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin: 1.4em 0 0;
    font-size: 1em;
  }
`;

export const RightSideText = styled.div`
  margin-right: 1em;
  width: 50%;
  & p {
    margin: 0.85em 0 0;
    line-height: 160%;
  }

  svg {
    transform: translate(5px, 5px);
  }

  @media ${themes.primary.media.minPC} {
    width: 53%;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
    line-height: 21.12px;
    width: 100%;
    margin: 0;
    p {
      margin: 14px 0 0;
    }

    svg {
      width: 35px;
      height: 17px;
    }
  }
`;
