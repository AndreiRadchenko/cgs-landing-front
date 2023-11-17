import styled, { css } from "styled-components";
import themes from "../utils/themes";

import MagnifyingGlass from "../../public/Portfolio/MagnifyingGlass.svg";
import LightExitIcon from "../../public/Portfolio/LightExitIcon.svg";
import DarkExitIcon from "../../public/Portfolio/DarkExitIcon.svg";
import { arrowOne, arrowTwo } from "./HomePage/General.styled";

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
  padding: 0
    calc(
      clamp(51px, 51px + (100vw - 1440px) * ((68 - 51) / (1920 - 1440)), 68px)
    );
  line-height: 120%;

  @media ${themes.primary.media.maxTabletPortrait} {
    padding: 0
      calc(
        clamp(20px, 20px + (100vw - 375px) * ((40 - 20) / (768 - 375)), 40px)
      );
  }
`;

export const PortfolioCategoryOutsideBox = styled.div`
  @media (max-width: 690px) {
    height: 108px;
  }
`;

export const PortfolioCategoryWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  height: calc(
    clamp(41px, 41px + (100vw - 1440px) * ((54 - 41) / (1920 - 1440)), 54px)
  );
  gap: calc(
    clamp(14px, 14px + (100vw - 1440px) * ((18.7 - 14) / (1920 - 1440)), 18.7px)
  );

  @media ${themes.primary.media.maxTabletPortrait} {
    max-width: 100%;
    gap: 16px;
    height: 43px;
    margin-top: 6px;
    justify-content: flex-start;
  }
`;

interface IPortfolioCategoryItem {
  blockWidth: string;
  blockHeight?: string;
}

export const PortfolioCategoryItem = styled.div<IPortfolioCategoryItem>`
  font-family: ${themes.primary.font.family.namu};
  height: ${({ blockHeight }) => blockHeight || "100%"};
  width: ${({ blockWidth }) => blockWidth};
  white-space: nowrap;
  cursor: pointer;
  font-size: calc(
    clamp(14px, 14px + (100vw - 1440px) * ((18 - 14) / (1920 - 1440)), 18px)
  );
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

  &.cv {
    font-size: 1.1667em;

    @media ${themes.primary.media.minPCFullHD} {
      font-size: 17.5px;
      padding: 15px 22.5px;
    }
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

  @media ${themes.primary.media.maxMobile} {
    &.cv {
      font-size: 14px;
      max-height: 42px;
    }
  }
`;

export const PortfolioSearchWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  @media ${themes.primary.media.minPCFullHD} {
    align-items: center;
  }

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
  font-size: calc(
    clamp(14px, 14px + (100vw - 1440px) * ((18 - 14) / (1920 - 1440)), 18px)
  );
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

  @media ${themes.primary.media.minPCFullHD} {
    padding-bottom: 7px;
    margin-right: 20px;
  }

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

  &.cv {
    margin-bottom: 40px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-right: 0;
    font-size: 18px;
    padding-bottom: 50px;
  }
`;

export const PortfolioSearchWarning = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-size: calc(
    clamp(18px, 18px + (100vw - 1440px) * ((24 - 18) / (1920 - 1440)), 24px)
  );
  line-height: 120%;
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

  &.cv {
    @media ${themes.primary.media.minPCFullHD} {
      font-size: 22.5px;
    }

    @media ${themes.primary.media.maxMobile} {
      font-size: 16px;
      line-height: 120%;
    }
  }

  & ul {
    display: flex;
    flex-direction: column;
    padding-left: 28px;
    margin: 8px 0 0 0;
    gap: 6px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 16px;
    line-height: 120%;
    padding-top: 12px;

    & .sorry-message {
      margin-bottom: 20px;
    }

    & .sorry-recommendations {
      line-height: 29px;
    }

    & ul {
      margin-top: 10px;
      margin-bottom: 13px;
      gap: 10px;
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
  padding: calc(
      clamp(5px, 5px + (100vw - 1440px) * ((7.7 - 5) / (1920 - 1440)), 7.7px)
    )
    calc(
      clamp(8px, 8px + (100vw - 1440px) * ((15.2 - 8) / (1920 - 1440)), 15.2px)
    )
    calc(
      clamp(7px, 7px + (100vw - 1440px) * ((9.7 - 7) / (1920 - 1440)), 9.7px)
    )
    calc(
      clamp(8px, 8px + (100vw - 1440px) * ((12.2 - 8) / (1920 - 1440)), 12.2px)
    );
  line-height: 120%;
  font-style: normal;
  font-weight: 900;
  font-size: calc(
    clamp(14px, 14px + (100vw - 1440px) * ((18 - 14) / (1920 - 1440)), 18px)
  );
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
    font-size: calc(
      clamp(16px, 16px + (100vw - 1440px) * ((20 - 16) / (1920 - 1440)), 20px)
    );
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

  @media ${themes.primary.media.minPCFullHD} {
    margin-left: 5px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    display: flex;

    & input {
      width: 298px;
    }
  }
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

  @media ${themes.primary.media.minPCFullHD} {
    transform: scale(1.35);
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    opacity: 0.4;
  }
`;

