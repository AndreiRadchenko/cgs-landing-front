import styled, { css } from "styled-components";
import themes from "../utils/themes";

export const NavigateWrapper = styled.div`
  @media ${themes.primary.media.maxMobile} {
    height: 150px;
    position: sticky;
    top: 93px;
    z-index: 10;
  }
`;

export const NavigateLeft = styled.div`
  margin-top: 0;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 10vw;
  border-left: thin solid ${themes.primary.colors.comment};
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
  transition: 0.5s;

  & svg {
    transition: 0.3s;
  }
  &:after {
    content: none;
  }
  @media ${themes.primary.media.minPC} {
    font-size: ${themes.primary.font.size.ourWorkTextBig};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: ${themes.primary.font.size.portfolioMobile};
    writing-mode: horizontal-tb;
    transform: none;
    justify-content: space-between;
    width: 100%;
    max-height: 153px;
    padding-inline: 20px;
    border-width: 0 1px 1px;
    border-style: solid;
    border-color: ${themes.primary.colors.comment};
    transition: 0.3s;

    & svg {
      fill: ${themes.primary.colors.primary};

      &.open {
        transform: rotate(180deg);
      }
    }

    &.open {
      background-color: ${themes.primary.colors.darkBlue};
      color: ${themes.primary.colors.blogBackground};
      & svg {
        fill: ${themes.primary.colors.blogBackground};
      }
    }

    &.top {
      background-color: ${themes.primary.colors.darkBlue};
      color: ${themes.primary.colors.blogBackground};
      max-height: 88px;
    }

    &:hover {
      background-color: ${themes.primary.colors.darkBlue};
      color: ${themes.primary.colors.blogBackground};

      & svg {
        fill: ${themes.primary.colors.blogBackground};
      }
    }
  }
  &:hover {
    background-color: ${themes.primary.colors.darkBlue};
    color: ${themes.primary.colors.blogBackground};
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
  margin: 15px 0 27px;
  @media ${themes.primary.media.maxMobile} {
    padding: 10px;
    margin-top: 0px;
  }
  @media (max-width: 1310px) {
    margin: 12px 0 32px;
  }
  @media (max-width: 1310px) {
    margin: 12px 0 32px;
  }
  @media (max-width: 1199px) {
    font-size: 15px;
  }
  @media (max-width: 1140px) {
    font-size: 14px;
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 0;
    margin: 0;
    font-size: 1rem;
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
    padding-top: 10px;
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
  max-height: 500px;
  position: relative;

  & .swiper-slide-prev {
    color: rgba(0, 0, 0, 0.5);
    overflow: hidden;
  }

  &:hover ${NavigateLeft} {
    background-color: ${themes.primary.colors.darkBlue};
    color: ${themes.primary.colors.secondary};
  }
  @media (max-width: 1310px) {
    max-height: 460px;
  }
  @media (max-width: 1310px) {
    max-height: 460px;
  }
  @media ${themes.primary.media.minPC} {
    max-height: 33.5vw;
  }

  @media ${themes.primary.media.maxMobile} {
    display: block;
    max-height: none;
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
  border-left: thin solid ${themes.primary.colors.comment};

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const ArrowContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: center;

  & svg {
    position: relative;
    left: 0;
    right: 0;
    width: 65px;
    height: 65px;
  }
  &.hover {
    & path:first-child {
      fill: ${themes.primary.colors.portfolioHover};
    }
  }
`;

export const ReviewContainer = styled.div`
  .swiper-slide-next {
    background-color: ${themes.primary.colors.cyanBlue};
  }
  height: 100%;
  max-width: 81.3%;
  position: relative;
  left: 10vw;
  right: 9vw;
  display: flex;
  justify-content: space-between;
  @media ${themes.primary.media.maxMobile} {
    flex-direction: column-reverse;
    height: auto;
    left: 0;
    right: 0;
    max-width: none;
    width: 100%;
    max-height: 0;
    overflow: hidden;
    transition: 1s ease-in;

    &.open {
      border: 1px solid ${themes.primary.colors.comment};
      max-height: 1230px;

      opacity: 1;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100.5%;
  position: relative;
  left: -1px;
`;

interface IImageContainer {
  bgColor: string;
}

export const ImageContainer = styled.div<IImageContainer>`
  position: relative;

  width: 56%;
  height: 100%;
  border-left: thin solid ${themes.primary.colors.comment};
  background: ${({ bgColor }) => bgColor};

  @media ${themes.primary.media.maxTabletPortrait} {
    & img {
      object-fit: contain;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    border: 0;
    border-bottom: 1px solid ${themes.primary.colors.comment};
    height: 347px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    height: 247px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  padding: 34px 26px 30px;
  width: 45%;
  box-sizing: border-box;
  @media (max-width: 1250px) {
    padding: 17px 15px;
  }
  @media ${themes.primary.media.minPC} {
    padding: 50px;
    font-size: 0.77vw;
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 0.85vw;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    border: 0;
  }
`;

export const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  @media ${themes.primary.media.maxMobile} {
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

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: ${themes.primary.font.size.homeMainSubtitle};
  }
`;

export const Separator = styled.div`
  background-color: ${(params) =>
    params.color ? params.color : themes.primary.colors.separator};
  width: 100%;
  height: 1px;
  margin-bottom: 30px;

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-bottom: 10px;
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    left: -15px;
    width: calc(100% + 30px);
    margin-top: 1rem;
    &.bottom {
      display: none;
    }
  }
`;

export const TitleContainer = styled.div`
  @media ${themes.primary.media.maxMobile} {
    display: flex;
    column-gap: 10px;
    flex-wrap: wrap;
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
    width: 1.668em;
  }
`;

export const StarCont = styled.div`
  display: flex;
  margin-bottom: 2.5px;
  column-gap: 3px;
  margin-top: 16px;
`;

export const Navigation = styled.div`
  width: 7vw;
  height: 100%;
  z-index: 20;
  background-color: ${themes.primary.colors.blogBackground};
`;

export const Border = styled.div`
  height: 100%;
  width: 1px;
  background-color: ${themes.primary.colors.comment};
  position: absolute;
  top: 0;
  right: 0;
`;

export const ProjectIndustry = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  color: ${themes.primary.colors.comment};
  font-size: 1.5em;
  margin-top: 0.5em;
`;
