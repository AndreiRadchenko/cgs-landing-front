import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  margin-top: 8.75em;
  position: relative;
  padding-bottom: 9.375em;

  @media ${themes.primary.media.maxTabletLandScape} {
    padding-bottom: 1.25em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 5.5em;
    padding-bottom: 0;
    ::before {
      content: "";
      position: absolute;
      top: -28px;
      left: -30px;
      width: 150%;
      height: 1px;
      background-color: #8f8e93;
      color: black;
    }
  }
`;

export const ContentWrapper = styled.div`
  max-width: 66%;

  @media ${themes.primary.media.maxMobile} {
    max-width: 100%;

    & > a {
      font-size: 1em !important;
      padding: 1.194em 2.91em !important;
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
  margin: 0;
  font-weight: inherit;
  font-size: ${themes.primary.font.size.reviewTitle};
  line-height: 140%;
  text-transform: uppercase;
  br {
    display: none;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    margin: 0;
    white-space: wrap;

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
  margin: 0.833em 0 1.7em;
  @media ${themes.primary.media.maxMobile} {
    font-size: 1.125em;
    margin: 10px 0 28px;
    width: 100%;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  right: 2.56em;

  @media ${themes.primary.media.maxTabletPortrait} {
    position: relative;
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    transform: translateY(0);
    top: 0.31em;
    left: 1.44em;
    width: 22.88em;
  }
`;
