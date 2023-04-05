import styled from "styled-components";
import themes from "../utils/themes";

interface IActiveAccordion {
  readonly isActive?: boolean;
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

  @media ${themes.primary.media.maxMobile} {
    padding: 10px 15px 10px 10px;

    svg {
      width: 15px;
      height: 8px;
    }
  }

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

  &:first-child {
    width: 80px !important;
  }
  &:nth-child(2):hover,
  &:nth-child(2):hover + &:last-child {
    color: ${themes.primary.colors.darkBlue};
  }
  &:last-child {
    width: 80px !important;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 14px;
    line-height: 22.4px;
    padding: 17px 8px;
  }
`;
