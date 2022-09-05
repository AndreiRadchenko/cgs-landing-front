import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 16.25em;

  @media ${themes.primary.media.onlyTabletPortrait} {
    margin-top: -9em;
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
    margin-top: 6em;
  }
`;

export const Title = styled.h2`
  font-weight: inherit;
  font-size: 2.5em;
  line-height: 140%;
  text-transform: uppercase;
  margin: 0;
  max-width: 15.75em;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    line-height: 132%;
    width: 14.6em;
  }
`;

export const TextWrapper = styled.div`
  margin: 0 -8em;

  @media ${themes.primary.media.onlyTabletLandScape} {
    margin: 0 -5em;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    margin: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    margin: 2.375em 0 0 3.5em;
  }
`;

export const Text = styled.p`
  font-size: 1.375em;
  line-height: 160%;
  text-transform: uppercase;
  min-width: max-content;
  margin: 0;

  position: relative;

  @media ${themes.primary.media.onlyTabletPortrait} {
    min-width: auto;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    margin-bottom: 2.18em;
  }
`;

export const Row1 = styled.div`
  display: grid;
  grid-template-columns: 0.85fr 1fr 0.7fr 1.4fr 0.7fr 1.6fr 0.9fr;
  margin: 4.75em 0 2.94em;

  @media ${themes.primary.media.maxMobile} {
    display: block;
    margin: 0;
    position: relative;

    & > div:last-child {
      display: none;
    }
  }
`;

export const Row2 = styled.div`
  display: grid;
  grid-template-columns: 1.13fr 0.9fr 0.45fr 0.9fr 1.2fr;

  @media ${themes.primary.media.maxMobile} {
    display: block;
    margin: 0;
    position: relative;

    & > div:last-child {
      display: none;
    }
  }
`;

export const Line = styled.div`
  border: 1px solid ${themes.primary.colors.primary};
  width: stretch;
  flex: 1;
  margin: 1.15em 36px 0 15px;
  max-height: 2px;
  max-width: stretch;

  @media ${themes.primary.media.maxMobile} {
    margin: 0;
    position: relative;
    top: 0.93em;
    left: -105%;
  }
`;

export const Image = styled.img`
  position: absolute;
  left: -2.5em;
  top: 0.1em;

  @media ${themes.primary.media.maxMobile} {
    width: 2em;
    top: 0;
  }
`;
