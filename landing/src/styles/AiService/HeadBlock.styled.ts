import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.section`
  position: relative;
  margin-top: 7.6em;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 1em;
    display: flex;
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: -5em;
  right: -0.6em;
  width: 565px;
  height: 617px;

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
