import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 12.5em;
  position: relative;
  width: 100%;

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 5.2em;
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
    display: none;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.25em;
  line-height: 160%;
  text-transform: uppercase;
  color: ${themes.primary.colors.mainGradientColor2};
  margin: 0;
`;

export const Text = styled.p`
  font-size: 1.125em;
  line-height: 160%;
  margin-block: 0.45em 2em;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    line-height: 132%;
    margin-block: 0.38em 1.3em;
  }
  @media (max-width: 400px) {
    font-size: 0.95em;
  }
`;

export const ContentWrapper = styled.div`
  display: inline-block;
  margin-left: 2.35em;

  @media ${themes.primary.media.maxMobile} {
    margin-left: 0;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 105%;
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
      width: 100%;
      flex-basis: auto;

      &:nth-child(2n + 1) {
        left: -4em;
        p {
          margin-left: 3.94rem;

          &:nth-child(1) {
            margin-right: -2rem;
          }
        }
      }

      &:nth-child(2) {
        right: -0.7em;
        p {
          margin-left: 1.4rem;
          margin-right: 2em;
        }
      }

      &:nth-child(4) {
        right: -2.4em;
        p {
          margin-left: 0.6rem;
          margin-right: 1.5em;

          &:nth-child(2) {
            margin-right: 4em;
          }
        }
      }
    }
  }
`;
