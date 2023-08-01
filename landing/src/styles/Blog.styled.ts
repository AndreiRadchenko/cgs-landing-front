import styled, { css } from "styled-components";
import themes from "../utils/themes";
import { infiniteBlogText } from "./Animations.styled";

import { arrowOne, arrowTwo } from "./HomePage/General.styled";

interface ITrack {
  range: number;
}

export const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${themes.primary.media.minPCFullHD} {
    border-left: 1px solid ${themes.primary.colors.comment};

    &.podcast {
      border-left: none;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    &.preview {
      width: 100%;
      margin-top: 1.125rem;
      row-gap: 8px;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;

    &.header {
      display: none;
    }
  }
`;

export const BlogItemRowContainer = styled.div`
  display: flex;
  align-items: center;

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 100%;
    justify-content: space-between;
  }
`;

export const FlexRowContainer = styled.div`
  display: flex;
  column-gap: 24px;
  align-items: center;

  &.blogItemTop {
    @media ${themes.primary.media.onlyTabletLandScape} {
      width: 450px;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    column-gap: 30px;
  }
`;

export const TechContainer = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
  @media ${themes.primary.media.maxMobile} {
  }
`;

export const ArticlePreview = styled(FlexRowContainer)`
  @media ${themes.primary.media.maxTabletPortrait} {
    align-items: flex-start;
    flex-direction: column-reverse;
  }
`;

export const BlogContainer = styled.article`
  font-family: ${themes.primary.font.family.openSans};
  font-weight: ${themes.primary.font.weight.normal};
  color: ${themes.primary.colors.blogDarkText};
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background-color: ${themes.primary.colors.blogBackground};
  button {
    outline: none;
    border: none;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.5em;
  }
`;

export const AllArticlesContainer = styled.section`
  padding: 70px 70px 0;
  margin-bottom: 200px;
  max-width: 1200px;
  width: 100%;

  @media ${themes.primary.media.minPCFullHD} {
    max-width: 100em;
    padding: 80px 314px 0;
    margin-bottom: 210px;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    padding: 90px 30px 0;
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 50px 8px 0;
    margin-bottom: 150px;
  }
`;

export const BlogArticlesTemplate = styled.div`
  min-height: 2074px;
`;

export const ArrowContainer = styled.div`
  width: 28px;
  height: 28px;
  background-color: ${themes.primary.colors.headerBorderHover};
  border: 1.7px solid ${themes.primary.colors.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  & svg {
    width: 25px;
    height: 25px;
    margin-left: -0.55px;
    margin-top: -0.5px;
  }

  &.ticketModalArrowSubmit {
    will-change: transform;
  }

  &.careersTicketArrow {
    position: relative;
    top: 0;
    right: 0;
  }

  @media (min-width: 2200px) {
    width: 45px;
    height: 45px;
    right: -17px;
    top: -17px;

    & svg {
      width: 32px;
      height: 32px;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 36px;
    height: 36px;
    right: -15px;
    top: -15px;

    &.mobileAudit {
      font-size: 1.5em;
    }

    & svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export const GeneralInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 20px;
    &.preview {
      margin-top: 20px;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 1rem;

    &.preview {
      display: none;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 1rem;
  }
`;

interface ITag {
  isArticlePage?: boolean;
}

export const Tag = styled.button<ITag>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  color: ${themes.primary.colors.secondary};
  background-color: ${themes.primary.colors.darkBlue};
  padding: 6px 12px;
  font-style: normal;
  font-weight: ${themes.primary.font.weight.semiBold};
  font-size: ${themes.primary.font.size.articleViews};
  font-family: ${themes.primary.font.family.openSans};
  letter-spacing: 0.5px;
  z-index: 1;
  &:hover {
    background-color: ${(props) =>
      props.isArticlePage && themes.primary.colors.hoveredBlogTag};
    cursor: ${(props) => props.isArticlePage && "pointer"};
  }
  span {
    cursor: pointer;
  }

  &.preview {
    font-size: 1.17em;
    padding: 0 10px;

    @media ${themes.primary.media.minPCFullHD} {
      font-size: 0.75em;
      line-height: 138.889%;
      padding: 0 12px;
      height: 36px;
    }
  }

  @media ${themes.primary.media.minPC} {
    height: 2.333em;
    padding: 0.5em ${themes.primary.font.size.primary};
    font-size: ${themes.primary.font.size.primary};
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    &.preview {
      height: 26px;
      position: absolute;
      top: 0;
      left: 0;
      border: 0;
      height: 26px;
      font-size: 14px;
      margin-left: -1px;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    height: 26px;
  }
`;

export const BlogItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  border: 1px solid ${themes.primary.colors.comment};
  width: 100%;
  max-width: 1034px;
  column-gap: 30px;
  z-index: 2;
  position: relative;
  background-color: ${themes.primary.colors.blogBackground};

  @media ${themes.primary.media.minPC} {
    max-width: none;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding: 50px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    padding: 34px 0.75rem 16px;
  }
`;

export const MarginContainer = styled.div`
  margin-bottom: 40px;

  @media ${themes.primary.media.minPCFullHD} {
    margin-bottom: 50px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 24px;
  }
`;

export const BlogItemContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 100%;
  }
`;

export const NoBlogItemImage = styled.div`
  margin: auto;
  max-width: 394px;
  width: 394px;
  @media ${themes.primary.media.maxTabletPortrait} {
    max-width: 374px;
  }
  @media (max-width: 840px) {
    max-width: 340px;
  }
`;

export const BlogItemImage = styled.img`
  height: 212px;
  width: 394px;

  @media ${themes.primary.media.minPCFullHD} {
    width: 493px;
    height: 265px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 100%;
    height: auto;
  }
`;

export const HoverBlock = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: ${themes.primary.colors.blogBackground};
  right: -10px;
  bottom: -10px;
  border: 1.5px solid ${themes.primary.colors.primary};
  z-index: 0;
  display: flex;
  align-items: flex-end;
  visibility: hidden;

  @media ${themes.primary.media.maxMobile} {
    right: -4px;
    bottom: -4px;
  }
`;

export const HoverBlackBlock = styled.div`
  height: 50%;
  width: 100%;
  outline: 1.5px solid ${themes.primary.colors.primary};
  background-color: black;
  visibility: hidden;
`;

export const BlogItemTitle = styled.p`
  margin: 0;
  margin-top: 24px;

  font-weight: 700;
  font-size: 2.5em;
  line-height: 130%;
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.586em;
    margin-top: 30px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1.5rem;
  }
`;

export const HoverContainer = styled.div`
  position: relative;

  &:hover ${HoverBlackBlock} {
    visibility: visible;
  }
  &:hover ${HoverBlock} {
    visibility: visible;
  }
  &:hover {
    cursor: pointer;
  }

  &:hover ${BlogItemTitle} {
    color: ${themes.primary.colors.darkBlue};
  }
`;

export const BlogItemDescription = styled.p`
  font-size: ${themes.primary.font.size.secondaryArticleDescription};
  margin: 0;
  margin-top: 16px;
  margin-bottom: 0;
  line-height: 160%;
  p {
    margin: 0;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1em;
    margin-top: 20px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 1.125rem;
    font-size: 1rem;
  }
`;

export const LoopText = styled.div`
  font-size: 1.35em;
  margin: 0;
  height: 30px;
  margin-top: 16px;
  margin-bottom: 0;
  line-height: 170%;
  display: flex;

  & > span {
    animation: ${infiniteBlogText} infinite 15s linear;
  }

  @media ${themes.primary.media.minPCFullHD} {
    span {
      font-size: 0.77em;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    height: 46px;
    font-size: 1.75rem;
    margin-top: 9px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 0.875rem;
    margin-top: 8px;
  }
`;

export const LoopContainer = styled.div`
  position: relative;
  overflow: hidden;
  white-space: nowrap;
`;

export const GrayText = styled.div`
  color: #8f8e93;
  font-size: ${themes.primary.font.size.articleViews};
  font-weight: 600;
  &.big {
    font-size: 1.34em;
  }

  &.articleText {
    font-weight: 400;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 0.712em;

    &.articleText {
      font-size: 0.887em;
    }

    &.big {
      font-size: 0.712em;
    }
  }

  @media (min-width: 2400px) {
    font-size: 1.1em;
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
    font-size: 1.05em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 12px;

    &.big {
      font-size: 14px;
    }
  }
`;

export const Date = styled.div`
  color: #8f8e93;
  font-size: 1.17em;

  &.blogItem {
    font-size: 1.35em;

    @media ${themes.primary.media.maxTabletPortrait} {
      font-size: 14px;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 0.712em;

    &.blogItem {
      font-size: 0.84em;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 0.875rem;
  }
`;

export const ArrowIconLink = styled.div`
  & path {
  }
  & path:nth-child(1) {
    transform: translate(-36px, 36px);
  }
  &:hover {
    & path:nth-child(1) {
      animation: ${arrowOne} 1s 1 forwards ease-in-out;
    }
    & path:nth-child(2) {
      animation: ${arrowTwo} 1s 1 forwards ease-in-out;
    }
  }
`;

export const MainBlogAuthor = styled(GrayText)`
  font-weight: ${themes.primary.font.weight.semiBold};
  font-size: ${themes.primary.font.size.articleViews};

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 0.712em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 0.875rem;
  }
`;

export const SecondaryAuthor = styled(GrayText)`
  font-weight: ${themes.primary.font.weight.semiBold};
  font-size: 1.17em;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 0.712em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 0.875rem;
  }
`;

export const StatisticWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const DataContainer = styled.div`
  display: flex;
  column-gap: 0.875rem;
`;

export const ArticleTimerContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;

  @media ${themes.primary.media.maxMobile} {
    column-gap: 8px;
    min-width: 70px;
  }
`;

export const WatchContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 9px;

  @media ${themes.primary.media.maxTabletPortrait} {
    column-gap: 6px;
    &.timer {
      display: none;
    }
  }
`;

export const ArticleWatchContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;

  @media ${themes.primary.media.maxMobile} {
    column-gap: 8px;
  }
`;

export const WatchCount = styled(GrayText)`
  font-size: 1.17em;
  font-weight: 600;
  .article {
    font-size: ${themes.primary.font.size.articleViews};
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 0.712em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 0.875rem;
  }
`;

export const WatchCountArticle = styled(GrayText)`
  font-size: ${themes.primary.font.size.articleViews};

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 0.887em;
  }

  @media (min-width: 2400px) {
    font-size: 1.1em;
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
    font-size: 1.05em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 0.875rem;
  }
`;

export const BlogItemWatchIcon = styled.img`
  width: 21px;
  height: 19px;
  margin-left: 1.166em;

  @media ${themes.primary.media.minPCFullHD} {
    width: 26px;
    height: 23px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    &.blogItemWatch {
      margin-left: 0;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    margin-left: 0;
  }
`;

export const WatchIcon = styled.img`
  width: 21px;
  height: 19px;

  @media ${themes.primary.media.minPCFullHD} {
    width: 26px;
    height: 23px;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 21px;
    height: 19px;
  }
`;

export const TimerIcon = styled.img`
  width: 21px;
  height: 19px;

  @media ${themes.primary.media.minPCFullHD} {
    width: 26px;
    height: 23px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    &.preview {
      width: 21px;
      height: 19px;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    width: 21px;
    height: 19px;
  }
`;

export const LeftLine = styled.img`
  position: absolute;
  width: 203.88px;
  height: 387.72px;
  left: 0;
  top: 1330px;

  @media ${themes.primary.media.minPCFullHD} {
    top: 1650px;
    width: 340px;
    height: 480px;
  }

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const RightLine = styled.img`
  position: absolute;
  width: 700.29px;
  height: 1500.31px;
  right: 0px;
  bottom: -60px;

  @media ${themes.primary.media.minPCFullHD} {
    width: 720px;
    height: 1600px;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 430px;
    height: 930px;
    bottom: -40px;
  }
`;

export const PodcastContainer = styled.section`
  padding: 70px 50px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #f1efed;
  column-gap: 52px;
  border-block: 1px solid ${themes.primary.colors.comment};

  @media ${themes.primary.media.minPCFullHD} {
    column-gap: 70px;
    padding: 80px 50px 92px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    padding: 55px 25px 55px 20px;
  }

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column-reverse;
    row-gap: 1.375rem;
    margin-top: 50px;
    padding-block: 50px;
  }
`;

export const RelativeContainer = styled.div`
  position: relative;
`;

export const PodcastCard = styled.div`
  width: 525px;
  height: 215px;
  z-index: 2;
  background-color: ${themes.primary.colors.blogBackground};
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  padding: 30px;
  border: 1px solid ${themes.primary.colors.comment};

  @media ${themes.primary.media.minPCFullHD} {
    width: 706px;
    height: 289px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    padding: 20px;
    height: auto;
    width: 430px;
    padding-bottom: 30px;
  }

  @media ${themes.primary.media.maxMobile} {
    padding-bottom: 28px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 353px;
  }

  @media (max-width: 372px) {
    width: 300px;
  }
`;

export const BackgroundCard = styled.div`
  border: 1.5px solid ${themes.primary.colors.primary};
  height: 100%;
  z-index: 0;
  width: 100%;
  position: absolute;
  right: -6px;
  bottom: -6px;
  display: flex;
  align-items: flex-end;
  div {
    height: 50%;
    width: 100%;
    outline: 1.5px solid ${themes.primary.colors.primary};
    background-color: ${themes.primary.colors.primary};
  }

  @media ${themes.primary.media.minPCFullHD} {
    right: -12px;
    bottom: -12px;
  }

  @media ${themes.primary.media.maxMobile} {
    right: -4px;
    bottom: -4px;
  }
`;

export const PodcastNavigation = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const PlayButton = styled.img`
  width: 60px;
  height: 60px;
  margin: 0 22px;
  cursor: pointer;

  background-position: center;
  @media ${themes.primary.media.minPCFullHD} {
    width: 82px;
    height: 82px;
  }
`;

export const RightArrow = styled.div`
  width: 44px;
  height: 49px;
  cursor: pointer;
  margin-right: 35px;
  position: relative;
  background-size: contain;
  background-image: url("/BlogDecorations/Podcast/LeftArrow.svg");
  background-repeat: no-repeat;
  background-position: center;
  transform: scaleX(-1);

  @media ${themes.primary.media.minPCFullHD} {
    width: 63px;
    height: 63px;
  }
`;

export const LeftArrow = styled.div`
  background-image: url("/BlogDecorations/Podcast/LeftArrow.svg");
  width: 44px;
  height: 49px;
  margin-left: 35px;
  cursor: pointer;
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media ${themes.primary.media.minPCFullHD} {
    width: 63px;
    height: 63px;
  }
`;

export const SmallNavigation = styled.div`
  font-size: 1.5em;
  display: flex;
  align-items: flex-start;

  right: 1px;
  width: 12px;
  justify-content: center;
  height: 27px;
  cursor: pointer;

  &.activated {
    font-weight: ${themes.primary.font.weight.bold};
  }

  @media ${themes.primary.media.minPCFullHD} {
    height: auto;
    width: auto;
    font-size: 1em;
    padding-bottom: 12px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.125rem;
  }
`;

export const SecondsLeft = styled.div`
  position: absolute;
  color: #000;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 2px;
  font-size: 1.17em;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 0.75em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 0.875rem;
  }

  @media (max-width: 372px) {
    font-size: 0.75rem;
  }
`;

export const SecondsRight = styled.div`
  position: absolute;
  color: #000;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 2px;
  transform: scaleX(-1);
  font-size: 1.17em;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 0.75em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 0.875rem;
  }

  @media (max-width: 372px) {
    font-size: 0.75rem;
  }
`;

export const Track = styled.div`
  width: 100%;
  position: relative;
  margin-top: 15px;
  height: 4px;
  border-radius: 50px;
  display: flex;
  align-items: center;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 28px;
    height: 7px;
  }
`;

export const PlayedTrack = styled.input<ITrack>`
  -webkit-appearance: none;
  position: absolute;
  left: -2px;
  height: 100%;
  width: 100%;

  &::-webkit-slider-runnable-track {
    cursor: pointer;
    border-radius: 50px;
    background: ${({ range }) => css`linear-gradient(
      to right,
      ${themes.primary.colors.primary} 0%,
      ${themes.primary.colors.primary} ${range}%,
      ${themes.primary.colors.separator} ${range}%,
      ${themes.primary.colors.separator} 100%
    )`};
    height: 0.3rem;
  }
  &::-moz-range-track {
    height: 0.3rem;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    position: relative;
    top: -1px;
    cursor: pointer;
    border-radius: 50%;
    appearance: none;
    height: 7px;
    width: 7px;
    background-color: ${themes.primary.colors.primary};
  }

  @media ${themes.primary.media.minPCFullHD} {
    &::-webkit-slider-runnable-track {
      height: 0.5rem;
    }
    &::-webkit-slider-thumb {
      top: -3.5px;
      height: 14px;
      width: 14px;
    }
  }
`;

export const PlayerTimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 12px;
    height: 22px;
  }
`;

export const PlayerTime = styled(GrayText)`
  font-size: 1em;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 0.67em;

    margin-bottom: 20px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 0.75rem;
  }
`;

export const PodcastTitle = styled(BlogItemTitle)`
  max-width: 710px;
  width: 100%;
  font-size: 2.5em;
  margin-top: 24px;

  @media ${themes.primary.media.minPCFullHD} {
    max-width: 1250px;
    font-size: 1.586em;
    margin-top: 32px;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: ${themes.primary.font.size.secondary};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5rem;
    margin-top: 1em;
  }
`;

export const PodcastDescription = styled(BlogItemDescription)`
  max-width: 710px;
  width: 100%;
  margin-bottom: 0;
  margin-top: 16px;

  @media ${themes.primary.media.minPCFullHD} {
    max-width: 1222px;
    font-size: 1em;
    margin-top: 20px;
  }
`;

export const PodcastIcon = styled.img`
  width: 22px;
  height: 22px;

  @media ${themes.primary.media.minPCFullHD} {
    width: 30px;
    height: 30px;
  }
`;

export const PodcastWord = styled(BlogItemDescription)`
  margin: 0;
  font-size: 1.5em;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 0.92em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 0.875rem;
  }
