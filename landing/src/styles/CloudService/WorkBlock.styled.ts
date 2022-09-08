import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 12.5em;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 11.25em;
  }
`;

export const Title = styled.h2`
  font-size: 2.5em;
  font-weight: inherit;
  margin: 0;
  text-transform: uppercase;
  line-height: 140%;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    line-height: 233%;
  }
`;

export const BlockWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 1.67em;
  padding-left: 4.5em;
  margin-top: 4.31em;

  @media ${themes.primary.media.maxServiceWeb} {
    padding: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    padding-left: 2.5em;
    padding-right: 0;
    max-width: 100%;
    margin-top: 2.375em;
  }
`;

export const Block = styled.div`
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    &:not(:last-child) {
      margin-bottom: 2.125em;
    }
  }

  &::before {
    content: "";
    position: absolute;
    display: block;
    min-width: 2em;
    width: stretch;
    border: 1px solid black;
    position: absolute;
    top: 50%;
    right: 85%;
    @media ${themes.primary.media.maxServiceWeb} {
      width: 2em;
    }

    @media ${themes.primary.media.maxMobile} {
      top: 45%;
      left: -5em;
    }
  }

  &:last-child {
    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 8.17em;
      border: 1px solid black;
      position: absolute;
      top: 50%;
      right: -10em;

      @media ${themes.primary.media.maxMobile} {
        display: none;
      }
    }
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-40%);
  left: 1.5em;
  width: 2.95em;

  @media ${themes.primary.media.maxMobile} {
    width: 2.5em;
    left: -3em;
    transform: translateY(-50%);
  }
`;

export const Subtitle = styled.p`
  font-size: 1.375em;
  line-height: 160%;
  text-transform: uppercase;
  margin: 0;
  padding-left: 3.5em;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    padding-left: 0;
  }
`;
