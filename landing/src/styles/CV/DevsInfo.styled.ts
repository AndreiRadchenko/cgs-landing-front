import styled from "styled-components";
import themes from "../../utils/themes";

import MagnifyingGlass from "../../../public/Portfolio/MagnifyingGlass.svg";

export const CvContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`;

export const Layout = styled.article`
  width: 100%;
  margin: 0 auto;
  padding-inline: 20px;
  overflow: hidden;
  font-family: ${themes.primary.font.family.namu};

  @media ${themes.primary.media.minMobile} {
    padding-inline: 51px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding-inline: 3.55vw;
  }
`;

export const CvTitle = styled.div`
  text-transform: uppercase;
  font-size: 6.166666em;
  line-height: normal;
  font-style: normal;
  font-weight: ${themes.primary.font.weight.heavy};
  margin-top: 77px;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 92.5px;
    margin-top: 96px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 32px;
    margin-top: 8px;
  }
`;

export const SettingsBlock = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 37.5px;
    margin-bottom: 62.5px;
  }

  @media ${themes.primary.media.maxMobile} {
    display: block;
    margin-top: 24px;
    margin-bottom: 40px;
  }
`;

export const FilterBlock = styled.div``;

export const CvSearchWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #8f8e93;
  gap: 8px;
  height: 30px;
  width: 232px;

  @media ${themes.primary.media.minPCFullHD} {
    width: 290px;
    height: 37.5px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 50px;
    width: 100%;
    padding-bottom: 5px;
  }
`;

export const CvSearchButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CvSearchIcon = styled.div`
  background-image: url(${MagnifyingGlass.src});
  background-repeat: no-repeat;
  height: 20px;
  width: 20px;
  opacity: 0.4;

  @media ${themes.primary.media.minPCFullHD} {
    width: 25px;
    height: 25px;
  }
`;

export const CvSearchInput = styled.input`
  background: none;
  border: none;
  outline: none;
  padding-top: 5px;
  width: 80%;
  font-size: 1.33em;

  &::placeholder {
    color: #a9a5a4;
    font-family: ${themes.primary.font.family.namu};
    font-weight: 900;
    line-height: 120%;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 20px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
  }
`;

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 52px;

  @media ${themes.primary.media.minPCFullHD} {
    column-gap: 65px;
  }

  @media ${themes.primary.media.maxMobile} {
    grid-template-columns: 1fr;
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

export const PortfolioCategoryWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 14px;
  max-width: 50%;

  @media ${themes.primary.media.maxTabletPortrait} {
    max-width: 100%;
    gap: 16px;
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
    max-height: 42px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 16px;
    line-height: 19.2px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 14px;

    &.cv {
      font-size: 14px;
      max-height: 42px;
    }
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
