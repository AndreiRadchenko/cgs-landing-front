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
  @media ${themes.primary.media.onlyLaptop} {
    top: 20px;
    left: 40px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 550px;
    height: 130%;
  }

  @media (max-width: 1060px) {
    top: 4%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    position: relative;
    width: 100%;
    height: 400px;
    margin-top: 0.875em;
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
  font-size: ${themes.primary.font.size.oneAndHalf};
  line-height: 160%;
  margin: 0;

  &:first-child {
    margin-block: 0 1.625em;
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
  top: -74%;
  right: 3.125em;
  height: 400px;
  width: 1237px;

  @media ${themes.primary.media.minPC} {
    width: 100%;
    height: 470px;
    right: 4em;
    top: -70%;
  }
  
  @media ${themes.primary.media.minPCFullHD} {
    height: 670px;
    width: 1600px;
    right: 5vw;
    top: -95%;
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
    width: 992px;
    right: 1vw;
    top: -155px;
  }

  @media (max-width: 1100px) {
    right: 0vw;
    top: -145px;
  }

  @media (max-width: 1050px) {
    top: -160px;
    width: 900px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 1.8125em;
    position: relative;
    right: 0;
    top: 0;
    width: 100%;
    scale: 1.4;
    margin-left: 70px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-left: 50px;
    height: 340px;
    scale: 1.4;
  }
`;

export const WhyIsAuditImportantWrapper = styled.div`
  margin-top: ${themes.primary.spacing.servicesGlobalMarginBetweenBlocks};

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-top: 8em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 0;
    position: relative;
  }
`;
