import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 9.5em;
  position: relative;
  display: flex;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 1.4em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Content = styled.div`
  & > a {
    @media ${themes.primary.media.maxMobile} {
      font-size: 1em;
      padding: 1.2em 1.51em;
    }
  }
`;

export const Title = styled.h1`
  font-size: 4.125em;
  line-height: 120%;

  margin: 0;
  text-transform: uppercase;
  font-weight: inherit;

  br {
    display: none;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 3.125em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 2.75em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 2.5em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    & br {
      display: block;
    }
  }
`;

export const Description = styled.p`
  font-size: 1.375em;
  line-height: 160%;
  margin: 1.279em 0 2.365em;

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 1.175em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1em;
    max-width: 450px;

    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    max-width: 95%;
    margin: 1.5em 0 1.75em;
  }
`;
export const ImageWrapper = styled.div`
  position: absolute;
  top: -17%;
  right: 3%;
  width: 600px;
  height: 530px;

  @media (min-width: 2200px) {
    width: 30%;
    height: 730px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    top: -25%;
    width: 40%;
    height: 170%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 50%;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 2.625em;
    position: relative;

    width: 22.3em;
    height: 19.125em;
  }
`;
