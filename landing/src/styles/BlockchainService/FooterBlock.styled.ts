import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  margin-top: 8.8em;
  padding-bottom: 9.4em;
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 2em;
    padding-bottom: 18.2em;

    & > a {
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

export const Title = styled.h2`
  font-size: 2.5em;
  font-weight: inherit;
  line-height: 140%;
  text-transform: uppercase;
  max-width: 28.75em;
  margin-bottom: 20px;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.45em;
    line-height: 132%;
    margin-bottom: 0.5em;
    width: 14.5em;
  }
`;

export const Description = styled.p`
  width: 60vw;
  font-size: 1.5em;
  line-height: 160%;
  margin-block: 0 1.7em;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.125em;
    width: 100%;
    margin-bottom: 28px;
  }
`;

export const Image = styled.img`
  position: absolute;
  right: -2em;
  bottom: 7.35em;
  width: 25.5em;
  height: 17em;

  @media ${themes.primary.media.maxTabletLandScape} {
    bottom: 4em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 18.44em;
    height: auto;
    bottom: 1.56em;
    right: -0.9em;
  }
`;
