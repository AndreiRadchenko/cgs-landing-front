import styled from "styled-components";
import themes from "../utils/themes";

import MagnifyingGlass from "../../public/Portfolio/MagnifyingGlass.svg";
import LightExitIcon from "../../public/Portfolio/LightExitIcon.svg";
import DarkExitIcon from "../../public/Portfolio/DarkExitIcon.svg";

interface IPortfolioInfoProps {
  readonly isInfoCont?: boolean;
  readonly isProjectLink?: boolean;
}
interface IPortfolioProjectLink {
  readonly isProjectLink: boolean;
}

export const PortfolioContainer = styled.div`
  background-color: ${themes.primary.colors.blogBackground};
`;

export const PortfolioWrapper = styled.div`
  width: 100%;
  padding: 0 50px;

  @media ${themes.primary.media.maxTabletPortrait} {
    padding: 0 20px;
  }
`;

export const PortfolioCategoryWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 14px;
  max-width: 50%;

  @media ${themes.primary.media.maxTabletPortrait} {
    max-width: 100%;
    column-gap: 16px;
    margin-top: 6px;
    justify-content: flex-start;
  }
`;

interface IPortfolioCategoryItem {
  blockWidth: string;
  blockHeight: string;
}

export const PortfolioCategoryItem = styled.div<IPortfolioCategoryItem>`
  font-family: ${themes.primary.font.family.namu};
  height: ${({ blockHeight }) => blockHeight};
  width: ${({ blockWidth }) => blockWidth};
  white-space: nowrap;
  cursor: pointer;
  font-size: 14px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 18px;
  border: 1px solid black;
  background: transparent;
  line-height: 16.8px;

  &:hover {
    transition: 0.15s ease-out;
    border-right-width: 2.5px;
    border-bottom-width: 4.5px;
  }

  &.active {
    transition: all 0.2s ease-in-out;
    padding: 12px 18px;
    border: 1px solid #5869dd;
    background-color: #5869dd;
    color: #f1efed;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 16px;
    line-height: 19.2px;
  }
`;

export const PortfolioCommentWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const PortfolioComment = styled.div`
  font-family: ${themes.primary.font.family.namu};
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-size: 18px;
  margin-top: 18px;
  width: 607px;
  line-height: 28.8px;

  @media ${themes.primary.media.maxTabletPortrait} {
    text-align: start;
    margin-top: 26px;
    font-size: 16px;
    line-height: 25.6px;
  }
`;

export const PortfolioSearchWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  @media ${themes.primary.media.maxTabletPortrait} {
    align-items: start;
    flex-direction: column;
    row-gap: 20px;
    max-width: 100%;
  }
`;

export const SelectedIndustries = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row-reverse;
`;

export const SelectedIndustriesWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const IndustriesClearButton = styled.button`
  order: 1;
  font-size: 14px;
  background-color: transparent;
  font-family: ${themes.primary.font.family.namu};
  cursor: pointer;
  color: #8f8e93;
  border: none;
  padding: 0;
  white-space: nowrap;

  &:hover {
    color: black;
  }
`;

interface IPortfolioSearch {
  readonly isSearchOpen?: boolean;
}

export const PortfolioSearch = styled.div<IPortfolioSearch>`
  position: relative;
  font-family: ${themes.primary.font.family.namu};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  column-gap: 6px;
  border-bottom: ${({ isSearchOpen }) =>
    isSearchOpen ? "1px solid #8f8e93" : "1px solid transparent"};
  width: ${({ isSearchOpen }) => (isSearchOpen ? "232px" : "20px")};
  height: 32px;
  background: transparent;
  margin-right: 14px;
  transition: 0.5s ease-in-out;

  @media ${themes.primary.media.maxTabletPortrait} {
    border-bottom: 1px solid #8f8e93;
    width: 334px;
    margin: 0;
  }
`;

export const PortfolioFilterWarning = styled.div`
  font-family: ${themes.primary.font.family.namu};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #8f8e93;
  margin-right: 20px;
  font-size: 16px;
  text-align: start;
  margin-top: 50px;

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-right: 0;
    font-size: 18px;
    padding-bottom: 50px;
  }
`;

export const PortfolioSearchWarning = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-size: 18px;
  display: flex;
  flex-direction: column;
  color: #8f8e93;
  margin-bottom: 134px;
  margin-top: 0;
  padding-top: 21px;

  & .sorry-message {
    margin-bottom: 18px;
  }

  & .search-word {
    color: black;
  }

  & ul {
    padding-left: 28px;
    margin: 8px 0 0 0;

    & li {
      padding-bottom: 6px;
    }
  }
`;

