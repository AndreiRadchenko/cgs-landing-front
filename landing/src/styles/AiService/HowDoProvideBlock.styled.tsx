import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.section`
  margin-block: 10.4em 7.75em;

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-top: calc(
      1.5 * ${themes.primary.spacing.servicesGlobalMarginBetweenBlocks}
    );
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-block: 3.75em 111px;
  }
`;

export const ItemContainer = styled.div`
  z-index: 2;

  &.first {
    margin-top: 0.3em;
  }

  @media (min-width: 1650px) {
    font-size: 1.1em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.05em;
  }

  @media (max-width: 1400px) {
    font-size: 0.9em;
  }

  @media (max-width: 1280px) {
    font-size: 0.8em;
  }

  @media (max-width: 1100px) {
    font-size: 0.7em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1em;

    &.first {
      margin-top: 0.1em;
    }
  }
`;

export const ItemTitleContainer = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
`;

export const BigDigit = styled.div`
  font-size: 5em;
  color: ${themes.primary.colors.bigDigit};
  -webkit-text-stroke: 1px ${themes.primary.colors.primary};
  text-shadow: 7px 2px 0px ${themes.primary.colors.primary};
  line-height: 120%;
`;

export const ItemTitle = styled.h4`
  font-size: ${themes.primary.font.size.secondary};
  line-height: 170%;
  margin: 0;
  text-transform: uppercase;
  color: ${themes.primary.colors.darkBlue};

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: ${themes.primary.font.size.oneAndHalf};
    line-height: 115%;
    margin-top: 20px;

    &.optional {
      margin-top: 0px;
    }
  }
`;

export const OptionalContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.375em;
  margin-top: 7px;
  position: relative;
  top: 13px;

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-left: 1em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 0;
    top: 10px;
  }
`;

export const OptionalText = styled.div`
  position: relative;
  top: -15px;
  font-size: 1.125em;
  line-height: 160%;
  color: ${themes.primary.colors.comment};
  opacity: 0;

  &.optional {
    opacity: 1;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    top: 0;
  }
`;

export const Description = styled.div`
  margin-top: 5px;
  font-size: 1.125em;
  line-height: 160%;
  max-width: 34.1em;

  &.first {
    max-width: 32.2em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1em;
    & br {
      display: none;
    }
  }
`;