`;

export const FlexPodcast = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: center;

  @media ${themes.primary.media.minPCFullHD} {
    column-gap: 10px;
  }
`;

export const PlayTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 6px;
  column-gap: 8px;
  border: 1px solid ${themes.primary.colors.headerBorder};
  font-size: 1.17em;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 0.75em;
    column-gap: 10px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 0.75rem;
  }
`;

export const PlayTriangle = styled.img`
  width: 15px;
  height: 12px;

  @media ${themes.primary.media.minPCFullHD} {
    width: 20px;
    height: 16px;
  }
`;

export const BlogArticlesWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  @media ${themes.primary.media.maxMobile} {
    & .blog {
      & .MyLoader_content {
        position: relative;
        margin-top: 35px;
      }
    }
  }
`;

export const HeaderBlock = styled.header`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-end;

  @media ${themes.primary.media.minPCFullHD} {
    justify-content: space-between;
  }

  @media ${themes.primary.media.maxMobile} {
    justify-content: center;
    padding-inline: 0.5rem;
  }
`;

export const MainBlogItemTitle = styled(BlogItemTitle)`
  margin-top: 16px;
  max-width: 870px;
  font-size: ${themes.primary.font.size.mainBlogTitle};
  font-weight: ${themes.primary.font.weight.extraBold};
  &:hover {
    color: ${themes.primary.colors.darkBlue};
  }

  @media ${themes.primary.media.minPCFullHD} {
    max-width: none;
    font-size: 1.75em;
    margin-top: 20px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5rem;
    margin-top: 24px;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${themes.primary.colors.comment};

  @media ${themes.primary.media.minPCFullHD} {
    border-right: none;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 2px;
    box-sizing: border-box;
    border: 1px solid ${themes.primary.colors.comment};
  }
`;