export const PortfolioTemplateBlock = styled.div`
  height: 1920px;

  @media ${themes.primary.media.maxMobile} {
    height: 2200px;
  }
`;
interface IPortfolioIndustryTag {
  isArticlePage?: boolean;
}

export const PortfolioDropdownWrapper = styled.div``;

export const PortfolioIndustryTagWrapper = styled.button<IPortfolioIndustryTag>`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f1efed;
  background-color: ${themes.primary.colors.darkBlue};
  padding: 7px 6px 7px 8px;
  line-height: 16.8px;
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  font-family: ${themes.primary.font.family.namu};
  z-index: 1;
  column-gap: 6px;

  span {
    cursor: pointer;
  }

  &:hover {
    background-color: ${(props) =>
      props.isArticlePage && themes.primary.colors.hoveredBlogTag};
    cursor: ${(props) => props.isArticlePage && "pointer"};
  }

  @media ${themes.primary.media.maxTabletPortrait} {
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

export const PortfolioIndustryTag = styled.div`
  white-space: nowrap;
`;

export const PortfolioIndustryTagDelete = styled.span`
  background-image: url(${LightExitIcon.src});
  background-repeat: no-repeat;
  margin-top: 6px;
  height: 10px;
  width: 10px;
`;

export const PortfolioInputWrapper = styled.div<IPortfolioSearch>`
  display: ${({ isSearchOpen }) => (isSearchOpen ? "flex" : "none")};
  padding-top: 3px;
  font-family: ${themes.primary.font.family.namu};
  width: 100%;
  transition: 0.5s ease-in-out;

  & input {
    outline: none;
    width: 100%;
    font-size: 16px;
    border: none;
    background-color: transparent;
  }

  & input:active {
    border: none;
  }

  & input::placeholder {
    font-family: ${themes.primary.font.family.namu};
    color: #a9a5a4;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    display: flex;

    & input {
      width: 298px;
    }
  }
`;

export const PortfolioSearchElement = styled.div`
  display: flex;
  white-space: nowrap;
  border-radius: 2px;
  height: 34px;
  background-color: #dfe1e6;
  align-items: center;
  margin-left: 8px;
  padding: 0 10px;
`;

export const PortfolioSearchElementText = styled.div`
  padding-bottom: 1px;
`;

export const PortfolioSearchButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const PortfolioSearchCloseButton = styled.div<IPortfolioSearch>`
  display: ${({ isSearchOpen }) => (isSearchOpen ? "flex" : "none")};
  height: 100%;
  width: 20px;
  align-items: center;
  opacity: 0.5;
  transition: 0.5s ease-in-out;

  @media ${themes.primary.media.maxTabletPortrait} {
    display: none;
  }
`;

export const PortfolioSearchCloseIcon = styled.div`
  cursor: pointer;
  background-image: url(${DarkExitIcon.src});
  background-repeat: no-repeat;
  margin-top: 6px;
  height: 10px;
  width: 10px;
`;

export const PortfolioSearchIcon = styled.div<IPortfolioSearch>`
  background-image: url(${MagnifyingGlass.src});
  background-repeat: no-repeat;
  height: 20px;
  width: 20px;
  opacity: ${({ isSearchOpen }) => (isSearchOpen ? "0.4" : "1")};
  transition: 0.5s ease-in-out;

  @media ${themes.primary.media.maxTabletPortrait} {
    opacity: 0.4;
  }
`;

export const PortfolioFiltersWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 30px;

  @media ${themes.primary.media.maxTabletPortrait} {
    flex-direction: column;
    row-gap: 44px;
  }
`;

export const PortfolioProjectsWrapper = styled.div`
  margin-top: 29px;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 28px;

    & .portfolio {
      & .MyLoader_content {
        position: relative;
        padding-bottom: 110px;
      }
    }
  }
`;

export const PortfolioSearchAndInductriesWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 50%;
  flex-direction: column;
  margin-top: 8px;
  row-gap: 10px;

  & .portfolio_dropdown {
    font-family: ${themes.primary.font.family.namu};
    margin-bottom: 0;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 0;
    flex-direction: column;
    max-width: 100%;
    width: 100%;

    & .portfolio_dropdown {
      max-width: 100%;
      column-gap: 14px;
    }
  }
`;

export const PortfolioSearchAndInductries = styled.div`
  display: flex;
  justify-content: flex-end;

  @media ${themes.primary.media.maxTabletPortrait} {
    flex-direction: column;
    row-gap: 35px;
  }
