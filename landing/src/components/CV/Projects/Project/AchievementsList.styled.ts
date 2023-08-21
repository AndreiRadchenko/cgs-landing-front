import styled from "styled-components";
import themes from "../../../../utils/themes";

export const Achievements = styled.div`
  margin: 24px 0 0 0;
  padding: 0;

  @media ${themes.primary.media.minMobile} {
    flex: 1;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 32px;
  }
`;

export const AchievementsTitle = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 22px;
  text-align: center;

  @media ${themes.primary.media.minMobile} {
    font-size: 30px;
    line-height: normal;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 40px;
  }
`;

export const AchievementsListWrapper = styled.div`
  position: relative;
  margin: 8px 0 0 0;
  border: 2px solid ${themes.primary.colors.primary};
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  background-color: #f1efed;
  z-index: 5;
  @media ${themes.primary.media.minMobile} {
    margin-top: 16px;
    padding: 16px 0 16px 16px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 21px;
    padding: 21px 0 21px 21px;
  }
`;

export const AchievementsList = styled.ul`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  padding: 16px;
  list-style: none;
  background-color: #f1efed;
  max-height: auto;

  @media ${themes.primary.media.minMobile} {
    padding: 0;
    padding-left: 16px;
    max-height: 344px;
    overflow-y: auto;
    scroll-behavior: smooth;
    direction: rtl;

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background-color: #d9d9d9;
      border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb {
      width: 5px;
      background-color: #8f8e93;
      border-radius: 5px;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding-left: 21px;
    max-height: 461px;
  }
`;

export const Shadow = styled.div`
  position: absolute;
  top: -2px;
  right: -16px;
  width: 0px;
  height: calc(100% + 4px);
  border: 8px solid ${themes.primary.colors.primary};
  border-color: transparent transparent transparent
    ${themes.primary.colors.primary};
  z-index: 10;
  @media ${themes.primary.media.minMobile} {
    border: 10px solid ${themes.primary.colors.primary};
    border-color: transparent transparent transparent
      ${themes.primary.colors.primary};
    right: -20px;
  }
`;

export const AchievementsListItem = styled.li`
  margin: 0;
  padding: 16px 0;
  display: flex;
  gap: 16px;
  align-items: center;
  border-bottom: 1px solid ${themes.primary.colors.darkGrey};
  direction: ltr;
  height: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
  &:nth-child(1) {
    padding-top: 0;
    height: 54px;
  }
  &:nth-last-child(1) {
    padding-bottom: 0;
    border-bottom: none;
    height: 54px;
  }

  @media ${themes.primary.media.minMobile} {
    padding-right: 40px;
    gap: 24px;
    height: 73px;
    &:nth-child(1) {
      height: 60px;
    }
    &:nth-last-child(1) {
      height: 60px;
    }
  }

  @media ${themes.primary.media.minMobile} and (max-width: 1114px) {
    height: auto;
    &:nth-child(1) {
      height: auto;
    }
    &:nth-last-child(1) {
      height: auto;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding-block: 21px;
    padding-right: 53px;
    gap: 32px;
    height: 100px;
    &:nth-child(1) {
      height: 80px;
    }
    &:nth-last-child(1) {
      height: 80px;
    }
  }
`;

export const AchievementIcon = styled.img`
  width: 22px;
  height: 23px;
  @media ${themes.primary.media.minMobile} {
    width: 32px;
    height: 32px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 39px;
    height: 41px;
  }
`;

export const AchievementText = styled.p`
  margin: 0;
  padding: 0;
  color: ${themes.primary.colors.primary};
  font-size: 16px;
  line-height: normal;
  text-align: left;

  @media ${themes.primary.media.minMobile} {
    font-size: 20px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 26.667px;
  }
`;
