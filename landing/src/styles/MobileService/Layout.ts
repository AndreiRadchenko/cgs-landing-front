import styled from "styled-components";
import themes from "../../utils/themes";

export const Layout = styled.div`
  padding: 0 3.25%;
  font-family: ${themes.primary.font.family.namu};
  background-color: ${themes.primary.colors.blogBackground};
  overflow: hidden;
  @media ${themes.primary.media.minPC} {
    padding: 0 5%;
  }
  @media ${themes.primary.media.minPCFullHD} {
    padding: 0 7%;
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

  @media (max-width: 370px) {
    font-size: 1.35rem;
  }
`;
