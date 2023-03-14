import styled, { css } from "styled-components";
import themes from "../utils/themes";
import { infiniteBlogText } from "./Animations.styled";

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

  @media ${themes.primary.media.maxMobile} {
    width: 100%;

    &.preview {
      margin-top: 1.125rem;
      row-gap: 1rem;
    }
    &.header {
      display: none;
    }
  }
`;

export const BlogItemRowContainer = styled.div`
  display: flex;
  align-items: center;

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    justify-content: space-between;
  }
`;

export const FlexRowContainer = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
`;

export const ArticlePreview = styled(FlexRowContainer)`
  @media ${themes.primary.media.maxMobile} {
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

export const AllArticlesContainer = styled.section<IAllArticles>`
  padding: 90px 70px 0;
  margin-bottom: 180px;
  max-width: 1200px;
  width: 100%;

  @media ${themes.primary.media.minPCFullHD} {
    max-width: 100em;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    padding: 90px 30px 0;
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 38px 8px 0;
    margin-bottom: 175px;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${themes.primary.colors.comment};

  &.portfolio {
    z-index: 5;
    width: 100%;
    position: absolute;
  }
`;

export const GeneralInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 34px;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 1rem;

    &.preview {
      display: none;
    }
  }
`;

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
  @media ${themes.primary.media.minPC} {
    height: 2.333em;
    padding: 0.5em ${themes.primary.font.size.primary};
    font-size: ${themes.primary.font.size.primary};
  }

  @media ${themes.primary.media.maxMobile} {
    &.preview {
      position: absolute;
      top: 0;
      left: 0;
      border: 0;
      font-size: 1.35em;
      margin-left: -1px;
    }
  }
`;

export const BlogItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 37px;
  border: 1px solid ${themes.primary.colors.comment};
  width: 100%;
  column-gap: 30px;
  z-index: 2;
  position: relative;
  background-color: ${themes.primary.colors.blogBackground};

  @media ${themes.primary.media.maxMobile} {
    padding: 50px 0.75rem 25px;
  }
`;

export const MarginContainer = styled.div`
  margin-bottom: 44px;

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 50px;
  }
`;

export const BlogItemContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;

  @media ${themes.primary.media.maxMobile} {
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
  height: auto;
  width: 45%;

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
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
  font-size: ${themes.primary.font.size.secondaryArticleTitle};
  font-weight: ${themes.primary.font.weight.extraBold};
  line-height: 130%;
  margin: 0;
  margin-top: 14px;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 2.3em;
  }

  @media ${themes.primary.media.maxMobile} {
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
  line-height: 170%;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.33em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 1.125rem;
    font-size: 1rem;
  }
`;

export const LoopText = styled.div`
  font-size: ${themes.primary.font.size.aboutUsCardText};
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
    height: 46px;
    font-size: 1.75rem;
    margin-top: 9px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 0.875rem;
    margin-top: 30px;
  }
`;

export const LoopContainer = styled.div`
  position: relative;
  overflow: hidden;
  white-space: nowrap;
`;

export const GrayText = styled.div`
  color: ${themes.primary.colors.authorGrey};
  font-size: ${themes.primary.font.size.articleViews};
  &.big {
    font-size: 1.34em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 0.875rem;
  }
`;

export const Date = styled.div`
  color: ${themes.primary.colors.authorGrey};
  font-size: 1.34em;

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 0.875rem;
  }
`;

export const MainBlogAuthor = styled(GrayText)`
  font-weight: ${themes.primary.font.weight.medium};
  font-size: ${themes.primary.font.size.articleViews};

  @media ${themes.primary.media.maxMobile} {
    font-size: 0.875rem;
  }
