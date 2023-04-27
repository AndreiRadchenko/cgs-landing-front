import styled, { css } from "styled-components";
import themes from "../utils/themes";
import { IValue } from "../types/Admin/AdminRateCard.types";

interface IActiveAccordion {
  readonly isActive?: boolean;
}

interface IRateRowProps {
  readonly countLevels: number;
  readonly countValues: IValue[];
}

function createCSSRow(levelsNumber = 1, levelValues: IValue[]) {
  let styles = "";
  const costLength = levelValues
    .map((val) => val.cost)
    .filter((el) => el).length;
  const techLength = levelValues
    .map((val) => val.technology)
    .filter((el) => el).length;
  const maxFromVal = Math.max(costLength, techLength);

  for (let i = 0; i < levelsNumber; i += 1) {
    techLength > costLength &&
      (styles += `
       &:has(.rateTech${i} span:hover) .rateCost${i} span,
       .rateTech${i} span:hover,
       &:has(.rateCost${i} span:hover) .rateTech${i} span,
       .rateCost${i} span:hover{
         color: ${themes.primary.colors.darkBlue}
         }`);
    for (let j = 0; j < maxFromVal; j += 1) {
      styles += `
       &:has(.rateTech${i} .tech${j}:hover) .rateCost${i} .cost${j},
       &:has(.rateName${i}:hover) .rateCost${i} .cost${j},
       &:has(.rateName${i}:hover) .rateTech${i} .tech${j},
       &:has(.rateTech${i} .tech${j}:hover) .rateName${i},
       &:has(.rateCost${i} .cost${j}:hover) .rateName${i},
        .rateTech${i} .tech${j}:hover,
        .rateName${i}:hover,
        .rateCost${i} .cost${j}:hover,
       &:has(.rateCost${i} .cost${j}:hover) .rateTech${i} .tech${j} {
         color: ${themes.primary.colors.darkBlue};
       }`;
    }
  }

  return css`
    ${styles}
  `;
}

export const RateCardContentContainer = styled.div`
  padding: 38px 51px 113px;

  @media ${themes.primary.media.maxMobile} {
    padding: 8px 20px 65px;
  }
`;

export const RateCardServiceName = styled.h3`
  font-size: 24px;
  line-height: 160%;
  letter-spacing: 0.05em;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  color: ${themes.primary.colors.primary};
  margin: 0;
  padding: 0;

  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
    line-height: 160%;
  }
`;

export const RateCardServiceDropDown = styled.div<IActiveAccordion>`
  padding: 15px 24px 17px 14px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: ${(props) =>
    props.isActive
      ? `linear-gradient(
      90deg,
      ${themes.primary.colors.gradientColor1RateCard} 0%,
      ${themes.primary.colors.gradientColor2RateCard} 100%
    )`
      : "transparent"};
  border: ${(props) =>
    props.isActive
      ? `1px solid ${themes.primary.colors.borderRateCard}`
      : "1px solid transparent"};

  svg {
    transform: ${(props) =>
      props.isActive ? "rotate(180deg)" : "rotate(0deg)"};
  }

  &:hover {
    background: linear-gradient(
      90deg,
      ${themes.primary.colors.gradientColor1RateCard} 0%,
      ${themes.primary.colors.gradientColor2RateCard} 100%
    );
    border: 1px solid ${themes.primary.colors.borderRateCard};
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 15px 14px;
    margin-top: 18px;

    &:active {
      background: linear-gradient(
        90deg,
        ${themes.primary.colors.gradientColor1RateCard} 0%,
        ${themes.primary.colors.gradientColor2RateCard} 100%
      );
      border: 1px solid ${themes.primary.colors.borderRateCard};
    }

    svg {
      width: 15px;
      height: 8px;
      margin-bottom: 3px;
    }
  }
`;

export const RateCardImageTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  @media ${themes.primary.media.maxMobile} {
    gap: 10px;

    span img {
      width: 36px !important;
      height: 36px !important;
    }
  }
`;

export const RateCardLevelTable = styled.table`
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;

  // for rate hover
  tbody:has(.rateRow .spanCostDefault span:hover) .rateRow .mainSpanRate span {
    color: ${themes.primary.colors.darkBlue};
  }
  tbody:has(.rateRow .spanNameDefault:hover) .rateRow .mainSpanRate span {
    color: ${themes.primary.colors.darkBlue};
  }

  // for name hover
  tbody:has(.rateRow .spanCostDefault span:hover) .rateRow .mainSpanName {
    color: ${themes.primary.colors.darkBlue};
  }
  tbody:has(.rateRow .spanRateDefault span:hover) .rateRow .mainSpanName {
    color: ${themes.primary.colors.darkBlue};
  }

  // for cost hover
  tbody:has(.rateRow .spanRateDefault span:hover) .rateRow .mainSpanCost span {
    color: ${themes.primary.colors.darkBlue};
  }
  tbody:has(.rateRow .spanNameDefault:hover) .rateRow .mainSpanCost span {
    color: ${themes.primary.colors.darkBlue};
  }
`;

export const RateCardLevelRow = styled.tr<IRateRowProps>`
  ${(props) => createCSSRow(props.countLevels, props.countValues)};
`;

export const RateCardLevelData = styled.td`
  word-wrap: break-word;
  border: 1px solid ${themes.primary.colors.borderRateCard};
  font-size: 18px;
  padding: 12px 14px;
  line-height: 160%;
  letter-spacing: 0.05em;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};

  @media ${themes.primary.media.maxMobile} {
    font-size: 14px;
    line-height: 22.4px;
    padding: 6px 8px;

    &:last-child {
      width: 80px !important;
    }
    &:first-child {
      width: 80px !important;
    }
  }

  &.spanCost {
    color: ${themes.primary.colors.darkBlue};
  }
`;
