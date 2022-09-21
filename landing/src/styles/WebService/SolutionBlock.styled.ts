import styled from "styled-components";
import solutionBg from "../../../public/WebService/solutionBg.svg";
import themes from "../../utils/themes";

export const Container = styled.div`
  position: relative;
  margin-top: 13.375em;
  padding-bottom: 13%;
  background-image: url(${solutionBg.src});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media ${themes.primary.media.maxServiceWeb} {
    margin-top: 6.4em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 6.4em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 5.7em;
    background: none;
    padding-bottom: 0;
    margin-bottom: 4em;
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
`;

export const LeftSideText = styled.div`
  font-size: 2.5em;
  line-height: 140%;
  width: 40%;
  white-space: nowrap;
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
    font-size: 1.5em;
    padding: 0;
    margin-bottom: 1.6em;
  }
`;

export const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 14.875em;
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
    margin: 1.4em 0 0;
  }

  svg {
    transform: translate(5px, 5px);
  }

  @media ${themes.primary.media.minPC} {
    width: 53%;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    margin: 0;
  }
`;
