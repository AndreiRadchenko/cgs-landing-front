import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.section`
  position: relative;
  margin-top: 9.375em;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 1em;
    display: flex;
    flex-direction: column;
  }
`;

export const TextContent = styled.div`
  @media ${themes.primary.media.minPCFullHD} {
    a {
      padding: 1em 1.43em !important;
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    a {
      padding: 1.1875em 0.75em !important;
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
  margin: 0;
  text-transform: uppercase;
  font-size: 4.125em;
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 120%;
  max-width: 900px;

  @media ${themes.primary.media.minPC} {
    max-width: 900px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    max-width: 1100px;
  }

  @media (min-width: 2200px) {
    max-width: 1200px;
  }

  @media (max-width: 1370px) {
    font-size: 3.5em;
    max-width: 700px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 3em;
    max-width: 600px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 2.4em;
    max-width: 500px;
  }

  @media (max-width: 890px) {
    font-size: 2em;
    max-width: 400px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 3em;
    max-width: none;
    width: 100%;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 2.375em;
  }
`;

export const Text = styled.p`
  margin-block: 1.27em 2.36em;
  font-size: 1.375em;
  line-height: 160%;

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 1.25em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1em;
  }

  @media (max-width: 890px) {
    font-size: 0.9em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.375em;
    margin-bottom: 1.75em;

    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 1em;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  bottom: -1%;
  right: 1.375em;
  width: 597px;
  height: 524px;

  @media (min-width: 1050px) {
    right: 0.5em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 50%;
    height: 120%;
  }

  @media (max-width: 1370px) {
    width: 40%;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    height: 424px;
  }

  @media (max-width: 1050px) {
    right: 0em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 400px;
    height: 350px;
  }

  @media (max-width: 890px) {
    width: 300px;
    height: 250px;
    bottom: 20%;
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    right: 15vw;
    width: 124%;
    height: 97.1vw;
  }
`;
