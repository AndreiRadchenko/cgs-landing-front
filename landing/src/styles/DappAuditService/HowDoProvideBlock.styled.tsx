import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.div`
  margin-block: calc(
      2 * ${themes.primary.spacing.servicesGlobalMarginBetweenBlocks}
    )
    ${themes.primary.spacing.servicesGlobalMarginBetweenBlocks};
`;

export const ItemContainer = styled.div`
  z-index: 2;
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
`;

export const OptionalContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.625em;
  margin-top: 7px;
  position: relative;
  top: 13px;
  &.optional {
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
`;

export const Description = styled.div`
  margin-top: 5px;
  font-size: 1.125em;
  line-height: 160%;
`;

export const SubtitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 280px;
  width: 562px;
  margin-right: 3.5625em;
`;

export const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  height: 723px;
  margin-top: ${themes.primary.spacing.tertiary};
`;

export const BgImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: -3.1875em;
  width: 100vw;
  height: 723px;
`;

export const SubContentWrapper = styled.div`
  margin-inline: 4em 7.5em;
  position: relative;
  top: -6px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const SubContainer = styled.div``;

export const SubTitle = styled.div`
  font-size: ${themes.primary.font.size.oneAndHalf};
  color: ${themes.primary.colors.darkBlue};
  margin-bottom: 0.65em;
`;

export const SubText = styled.div`
  font-size: 1.125em;
  line-height: 160%;
`;

export const SecondSubtitleContainer = styled.div`
  margin-top: 78px;
`;

export const ThirdSubtitleContainer = styled.div`
  position: relative;
  top: -7%;
  margin-left: 55%;
`;
