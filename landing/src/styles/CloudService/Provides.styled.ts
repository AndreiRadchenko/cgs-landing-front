import styled from "styled-components";
import themes from "../../utils/themes";
import cloudProvidesBgi from "../../../public/CloudServicePage/cloudProvidesBgi.svg";
import cloudProvidesMobile from "../../../public/CloudServicePage/clod-provides-mobile.svg";

export const Container = styled.div`
  margin-top: 13.375em;
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 11.25em;
  }
`;

export const BgContainer = styled.div`
  width: 90%;
  height: 41em;
  position: relative;
  left: -9.5%;
  top: -50px;
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
    top: 0;
    left: -26em;
    height: 100%;
    width: 65em;
    background-size: cover;
  }
`;

export const BlockWrapper = styled.div`
  padding: 7em 0 0 18em;
  position: relative;

  @media (max-width: 1300px) {
    padding-left: 17em;
    max-width: 50em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    max-width: 40em;
    padding: 5em 0 0 17em;
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 6em 0 0 26em;
    max-width: fit-content;
  }
`;

export const Block = styled.div`
  position: relative;
  margin-bottom: 3.125em;

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-bottom: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    position: static;
  }

  & p {
    margin: 0;
  }

  &:nth-child(1) {
    left: 0;

    @media ${themes.primary.media.maxMobile} {
      margin-bottom: 3.75em;
    }
  }

  &:nth-child(2) {
    left: 16em;

    @media ${themes.primary.media.maxMobile} {
      margin-bottom: 3.94em;
    }
  }

  &:nth-child(3) {
    left: 41em;
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

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.25em;
    max-width: 12em;
  }
`;

export const Description = styled.div`
  font-size: 1.125em;
  margin: 1.28em 0 0 0;
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
  }
`;
