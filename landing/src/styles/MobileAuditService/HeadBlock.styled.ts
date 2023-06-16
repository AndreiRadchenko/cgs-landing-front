import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  margin-top: 9.5em;
  position: relative;
  display: flex;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 1.4em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Content = styled.div`
  & > a {
    @media ${themes.primary.media.maxMobile} {
      font-size: 1em;
      padding: 1.2em 1.51em;
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
  font-size: 4.125em;
  line-height: 120%;

  margin: 0;
  text-transform: uppercase;
  font-weight: inherit;

  br {
    display: none;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 3.125em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 2.75em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 2.5em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    & br {
      display: block;
    }
  }
`;

export const Description = styled.p`
  font-size: 1.375em;
  line-height: 160%;
  margin: 0.9em 0 1.8em;
  max-width: 27.3em;

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 1.175em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1em;
    max-width: 450px;

    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    max-width: 95%;
    margin: 16px 0 34px;
    max-width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: -6em;
  right: 3%;
  width: 600px;
  height: 530px;

  @media (min-width: 2200px) {
    top: 7%;
  }

  @media (max-width: 2200px) {
    top: -6em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    top: -50px;
    width: 500px;
    height: 450px;
    right: -8%;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    width: 25em;
    height: 17em;
    top: -10%;
    right: -10%;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 2.625em;
    position: relative;
    right: 0%;

    width: 100%;
    height: 320px;
  }
`;

export const ImageMobile = styled.img`
  position: absolute;
  z-index: 1;

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 90%;
    height: 100%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 90%;
  }
`;

export const ImageSearch = styled.img`
  position: absolute;
  right: 21%;
  top: 22%;

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 30%;
    height: 25%;
    top: 27%;
    margin-right: 8.5%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 30%;
    margin-right: 10.5%;
    margin-top: -1%;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: -1%;
    margin-right: 8%;
  }
`;
