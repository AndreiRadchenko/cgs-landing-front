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

  &.perksTitle,
  &.needDomain {
    font-size: 40px;
    width: 11.9em;
  }

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
    &.needDomain {
      display: none;
    }
    line-height: 233%;
    white-space: normal;
    display: none;
    & .last-part > div {
      top: 20%;
    }
  }

  @media (max-width: 370px) {
    font-size: 1.35rem;
  }
`;

export const VisibleSubtitle = styled(Subtitle)`
  display: block;
`;
