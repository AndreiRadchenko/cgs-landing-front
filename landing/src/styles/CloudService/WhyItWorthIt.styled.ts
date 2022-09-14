import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin: 0 1.44em 0 0;
  max-width: 100%;

  @media ${themes.primary.media.maxMobile} {
    margin: 8.5em 0 0;
  }
`;

export const BlockWrapper = styled.div`
  margin-top: 3.5em;
  padding-top: 0.75em;
  display: flex;
  justify-content: space-between;
  column-gap: 50px;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    margin-top: 2.375em;
  }
`;

export const Block = styled.div`
  max-width: 33.2em;
  position: relative;

  &:first-child {
    padding-left: 1em;
  }

  & > div {
    min-width: 21em;

    @media ${themes.primary.media.maxServiceWeb} {
      min-width: auto;
    }
  }
  & > img {
    top: 13.4em;
    left: 14.5em;

    @media (max-width: 1300px) {
      left: 10em;
    }

    @media ${themes.primary.media.maxTabletLandScape} {
      left: 5em;
    }

    @media ${themes.primary.media.maxTabletPortrait} {
      left: 2em;
      top: 15em;
    }
  }

  &:nth-child(2) {
    padding-left: 0.063em;

    & > img {
      top: 2.2em;
      left: 16em;

      @media (max-width: 1300px) {
        left: 13em;
      }

      @media ${themes.primary.media.maxTabletLandScape} {
        left: 7em;
        top: 7em;
      }

      @media ${themes.primary.media.maxTabletPortrait} {
        left: 5em;
        top: 9em;
      }
    }
    & > div:first-child {
      margin-top: 11.7em;
    }

    @media ${themes.primary.media.maxMobile} {
      padding-left: 0;
      & > div:first-child {
        margin-top: 0;
      }
    }
  }
  :not(:last-child) {
    & > div {
      max-width: 19.5em;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    &:not(:last-child) {
      margin-bottom: 2.125em;
    }
    & > div img {
      width: 1.7em;
    }
    &:first-child {
      padding: 0;
      & img {
        width: 1.3em;
      }
    }
  }
`;

export const TitleWrapper = styled.div`
  position: relative;
`;

export const Title = styled.p`
  margin: 0;
  margin-left: 1.67em;
  font-size: 1.5em;
  line-height: 160%;
  -webkit-text-stroke: 0.2px black;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.25em;
  }
`;

export const BlockText = styled.div`
  font-size: 1.125em;
  line-height: 160%;
  margin: 1.28em 0 0 0;
  max-width: 21.95em;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    margin-top: 0.375em;
  }

  & > p {
    margin: 0;
  }
`;

export const Svg = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateX(-50%);

  @media ${themes.primary.media.maxMobile} {
    transform: translateX(0);
  }
`;

export const Image = styled.img`
  position: absolute;

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;
