import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.section`
  margin-top: 3.15em;
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 0.65em;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${themes.primary.media.maxMobile} {
    justify-content: flex-start;
    flex-direction: column;
  }
`;

export const TextContainer = styled.div`
  padding-top: 8em;
  width: 50.6%;

  @media ${themes.primary.media.maxTabletPortrait} {
    padding-top: 4em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    padding-top: 0;
    margin-bottom: 4.37em;
  }
`;

export const Image = styled.img`
  width: 61em;
  position: relative;
  height: 35.7em;

  @media (min-width: 1560px) {
    height: 36.5em;
  }

  @media (min-width: 2400px) {
    height: 52em;
  }

  @media ${themes.primary.media.maxLaptop} {
    width: 50%;
  }

  @media (max-width: 1200px) {
    height: 38.9em;
  }

  @media (max-width: 992px) {
    right: -4em;
    height: 25em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 121%;
    right: 13.5%;
  }

  @media (max-width: 475px) {
    height: 345.5px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-left: 2.5em;
    width: 55.6em;
    height: 30.3em;
  }
`;