export const PortfolioFiltersWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: calc(
    clamp(30px, 30px + (100vw - 1440px) * ((44 - 30) / (1920 - 1440)), 44px)
  );

  @media ${themes.primary.media.maxTabletPortrait} {
    flex-direction: column;
    margin-top: calc(
      clamp(18px, 18px + (100vw - 375px) * ((43 - 18) / (768 - 375)), 43px)
    );
    row-gap: calc(
      clamp(40px, 50px - (100vw - 375px) * ((50 - 40) / (768 - 375)), 50px)
    );
  }
`;

export const PortfolioProjectsWrapper = styled.div`
  margin-top: calc(
    clamp(17px, 17px + (100vw - 1440px) * ((33 - 17) / (1920 - 1440)), 33px)
  );

  @media ${themes.primary.media.maxTabletPortrait} {
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
  grid-template-columns: repeat(auto-fit, minmax(632px, 1fr));
  gap: calc(
      clamp(52px, 52px + (100vw - 1440px) * ((69 - 52) / (1920 - 1440)), 69px)
    )
    calc(
      clamp(
        34px,
        34px + (100vw - 1440px) * ((45.7 - 34) / (1920 - 1440)),
        45.7px
      )
    );
  margin-top: ${({ isSeeMore }) => (isSeeMore ? "29px" : "0")};
  padding-top: ${({ isTagSelected }) => (isTagSelected ? "0" : "31px")};
  margin-bottom: ${({ isSeeMore }) => isSeeMore && "100px"};

  @media ${themes.primary.media.maxServiceMobile} {
    grid-template-columns: repeat(auto-fit, minmax(425px, 1fr));
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    grid-template-columns: repeat(1, minmax(355px, 1fr));
    gap: calc(
      clamp(20px, 20px + (100vw - 375px) * ((40 - 20) / (768 - 375)), 40px)
    );
    padding-top: ${({ isSeeMore }) => isSeeMore && "30px"};
    margin-bottom: ${({ isSeeMore }) => isSeeMore && "60px"};
  }

  @media ${themes.primary.media.maxMobile} {
    padding-top: ${({ isSeeMore }) => (isSeeMore ? "30px" : "0")};
    margin-top: ${({ isSeeMore }) => isSeeMore && "0"};
  }

  @media (max-width: 376px) {
    margin-left: -10px;
    width: 355px;
  }
`;

export const PortfolioPaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: calc(
      clamp(42px, 42px + (100vw - 1440px) * ((56 - 42) / (1920 - 1440)), 56px)
    )
    0;

  &.cv {
    padding: 0;
    margin-top: -12px;
    margin-bottom: 90px;

    @media ${themes.primary.media.minPCFullHD} {
      margin-bottom: 112px;
      margin-top: -15px;
    }

    @media ${themes.primary.media.maxMobile} {
      margin-top: 8px;
      width: 100%;
      margin-bottom: 53px;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    padding: calc(
        clamp(28px, 28px + (100vw - 375px) * ((90 - 28) / (768 - 375)), 90px)
      )
      0 42px 0;
  }
`;

export const PortfolioPaginationItemsWrapper = styled.div`
  display: flex;
  column-gap: clamp(
    16px,
    16px + (100vw - 1440px) * ((22 - 16) / (1920 - 1440)),
    22px
  );

  & .active {
    background-color: #000;
    border: 1px solid #000;
    color: #f1efed;
  }

  @media ${themes.primary.media.maxMobile} {
    column-gap: 12.6px;
  }
`;

export const PortfolioPaginationDots = styled.div`
  display: flex;
  height: clamp(
    26px,
    26px + (100vw - 1440px) * ((35 - 26) / (1920 - 1440)),
    35px
  );
  width: clamp(
    26px,
    26px + (100vw - 1440px) * ((35 - 26) / (1920 - 1440)),
    35px
  );
  align-items: center;
  justify-content: center;
  font-size: clamp(
    16px,
    16px + (100vw - 1440px) * ((20 - 16) / (1920 - 1440)),
    20px
  );
  font-family: ${themes.primary.font.family.openSans};
`;

export const PortfolioPaginationButton = styled.div`
  display: flex;
  height: clamp(
    26px,
    26px + (100vw - 1440px) * ((35 - 26) / (1920 - 1440)),
    35px
  );
  width: clamp(
    26px,
    26px + (100vw - 1440px) * ((35 - 26) / (1920 - 1440)),
    35px
  );
  align-items: center;
  justify-content: center;
  font-size: clamp(
    16px,
    16px + (100vw - 1440px) * ((20 - 16) / (1920 - 1440)),
    20px
  );
  cursor: pointer;
  font-family: ${themes.primary.font.family.openSans};

  &:hover {
    background-color: #000;
    border: 1px solid #000;
    color: #f1efed;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 20px;
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
  gap: calc(
    clamp(8px, 8px + (100vw - 1440px) * ((12 - 8) / (1920 - 1440)), 12px)
  );
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 130%;
  color: ${({ isInfoCont }) =>
    isInfoCont
      ? themes.primary.colors.blogBackground
      : themes.primary.colors.primary};
  margin: 0;
  cursor: ${({ isProjectLink }) => isProjectLink && "pointer"};
  pointer-events: ${({ isProjectLink }) => (isProjectLink ? "normal" : "none")};

  p,
  span {
    margin: 0;
    font-size: calc(
      clamp(18px, 18px + (100vw - 1440px) * ((24 - 18) / (1920 - 1440)), 24px)
    );
  }

  a {
    margin: 0;
    font-size: calc(
      clamp(18px, 18px + (100vw - 1440px) * ((24 - 18) / (1920 - 1440)), 24px)
    );
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
      animation: ${arrowOne} 1s ease-in-out;
    }
    & path:nth-child(2) {
      animation: ${arrowTwo} 1s ease-in-out;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: calc(
      clamp(12px, 12px + (100vw - 375px) * ((18 - 12) / (768 - 375)), 18px)
    );
    line-height: 130%;
    margin-bottom: calc(
      clamp(-4px, -4px + (100vw - 375px) * ((5 - -4) / (768 - 375)), 5px)
    );
    gap: calc(clamp(5px, 5px + (100vw - 375px) * ((8 - 5) / (768 - 375)), 8px));

    a,
    p,
    span {
      font-size: calc(
        clamp(12px, 12px + (100vw - 375px) * ((18 - 12) / (768 - 375)), 18px)
      );
    }
  }

  @media (max-width: 376px) {
    margin-right: 3px;
  }
`;

export const ProjectHeaderLinkWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
`;

export const ProjectsContainerArrowContainer = styled.div<IPortfolioProjectLink>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(
    clamp(40px, 40px + (100vw - 1440px) * ((53 - 40) / (1920 - 1440)), 53px)
  );
  height: calc(
    clamp(40px, 40px + (100vw - 1440px) * ((53 - 40) / (1920 - 1440)), 53px)
  );
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
    width: calc(
      clamp(35px, 35px + (100vw - 1440px) * ((48 - 35) / (1920 - 1440)), 48px)
    );
    height: calc(
      clamp(35px, 35px + (100vw - 1440px) * ((48 - 35) / (1920 - 1440)), 48px)
    );
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: calc(
      clamp(22px, 22px + (100vw - 375px) * ((40 - 22) / (768 - 375)), 40px)
    );
    height: calc(
      clamp(22px, 22px + (100vw - 375px) * ((40 - 22) / (768 - 375)), 40px)
    );
    border-width: 1.25px;
  }
`;

export const ProjectsContainerHeader = styled.div<IPortfolioInfoProps>`
  padding: calc(
      clamp(16px, 16px + (100vw - 1440px) * ((22 - 16) / (1920 - 1440)), 22px)
    )
    calc(
      clamp(25px, 25px + (100vw - 1440px) * ((31 - 25) / (1920 - 1440)), 31px)
    )
    calc(
      clamp(15px, 15px + (100vw - 1440px) * ((22 - 15) / (1920 - 1440)), 22px)
    )
    calc(
      clamp(20px, 20px + (100vw - 1440px) * ((27 - 20) / (1920 - 1440)), 27px)
    );
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${({ isInfoCont }) =>
    isInfoCont
      ? `2px solid #1d1c1d`
      : `2px solid ${themes.primary.colors.headerBorder}`};

  @media ${themes.primary.media.maxTabletPortrait} {
    padding: calc(
        clamp(6px, 6px + (100vw - 375px) * ((21 - 6) / (768 - 375)), 21px)
      )
      calc(clamp(1px, 1px + (100vw - 375px) * ((24 - 1) / (768 - 375)), 24px))
      calc(clamp(8px, 8px + (100vw - 375px) * ((17 - 8) / (768 - 375)), 17px))
      calc(clamp(1px, 1px + (100vw - 375px) * ((20 - 1) / (768 - 375)), 20px));
    border-bottom-width: 1px;
  }

  @media (max-width: 450px) {
    margin-inline: 10px;
  }
