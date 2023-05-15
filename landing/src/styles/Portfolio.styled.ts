import styled from "styled-components";
import themes from "../utils/themes";

import MagnifyingGlass from "../../public/Portfolio/MagnifyingGlass.svg";
import ExitIcon from "../../public/Portfolio/ExitIcon.svg";

interface IPortfolioInfoProps {
  readonly isInfoCont?: boolean;
  readonly isProjectLink?: boolean;
}
interface IPortfolioProjectLink {
  readonly isProjectLink: boolean;
}

interface IPortfolioSearch {
  readonly searchElement: boolean;
}

export const PortfolioContainer = styled.div`
  background-color: ${themes.primary.colors.blogBackground};
`;

export const PortfolioWrapper = styled.div`
  width: 100%;
  padding: 0 50px;

  @media ${themes.primary.media.maxMobile} {
    padding: 0 10px;
  }
`;

export const PortfolioCategoryWrapper = styled.div`
  position: relative;
  margin-top: 29px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 26px;

  @media ${themes.primary.media.maxMobile} {
    column-gap: 16px;
    margin-top: 6px;
  }
`;

export const PortfolioCategoryItem = styled.div`
  font-family: ${themes.primary.font.family.namu};
  cursor: pointer;
  white-space: nowrap;
  font-size: 22px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 18px;
  gap: 10px;
  border: 1px solid black;
  background: transparent;
  line-height: 24.4px;
  margin-top: 20px;
  transition: all 0.2s ease-in-out;

  &.active {
    border: 1px solid #5869dd;
    background-color: #5869dd;
    color: white;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 18px;
    line-height: 21.6px;
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

  @media ${themes.primary.media.maxMobile} {
    margin-top: 26px;
  }
`;

export const PortfolioSearchWrapper = styled.div`
  display: flex;

  @media ${themes.primary.media.maxMobile} {
    align-items: center;
    flex-direction: column;
    row-gap: 20px;
  }
`;

export const PortfolioSearch = styled.div`
  position: relative;
  font-family: ${themes.primary.font.family.namu};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  border: 1px solid #8f8e93;
  width: 318px;
  height: 50px;
  background: transparent;

  @media ${themes.primary.media.maxMobile} {
    width: 335px;
  }
`;

export const PortfolioFilterWarning = styled.div`
  font-family: ${themes.primary.font.family.namu};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8f8e93;
  margin-left: 18px;
  font-size: 18px;
`;

export const PortfolioSearchWarning = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-size: 18px;
  display: flex;
  flex-direction: column;
  color: #8f8e93;
  margin: 28px 0 134px;

  & .warning_list-header {
    margin-top: 18px;
  }

  & ul {
    padding-left: 28px;
    margin: 8px 0 0 0;

    & li {
      padding-bottom: 6px;
    }
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

export const PortfolioIndustryTag = styled.div`
  white-space: nowrap;
`;

export const PortfolioIndustryTagDelete = styled.div``;

export const PortfolioInputWrapper = styled.div`
  display: flex;

  & input {
    outline: none;
    font-size: 16px;
    margin-left: 10px;
    width: 265px;
    border: none;
    background-color: transparent;
  }

  & input:active {
    border: none;
  }

  & input::placeholder {
    font-family: ${themes.primary.font.family.namu};
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

export const PortfolioSearchDeleteButton = styled.div`
  display: flex;
  background-image: url(${ExitIcon.src});
  background-repeat: no-repeat;
  height: 10px;
  width: 10px;
  cursor: pointer;
  margin-left: 8px;
  align-items: center;
`;

export const PortfolioSearchButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 41px;
  height: 50px;
  cursor: pointer;
`;

export const PortfolioSearchIcon = styled.div`
  background-image: url(${MagnifyingGlass.src});
  background-repeat: no-repeat;
  height: 16px;
  width: 16px;
  margin-right: 1px;
`;

export const PortfolioFiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  & .portfolio_dropdown {
    font-family: ${themes.primary.font.family.namu};
    margin-bottom: 0;
    flex-wrap: wrap-reverse;
    align-items: center;
    max-width: 50%;
  }

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    margin-top: 26px;

    & .portfolio_dropdown {
      margin-top: 36px;
      padding-right: 10px;
      max-width: 100%;
    }
  }
`;

export const PortfolioProjectsContainer = styled.div`
  margin-top: 107px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(355px, 652px));
  gap: 52px 34px;
  margin-bottom: 120px;

  @media ${themes.primary.media.maxMobile} {
    gap: 20px;
    margin: 28.5px 0 0 0;
  }
`;

export const PortfolioPaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 42px 0;

  @media ${themes.primary.media.maxMobile} {
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
    transition: transform 1s ease-in-out;
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

  @media ${themes.primary.media.maxMobile} {
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

  svg {
    width: 35px;
    height: 35px;
  }

  @media ${themes.primary.media.maxMobile} {
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

  @media ${themes.primary.media.maxMobile} {
    margin: 7px 10px;
    padding: 0 0 9px 0;
    border-bottom-width: 1px;
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

  &:hover ${ProjectsContainerHeaderLink} {
    & path {
      opacity: 1;
    }

    span {
      color: #5c5b5b;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    min-height: 240px;

    &:hover ${ProjectsContainerArrowContainer} {
      border-width: 1.25px;
    }
  }
`;

export const ProjectsContainerInfoText = styled.div`
  margin: 20px 32px 33px 20px;
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

  @media ${themes.primary.media.maxMobile} {
    font-size: 14px;
    line-height: 128%;
    margin: 10px 16px 18px 10px;
  }
`;

export const ProjectsContainerInfoBtn = styled.div`
  position: relative;
  margin: 30px 20px 0 20px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 16px;
  line-height: 160%;
  color: ${themes.primary.colors.blogBackground};
  text-transform: uppercase;
  padding: 5px 20px 7px;
  border: 1px solid ${themes.primary.colors.blogBackground};
  width: 169px;
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
    stroke-dashoffset: -480;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 125px;
    height: 35px;
    font-size: 12px;
    line-height: 160%;
    padding: 7px 10px;
    margin: 18px 10px 0 10px;

    & > svg {
      width: 125px !important;
      height: 35px !important;
      stroke-width: 2px;
      top: -2px;
    }
  }
`;

export const ProjectsContainerInfoIconsContainer = styled.div`
  margin: 67px 86px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;

  svg {
    height: 60px;
    width: 60px;
    path {
      fill: ${themes.primary.colors.secondary};
    }
  }

  @media ${themes.primary.media.maxMobile} {
    margin: 18px 14px 22px;

    svg {
      height: 40px;
      width: 40px;
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

  @media ${themes.primary.media.maxMobile} {
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
    font-weight: ${themes.primary.font.weight.heavy};
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

  @media ${themes.primary.media.maxMobile} {
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
  @media ${themes.primary.media.maxMobile} {
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

  @media ${themes.primary.media.maxMobile} {
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

  @media ${themes.primary.media.maxMobile} {
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
  margin-bottom: 34px;

  @media ${themes.primary.media.maxMobile} {
    font-size: 18px;
    line-height: 26px;
    max-width: 100%;
  }
`;
