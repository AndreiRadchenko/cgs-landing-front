import styled, { css } from "styled-components";
import themes from "../utils/themes";

export const NavigateLeft = styled.div`
  margin-top: 0;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 150px;
  border-left: 1px solid ${themes.primary.colors.comment};
  color: ${themes.primary.colors.black};
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.medium};
  font-size: ${themes.primary.font.size.ourWorkTextBig};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  background-color: ${themes.primary.colors.blogBackground};
  &:after {
    content: none;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    width: 130px;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    width: 100px;
  }
  @media ${themes.primary.media.minPC} {
    font-size: ${themes.primary.font.size.ourWorkTextBig};
  }
`;

export const ProjectDescription = styled.p`
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.reviewText};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 180%;
  @media ${themes.primary.media.maxMobile} {
    padding: 10px;
    margin-top: 0px;
  }
  @media ${themes.primary.media.onlyTabletLandScape} {
    font-size: ${themes.primary.font.size.tertiary};
  }
  @media ${themes.primary.media.minPC} {
    font-size: ${themes.primary.font.size.reviewText};
  }
`;

export const ProjectComment = styled.p`
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.projectLink};
  color: ${themes.primary.colors.gray};
  line-height: 160%;
  margin-bottom: 0;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media ${themes.primary.media.maxMobile} {
    padding: 10px;
    margin-top: 0px;
  }
  @media ${themes.primary.media.onlyTabletLandScape} {
    font-size: ${themes.primary.font.size.primary};
  }
`;

export const NoRewiews = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 311px;
  width: 100%;
  font-size: ${themes.primary.font.size.bigTitle};
`;

export const ButtonInfo = styled.div<{ clicked: boolean }>`
  display: flex;
  height: 153px;
  width: 100%;
  background: ${({ clicked }) =>
    clicked
      ? css`
          ${themes.primary.colors.darkBlue}
        `
      : css`
          ${themes.primary.colors.lightGray}
        `};

  &:nth-child(1) {
    color: ${({ clicked }) =>
      clicked
        ? css`
            ${themes.primary.colors.secondary}
          `
        : "black"};
  }
  position: sticky;
  top: 0px;
  z-index: 2;
  padding: 0px 27px;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid ${themes.primary.colors.comment};

  &.sticky-top {
    height: 88px;
    transition: 0.5s linear;
  }
  &:hover {
    background-color: ${themes.primary.colors.darkBlue};
    &:nth-child(1) {
      color: ${themes.primary.colors.secondary};
    }
  }
`;

export const Category = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: ${themes.primary.font.size.articleTitle};
  margin: 0 auto 0 0;
`;

export const PortfolioRow = styled.div`
  display: flex;
  justify-content: space-between;
  max-height: 588px;
  position: relative;
  & .swiper {
    display: flex;
    flex-direction: column-reverse;
  }
  & .swiper-slide-next {
    color: ${themes.primary.colors.portfolioBg};
    & ${ProjectDescription} {
      color: ${themes.primary.colors.portfolioBg};
    }
    & * {
      overflow: hidden;
      color: ${themes.primary.colors.portfolioBg};
      background-color: ${themes.primary.colors.portfolioBg};
    }
  }
  & .swiper-slide-prev {
    color: rgba(0, 0, 0, 0.5);
    overflow: hidden;
  }
  border-top: 1px solid ${themes.primary.colors.comment};
  &:hover ${NavigateLeft} {
    background-color: ${themes.primary.colors.darkBlue};
    color: ${themes.primary.colors.secondary};
  }
  @media ${themes.primary.media.maxMobile} {
    display: block;
    border-left: 1px solid ${themes.primary.colors.comment};
    border-right: 1px solid ${themes.primary.colors.comment};
    margin: 0 10px;
    &:hover ${ButtonInfo} {
      color: ${themes.primary.colors.secondary};
      background-color: ${themes.primary.colors.darkBlue};
    }
  }
`;

export const NavigateRight = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  right: 0;
  width: 10%;
  @media ${themes.primary.media.maxPCFullHD} {
    width: 8%;
  }
  @media ${themes.primary.media.maxLaptop} {
    width: 7%;
  }
  @media (max-width: 1400px) {
    width: 6%;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    width: 7%;
  }
`;

export const ReviewContainer = styled.div`
  .swiper-slide-next {
    background-color: ${themes.primary.colors.cyanBlue};
  }
  height: 100%;
  position: relative;
  left: 160px;
  display: flex;
  justify-content: space-between;
  @media ${themes.primary.media.maxTabletLandScape} {
    left: 130px;
  }
  @media ${themes.primary.media.maxMobile} {
    position: relative;
    left: 0;
    height: auto;
    grid-template-columns: 1fr;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    left: 130px;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    left: 100px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: right;
  align-items: center;
  overflow: hidden;
  border-left: 1px solid ${themes.primary.colors.comment};
  border-right: 1px solid ${themes.primary.colors.comment};
  position: relative;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 100%;
  max-width: 40.5vw;
  box-sizing: border-box;
  @media ${themes.primary.media.maxTabletLandScape} {
    padding: 30px;
  }
  @media ${themes.primary.media.minPC} {
    padding: 50px;
  }
`;

export const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  @media ${themes.primary.media.maxMobile} {
    border-top: 1px solid ${themes.primary.colors.comment};
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    & + p {
      color: ${themes.primary.colors.black};
    }
  }
`;

export const PortfolioProjectHeader = styled.div`
  font-size: ${themes.primary.font.size.reviewTitle};
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.normal};
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.secondary};
  }
`;

export const Separator = styled.div`
  background-color: ${(params) =>
    params.color ? params.color : themes.primary.colors.separator};
  width: 100%;
  height: 0.5px;
  margin-bottom: 20px;
  @media ${themes.primary.media.maxTabletLandScape} {
    margin-bottom: 10px;
  }
  @media ${themes.primary.media.maxMobile} {
    margin: 0 10px;
    width: auto;
  }
`;

export const Feedback = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
  flex-wrap: wrap;
`;

export const AuthorName = styled.div`
  font-size: ${themes.primary.font.size.articleTagDescription};
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.normal};
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.buttonText};
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: ${themes.primary.font.size.articleTagDescription};
  }
`;

export const CompanyName = styled.div`
  color: ${themes.primary.colors.comment};
  font-size: ${themes.primary.font.size.linkText};
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.normal};
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.vistaco};
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: ${themes.primary.font.size.articleSubtitle};
  }
`;

export const Star = styled.img`
  width: 18px;
  height: auto;
  @media ${themes.primary.media.maxTabletLandScape} {
    width: 16px;
  }
  @media ${themes.primary.media.minPC} {
    width: 20px;
  }
`;

export const StarRate = styled.div`
  display: flex;
  align-items: center;
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.projectLink};
  @media ${themes.primary.media.maxLaptop} {
    font-size: ${themes.primary.font.size.primary};
  }
`;

export const StarCont = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
`;
