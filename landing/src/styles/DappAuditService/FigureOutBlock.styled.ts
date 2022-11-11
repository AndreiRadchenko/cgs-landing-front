import styled from "styled-components";
import themes from "../../utils/themes";

export const ContentWrapper = styled.div`
  position: relative;
  margin-top: ${themes.primary.font.size.secondary};
  display: flex;
  justify-content: flex-end;

  @media ${themes.primary.media.maxTabletPortrait} {
    flex-direction: column-reverse;
  }
`;
export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 678px;
  height: 432px;

  @media ${themes.primary.media.minPCFullHD} {
    width: 50%;
    height: 150%;
  }

  @media (max-width: 1390px) {
    width: 600px;
    height: 140%;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 60%;
    height: 130%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    position: relative;
    width: 100%;
    height: 400px;
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
  font-size: ${themes.primary.font.size.oneAndHalf};
  line-height: 160%;
  margin: 0;

  &:first-child {
    margin-block: 0.5em 1.625em;
  }

  @media (max-width: 1390px) {
    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 1.25em;
  }
`;

export const LowerContentWrapper = styled.div`
  display: flex;
  position: relative;

  @media ${themes.primary.media.maxTabletPortrait} {
    flex-direction: column;

    &:first-child br {
      display: none;
    }
  }
`;

export const WhyIsAuditImportantImageWrapper = styled.div`
  position: absolute;
  top: -115%;
  right: 3.125em;
  height: 400px;
  width: 1237px;

  @media ${themes.primary.media.minPC} {
    width: 100%;
    height: 470px;
    right: 4em;
    top: -90%;
  }

  @media ${themes.primary.media.minPCFullHD} {
    height: 670px;
    width: 1600px;
    right: 5vw;
    top: -100%;
  }

  @media (min-width: 2200px) {
    height: 670px;
    width: 90%;
    right: 10vw;
    top: -5em;
  }

  @media (max-width: 1390px) {
    width: 90%;
    top: -11em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    height: 470px;
    width: 100%;
    right: 1vw;
    top: -105%;
  }

  @media (max-width: 1100px) {
    height: 470px;
    width: 100%;
    right: 0vw;
    top: -140%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    position: relative;
    right: 0;
    top: 0;
  }
`;

export const WhyIsAuditImportantWrapper = styled.div`
  margin-top: ${themes.primary.spacing.servicesGlobalMarginBetweenBlocks};

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-top: 8em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    position: relative;
  }
`;
