import styled, { css } from "styled-components";
import themes from "../utils/themes";

export const NavigateLeft = styled.div`
  margin-top: 0;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 10vw;
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
  line-height: 170%;
  margin: 12px 0 27px;
  @media ${themes.primary.media.maxMobile} {
    padding: 10px;
    margin-top: 0px;
  }
  @media (max-width: 1199px) {
    font-size: 15px;
  }
  @media (max-width: 1140px) {
    font-size: 14px;
  }
`;

export const ProjectComment = styled.p`
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.reviewText};
  color: ${themes.primary.colors.gray};
  line-height: 160%;
  margin-bottom: 0;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media ${themes.primary.media.maxMobile} {
    padding: 10px;
    margin-top: 0px;
  }
  @media (max-width: 1199px) {
    font-size: 15px;
  }
  @media (max-width: 1140px) {
    font-size: 14px;
  }
`;

export const ViewMoreContainer = styled.a`
  margin-top: 5px;
  display: flex;
  column-gap: 5px;
  cursor: pointer;
`;

export const ViewMoreText = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.reviewText};
  color: ${themes.primary.colors.darkBlue};
  column-gap: 5px;
  margin-bottom: 5px;
  @media (max-width: 1140px) {
    font-size: 14px;
  }
  @media (max-width: 1199px) {
    font-size: 15px;
  }
`;

export const ViewMoreArrow = styled.img`
  width: 18px;
  height: auto;
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
  width: 100%;
  max-height: 455px;
  position: relative;
  & .swiper {
    display: flex;
    flex-direction: column-reverse;
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
  @media ${themes.primary.media.minPC} {
    max-height: 570px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    max-height: 658px;
  }
  @media ${themes.primary.media.maxMobile} {
    display: block;
    border-left: 1px solid ${themes.primary.colors.comment};
    border-right: 1px solid ${themes.primary.colors.comment};
    margin: 0 10px;
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
  width: 9vw;
  background-color: ${themes.primary.colors.blogBackground};
  z-index: 100;
  border-left: 1px solid ${themes.primary.colors.comment};
`;

export const ArrowContainer = styled.div`
  width: 50%;
`;

export const ReviewContainer = styled.div`
  .swiper-slide-next {
    background-color: ${themes.primary.colors.cyanBlue};
  }
  height: 100%;
  max-width: 81vw;
  position: relative;
  left: 10vw;
  right: 9vw;
  display: flex;
  justify-content: space-between;
  @media ${themes.primary.media.maxMobile} {
    position: relative;
    left: 0;
    height: auto;
    grid-template-columns: 1fr;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const ImageContainer = styled.div`
  width: 56%;
  display: flex;
  justify-content: right;
  align-items: center;
  overflow: hidden;
  border-left: 1px solid ${themes.primary.colors.comment};
  position: relative;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 34px 26px 30px;
  width: 45%;
  box-sizing: border-box;
  @media (max-width: 1250px) {
    padding: 17px 15px;
  }
  @media ${themes.primary.media.minPC} {
    padding: 50px;
  }
  @media (min-width: 1100px) {
    justify-content: center;
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
  @media (max-width: 1250px) {
    font-size: 26px;
  }
`;

export const Separator = styled.div`
  background-color: ${(params) =>
    params.color ? params.color : themes.primary.colors.separator};
  width: 100%;
  height: 0.5px;
  margin-bottom: 30px;
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
  column-gap: 13px;
  row-gap: 18px;
  align-items: flex-end;
  flex-wrap: wrap;
  @media (max-width: 1250px) {
    column-gap: 10px;
  }
`;

export const AuthorName = styled.div`
  font-size: ${themes.primary.font.size.feedbackName};
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.normal};
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.buttonText};
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: ${themes.primary.font.size.articleTagDescription};
  }
  @media (max-width: 1250px) {
    font-size: 18px;
  }
`;

export const CompanyName = styled.div`
  color: ${themes.primary.colors.comment};
  font-size: ${themes.primary.font.size.oneAndHalf};
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
  width: 20px;
  height: auto;
  @media (max-width: 1250px) {
    width: 15px;
  }
  @media ${themes.primary.media.minPC} {
    width: 22px;
  }
`;

export const StarCont = styled.div`
  display: flex;
  margin-bottom: 2.5px;
  column-gap: 3px;
`;

export const Navigation = styled.div`
  width: 7vw;
  height: 100%;
  z-index: 20;
  background-color: ${themes.primary.colors.blogBackground};
`;