export const MainBlogItemImage = styled.img`
  max-width: 55vw;
  max-height: 420px;
  width: 100%;
  height: 100%;

  @media ${themes.primary.media.minPC} {
    max-height: 546px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 41.14em;
    max-height: 525px;
  }

  @media ${themes.primary.media.maxMobile} {
    max-width: none;
    max-height: 405px;
  }
`;

export const MainBlogItemTag = styled(Tag)`
  margin-top: 32px;
  font-size: 1.5em;
  padding: 0 10px;
  height: 26px;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 40px;
    padding: 0px 12px;
    font-size: 0.92em;
    height: 32px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: -1px;
    margin-left: -1px;
    position: absolute;
    top: -30px;
    left: -12px;
    font-size: 14px;
    padding: 0.166em 0.835em;
    line-height: 160%;
    z-index: 100;
  }
`;

export const MainBlogItemDescription = styled(BlogItemDescription)`
  margin-top: 8px;
  font-size: ${themes.primary.font.size.oneAndHalf};
  max-width: 870px;

  @media ${themes.primary.media.minPCFullHD} {
    max-width: none;
    font-size: 0.92em;
    margin-top: 10px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 1.125rem;
    font-size: 1rem;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-top: 1.125rem;
  }
`;

export const SmallArticleItemTitle = styled(BlogItemTitle)`
  font-size: 1.75em;
  margin-top: 0px;

  &:hover {
    color: ${themes.primary.colors.darkBlue};
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.087em;
  }

  @media (max-width: 1300px) {
    margin-top: 10px;
    font-size: 18px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 5px;
    font-size: 14px;
  }
`;

