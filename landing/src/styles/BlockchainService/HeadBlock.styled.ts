import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  margin-top: 7.75em;
  position: relative;

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

export const ButtonWrapper = styled.div`
  display: flex;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 4.125em;
  line-height: 132%;
  display: inline-block;

  margin: 0;
  text-transform: uppercase;
  font-weight: inherit;
  width: 12.3em;
  height: 2.7em;

  span:first-child {
    br {
      display: none;
    }
  }

  @media (min-width: 1920px) {
    height: 4em;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    max-width: 10em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 2.5em;
    line-height: 48px;
    width: 100%;
    height: 145px;
    
    & .last-part {
      top: 14px;
    }

    span:first-child {
      br {
        display: block;
      }
    }
  }
`;

export const Description = styled.p`
  font-size: 1.375em;
  line-height: 160%;
  margin: 1em 0 1.9em;
  max-width: 600px;

  @media (min-width: 1920px) {
    margin-top: -3em;
  }

  @media ${themes.primary.media.minPC} {
    max-width: 40%;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    max-width: 60%;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    max-width: 95%;
    margin: 1em 0 1.75em;
  }

  @media (max-width: 475px) {
    max-width: 100%;
  }
`;

export const Image = styled.div`
  position: absolute;
  top: -7.79em;
  right: -5.3em;
  width: 42em;

  @media (min-width: 1920px) {
    top: -4em;
    right: 2em;
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    left: 25px;
    top: 1em;
    width: 22.3em;
    height: 19.125em;
    margin-bottom: 5em;
  }
`;

export const ImageTV = styled.img`
  position: absolute;
  z-index: 2;

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 60%;
    top: 11em;
    right: 1em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 70%;
    top: 2em;
    right: 1%;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    top: -2em;
  }
`;

export const ImageCrypto = styled.img`
  position: absolute;
  z-index: 1;
  top: 240px;
  left: 115px;

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 11em;
    height: 8em;
    left: 20em;
    top: 20.5em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 12em;
    height: 10em;
    top: 13em;
    left: 17.7em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 9em;
    height: 7em;
    top: 6.5em;
    left: 4em;
}
`;