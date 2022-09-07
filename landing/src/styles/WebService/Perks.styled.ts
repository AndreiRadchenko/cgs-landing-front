import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 8.75em;
  width: 98.5%;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 10.375em;

    h2 {
      line-height: 233%;
    }
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 4.25em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 3em;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 2.375em;
    row-gap: 2.5em;
    flex-direction: column;

    br {
      display: none;
    }
  }
`;

export const TextBlock = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-basis: 30%;

  &:nth-child(4) {
    justify-content: flex-end;
  }

  &:nth-child(5) {
    justify-content: flex-start;
  }

  &:nth-child(4) {
    flex-basis: 43%;
  }

  &:nth-child(5) {
    flex-basis: 45%;
  }

  @media ${themes.primary.media.maxServiceWeb} {
    align-items: flex-start;

    br {
      display: none;
    }

    &:nth-child(5) {
      br {
        display: block;
      }
    }
  }

  @media ${themes.primary.media.maxMobile} {
    flex-basis: 100%;
    position: relative;

    &:nth-child(4),
    &:nth-child(5) {
      flex-basis: 100%;
      align-items: flex-start;
    }
  }
`;

export const BigDigit = styled.div`
  font-size: 5em;
  color: ${themes.primary.colors.bigDigit};
  -webkit-text-stroke: 1.6px ${themes.primary.colors.primary};
  text-shadow: 7px 2px 0px ${themes.primary.colors.primary};
  margin-right: 22px;

  @media ${themes.primary.media.maxMobile} {
    position: absolute;
    left: 0;
    font-size: 3.75em;
    width: 100px;
    margin: 0;
  }
`;

export const TextContent = styled.div`
  font-size: 1.375em;
  line-height: 160%;
  margin-bottom: 0.25em;

  @media ${themes.primary.media.minPC} {
    font-size: 1.7em;
  }
  @media ${themes.primary.media.maxServiceWeb} {
    font-size: 1.5em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.125em;
    padding-left: 3.2em;
    margin-top: 0.5em;
    margin-right: auto;
  }
`;
