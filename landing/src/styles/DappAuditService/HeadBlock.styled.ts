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
      padding: 1em 1.43em;
    }
  }
`;

export const Title = styled.h1`
  margin: 0;
  text-transform: uppercase;
  font-size: 4.125em;
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 120%;

  @media (max-width: 1370px) {
    font-size: 3.5em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 3em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 2.4em;
  }

  @media (max-width: 890px) {
    font-size: 2em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 3em;
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
`;

export const ImageWrapper = styled.div`
  position: absolute;
  bottom: -1%;
  right: 1.375em;
  width: 597px;
  height: 524px;

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
  }
`;