`;

export const PortfolioProjectsContainer = styled.div<{
  isSeeMore: boolean;
  isTagSelected?: boolean;
}>`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(355px, 652px));
  gap: 52px 34px;
  margin-top: ${({ isSeeMore }) => (isSeeMore ? "29px" : "0")};
  padding-top: ${({ isTagSelected }) => (isTagSelected ? "0" : "31px")};
  margin-bottom: ${({ isSeeMore }) => isSeeMore && "100px"};

  @media ${themes.primary.media.maxTabletPortrait} {
    gap: 20px;
    margin-inline: 10px;
    padding-top: ${({ isSeeMore }) => isSeeMore && "30px"};
    margin-bottom: ${({ isSeeMore }) => isSeeMore && "60px"};
  }

  @media ${themes.primary.media.maxMobile} {
    padding-top: ${({ isSeeMore }) => (isSeeMore ? "30px" : "0")};
    margin-top: ${({ isSeeMore }) => isSeeMore && "0"};
  }
`;

export const PortfolioPaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 42px 0;

  @media ${themes.primary.media.maxTabletPortrait} {
    padding: 30px 0 42px 0;
  }
`;

export const PortfolioPaginationItemsWrapper = styled.div`
  display: flex;
  column-gap: 17px;

  & .active {
    background-color: #000;
    border: 1px solid #000;
    color: #f1efed;
  }
`;

export const PortfolioPaginationButton = styled.div`
  display: flex;
  height: 26px;
  width: 26px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
  font-family: ${themes.primary.font.family.openSans};

  &:hover {
    background-color: #000;
    border: 1px solid #000;
    color: #f1efed;
  }
`;

export const ProjectsContainerInfo = styled.div`
  opacity: 0;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  transition: opacity 0.4s;
`;

export const ProjectsContainerHeaderLink = styled.div<IPortfolioInfoProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 18px;
  line-height: 130%;
  color: ${({ isInfoCont }) =>
    isInfoCont
      ? themes.primary.colors.blogBackground
      : themes.primary.colors.primary};
  margin: 0;
  cursor: ${({ isProjectLink }) => isProjectLink && "pointer"};

  p {
    margin: 0;
  }

  span {
    color: ${themes.primary.colors.comment};
  }

  & path {
    transition: ${({ isProjectLink }) =>
      isProjectLink && "transform 1s ease-in-out"};
    opacity: ${({ isProjectLink }) => (!isProjectLink ? 0.3 : 1)};
  }
  & path:nth-child(1) {
    transform: translate(-36px, 36px);
  }
  &:hover {
    & path:nth-child(1) {
      transform: translate(0px, 0px);
    }
    & path:nth-child(2) {
      transform: translate(36px, -36px);
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 12px;
    line-height: 130%;
  }
`;

export const ProjectsContainerArrowContainer = styled.div<IPortfolioProjectLink>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  background: ${({ isProjectLink }) =>
    !isProjectLink ? "#f1eece" : themes.primary.colors.portfolioHover};
  border: ${({ isProjectLink }) =>
    !isProjectLink
      ? `2.26667px solid #a9a8a6`
      : `2.26667px solid ${themes.primary.colors.primary}`};

  border-radius: 50%;
  overflow: hidden;
  transition: background 0.3s, border 0.3s;

  svg {
    width: 35px;
    height: 35px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 26px;
    height: 26px;
    border-width: 1.25px;
  }
`;

export const ProjectsContainerHeader = styled.div<IPortfolioInfoProps>`
  padding: 17px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${({ isInfoCont }) =>
    isInfoCont
      ? `1.5px solid #1d1c1d`
      : `1.5px solid ${themes.primary.colors.headerBorder}`};

  @media ${themes.primary.media.maxTabletPortrait} {
    margin: 7px 10px;
    padding: 0 0 9px 0;
    border-bottom-width: 1px;
  }
`;

export const ProjectsContainerInfoBtn = styled.div`
  position: relative;
  margin: 0 20px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 16px;
  line-height: 160%;
  color: ${themes.primary.colors.blogBackground};
  text-transform: uppercase;
  padding: 5px 20px 7px;
  border: 1px solid ${themes.primary.colors.blogBackground};
  width: 189px;
  height: 39px;
  cursor: pointer;
  outline: none;
  transition: 1s ease-in-out;

  .btnContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }

  & > svg {
    position: absolute;
    left: -1.2px;
    top: -1.5px;
    fill: none;
    stroke-width: 4px;
    stroke-dasharray: 50 480;
    stroke-dashoffset: 50;
    transition: 1s ease-in-out;
    stroke: #30302f;
  }

  &:hover > svg {
    stroke-dashoffset: 50 !important;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 145px;
    height: 32px;
    font-size: 12px;
    line-height: 160%;
    padding: 7px 10px;
    margin: 0 10px;

    & > svg {
      width: 145px !important;
      height: 50px !important;
      top: -10px;
    }
  }