`;

export const ProjectsContainerInfoBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0
    calc(
      clamp(20px, 20px + (100vw - 1440px) * ((27 - 20) / (1920 - 1440)), 27px)
    );
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: calc(
    clamp(16px, 16px + (100vw - 1440px) * ((20 - 16) / (1920 - 1440)), 20px)
  );
  line-height: 160%;
  color: ${themes.primary.colors.blogBackground};
  text-transform: uppercase;
  padding: calc(
      clamp(4px, 4px + (100vw - 1440px) * ((8 - 4) / (1920 - 1440)), 8px)
    )
    calc(
      clamp(19px, 19px + (100vw - 1440px) * ((30 - 19) / (1920 - 1440)), 30px)
    )
    calc(clamp(6px, 6px + (100vw - 1440px) * ((9 - 6) / (1920 - 1440)), 9px));
  border: 1px solid ${themes.primary.colors.blogBackground};
  max-width: fit-content;
  cursor: pointer;
  outline: none;
  transition: 1s ease-in-out;

  .btnContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: calc(
      clamp(6px, 6px + (100vw - 1440px) * ((8 - 6) / (1920 - 1440)), 8px)
    );

    svg {
      margin-top: 3px;
      height: calc(
        clamp(8px, 8px + (100vw - 1440px) * ((10 - 8) / (1920 - 1440)), 10px)
      );
      width: calc(
        clamp(18px, 18px + (100vw - 1440px) * ((24 - 18) / (1920 - 1440)), 24px)
      );
    }
  }

  & > svg {
    position: absolute;
    width: 106%;
    height: 106%;
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
    font-size: calc(
      clamp(12px, 12px + (100vw - 375px) * ((16 - 12) / (768 - 375)), 16px)
    );
    line-height: 160%;
    padding: 4px
      calc(
        clamp(12px, 12px + (100vw - 375px) * ((20 - 12) / (768 - 375)), 20px)
      )
      6px;
    margin: 0
      calc(
        clamp(10px, 10px + (100vw - 375px) * ((20 - 10) / (768 - 375)), 20px)
      );

    & > svg {
      stroke-width: 6px;
      left: -6px;
    }
  }
`;

