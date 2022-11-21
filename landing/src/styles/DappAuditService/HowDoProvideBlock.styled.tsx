import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.div`
  margin-block: calc(
      2 * ${themes.primary.spacing.servicesGlobalMarginBetweenBlocks}
    )
    ${themes.primary.spacing.servicesGlobalMarginBetweenBlocks};

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-top: calc(
      1.5 * ${themes.primary.spacing.servicesGlobalMarginBetweenBlocks}
    );
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-block: 6.25em 5.25em;
  }
`;

export const ItemContainer = styled.div`
  z-index: 2;

  &.first {
    margin-top: 1.3em;
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
  left: -51px;
  width: 100vw;

  @media (min-width: 2560px) {
    width: 100%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    display: none;
  }
`;

export const BgImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: -3.1875em;
  width: 100vw;

  @media ${themes.primary.media.minPCFullHD} {
    height: 90vw;
  }
`;

export const SubContentWrapper = styled.div`
  margin-inline: 4em 7.5em;
  position: relative;
  top: -6px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (min-width: 1480px) {
    margin-inline: 5em 9em;
    padding-top: 0.2%;
  }

  @media (min-width: 1650px) {
    margin-inline: 5em 10em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding: 0;
    margin-inline: 5em;
  }

  @media (min-width: 2000px) {
    margin-inline: 7em 8em;
  }

  @media (min-width: 2400px) {
    margin-inline: 7em 10em;
  }

  @media (min-width: 2560px) {
    margin-inline: 6% 16%;
  }

  @media (max-width: 1400px) {
    margin-inline: 3em 7em;
  }

  @media (max-width: 1280px) {
    padding-top: 0.4%;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    padding-top: 0.2%;
    margin-inline: 2em 4em;
  }

  @media (max-width: 1100px) {
    padding-top: 0;
    margin-inline: 2em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin: 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 1.75em;
    margin-bottom: 2.5em;
  }
`;

export const SubContainer = styled.div`
  @media (min-width: 1650px) {
    font-size: 1.1em;
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
    & br {
      display: none;
    }
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
  margin-top: 78px;

  @media (min-width: 2000px) {
    margin-top: 150px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-top: 50px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: -1.75em;
  }
`;

export const ThirdSubtitleContainer = styled.div`
  position: relative;
  top: -7%;
  margin-left: 55%;

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
    margin: 2.3125em 0 0 0;
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
