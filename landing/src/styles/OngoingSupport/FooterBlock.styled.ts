import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  margin-top: 8.8em;
  padding-bottom: 9.5em;
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 5.56em;
    padding-bottom: 16.5em;

    & > a {
      font-size: 1em !important;
      padding: 1.195em 2.91em !important;
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
  font-weight: inherit;
  font-size: 2.5em;
  line-height: 140%;
  margin: 0 0 0.5em;
  text-transform: uppercase;
  max-width: 22em;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    margin-bottom: 1.46em;
  }
`;

export const Text = styled.p`
  width: 64.2vw;
  font-size: 1.5em;
  line-height: 160%;
  margin-block: 0 1.85em;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.125em;
    width: 100%;
  }
`;
export const Image = styled.img`
  position: absolute;
  right: 2.375em;
  bottom: 3.81em;
  width: 26.3em;

  @media ${themes.primary.media.onlyTabletPortrait} {
    width: 20.3em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 18.94em;
    bottom: 2.75em;
    right: 1em;
  }
`;
