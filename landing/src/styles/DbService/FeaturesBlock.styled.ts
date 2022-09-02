import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 21.125em;
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 11.25em;
  }
`;

export const Subtitle = styled.h2`
  margin: 0;
  font-size: 2.125em;
  text-transform: uppercase;
  width: fit-content;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
  }
`;

export const TextContent = styled.div`
  font-size: 1.125em;
  line-height: 160%;
  padding-top: 1.65em;

  & span {
    &:nth-child(1) {
      color: ${themes.primary.colors.mainGradientColor2};
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 0.875em;
    padding-top: 2.71em;

    & span:not(:first-child) {
      padding-top: 1.64em;
      & > br {
        display: none;
      }
    }
  }
`;

export const ContentWrapper = styled.div`
  padding-left: 7.25em;
  padding-right: 6.2em;
  display: flex;
  justify-content: space-between;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    row-gap: 4.56em;
    padding: 0 0 0 2.75em;
  }
`;

export const BgImage = styled.img`
  position: absolute;
  left: -8.5em;

  &:nth-child(2) {
    display: none;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 120em;
    height: 31em;
    left: -14.5em;
    top: -1.7em;

    &:nth-child(2) {
      display: block;
      height: 30em;
      top: 27.5em;
      left: -61.3em;
    }
  }
`;
