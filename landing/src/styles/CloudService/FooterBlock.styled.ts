import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  margin-top: 8.75em;
  padding-bottom: 6.94em;
  position: relative;

  @media ${themes.primary.media.maxTabletLandScape} {
    padding-bottom: 0em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 6.8125em;
    padding-bottom: 0;

    & > a {
      font-size: 1em !important;
      padding: 1.195em 2.789em !important;
    }
    ::before {
      content: "";
      position: absolute;
      top: -1.75em;
      left: -30px;
      width: 130%;
      height: 1px;
      background-color: #8f8e93;
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
  bottom: 1em;
  width: 25.75em;
  height: 25em;

  @media ${themes.primary.media.maxTabletLandScape} {
    position: relative;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 23.125em;
    height: auto;
    top: 1em;
    left: -1.25em;
  }
`;

export const Title = styled.h3`
  font-size: 2.5em;
  font-weight: inherit;
  line-height: 140%;
  text-transform: uppercase;
  margin: 0;
  max-width: 70%;

  br {
    display: none;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    line-height: 132%;
    margin-bottom: 10px;
    max-width: 100%;

    br {
      display: block;
    }
  }
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.5em;
  line-height: 160%;
  margin: 0.833em 0 1.667em;
  max-width: 70%;
  @media ${themes.primary.media.maxMobile} {
    font-size: 1.125em;
    margin: 10px 0 28px;
    max-width: 100%;
  }
`;