`;

export const SecondaryAuthor = styled(GrayText)`
  font-weight: ${themes.primary.font.weight.medium};
  font-size: ${themes.primary.font.size.secondaryArticleAuthor};

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.33em;
  }

  @media ${themes.primary.media.maxMobile} {
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
  column-gap: 5px;
  margin-left: 70px;

  @media ${themes.primary.media.maxMobile} {
    margin-left: 0;
  }
`;

export const WatchContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 9px;

  @media ${themes.primary.media.maxMobile} {
    column-gap: 6px;
    &.timer {
      display: none;
    }
  }
`;

export const ArticleWatchContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

export const WatchCount = styled(GrayText)`
  font-size: 1.34em;
  .article {
    font-size: ${themes.primary.font.size.articleViews};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 0.875rem;
  }
`;

export const WatchCountArticle = styled(GrayText)`
  font-size: ${themes.primary.font.size.articleViews};

  @media ${themes.primary.media.maxMobile} {
    font-size: 0.875rem;
  }
`;

export const BlogItemWatchIcon = styled.img`
  width: 1.83em;
  height: 1.166em;
  margin-left: 1.166em;

  @media ${themes.primary.media.maxMobile} {
    margin-left: 0;
    width: 19px;
    height: 12px;
  }
`;

export const WatchIcon = styled.img`
  width: 22px;
  height: 14px;

  @media ${themes.primary.media.minPCFullHD} {
    width: 1.58em;
    height: 1em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 19px;
    height: 12px;
  }
`;

export const TimerIcon = styled.img`
  width: 1.25em;
  height: 1.25em;

  @media ${themes.primary.media.maxMobile} {
    width: 14px;
    height: 14px;
  }
`;

export const LeftLine = styled.img`
  position: absolute;
  width: 203.88px;
  height: 387.72px;
  left: 0;
  top: 1400px;

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const RightLine = styled.img<IArticlesOnPage>`
  position: absolute;
  width: 651.29px;
  height: 1032.31px;
  right: 0px;
  bottom: -60px;

  @media ${themes.primary.media.maxMobile} {
    transform-origin: 100% 50%;
    transform: scale(0.65);
  }
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
    &.checked {
      color: ${themes.primary.colors.comment};
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 0.875rem;
  }
`;

export const DropdownButton = styled.button<{ isHeader?: boolean }>`
  cursor: pointer;
  color: ${themes.primary.colors.primary};
  background-color: ${themes.primary.colors.blogBackground};
  box-sizing: border-box;
  border: ${(props) =>
    !props.isHeader &&
    `1px solid ${themes.primary.colors.comment} !important;`};
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.primary};
  vertical-align: middle;
  line-height: normal;
  letter-spacing: 0.03em;
  height: 35px;
  width: 131px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;

  &:hover {
    transition: 0.3s;
    border-right: 1.5px solid ${themes.primary.colors.primary} !important;
    border-bottom: 3px solid ${themes.primary.colors.primary} !important;
  }
  &:hover &.open {
    border-bottom: 0 !important;
    border-right: 3px solid ${themes.primary.colors.primary} !important;
    img {
      transform: rotate(180deg);
    }
  }
  &.open {
    border-bottom: 0 !important;
    border-right: 3px solid ${themes.primary.colors.primary} !important;

    img {
      transform: rotate(180deg);
    }
  }
  & > img,
  & > span {
    vertical-align: middle;
    @media ${themes.primary.media.minLaptop} {
      font-size: ${themes.primary.font.size.careersFormLaptop};
    }

    @media ${themes.primary.media.minPC} {
      font-size: ${themes.primary.font.size.vistaco};
    }
  }

  img {
    margin-left: 10px;
    transform: rotate(0deg);
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 0.875rem;
  }

  @media ${themes.primary.media.minPCFullHD} {
    height: 3em;
    width: 10.91em;
    padding: 0 1em;
  }
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  background-color: ${themes.primary.colors.blogBackground};
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background: linear-gradient(
    180deg,
    rgba(241, 239, 237, 0.8) 100%,
    rgba(241, 239, 237, 0) 114.26%
  );
`;

export const DropdownContainer = styled.div`
  display: flex;
  justify-content: right;
  margin-bottom: 25px;
  align-items: flex-end;
  column-gap: 20px;
  flex-wrap: wrap;
  row-gap: 12px;

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 1.375rem;
  }
`;

export const PodcastContainer = styled.section`
  padding: 70px 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 50px;
  border-block: 1px solid ${themes.primary.colors.comment};

  @media ${themes.primary.media.maxTabletPortrait} {
    padding: 55px 25px 55px 20px;
  }

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column-reverse;
    row-gap: 1.375rem;
    margin-top: 30px;
    padding-block: 30px;
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
    width: 936px;
    height: 383px;
    padding: 50px 60px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    padding: 20px;
    height: auto;
    width: 430px;
    padding-bottom: 30px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 350px;
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
    width: 108px;
    height: 108px;
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
    width: 83px;
    height: 83px;
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
    width: 83px;
    height: 83px;
  }
`;

export const SmallNavigation = styled.div`
  font-size: ${themes.primary.font.size.headerLinkText};
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
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.125rem;
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

  @media ${themes.primary.media.maxMobile} {
    font-size: 0.875rem;
  }

  @media (max-width: 372px) {
    font-size: 0.75rem;
  }
