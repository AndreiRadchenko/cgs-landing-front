import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 14.08em;
  padding-bottom: 21em;
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 10.2em;
    padding-bottom: 22.375em;

    & a {
      font-size: 1em;
      padding: 1.2em 1.51em;
    }
  }
`;

export const Title = styled.h2`
  font-size: 2.5em;
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 140%;
  text-transform: uppercase;
  max-width: 28.75em;
  margin: 0 0 1.3em;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    line-height: 132%;
    margin-bottom: 0.875em;
  }
`;

export const Image = styled.img`
  position: absolute;
  right: 0;
  bottom: 7.35em;
  width: 34.083em;
  height: 22.65em;

  @media ${themes.primary.media.maxMobile} {
    width: 18.44em;
    height: auto;
    bottom: 6.19em;
    right: 0.44em;
  }
`;
