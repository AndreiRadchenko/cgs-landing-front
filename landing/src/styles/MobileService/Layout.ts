import styled from "styled-components";
import themes from "../../utils/themes";

export const LocalLayout = styled.div`
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.2em;
  }
  @media (min-width: 2200px) {
    font-size: 1.4rem;
  }
`;

export const Subtitle = styled.h2`
  margin: 0;
  line-height: 140%;
  font-size: 2.5em;
  text-transform: uppercase;
  font-weight: inherit;

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 2.4em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 1.5rem;
    white-space: nowrap;

    &.footer {
      white-space: pre-wrap;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    line-height: 233%;
    white-space: normal;

    & .last-part > div {
      top: 20%;
    }

    display: none;
  }

  @media (max-width: 370px) {
    font-size: 1.35rem;
  }
`;

export const VisibleSubtitle = styled(Subtitle)`
  display: block;
`;