export const SubtitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${themes.primary.media.maxTabletPortrait} {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 280px;
  width: 562px;
  margin-right: 3.5625em;

  @media (min-width: 2200px) {
    height: 380px;
    width: 662px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    height: 180px;
    width: 362px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 100%;
  }
`;

export const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-top: ${themes.primary.spacing.tertiary};

  @media ${themes.primary.media.maxTabletLandScape} {
    height: 600px;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 3.125em;
    height: auto;
  }
`;

export const BgImage = styled.img`
  object-fit: contain;
  position: absolute;
  left: -93px;
  width: 110vw;

  @media (min-width: 2560px) {
    width: 100%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    display: none;
  }
`;

export const SubContentWrapper = styled.div`
  margin-inline: 4.5em 5.3em;
  position: relative;
  top: -8px;
  display: flex;
  justify-content: space-between;
  height: 300px;

  @media (min-width: 1480px) {
    margin-inline: 6em 6.5em;
    padding-top: 0.2%;
  }

  @media (min-width: 1650px) {
    margin-inline: 5em 10em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding: 0;
    margin-inline: 7em 6em;
  }

  @media (min-width: 2000px) {
    margin-inline: 7em 8em;
  }

  @media (min-width: 2100px) {
    margin-inline: 7em 10em;
  }

  @media (min-width: 2200px) {
    margin-inline: 7em 6em;
  }

  @media (min-width: 2400px) {
    margin-inline: 7em 10em;
  }

  @media (min-width: 2560px) {
    margin-inline: 6% 20%;
  }

  @media (max-width: 1440px) {
    margin-inline: 4.5em 4.5em;
  }

  @media (max-width: 1400px) {
    margin-inline: 4em 3.5em;
  }

  @media (max-width: 1350px) {
    margin-inline: 4em 2em;
  }

  @media (max-width: 1280px) {
    padding-top: 0.4%;
    margin-inline: 3em 3em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    padding-top: 0.2%;
    margin-inline: 2.5em 2em;
  }

  @media (max-width: 1199px) {
    margin-inline: 2.5em 1em;
  }

  @media (max-width: 1150px) {
    margin-inline: 2.5em -0.5em;
  }

  @media (max-width: 1100px) {
    padding-top: 0;
    margin-inline: 2em 0;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin: 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 1.75em;
    margin-bottom: 27px;
  }
`;

export const SubContainer = styled.div`
  max-width: 30em;

  @media (min-width: 1601px) {
    font-size: 1.1em;
    &:nth-child(2) {
      margin-top: 60px;
    }
  }

  @media (min-width: 1800px) {
    &:nth-child(2) {
      margin-top: 75px;
    }
  }

  @media (max-width: 1600px) {
    max-width: 513px;
    &:nth-child(2) {
      margin-top: 55px;
    }
  }

  @media (max-width: 1400px) {
    font-size: 0.9em;
  }

  @media (max-width: 1280px) {
    font-size: 0.8em;
    max-width: 450px;
    &:nth-child(2) {
      margin-top: 0px;
    }
  }

  @media (max-width: 1100px) {
    font-size: 0.7em;
    max-width: 400px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1em;
    & br {
      display: none;
    }
  }
  &:last-child {
    margin-right: 15px;
  }
`;

export const SubTitle = styled.div`
  font-size: ${themes.primary.font.size.oneAndHalf};
  color: ${themes.primary.colors.darkBlue};
  margin-bottom: 0.65em;
  position: relative;

  @media ${themes.primary.media.maxTabletPortrait} {
    display: flex;
    font-size: 1.125em;
    left: -51px;
    column-gap: 15px;
  }

  @media ${themes.primary.media.maxMobile} {
    left: -20px;
  }
`;

export const SubText = styled.div`
  font-size: 1.125em;
  line-height: 160%;

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1em;
  }
`;

export const SecondSubtitleContainer = styled.div`
  margin-top: 76px;

  @media (min-width: 2000px) {
    margin-top: 110px;
  }

  @media (max-width: 1920px) {
    margin-top: 55px;
  }

  @media (max-width: 1800px) {
    margin-top: 2em;
  }

  @media (max-width: 1600px) {
    margin-top: -0.7em;
  }

  @media (max-width: 1440px) {
    margin-top: -2.5em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-top: -5.5em;
  }

  @media (max-width: 1100px) {
    margin-top: -6.5em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 0.1em;
  }
`;

export const ThirdSubtitleContainer = styled.div`
  position: relative;
  top: -50px;
  margin-left: 56%;

  @media ${themes.primary.media.minPC} {
    top: -3%;
  }

  @media (min-width: 2400px) {
    top: 0;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    top: 0;
    margin: 14px 0 0 0;
  }
`;

export const MobilePointWrapper = styled.div`
  display: none;

  @media ${themes.primary.media.maxTabletPortrait} {
    display: flex;
    align-items: center;
  }
`;

export const PointLine = styled.div`
  width: 30px;
  border-bottom: 1px solid ${themes.primary.colors.comment};
`;

export const PointDiamond = styled.div`
  width: 21px;
  height: 21px;
  transform: rotate(45deg);
  background: linear-gradient(
    90deg,
    ${themes.primary.colors.mainGradientColor1} 13.67%,
    ${themes.primary.colors.mainGradientColor2} 90.39%
  );

  box-shadow: 5.41609px 1.54745px 0px ${themes.primary.colors.primary};

  border: 0.951684px solid ${themes.primary.colors.primary};

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 19px;
    height: 19px;
  }
`;
