import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  margin-top: 12.8em;
  padding-bottom: 15.69em;
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 4.5em;
    padding-bottom: 0;

    & > a {
      font-size: 1em !important;
      padding: 1.195em 2.789em !important;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
  }
`;

export const Content = styled.div``;

export const Image = styled.img`
  position: absolute;
  right: 1.625em;
  bottom: 1.31em;
  width: 32.25em;
  height: 34em;

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    width: 23.125em;
    height: auto;
    top: 1em;
    left: -1.25em;
    margin-bottom: 2.56em;
  }
`;

export const Title = styled.h3`
  font-size: 2.5em;
  font-weight: inherit;
  line-height: 140%;
  text-transform: uppercase;
  margin: 0 0 1.3em;
  max-width: 18.225em;

  br {
    display: none;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    line-height: 132%;
    margin-bottom: 1.46em;

    br {
      display: block;
    }
  }
`;