export const SmallGeneralInfo = styled(GeneralInfo)`
  margin-top: 0;
  height: 36px;
  align-items: flex-start;
`;

export const SmallArticleItemDescription = styled(BlogItemDescription)`
  font-size: 1.17em;
  margin-top: 15px;
  margin-bottom: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 0.712em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-top: 8px;
    font-size: 14px;
  }

  @media (min-width: 1025px) and (max-width: 1290px) {
    font-size: 15px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 8px;
    font-size: 12px;
  }
`;

export const SmallArticleContainer = styled.div`
  width: 33.264vw;
  min-height: 33vh;
  height: auto;
  padding: 40px 51px 40px 32px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${themes.primary.colors.comment};
  &:last-child {
    border-bottom: 0;
  }

  @media ${themes.primary.media.onlyPC} {
    min-height: 15vh;
  }

  @media ${themes.primary.media.minPC} {
    padding: 40px 60px 40px 40px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 31.2vw;
    min-height: 308px;
    padding: 50px 51px 50px 40px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    padding: 18px 25px 18px 20px;
  }
  @media (min-height: 800px) and ${themes.primary.media.maxLaptop} {
    min-height: 200px;
  }
`;

export const MobileColumnReversedContainer = styled.div`
  @media ${themes.primary.media.maxMobile} {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const TimeText = styled.time`
`;
