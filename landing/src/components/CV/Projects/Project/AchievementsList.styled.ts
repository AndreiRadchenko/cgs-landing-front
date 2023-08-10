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
  border: 1px solid ${themes.primary.colors.primary};
  border-right: none;
  background-color: #f1efed;
  @media ${themes.primary.media.minMobile} {
    margin-top: 16px;
    padding: 16px 0 16px 16px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 21px;
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
    max-height: 308px;
    overflow-y: auto;
    scroll-behavior: smooth;
    direction: rtl;

    ::-webkit-scrollbar {
      width: 5px;
      border: 5px solid green;
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
    padding-left: 18px;
    max-height: 412px;
  }
`;

export const Shadow = styled.div`
  width: 100%;
  height: calc(100% - 16px);
  left: 8px;
  top: 8px;
  background: ${themes.primary.colors.primary};
  position: absolute;
  z-index: -1;
  @media ${themes.primary.media.minMobile} {
    height: calc(100% - 18px);
    left: 10px;
    top: 9px;
  }
`;

export const TopCorner = styled.div`
  width: 0;
  height: 0;
  background-color: transparent;
  border-style: solid;
  border-width: 4px;
  border-color: transparent transparent black black;
  right: 0px;
  top: -8px;
  position: absolute;
  z-index: 5;
  @media ${themes.primary.media.minMobile} {
    border-width: 5px;
    top: -10px;
  }
`;

export const BottomCorner = styled.div`
  width: 0;
  height: 0;
  background-color: transparent;
  border-style: solid;
  border-width: 4px;
  border-color: black transparent transparent black;
  position: absolute;
  right: 0;
  bottom: -8px;
  z-index: 5;
  @media ${themes.primary.media.minMobile} {
    border-width: 5px;
    bottom: -10px;
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
  &:nth-child(1) {
    padding-top: 0;
  }
  &:nth-last-child(1) {
    padding-bottom: 0;
    border-bottom: none;
  }

  @media ${themes.primary.media.minMobile} {
    padding-right: 40px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding-block: 21px;
    padding-right: 53px;
  }
`;

export const AchievementIcon = styled.img`
  width: 22px;
  height: 23px;
  margin-right: 16px;
  @media ${themes.primary.media.minMobile} {
    width: 32px;
    height: 32px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 39px;
    height: 41px;
    margin-right: 32px;
  }
`;

export const AchievementText = styled.p`
  margin: 0;
  padding: 0;
  color: ${themes.primary.colors.blogArticleText};
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
