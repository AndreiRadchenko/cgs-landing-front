import styled from "styled-components";
import themes from "../utils/themes";

export const PortfolioPageWrapper = styled.div`
  width: 100%;
  padding: 10px 50px;
`;

export const PortfolioPageHeaderContainer = styled.div`
  max-width: 700px;
  margin-bottom: 44px;

  h2 {
    font-family: ${themes.primary.font.family.namu};
    font-style: normal;
    font-weight: ${themes.primary.font.weight.heavy};
    font-size: 52px;
    line-height: 130%;
    padding-bottom: 20px;
    border-bottom: 1px solid ${themes.primary.colors.headerBorder};
    margin: 0 0 32px 0;
  }
`;

export const HeaderBottomSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderBottomSectionFlag = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  p {
    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.heavy};
    font-size: 18px;
    line-height: 130%;
  }
`;

export const PortfolioPageInfoContainer = styled.div`
  max-width: 700px;
  h3 {
    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.heavy};
    font-size: 34px;
    line-height: 160%;
    text-transform: uppercase;
    color: ${themes.primary.colors.primary};
    margin-bottom: 12px;
  }
`;

export const InfoContainerIndustry = styled.p`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 20px;
  line-height: 130%;
  color: ${themes.primary.colors.headerBorder};
  margin: 0 0 12px 0;
`;

export const InfoContainerText = styled.p`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 20px;
  line-height: 160%;
  color: ${themes.primary.colors.primary};
  margin: 0 0 28px 0;
`;
