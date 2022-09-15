import styled from "styled-components";
import themes from "../../utils/themes";
import cloudProvidesBgi from "../../../public/CloudServicePage/cloudProvidesBgi.svg";
import cloudProvidesMobile from "../../../public/CloudServicePage/clod-provides-mobile.svg";

export const Container = styled.div`
  margin-top: 13.375em;
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 4.75em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    h2 {
      line-height: 132%;
    }
  }
`;

export const BgContainer = styled.div`
  width: 90%;
  height: 41em;
  position: relative;
  left: -9.5%;
  top: -45px;
  background-image: url(${cloudProvidesBgi.src});
  background-size: cover;
  background-repeat: no-repeat;

  @media ${themes.primary.media.maxServiceWeb} {
    left: -20%;
  }

  @media (max-width: 1300px) {
    left: -25%;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    left: -35%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    left: -45%;
  }

  @media ${themes.primary.media.maxMobile} {
    background-image: url(${cloudProvidesMobile.src});
    top: -2em;
    left: -25.9em;
    height: 100%;
    width: 64em;
    background-size: cover;
  }
`;

export const BGImage = styled.img`
  position: absolute;
  width: 115vw;
  left: -15vw;
  top: 6em;

  @media ${themes.primary.media.maxTabletLandScape} {
    display: none;
  }
`;

export const BGImageMobile = styled.img`
  display: none;
  @media ${themes.primary.media.maxTabletLandScape} {
    display: block;
    position: absolute;
    left: -23em;
    top: 3.5em;
    height: 41em;
  }

  @media ${themes.primary.media.maxMobile} {
    top: 1em;
    left: -22em;
    height: 44em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    top: 0em;
  }

  @media (max-width: 335px) {
    top: 8em;
    left: -25.5em;
    height: 47em;
  }
`;

export const BlockWrapper = styled.div`
  padding: 10vw 0 0 10vw;
  position: relative;

  @media (max-width: 1300px) {
    font-size: 0.9em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    padding: 3.25em 0 0;
    max-width: fit-content;
  }
`;

export const Block = styled.div`
  position: relative;
  margin-bottom: 5vw;

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-bottom: 0;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    position: static;
  }

  & p {
    margin: 0;
  }

  &:nth-child(1) {
    left: 0;

    @media ${themes.primary.media.maxTabletLandScape} {
      margin-bottom: 3.75em;
    }
  }

  &:nth-child(2) {
    left: 18vw;

    @media ${themes.primary.media.maxTabletLandScape} {
      margin-bottom: 3.94em;
    }
  }

  &:nth-child(3) {
    left: 46vw;
    margin-bottom: 0;

    @media ${themes.primary.media.maxTabletLandScape} {
      left: 32em;
    }

    @media ${themes.primary.media.maxTabletPortrait} {
      left: 26em;
    }
  }
`;

export const Title = styled.p`
  font-size: 2em;
  margin: 0;

  br {
    display: none;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.25em;
    max-width: 14em;

    br {
      display: block;
    }
  }
`;

export const Description = styled.div`
  font-size: 1.125em;
  margin-top: 1.28em;
  line-height: 160%;
  max-width: 26.39em;

  @media ${themes.primary.media.maxTabletPortrait} {
    & p {
      display: inline;

      &::after {
        content: " ";
      }
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    max-width: 20em;
    margin-top: 0.81em;
  }
`;
