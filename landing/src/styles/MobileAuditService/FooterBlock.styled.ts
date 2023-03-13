import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  margin-top: 12.5em;
  position: relative;
  padding-bottom: 15.7em;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 6.25em;
    padding-bottom: 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
  }
`;

export const ContentWrapper = styled.div``;

export const Title = styled.h2`
  font-size: 2.5em;
  font-weight: inherit;
  line-height: 140%;
  text-transform: uppercase;
  margin: 0 0 0.3em;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    line-height: 132%;
    margin-bottom: 1em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    max-width: 345px;
  }
`;

export const Description = styled.p`
  font-size: 1.375em;
  line-height: 160%;
  margin-block: 0 1.91em;

  @media ${themes.primary.media.minPCFullHD} {
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.125em;
    max-width: 95%;
    margin: 1em 0 1.9em;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: -5em;
  right: 8.75em;
  width: 496px;
  height: 441px;

  @media ${themes.primary.media.minPCFullHD} {
    width: 40%;
    height: 80%;
  }

  @media (max-width: 1300px) {
    right: 2em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    right: 0;
    width: 35%;
    top: 20%;
    height: 65%;
  }

  @media ${themes.primary.media.maxMobile} {
    top: 0;
    width: 100%;
    margin-bottom: 1.5em;
    height: 267px;
    position: relative;
    margin-left: auto;
  }
`;
