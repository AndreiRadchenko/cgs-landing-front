import styled from "styled-components";
import themes from "../../../utils/themes";

export const EmailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  position: relative;
  min-height: 222px;
  height: 15.4vw;
  padding: 0 64px 0.9vw 13px;
  padding-inline: 50px;

  @media ${themes.primary.media.maxPCFullHD} {
    height: 15.4vw;
    padding: 0 64px;
    &.emails-messenger-container {
      padding-inline: 52px;
    }
  }

  & .persist-popup {
    color: #8f8e93;
    transition: color 0.5s ease;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    background: linear-gradient(90deg, #c7ecc0 0%, #89a3d1 100%), #f1efed;
    transition: opacity 0.5s ease;
    z-index: -1;
  }
  :hover::before {
    opacity: 1;
  }
  :hover .persist-popup {
    color: rgba(0, 0, 0, 0.5);
  }

  &:nth-child(2n + 1) {
    border-right: 1px solid ${themes.primary.colors.loaderSpinner};

    @media ${themes.primary.media.maxLowScreenMobile} {
      padding: 50px 0px 60px 0px;
    }
  }
  &:nth-child(2n) {
    @media ${themes.primary.media.maxServiceWeb} {
      padding: 50px 0px 60px 0px;
    }

    @media ${themes.primary.media.maxTabletPortrait} {
      padding: 40px 0px 40px 0px;
      min-height: 219px;
    }

    @media ${themes.primary.media.maxLowScreenMobile} {
      padding: 50px 0px 60px 0px;
    }
  }
  &:nth-child(4) {
    @media ${themes.primary.media.maxTabletPortrait} {
      padding: 44px 0px 41px 0px;
    }
  }
  &:nth-child(1) {
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: -70px;
      height: 1px;
      width: 250%;
      background-color: ${themes.primary.colors.loaderSpinner};
    }
  }
  &:nth-last-child(2) {
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: -70px;
      height: 1px;
      width: 250%;
      background-color: ${themes.primary.colors.loaderSpinner};
    }
  }

  @media ${themes.primary.media.maxServiceWeb} {
    flex-wrap: wrap;
    height: auto;
    padding: 44px 30px 55px 30px;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    height: auto;
    padding: 44px 0px 42px 0px;
    &:nth-child(3) {
      padding: 43px 0px 41px 0px; 
    }
    &:nth-child(2n + 1) {
      border-right: none;
    }
    &:nth-child(n) {
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: -70px;
        height: 1px;
        width: 250%;
        background-color: ${themes.primary.colors.loaderSpinner};
      }
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    &:nth-child(3) {
      padding: 50px 0px 57px 0px;
    }
    &:nth-child(2) {
      padding: 51px 0px 61px 0px;
    }
    &:nth-child(4) {
      padding: 51px 0px 60px 0px;
    }
    
    &.emails-messenger-container {
      padding-inline: 54px;
    }
  }
`;

export const EmailsTitle = styled.h3`
  margin: 7px auto 50px;
  padding: 0;
  font-weight: 900;
  font-size: 2.16em;
  line-height: 1;
  text-transform: uppercase;
  color: currentColor;
  text-align: center;

  @media ${themes.primary.media.maxPCFullHD} {
    margin: -6px auto 34px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 26px;
    margin: 0px auto 40px;

    &.emails-title {
      margin-bottom: 133px;
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-bottom: 34px;
    line-height: 1.2;
    font-size: 24px;

    &.emails-title {
      font-size: 26px;
      margin-bottom: 78px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  row-gap: 28px;
  column-gap: 44px;

  @media ${themes.primary.media.maxPCFullHD} {
    column-gap: 33px;
  }

  @media ${themes.primary.media.maxServiceWeb} {
    flex-direction: column;
  }

  @media ${themes.primary.media.maxMobile} {
    row-gap: 20px;

    &.emails {
      gap: 132px;
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    row-gap: 28px;

    &.emails {
      gap: 76px;
    }
  }
`;

export const ButtonWrapperHorizontal = styled.div`
  display: flex;
  justify-content: center;
  gap: 43.97px;

  @media ${themes.primary.media.maxPCFullHD} {
    gap: 33px;
  }

  @media ${themes.primary.media.maxMobile} {
    gap: 40px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    gap: 33px;
  }
`;