`;

export const ProjectsContainer = styled.div<IPortfolioInfoProps>`
  position: relative;
  min-height: 441px;

  &:hover ${ProjectsContainerInfo} {
    opacity: 1;
    transition: opacity 0.4s;
  }

  &:hover ${ProjectsContainerArrowContainer} {
    background: ${({ isProjectLink }) =>
      !isProjectLink ? "#6a6745" : themes.primary.colors.portfolioHover};
    border: ${({ isProjectLink }) =>
      !isProjectLink
        ? `2.26667px solid #181817`
        : `2.26667px solid ${themes.primary.colors.primary}`};
  }

  &:hover ${ProjectsContainerInfoBtn} {
    & > svg {
      stroke-dashoffset: -480;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    min-height: 240px;

    &:hover ${ProjectsContainerArrowContainer} {
      border-width: 1.25px;
    }
  }
`;

export const ProjectsContainerInfoText = styled.div`
  padding: 20px 32px 33px 20px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 18px;
  line-height: 160%;
  color: ${themes.primary.colors.secondary};
  overflow: hidden;

  p {
    margin: 0;
    width: 100%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3; /* start showing ellipsis when 3rd line is reached */
    white-space: pre-wrap; /* let the text wrap preserving spaces */
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 14px;
    line-height: 128%;
    padding: 10px 16px 18px 10px;
  }
`;

export const ProjectsContainerInfoLower = styled.div`
  cursor: pointer;
  height: 341px;

  @media ${themes.primary.media.maxTabletPortrait} {
    height: 185px;
  }
`;

export const ProjectsContainerInfoIconsContainer = styled.div`
  margin: 60px 50px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  svg {
    height: 60px;
    width: 60px;
    path {
      fill: ${themes.primary.colors.secondary};
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin: 18px 14px 22px;
    gap: 3px;

    svg {
      height: 40px;
      width: 40px;
    }

    span {
      width: 47px !important;
      height: 47px !important;
    }
  }
`;

export const ProjectsContainerHeaderTitle = styled.div`
  max-width: 75%;

  h4 {
    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.heavy};
    font-size: 30px;
    line-height: 130%;
    margin: 0;
    color: ${themes.primary.colors.primary};

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    white-space: pre-wrap;
  }
  p {
    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.heavy};
    font-size: 18px;
    line-height: 130%;
    color: ${themes.primary.colors.comment};
    margin: 0;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    h4 {
      font-size: 16px;
      line-height: 20.8px;
    }
    p {
      font-size: 12px;
      line-height: 15.6px;
    }
  }
`;

export const ProjectsContainerInfoHeaderTitle = styled.div`
  max-width: 75%;

  h4 {
    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.light} !important;
    font-size: 30px;
    line-height: 130%;
    margin: 0;
    color: ${themes.primary.colors.blogBackground};

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    white-space: pre-wrap;
  }
  p {
    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.heavy};
    font-size: 18px;
    line-height: 130%;
    background: linear-gradient(
      90deg,
      ${themes.primary.colors.portfolioGradient} 0%,
      ${themes.primary.colors.darkBlue} 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    margin: 0;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    h4 {
      font-size: 16px;
      line-height: 20.8px;
    }
    p {
      font-size: 12px;
      line-height: 15.6px;
    }
  }
`;

export const ProjectsContainerImage = styled.div`
  display: flex;
  justify-content: center;
  @media ${themes.primary.media.maxTabletPortrait} {
    span {
      width: 355px !important;
      height: 185px !important;
      object-fit: contain;
    }
  }
`;

export const CTACont = styled.div`
  position: relative;
  margin: 98px 0 180px 0;
  font-family: "NAMU", sans-serif;
  padding: 0 50px;

  @media ${themes.primary.media.maxTabletLandScape} {
    height: 466px;
    margin: 53px 0 64px 0;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    height: 558px;
    padding: 0 20px;
  }
`;

export const BlockMainIcon = styled.div`
  position: absolute;
  width: 412px;
  height: 284px;
  bottom: 30%;
  right: 100px;
  transform: translateY(50%);

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 317px;
    height: 218px;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
  }
`;

export const CTAHeading = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.portfolioCTATitle};
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 48px;
  text-transform: uppercase;
  margin-bottom: 15px;

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const CTAText = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.smallPortfolioText};
  font-weight: ${themes.primary.font.weight.heavy};
  max-width: 827px;
  line-height: 26px;
  margin-bottom: 40px;

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 18px;
    line-height: 26px;
    max-width: 100%;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 28px;
  }
`;
