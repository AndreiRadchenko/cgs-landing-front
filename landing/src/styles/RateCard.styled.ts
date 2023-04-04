import styled from "styled-components";
import themes from "../utils/themes";

interface IActiveAccordion {
  readonly isActive?: boolean;
}

export const RateCardContentContainer = styled.div`
  padding: 58px 51px 113px;
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
`;

export const RateCardServiceDropDown = styled.div<IActiveAccordion>`
  padding: 10px 25px 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    svg path {
      fill: ${themes.primary.colors.darkBlue};
    }
  }
  &:hover ${RateCardServiceName} {
    color: ${themes.primary.colors.darkBlue};
  }
`;

export const RateCardImageTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const RateCardLevelTable = styled.table`
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
`;

export const RateCardLevelRow = styled.tr``;

export const RateCardLevelData = styled.td`
  word-wrap: break-word;
  border: 1px solid ${themes.primary.colors.headerBorder};
  font-size: 24px;
  padding: 12px 14px;
  line-height: 160%;
  letter-spacing: 0.05em;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
`;
