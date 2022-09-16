import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 12.5em;
  position: relative;
  width: 100%;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 4.75em;
  }
`;

export const BlockContainer = styled.img`
  width: 100%;

  @media ${themes.primary.media.maxMobile} {
    max-height: 45px;
    max-width: 350px;
  }
`;

export const Mario = styled.img`
  width: 107vw;
  position: relative;
  left: -5vw;
  margin-top: 2em;

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const MobileMario = styled.img`
  width: 102vw;
  position: relative;
  left: -5vw;
  margin-top: 5em;
  display: none;
  @media ${themes.primary.media.maxMobile} {
    display: block;
  }
`;

export const Title = styled.h2`
  font-weight: inherit;
  font-size: 2.5em;
  line-height: 140%;
  text-transform: uppercase;
  margin: 0;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    line-height: 233%;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.25em;
  line-height: 160%;
  text-transform: uppercase;
  color: ${themes.primary.colors.mainGradientColor2};
  margin: 0;
  margin-left: 2.35em;
`;

export const Text = styled.p`
  font-size: 1.125em;
  line-height: 160%;
  margin: 0.45em 0 2em 3em;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    line-height: 132%;
    margin: 0.38em 0 1.3em 3em;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin: 0 auto;
  justify-content: space-around;
  row-gap: 2em;
  margin-top: 4em;
  column-gap: 3em;

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    font-size: 1rem;
    flex-direction: column;
    margin-top: 1em;
    row-gap: 2.5em;
  }

  & > div {
    margin: 0;
    flex-basis: 29%;
    position: relative;

    @media ${themes.primary.media.maxMobile} {
      max-width: 70%;
      flex-basis: auto;

      &:nth-child(2n) {
        right: -9em;

        p {
          margin-left: 0;
          margin-right: 1.5em;
        }
      }

      &:nth-child(2n + 1) {
        left: -3em;
      }
    }

    &:nth-child(2) {
      margin-top: 7.17em;

      @media ${themes.primary.media.maxMobile} {
        margin: 0;
      }
    }

    @media ${themes.primary.media.maxLowScreenMobile} {
      &:nth-child(2n) {
        right: -7em;
      }
    }
  }
`;
