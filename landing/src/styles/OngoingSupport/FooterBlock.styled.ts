import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 11.94em;
  padding-bottom: 15.69em;
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 6.25em;
    padding-bottom: 20.63em;

    & a {
      font-size: 1em;
      padding: 1.195em 2.91em;
    }
  }
`;

export const Title = styled.h2`
  font-weight: inherit;
  font-size: 2.5em;
  line-height: 140%;
  margin: 0 0 1.375em;
  text-transform: uppercase;
  max-width: 22em;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    margin-bottom: 1.46em;
  }
`;

export const Image = styled.img`
  position: absolute;
  right: 2.375em;
  bottom: 3.81em;
  width: 30.3em;

  @media ${themes.primary.media.onlyTabletPortrait} {
    width: 28.3em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 18.94em;
    bottom: 2.75em;
    right: 1em;
  }
`;
