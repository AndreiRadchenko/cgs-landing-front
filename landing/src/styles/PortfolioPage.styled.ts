import styled from "styled-components";
import themes from "../utils/themes";

export const PortfolioPageWrapper = styled.div`
  width: 100%;
  padding: 10px 50px;

  @media (${themes.primary.media.maxMobile}) {
    padding: 10px 20px;
  }
`;

export const PortfolioPageHeaderContainer = styled.div`
  margin-bottom: 44px;
  display: flex;
  justify-content: space-between;
  position: relative;

  @media (${themes.primary.media.maxTabletLandScape}) {
    flex-direction: column;
  }
`;

export const HeaderContainerBlock = styled.div`
  width: 700px;

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

  @media (${themes.primary.media.maxTabletLandScape}) {
    width: 100%;

    h2 {
      font-size: 24px;
      padding-bottom: 12px;
      margin: 0 0 10px 0;
    }
  }
`;
export const HeaderImageContainer = styled.div`
  position: absolute;
  right: 0;

  svg {
    position: absolute;
    right: -50px;
  }

  @media (${themes.primary.media.maxTabletLandScape}) {
    position: relative;
    display: flex;
    justify-content: flex-end;
  }

  @media (${themes.primary.media.maxMobile}) {
    margin-top: 30px;
    height: 324px;

    svg {
      right: -20px;
      width: 324px;
      height: 324px;
    }
    span {
      width: 260px !important;
      height: 270px !important;
    }
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

  @media (${themes.primary.media.maxMobile}) {
    p {
      font-size: 14px;
    }
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
  @media (${themes.primary.media.maxMobile}) {
    h3 {
      font-size: 24px;
    }
  }
`;

export const PortfolioPageIconContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  margin-top: 65px;

  > span {
    position: unset !important;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }

  @media (${themes.primary.media.maxMobile}) {
    margin-top: 35px;
    grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
  }
`;

export const InfoContainerIndustry = styled.p`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 20px;
  line-height: 130%;
  color: ${themes.primary.colors.headerBorder};
  margin: 0 0 12px 0;

  @media (${themes.primary.media.maxMobile}) {
    font-size: 14px;
  }
`;

export const InfoContainerText = styled.p`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 20px;
  line-height: 160%;
  max-height: 320px;
  color: ${themes.primary.colors.primary};
  margin: 0 0 28px 0;

  @media (${themes.primary.media.maxMobile}) {
    font-size: 16px;
  }
`;

export const InfoWrapperTimeTeam = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 18px;
  letter-spacing: 0.03em;
  color: ${themes.primary.colors.loaderSpinner};
  display: flex;
  gap: 35px;

  @media (${themes.primary.media.maxMobile}) {
    font-size: 14px;
  }
`;

export const InfoContainerTimeTeam = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SeeMoreProjectsTitle = styled.h3`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 50px;
  line-height: 116.6%;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: ${themes.primary.colors.primary};
  text-align: center;

  @media (${themes.primary.media.maxMobile}) {
    text-align: left;
    font-size: 24px;
  }
`;

export const SeeMoreProjectsTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: center;

  @media (${themes.primary.media.maxMobile}) {
    gap: 10px;
  }
`;

export const SeeMoreProjectsArrowFirst = styled.div`
  svg {
    flex: 1 1 auto;
    width: 100%;
  }

  @media (${themes.primary.media.maxMobile}) {
    padding-top: 30px;
    align-self: flex-start;
    width: 70%;
  }
`;
export const SeeMoreProjectsArrowSecond = styled.div`
  svg {
    flex: 1 1 auto;
    width: 100%;
    transform: rotate(180deg);
  }
  @media (${themes.primary.media.maxMobile}) {
    width: 70%;
    align-self: flex-end;
    padding-bottom: 20px;
  }
`;