export const ProjectsContainer = styled.div<IPortfolioInfoProps>`
  position: relative;
  min-height: calc(
    clamp(
      441px,
      441px + (100vw - 1440px) * ((588 - 441) / (1920 - 1440)),
      588px
    )
  );

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
  padding: calc(
      clamp(20px, 20px + (100vw - 1440px) * ((24 - 20) / (1920 - 1440)), 24px)
    )
    calc(
      clamp(32px, 32px + (100vw - 1440px) * ((42 - 32) / (1920 - 1440)), 42px)
    )
    calc(
      clamp(33px, 33px + (100vw - 1440px) * ((46 - 33) / (1920 - 1440)), 46px)
    )
    calc(
      clamp(20px, 20px + (100vw - 1440px) * ((27 - 20) / (1920 - 1440)), 27px)
    );
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: calc(
    clamp(18px, 18px + (100vw - 1440px) * ((24 - 18) / (1920 - 1440)), 24px)
  );
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
    font-size: calc(
      clamp(14px, 14px + (100vw - 375px) * ((16 - 14) / (768 - 375)), 16px)
    );
    line-height: calc(
      clamp(18px, 18px + (100vw - 375px) * ((25.6 - 18) / (768 - 375)), 25.6px)
    );
    padding: calc(
        clamp(7px, 7px + (100vw - 375px) * ((20 - 7) / (768 - 375)), 20px)
      )
      calc(
        clamp(10px, 10px + (100vw - 375px) * ((20 - 10) / (768 - 375)), 20px)
      )
      calc(
        clamp(18px, 18px + (100vw - 375px) * ((40 - 18) / (768 - 375)), 40px)
      );
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
  margin: calc(
      clamp(64px, 64px + (100vw - 1440px) * ((85 - 64) / (1920 - 1440)), 85px)
    )
    20px
    calc(
      clamp(40px, 40px + (100vw - 1440px) * ((54 - 40) / (1920 - 1440)), 54px)
    );
  display: flex;
  justify-content: center;
  align-items: center;
  gap: calc(
    clamp(28px, 28px + (100vw - 1440px) * ((36 - 28) / (1920 - 1440)), 36px)
  );
  position: relative;
  height: calc(
    clamp(60px, 60px + (100vw - 1440px) * ((83 - 60) / (1920 - 1440)), 83px)
  );

  & span {
    position: relative !important;
    height: calc(
      clamp(60px, 60px + (100vw - 1440px) * ((83 - 60) / (1920 - 1440)), 83px)
    ) !important;
    width: calc(
      clamp(60px, 60px + (100vw - 1440px) * ((83 - 60) / (1920 - 1440)), 83px)
    ) !important;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin: calc(
        clamp(18px, 18px + (100vw - 375px) * ((60 - 18) / (768 - 375)), 60px)
      )
      20px
      calc(
        clamp(22px, 22px + (100vw - 375px) * ((45 - 22) / (768 - 375)), 45px)
      );
    gap: calc(
      clamp(16px, 16px + (100vw - 375px) * ((28 - 16) / (768 - 375)), 28px)
    );
    height: calc(
      clamp(40px, 40px + (100vw - 375px) * ((61 - 40) / (768 - 375)), 61px)
    ) !important;

    span {
      width: calc(
        clamp(40px, 40px + (100vw - 375px) * ((61 - 40) / (768 - 375)), 61px)
      ) !important;
      height: calc(
        clamp(40px, 40px + (100vw - 375px) * ((61 - 40) / (768 - 375)), 61px)
      ) !important;
    }
  }
`;

