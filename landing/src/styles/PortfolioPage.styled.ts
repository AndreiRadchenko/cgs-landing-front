import styled, { css } from "styled-components";
import themes from "../utils/themes";
import { ILine } from "../types/Decoration.types";
import { IMobileLine } from "./HomePage/Badges.styled";

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
    margin: 0 0 14px 0;
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
      width: 375px !important;
      height: 375px !important;
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
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  margin-top: 65px;
  row-gap: 20px;

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
    grid-template-columns: repeat(auto-fill, minmax(67px, 1fr));
    row-gap: 1px;
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

  p {
    margin: 0;
  }
`;

export const SeeMoreProjectsTitle = styled.h3`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 52px;
  line-height: 116.6%;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin: 0;

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
  justify-content: space-between;
  margin-top: 90px;

  @media (${themes.primary.media.maxMobile}) {
    gap: 10px;
    margin-top: 56px;
  }
`;

export const SeeMoreProjectsArrowFirst = styled.div`
  padding-top: 13px;
  svg {
    flex: 1 1 auto;
    width: 100%;
  }

  @media (${themes.primary.media.maxMobile}) {
    padding-top: 3px;
    align-self: flex-start;
    width: 70%;
  }
`;
export const SeeMoreProjectsArrowSecond = styled.div`
  padding-top: 13px;
  svg {
    flex: 1 1 auto;
    width: 100%;
    transform: rotate(180deg);
  }
  @media (${themes.primary.media.maxMobile}) {
    padding-top: 0px;
    width: 70%;
    align-self: flex-end;
    margin-bottom: -2px;
  }
`;

export const FeedbackContainer = styled.div`
  display: flex;
  border-top: 1px solid ${themes.primary.colors.headerBorder};
  border-bottom: 1px solid ${themes.primary.colors.headerBorder};

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    border-top: 0;
  }
`;

export const FeedbackTitleContainer = styled.div`
  padding: 34px 40px 34px 54px;
  background: #c0bfc0;
  min-height: 370px;
  width: 475px;
  position: relative;
  flex: 0 0 auto;

  h4 {
    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.heavy};
    font-size: 34px;
    line-height: 120%;
    letter-spacing: 0.04em;
    text-transform: uppercase;

    color: ${themes.primary.colors.portfolioBg};
    margin: 0 0 40px 0;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    padding: 20px 50px 20px 19px;

    h4 {
      font-size: 24px;
      line-height: 120%;
      margin: 0 0 21px 0;
    }
    & > svg {
      width: 104px;
      height: 92px;
    }
  }
  @media ${themes.primary.media.maxMobile} {
    height: 235px;
    width: 100%;
  }
`;

export const FeedbackStarContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 25px;
  display: flex;
  align-items: center;
  gap: 6px;

  @media ${themes.primary.media.maxTabletPortrait} {
    svg {
      width: 28px;
      height: 28px;
    }
  }
`;
export const FeedbackInfoContainer = styled.div`
  padding: 34px 50px;

  h4 {
    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.heavy};
    font-size: 34px;
    line-height: 41px;
    margin: 0 0 6px 0;
  }
  .position {
    margin: 0;
    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.heavy};
    font-size: 18px;
    line-height: 22px;

    color: ${themes.primary.colors.headerBorder};
  }
  .text {
    margin-top: 20px;
    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.heavy};
    font-size: 18px;
    line-height: 166.6%;

    color: ${themes.primary.colors.primary};
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    padding: 38px 20px;

    h4 {
      font-size: 24px;
      line-height: 160%;
      margin: 0 0 4px 0;
    }
    .position {
      font-size: 14px;
      line-height: 130%;
    }
    .text {
      margin-top: 15px;
      margin-bottom: 0;
      font-size: 16px;
      line-height: 160%;
    }
  }
`;

export const ProjectCta = styled.div`
  position: relative;
  overflow: hidden;
`;

export const ProjectCtaContainer = styled.div`
  padding: 27px 51px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  gap: 32px;

  h3 {
    font-family: ${themes.primary.font.family.namu};
    font-size: 34px;
    line-height: 116.6%;
    margin: 0;
    color: ${themes.primary.colors.primary};
  }

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    padding: 20px 18px;
    align-items: flex-start;

    h3 {
      font-size: 24px;
      line-height: 26px;
    }
  }
`;

export const BgiContainer = styled.div<ILine>`
  width: 115%;
  height: 115px;
  position: absolute;
  left: -6%;
  top: 50%;
  transform: translateY(-50%);
  background: ${({ angle }) =>
    css`radial-gradient(
      50% 240px at ${angle},
      ${themes.primary.colors.mainGradientColor2} ,
      ${themes.primary.colors.mainGradientColor1}
    );`};
  background-size: 100% 100%;

  @media ${themes.primary.media.maxMobile} {
    height: 240px;
  }
`;

export const MobileLine = styled.div<IMobileLine>`
  display: none;
  width: 120%;

  position: relative;
  left: -5%;
  height: 24px;
  background: linear-gradient(
    ${({ grad1, grad2 }) => css`90deg,
    ${grad1} 13.67%,
    ${grad2} 90.39%`}
  );

  border: 1px solid ${themes.primary.colors.black};
  box-shadow: 7px 2px 0px ${themes.primary.colors.black};
  z-index: -1;
  &:not(:last-child) {
    margin-bottom: 7.56em;
  }
`;
