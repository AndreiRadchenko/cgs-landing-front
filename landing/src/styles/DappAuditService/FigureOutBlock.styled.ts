import styled from "styled-components";
import themes from "../../utils/themes";

export const ContentWrapper = styled.div`
  position: relative;
  margin-top: ${themes.primary.font.size.secondary};
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;

  @media ${themes.primary.media.maxTabletPortrait} {
    flex-direction: column-reverse;
    margin-block: 1.75em 2.8125em;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: -0.5em;
  width: 36em;
  height: 20em;

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 40%;
    height: 120%;
  }
  @media ${themes.primary.media.minPCFullHD} {
    width: 50%;
    height: 150%;
  }

  @media (max-width: 1060px) {
    top: 4%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    position: relative;
    width: 100%;
    height: 400px;
    margin-top: 0.875em;
    margin-bottom: 4em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 0;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    height: 254px;
  }
`;

export const TextWrapper = styled.div`
  width: 55%;

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 100%;
    margin-bottom: 0.875em;
  }
`;

export const Text = styled.p`
  font-size: 1.5em;
  line-height: 160%;
  margin: 0;

  &:first-child {
    margin-block: 0 0.65em;
  }

  @media (max-width: 1390px) {
    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 1.25em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;

    &:first-child {
      margin-block: 0 0.875em;
    }
  }
`;