export const ProjectsContainerHeaderTitle = styled.div`
  max-width: 75%;

  h4 {
    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.heavy};
    font-size: calc(
      clamp(30px, 30px + (100vw - 1440px) * ((40 - 30) / (1920 - 1440)), 40px)
    );
    line-height: calc(
      clamp(39px, 39px + (100vw - 1440px) * ((52 - 39) / (1920 - 1440)), 52px)
    );
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
    font-size: calc(
      clamp(18px, 18px + (100vw - 1440px) * ((24 - 18) / (1920 - 1440)), 24px)
    );
    line-height: 130%;
    color: ${themes.primary.colors.comment};
    margin: 0;
    margin-top: 5px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    p {
      margin-top: 4px;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    h4 {
      font-size: calc(
        clamp(16px, 16px + (100vw - 375px) * ((24 - 16) / (768 - 375)), 24px)
      );
      line-height: calc(
        clamp(
          20.8px,
          20.8px + (100vw - 375px) * ((31.2 - 20.8) / (768 - 375)),
          31.2px
        )
      );
    }

    p {
      margin: 0;
      margin-top: calc(
        clamp(2px, 2px + (100vw - 375px) * ((8 - 2) / (768 - 375)), 8px)
      );
      font-size: calc(
        clamp(12px, 12px + (100vw - 375px) * ((17 - 12) / (768 - 375)), 17px)
      );
      line-height: calc(
        clamp(
          15.6px,
          15.6px + (100vw - 375px) * ((22.1 - 15.6) / (768 - 375)),
          22.1px
        )
      );
    }
  }

  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    gap: calc(clamp(2px, 2px + (100vw - 375px) * ((8 - 2) / (768 - 375)), 8px));
  }
`;