`;

export const SecondsRight = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 2px;
  transform: scaleX(-1);

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
`;

export const PlayerTime = styled(GrayText)`
  font-size: ${themes.primary.font.size.fourteenth};

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.375rem;

    margin-bottom: 20px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 0.75rem;
  }
`;

export const PodcastTitle = styled(BlogItemTitle)`
  max-width: 710px;
  width: 100%;

  @media ${themes.primary.media.minPCFullHD} {
    max-width: 1250px;
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

  @media ${themes.primary.media.minPCFullHD} {
    max-width: 1222px;
  }
`;

export const PodcastIcon = styled.img`
  width: 15px;
  height: 22px;
`;

export const PodcastWord = styled(BlogItemDescription)`
  margin: 0;

  @media ${themes.primary.media.maxMobile} {
    font-size: 0.875rem;
  }
`;

export const PlayTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 6px;
  column-gap: 7px;
  border: 1px solid ${themes.primary.colors.headerBorder};

  @media ${themes.primary.media.maxMobile} {
    font-size: 0.75rem;
  }
`;

export const PlayTriangle = styled.img`
  width: 12px;
  height: 15px;
`;

export const HeaderBlock = styled.header`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-end;

  @media ${themes.primary.media.maxMobile} {
    justify-content: center;
    padding-inline: 0.5rem;
  }
`;

export const MainBlogItemTitle = styled(BlogItemTitle)`
  margin-top: 10px;
  max-width: 870px;
  font-size: ${themes.primary.font.size.mainBlogTitle};
  font-weight: ${themes.primary.font.weight.extraBold};
  &:hover {
    color: ${themes.primary.colors.darkBlue};
  }

  @media ${themes.primary.media.minPCFullHD} {
    max-width: none;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5rem;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-top: 1.75rem;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${themes.primary.colors.comment};

  @media ${themes.primary.media.maxMobile} {
    box-sizing: border-box;
    border: 1px solid ${themes.primary.colors.comment};
  }
`;

export const MainBlogItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 31px 33px 32px 51px;
  width: 67vw;
  @media ${themes.primary.media.maxTabletLandScape} {
    padding: 21px 23px 22px 41px;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    padding: 15px 18px 17px 31px;
  }
  @media ${themes.primary.media.minPC} {
    padding: 41px 43px 42px 71px;
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    padding: 50px 0.75rem 25px;
    width: 100%;
  }
`;

export const MainBlogItemImage = styled.img`
  max-width: 55vw;
  width: 100%;
  height: auto;

  @media ${themes.primary.media.maxMobile} {
    max-width: none;
  }
`;

export const MainBlogItemTag = styled(Tag)`
  margin-top: 25px;
  font-size: ${themes.primary.font.size.primary};
  padding: 0.5em 1em;

  @media ${themes.primary.media.maxMobile} {
    margin-top: -1px;
    margin-left: -1px;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 0.875rem;
    padding: 0.166em 0.835em;
    line-height: 160%;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding: 1.1em 1.3em;
  }
`;

export const MainBlogItemDescription = styled(BlogItemDescription)`
  margin-top: 10px;
  font-size: ${themes.primary.font.size.oneAndHalf};
  max-width: 870px;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 1.125rem;
    font-size: 1rem;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-top: 1.125rem;
  }

  @media ${themes.primary.media.minPCFullHD} {
    max-width: none;
  }
`;

export const SmallArticleItemTitle = styled(BlogItemTitle)`
  font-size: ${themes.primary.font.size.menuElement};
  margin-top: 14px;
  &:hover {
    color: ${themes.primary.colors.darkBlue};
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.3em;
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
`;

export const SmallArticleItemDescription = styled(BlogItemDescription)`
  font-size: ${themes.primary.font.size.tertiary};
  margin-top: 15px;
  margin-bottom: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

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
  @media (min-height: 800px) and ${themes.primary.media.maxLaptop} {
    min-height: 200px;
  }
  @media ${themes.primary.media.minPC} {
    padding: 40px 60px 40px 40px;
  }
`;

export const Arrow = styled.img``;

export const SliderDot = styled.div`
  height: 0.905em;
  width: 0.83em;
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
  column-gap: 0.83em;
  margin-top: 20px;

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const MobileColumnReversedContainer = styled.div`
  @media ${themes.primary.media.maxMobile} {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const TimeText = styled.time``;
