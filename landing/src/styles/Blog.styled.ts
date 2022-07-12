import styled, { css } from "styled-components";
import themes from "../utils/themes";
import { infiniteText } from "./AnimationsStyled";

interface ITag {
  isArticlePage?: boolean;
}

interface IArticlesOnPage {
  articles: number;
}

interface IAllArticles {
  articles: number;
}

interface ITrack {
  range: number;
}

export const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BlogItemRowContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FlexRowContainer = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
`;

export const BlogContainer = styled.div`
  font-family: ${themes.primary.font.family.openSans};
  font-weight: ${themes.primary.font.weight.normal};
  color: ${themes.primary.colors.blogDarkText};
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  background-color: ${themes.primary.colors.blogBackground};
  button {
    outline: none;
    border: none;
  }
`;

export const AllArticlesContainer = styled.div<IAllArticles>`
  padding: 90px 25px 0;
  margin-bottom: 180px;
  @media ${themes.primary.media.maxTabletPortrait} {
    margin-bottom: 120px;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${themes.primary.colors.comment};
`;

export const GeneralInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 34px;
`;

export const Tag = styled.button<ITag>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  color: ${themes.primary.colors.secondary};
  background-color: ${themes.primary.colors.darkBlue};
  padding: 5px 10px;
  font-style: normal;
  font-weight: ${themes.primary.font.weight.semiBold};
  font-size: ${themes.primary.font.size.fourteenth};
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
`;

export const BlogItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 37px;
  border: 1px solid ${themes.primary.colors.comment};
  width: 1200px;
  max-width: 1400px;
  column-gap: 25px;
  z-index: 2;
  position: relative;
  background-color: ${themes.primary.colors.blogBackground};

  @media (max-width: 1250px) {
    max-width: 1000px;
  }
  @media (max-width: 1050px) {
    max-width: 800px;
  }
`;

export const MarginContainer = styled.div`
  margin-bottom: 44px;
`;

export const BlogItemContent = styled(FlexColumnContainer)`
  max-width: 450px;
  width: 100%;
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
  margin: auto;
  max-width: 394px;
  width: 100%;
  @media ${themes.primary.media.maxTabletPortrait} {
    max-width: 374px;
  }
  @media (max-width: 840px) {
    max-width: 340px;
  }
`;

export const HoverBlock = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  right: -10px;
  bottom: -10px;
  border: 1.5px solid ${themes.primary.colors.primary};
  z-index: 0;
  display: flex;
  align-items: flex-end;
  visibility: hidden;
`;

export const HoverBlackBlock = styled.div`
  height: 50%;
  width: 100%;
  outline: 1.5px solid ${themes.primary.colors.primary};
  background-color: black;
  visibility: hidden;
`;

export const BlogItemTitle = styled.p`
  font-size: ${themes.primary.font.size.secondaryArticleTitle};
  font-weight: ${themes.primary.font.weight.extraBold};
  line-height: 130%;
  margin: 0;
  margin-top: 14px;
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

export const PlayerTitle = styled.p`
  font-size: ${themes.primary.font.size.headerLinkText};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 16px;
  line-height: 170%;
`;

export const BlogItemDescription = styled.p`
  font-size: ${themes.primary.font.size.secondaryArticleDescription};
  margin: 0;
  margin-top: 16px;
  margin-bottom: 0;
  line-height: 170%;
`;
export const LoopText = styled.div`
  font-size: ${themes.primary.font.size.aboutUsCardText};
  margin: 0;
  height: 30px;

  margin-top: 16px;
  margin-bottom: 0;
  line-height: 170%;
  animation: ${infiniteText} infinite 15s linear;
`;

export const LoopContainer = styled.div`
  position: relative;
  overflow: hidden;
  white-space: nowrap;
`;
export const GrayText = styled.div`
  color: ${themes.primary.colors.authorGrey};
  font-size: 0.975em;
`;

export const Date = styled.div`
  color: ${themes.primary.colors.authorGrey};
  font-size: 0.975em;
`;

export const MainBlogAuthor = styled(GrayText)`
  font-weight: ${themes.primary.font.weight.medium};
  font-size: ${themes.primary.font.size.articleViews};
`;

export const SecondaryAuthor = styled(GrayText)`
  font-weight: ${themes.primary.font.weight.medium};
  font-size: ${themes.primary.font.size.secondaryArticleAuthor};
`;

export const ArticleTimerContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  margin-left: 70px;
`;

export const WatchContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 9px;
`;

export const ArticleWatchContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  margin-left: 17px;
`;

export const WatchCount = styled(GrayText)`
  font-size: ${themes.primary.font.size.articleViews};
`;

export const BlogItemWatchIcon = styled.img`
  width: 22px;
  height: 14px;
  margin-left: 14px;
`;

export const WatchIcon = styled.img`
  width: 22px;
  height: 14px;
`;

export const TimerIcon = styled.img`
  width: 14px;
  height: 14px;
`;

export const LeftLine = styled.img`
  position: absolute;
  width: 203.88px;
  height: 387.72px;
  left: 0;
  top: 1400px;
`;

export const RightLine = styled.img<IArticlesOnPage>`
  position: absolute;
  width: 651.29px;
  height: 1032.31px;
  right: 0px;
  bottom: 0px;
`;

export const DropdownContent = styled.div`
  position: absolute;
  background-color: ${themes.primary.colors.blogBackground};
  min-width: 220px;
  z-index: 3;
  right: 0;
  border: 1px solid ${themes.primary.colors.primary};
  border-right: 3px solid ${themes.primary.colors.primary};
  border-bottom: 12px solid ${themes.primary.colors.primary};
  display: none;
  &.open {
    display: block;
  }
  div {
    color: ${themes.primary.colors.primary};
    font-family: ${themes.primary.font.family.namu};
    font-size: ${themes.primary.font.size.primary};
    border-bottom: 1px solid ${themes.primary.colors.comment};
    padding: 10px 16px;
    text-decoration: none;
    text-align: left;
    cursor: pointer;
    &:hover {
      background-color: ${themes.primary.colors.blogDropdownHover};
    }
    &:last-child {
      border-bottom: 0;
    }
  }
`;

export const DropdownButton = styled.button<{ isHeader?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: ${themes.primary.colors.primary};
  height: 35px;
  width: 131px;
  text-align: left;
  padding-left: 10px;
  box-sizing: border-box;
  border: ${(props) =>
    !props.isHeader &&
    `1px solid ${themes.primary.colors.comment} !important;`};
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.primary};
  letter-spacing: 0.03em;
  &:hover {
    transition: 0.3s;
    border-right: 1.5px solid ${themes.primary.colors.primary} !important;
    border-bottom: 3px solid ${themes.primary.colors.primary} !important;
  }
  &:hover &.open {
    border-bottom: 0 !important;
    border-right: 3px solid ${themes.primary.colors.primary} !important;

    img {
      transform: rotate(0deg);
    }
  }
  &.open {
    border-bottom: 0 !important;
    border-right: 3px solid ${themes.primary.colors.primary} !important;

    img {
      transform: rotate(0deg);
    }
  }

  img {
    transform: rotate(180deg);
  }
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  background-color: ${themes.primary.colors.blogBackground};
`;

export const DropdownContainer = styled.div`
  display: flex;
  justify-content: right;
  margin-bottom: 25px;
  align-items: flex-end;
  column-gap: 20px;
`;

export const PodcastContainer = styled.div`
  padding: 70px 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 50px;
  @media ${themes.primary.media.maxTabletPortrait} {
    padding: 55px 25px 55px 20px;
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
  @media ${themes.primary.media.maxTabletLandScape} {
    padding: 20px;
    height: auto;
    width: 430px;
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
`;
export const RightArrow = styled.div`
  width: 45px;
  cursor: pointer;
  height: 56px;
  margin-right: 35px;
  position: relative;
  background-size: contain;
  background-image: url("/BlogDecorations/Podcast/RightArrow.svg");
`;
export const LeftArrow = styled.div`
  background-image: url("/BlogDecorations/Podcast/LeftArrow.svg");
  width: 44px;
  height: 49px;
  margin-left: 35px;
  cursor: pointer;
  position: relative;
  background-size: contain;
  right: 1px;
`;

export const SmallNavigation = styled.div`
  font-size: ${themes.primary.font.size.headerLinkText};
  display: flex;
  align-items: flex-start;

  width: 12px;
  justify-content: center;
  height: 27px;
  cursor: pointer;

  &.activated {
    font-weight: ${themes.primary.font.weight.bold};
  }
`;

export const SecondsLeft = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 2px;
  right: 1px;
`;

export const SecondsRight = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 6px;
  right: 1px;
`;

export const Track = styled.div`
  width: 100%;
  position: relative;
  margin-top: 15px;
  height: 4px;
  border-radius: 50px;

  display: flex;
  align-items: center;
`;

export const PlayedTrack = styled.input<ITrack>`
  -webkit-appearance: none;
  position: absolute;
  left: -2px;
  height: 100%;
  width: 100%;
  &::-webkit-slider-runnable-track {
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
`;

export const PlayerDot = styled.div`
  position: relative;
  height: 7px;
  width: 7px;
  left: 39%;
  border-radius: 50px;
  background-color: ${themes.primary.colors.primary};
`;

export const PlayerTimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;

export const PlayerTime = styled(GrayText)`
  font-size: ${themes.primary.font.size.fourteenth};
`;

export const PodcastTitle = styled(BlogItemTitle)`
  max-width: 710px;
  width: 100%;
  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: ${themes.primary.font.size.secondary};
  }
`;

export const PodcastDescription = styled(BlogItemDescription)`
  max-width: 710px;
  width: 100%;
  margin-bottom: 0;
`;

export const PodcastIcon = styled.img`
  width: 15px;
  height: 22px;
`;

export const PodcastWord = styled(BlogItemDescription)`
  margin: 0;
`;

export const PlayTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 6px;
  column-gap: 7px;
  border: 1px solid ${themes.primary.colors.headerBorder};
`;

export const PlayTriangle = styled.img`
  width: 12px;
  height: 15px;
`;

export const HeaderBlock = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;

export const MainBlogItemTitle = styled(BlogItemTitle)`
  margin-top: 10px;
  max-width: 870px;
  font-size: ${themes.primary.font.size.mainBlogTitle};
  font-weight: ${themes.primary.font.weight.extraBold};
  &:hover {
    color: ${themes.primary.colors.darkBlue};
  }
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${themes.primary.colors.comment};
`;

export const MainBlogItemContainer = styled(FlexColumnContainer)`
  padding: 30px 50px;
  width: 66.33vw;
  @media ${themes.primary.media.maxTabletLandScape} {
    padding: 35px;
  }
  @media ${themes.primary.media.minLaptop} {
    padding: 30px;
    padding-right: 50px;
  }
  @media ${themes.primary.media.minPC} {
    padding: 70px;
  }
`;

export const MainBlogItemImage = styled.img`
  max-width: 55vw;
  width: 100%;
  height: auto;
`;

export const MainBlogItemTag = styled(Tag)`
  margin-top: 25px;
  font-size: ${themes.primary.font.size.primary};
`;

export const MainBlogItemDescription = styled(BlogItemDescription)`
  margin-top: 10px;
  font-size: ${themes.primary.font.size.oneAndHalf};
  max-width: 870px;
`;

export const SmallArticleItemTitle = styled(BlogItemTitle)`
  font-size: ${themes.primary.font.size.menuElement};
  margin-top: 15px;
  &:hover {
    color: ${themes.primary.colors.darkBlue};
  }
`;

export const SmallGeneralInfo = styled(GeneralInfo)`
  margin-top: 0;
`;

export const SmallArticleItemDescription = styled(BlogItemDescription)`
  font-size: ${themes.primary.font.size.tertiary};
  margin-top: 15px;
  margin-bottom: 0;
  @media ${themes.primary.media.maxTabletLandScape} {
    margin-top: 8px;
  }
  @media ${themes.primary.media.maxPCFullHD} {
    font-size: ${themes.primary.font.size.linkText};
  }
`;

export const SmallArticleContainer = styled(FlexColumnContainer)`
  width: 33vw;
  min-height: 33vh;
  height: auto;
  padding: 25px 60px 25px 25px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${themes.primary.colors.comment};
  &:last-child {
    border-bottom: 0;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    padding: 18px 25px 18px 20px;
  }
  @media (min-height: 800px) and ${themes.primary.media.maxTabletLandScape} {
    height: auto;
    min-height: 200px;
  }
  @media ${themes.primary.media.minPC} {
    padding: 40px 60px 40px 40px;
  }
`;

export const Arrow = styled.img``;

export const SliderDot = styled.div`
  height: 11px;
  width: 10px;
  border: 1px solid ${themes.primary.colors.primary};
  &.current {
    background-color: ${themes.primary.colors.primary};
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    height: 8.5px;
    width: 8px;
  }
`;

export const SliderDotsContainer = styled(FlexRowContainer)`
  column-gap: 10px;
  margin-top: 20px;
`;

export const AbsoluteContainer = styled.div`
  position: relative;
`;