export const ProjectsContainerInfoHeaderTitle = styled.div`
  max-width: 75%;

  h4 {
    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.light} !important;
    font-size: calc(
      clamp(30px, 30px + (100vw - 1440px) * ((40 - 30) / (1920 - 1440)), 40px)
    );
    line-height: calc(
      clamp(39px, 39px + (100vw - 1440px) * ((52 - 39) / (1920 - 1440)), 52px)
    );
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
    font-size: calc(
      clamp(18px, 18px + (100vw - 1440px) * ((24 - 18) / (1920 - 1440)), 24px)
    );
    line-height: 130%;
    background: linear-gradient(
      90deg,
      ${themes.primary.colors.portfolioGradient} 0%,
      ${themes.primary.colors.darkBlue} 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
    margin-top: 5px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    p {
      margin-top: 4px;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    h4 {
      font-size: calc(
        clamp(16px, 16px + (100vw - 375px) * ((24 - 16) / (768 - 375)), 24px)
      );
      line-height: calc(
        clamp(
          20.8px,
          20.8px + (100vw - 375px) * ((31.2 - 20.8) / (768 - 375)),
          31.2px
        )
      );
    }
    p {
      margin: 0;
      margin-top: calc(
        clamp(2px, 2px + (100vw - 375px) * ((8 - 2) / (768 - 375)), 8px)
      );
      font-size: calc(
        clamp(12px, 12px + (100vw - 375px) * ((17 - 12) / (768 - 375)), 17px)
      );
      line-height: calc(
        clamp(
          15.6px,
          15.6px + (100vw - 375px) * ((22.1 - 15.6) / (768 - 375)),
          22.1px
        )
      );
    }
  }

  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    gap: calc(clamp(2px, 2px + (100vw - 375px) * ((8 - 2) / (768 - 375)), 8px));
  }
`;

export const ProjectsContainerImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: calc(
    clamp(
      341px,
      341px + (100vw - 1440px) * ((455 - 341) / (1920 - 1440)),
      455px
    )
  );

  @media ${themes.primary.media.maxTabletPortrait} {
    height: calc(
      clamp(185px, 185px + (100vw - 375px) * ((341 - 185) / (768 - 375)), 341px)
    );
  }
  & > span {
    margin: 0 auto !important;
    max-width: 652px;
  }
`;

export const CTACont = styled.div`
  position: relative;
  margin: clamp(
      98px,
      98px + (100vw - 1440px) * ((130 - 98) / (1920 - 1440)),
      130px
    )
    0
    clamp(
      178px,
      178px + (100vw - 1440px) * ((290 - 178) / (1920 - 1440)),
      290px
    )
    0;
  font-family: "NAMU", sans-serif;
  padding: 0 50px;

  @media ${themes.primary.media.maxTabletLandScape} {
    height: calc(
      clamp(543px, 543px + (100vw - 375px) * ((756 - 543) / (768 - 375)), 756px)
    );
    margin: calc(
        clamp(53px, 58px - (100vw - 375px) * ((58 - 53) / (768 - 375)), 58px)
      )
      0
      calc(
        clamp(65px, 65px + (100vw - 375px) * ((120 - 65) / (768 - 375)), 120px)
      )
      0;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    padding: 0
      calc(
        clamp(20px, 20px + (100vw - 375px) * ((40 - 20) / (768 - 375)), 40px)
      );
  }
