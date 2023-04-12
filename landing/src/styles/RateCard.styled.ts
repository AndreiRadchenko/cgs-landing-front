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

function createCSS(levelsNumber = 1, levelValues: IValue[]) {
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
        .rateTech${i} .tech${j}:hover,
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
  padding: 58px 51px 113px;

  @media ${themes.primary.media.maxMobile} {
    padding: 8px 25px 63px;
  }
`;

export const RateCardLine = styled.div`
  height: 1px;
  background: black;
`;

export const RateCardServiceName = styled.h3<IActiveAccordion>`
  font-size: 32px;
  line-height: 160%;
  letter-spacing: 0.05em;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  color: ${(props) =>
    props.isActive
      ? themes.primary.colors.darkBlue
      : themes.primary.colors.primary};
  margin: 0;
  padding: 0;

  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
    line-height: 25.6px;
  }
`;

export const RateCardServiceDropDown = styled.div<IActiveAccordion>`
  padding: 10px 25px 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  svg {
    transform: ${(props) =>
      props.isActive ? "rotate(180deg)" : "rotate(0deg)"};
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 10px 15px 10px 10px;

    &:active {
      svg path {
        fill: ${themes.primary.colors.darkBlue};
      }
    }
    &:active ${RateCardServiceName} {
      color: ${themes.primary.colors.darkBlue};
    }

    svg {
      width: 15px;
      height: 8px;
    }
  }
  @media ${themes.primary.media.minMobile} {
    &:hover {
      svg path {
        fill: ${themes.primary.colors.darkBlue};
      }
    }
    &:hover ${RateCardServiceName} {
      color: ${themes.primary.colors.darkBlue};
    }
  }
`;

export const RateCardImageTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  @media ${themes.primary.media.maxMobile} {
    gap: 8px;

    span img {
      width: 34px !important;
      height: 34px !important;
    }
  }
`;

export const RateCardLevelTable = styled.table`
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;

  tbody:has(.rateRow .spanCostDefault span:hover) .rateRow .mainSpanRate span {
    color: ${themes.primary.colors.darkBlue};
  }
`;

export const RateCardLevelRow = styled.tr<IRateRowProps>`
  ${(props) => createCSS(props.countLevels, props.countValues)};
`;

export const RateCardLevelData = styled.td`
  word-wrap: break-word;
  border: 1px solid ${themes.primary.colors.headerBorder};
  font-size: 24px;
  padding: 12px 14px;
  line-height: 160%;
  letter-spacing: 0.05em;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};

  @media ${themes.primary.media.maxMobile} {
    font-size: 14px;
    line-height: 22.4px;
    padding: 17px 8px;

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