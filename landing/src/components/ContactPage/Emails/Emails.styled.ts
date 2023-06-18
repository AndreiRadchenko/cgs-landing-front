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
  transition: background-color 0.5s ease, color 0.5s ease;
  padding-inline: 50px;
  & .persist-popup {
    color: #8f8e93;
    transition: color 0.5s ease;
  }
  :hover {
    color: white;
    background-color: ${themes.primary.colors.darkBlue};
    & .persist-popup {
      color: white;
    }
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
    &::before {
      content: "";
      position: absolute;
      top: 0;
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
    width: 100%;
    height: auto;
    padding: 50px 0px 60px 0px;
    &:nth-child(2n + 1) {
      border-right: none;
    }
    &:nth-child(n) {
      &::after {
        content: none;
      }
      &::before {
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
  font-size: 26px;
  font-size: 2.16em;
  line-height: 1.2;
  text-transform: uppercase;
  color: currentColor;
  text-align: center;
  @media ${themes.primary.media.maxServiceWeb} {
    &.emails-title {
      margin-bottom: 78px;
    }
  }
  @media ${themes.primary.media.maxMobile} {
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 33px;
  @media ${themes.primary.media.maxServiceWeb} {
    flex-direction: column;
    &.emails {
      gap: 78px;
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