`;

export const BlockMainIcon = styled.div`
  position: absolute;
  width: clamp(
    412px,
    412px + (100vw - 1440px) * ((551 - 412) / (1920 - 1440)),
    551px
  );
  height: clamp(
    284px,
    284px + (100vw - 1440px) * ((379 - 284) / (1920 - 1440)),
    379px
  );
  bottom: 30%;
  right: 100px;
  transform: translateY(50%);

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 317px;
    height: 218px;
    bottom: 0;
    right: 49%;
    transform: translateX(50%);
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    width: calc(
      clamp(317px, 317px + (100vw - 375px) * ((642 - 317) / (768 - 375)), 642px)
    );
    height: calc(
      clamp(218px, 218px + (100vw - 375px) * ((441 - 218) / (768 - 375)), 441px)
    );
  }
`;

export const CTAHeading = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-size: clamp(
    40px,
    40px + (100vw - 1440px) * ((52 - 40) / (1920 - 1440)),
    52px
  );
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: clamp(
    48px,
    48px + (100vw - 1440px) * ((62.5 - 48) / (1920 - 1440)),
    62.5px
  );
  text-transform: uppercase;
  margin-bottom: clamp(
    15px,
    15px + (100vw - 1440px) * ((21 - 15) / (1920 - 1440)),
    21px
  );

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: calc(
      clamp(24px, 24px + (100vw - 375px) * ((40 - 24) / (768 - 375)), 40px)
    );
    line-height: calc(
      clamp(32px, 32px + (100vw - 375px) * ((53 - 32) / (768 - 375)), 53px)
    );
    margin-bottom: calc(
      clamp(18px, 18px + (100vw - 375px) * ((20 - 18) / (768 - 375)), 20px)
    );
  }
`;

export const CTAText = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-size: clamp(
    22px,
    22px + (100vw - 1440px) * ((28 - 22) / (1920 - 1440)),
    28px
  );
  font-weight: ${themes.primary.font.weight.heavy};
  max-width: 60vw;
  line-height: clamp(
    26px,
    26px + (100vw - 1440px) * ((34 - 26) / (1920 - 1440)),
    34px
  );
  margin-bottom: clamp(
    38px,
    38px + (100vw - 1440px) * ((40 - 38) / (1920 - 1440)),
    40px
  );

  @media ${themes.primary.media.maxTabletLandScape} {
    max-width: 100%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: calc(
      clamp(18px, 18px + (100vw - 375px) * ((20 - 18) / (768 - 375)), 20px)
    );
    line-height: calc(
      clamp(29px, 29px + (100vw - 375px) * ((32 - 29) / (768 - 375)), 32px)
    );
    margin-bottom: calc(
      clamp(28px, 28px + (100vw - 375px) * ((32 - 28) / (768 - 375)), 32px)
    );
  }
`;

export const AdminUnauthorizedModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background: ${themes.primary.colors.secondary};
  font-size: ${themes.primary.font.size.tertiary};
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  & .portfolio-button {
    min-width: auto;
    height: calc(
      clamp(58px, 58px + (100vw - 1440px) * ((78 - 58) / (1920 - 1440)), 78px)
    );
    width: calc(
      clamp(
        225px,
        225px + (100vw - 1440px) * ((275 - 225) / (1920 - 1440)),
        275px
      )
    );
    line-height: 100%;
    font-size: calc(
      clamp(18px, 18px + (100vw - 1440px) * ((30 - 18) / (1920 - 1440)), 30px)
    );
    margin-right: calc(
      clamp(28px, 28px + (100vw - 1440px) * ((32 - 28) / (1920 - 1440)), 32px)
    );
  }

  & .portfolio-share-button {
    margin-left: 0;
    margin-top: 0;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    & .portfolio-button {
      width: calc(
        clamp(
          178px,
          178px + (100vw - 375px) * ((261 - 178) / (768 - 375)),
          261px
        )
      );
      height: calc(
        clamp(54px, 54px + (100vw - 375px) * ((58 - 54) / (768 - 375)), 58px)
      );
      font-size: calc(
        clamp(16px, 16px + (100vw - 375px) * ((22 - 16) / (768 - 375)), 22px)
      );
    }
  }
`;
