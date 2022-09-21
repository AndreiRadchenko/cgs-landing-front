import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 10.4em;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 5em;
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
  margin-left: -4em;
  margin-top: 4.31em;

  @media ${themes.primary.media.maxServiceWeb} {
    padding: 0;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    flex-direction: column;
    padding-left: 2.5em;
    padding-right: 0;
    max-width: 100%;
    margin-top: 0em;
  }
`;

export const Block = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;

  @media ${themes.primary.media.maxMobile} {
    &:not(:last-child) {
      margin-bottom: 1.25em;
    }
  }
`;

export const Line = styled.div`
  position: relative;
  right: -50px;
  z-index: -1;
  top: 3px;
  border: 1px solid ${themes.primary.colors.primary};
  width: stretch;
  flex: 1;
  margin: 1.15em 36px 0 15px;
  max-height: 2px;
  max-width: stretch;

  @media ${themes.primary.media.maxTabletPortrait} {
    display: none;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 0.9em;
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
