import styled from "styled-components";
import themes from "../../utils/themes";

export const LocalLayout = styled.div`
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.2em;
  }
`;

export const Subtitle = styled.h2`
  margin: 0;
  line-height: 140%;
  font-size: 2.5em;
  text-transform: uppercase;
  font-weight: inherit;

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
  }

  @media (max-width: 370px) {
    font-size: 1.35rem;
  }
`;
