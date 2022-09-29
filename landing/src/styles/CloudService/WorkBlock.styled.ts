import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div``;

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
  margin-left: -4em;
  margin-top: 4.31em;
  position: relative;

  @media ${themes.primary.media.maxServiceWeb} {
    padding: 0;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    left: -25px;
    flex-direction: column;
    padding-right: 0;
    max-width: 100%;
    margin: 0;
  }
`;

export const Block = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;

  @media ${themes.primary.media.maxTabletPortrait} {
    width: fit-content;
    left: -30px;

    &:not(:first-child) {
      margin-top: 1.25em;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    left: -20px;
  }
`;

export const Line = styled.div`
  position: relative;
  right: -10px;
  z-index: -1;
  top: -1px;
  background-color: ${themes.primary.colors.comment};
  flex: 1;
  margin-top: 1.15em;
  margin: 1.15em 0 0 25px;
  max-height: 2px;
  width: 100%;

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 60px;
    right: -5px;
    margin-inline: 0;
  }
`;

export const Image = styled.img`
  width: 2.95em;
  height: 2.5em;

  @media ${themes.primary.media.maxMobile} {
    width: 2em;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.375em;
  line-height: 160%;
  text-transform: uppercase;
  white-space: nowrap;
  margin: 0;
  padding-left: 0.5em;

  @media (max-width: 1350px) {
    white-space: normal;
  }

  @media ${themes.primary.media.maxMobile} {
    align-self: center;
    font-size: 1em;
  }
`;
