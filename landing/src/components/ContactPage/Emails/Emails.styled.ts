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
  padding: 0 64px 0 13px;
  padding-inline: 50px;
  & .persist-popup {
    color: #8f8e93;
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

  &:nth-child(2n + 1) {
    border-right: 1px solid ${themes.primary.colors.loaderSpinner};
  }
  &:nth-child(2n) {
    padding: 0 0 0 50px;
    @media ${themes.primary.media.maxServiceWeb} {
      padding: 50px 0px 60px 0px;
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
    padding: 50px 0px 60px 0px;
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
  @media ${themes.primary.media.maxMobile} {
    padding-inline: 20px;
  }
`;

export const EmailsTitle = styled.h3`
  margin: 0px auto 34px;
  padding: 0;
  font-weight: 900;
  font-size: 2.16em;
  line-height: 1.2;
  text-transform: uppercase;
  color: currentColor;
  text-align: center;
  @media ${themes.primary.media.maxMobile} {
    font-size: 24px;
    &.emails-title {
      margin-bottom: 78px;
      font-size: 26px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 33px;
  @media ${themes.primary.media.maxServiceWeb} {
    flex-direction: column;
  }
  @media ${themes.primary.media.maxMobile} {
    &.emails {
      gap: 76px;
    }
  }
`;

export const ButtonWrapperHorizontal = styled.div`
  display: flex;
  justify-content: center;
  gap: 33px;
  @media ${themes.primary.media.maxServiceWeb} {
  }
`;
