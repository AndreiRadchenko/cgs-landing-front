import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 12.06em;
  position: relative;
  padding-bottom: 19.25em;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 11.31em;
    padding-bottom: 7.125em;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 61%;

  @media ${themes.primary.media.maxMobile} {
    max-width: 100%;

    & a {
      font-size: 1em;
      padding: 1.194em 2.91em;
    }
  }
`;

export const Title = styled.h2`
  margin: 0 0 1.375em;
  font-weight: inherit;
  font-size: ${themes.primary.font.size.reviewTitle};
  line-height: 140%;
  text-transform: uppercase;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    margin: 0 0 1.46em;
  }
`;

export const Image = styled.img`
  position: absolute;
  bottom: 6.44em;
  right: 2.56em;

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    top: 1.56em;
    right: 0.25em;
  }
`;
