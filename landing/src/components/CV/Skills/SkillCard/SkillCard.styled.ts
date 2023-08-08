import styled from "styled-components";
import themes from "../../../../utils/themes";

export const InfoCard = styled.div`
  width: 100%;
  margin: 0 0 0 0;
  &:nth-last-of-type(1) {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: -20px;
      width: 100vw;
      height: 1px;
      background-color: ${themes.primary.colors.darkGrey};
    }
  }

  @media ${themes.primary.media.minMobile} {
    flex: 1;
    position: relative;
    &:nth-child(1) {
      & .title-wrap {
        padding-left: 51px;
      }
      & .skills-list {
        padding-left: 71px;
      }
    }
    &:nth-last-of-type(1) {
      border-right: none;
      &::after {
        content: "";
        height: 0;
      }
    }
    &:nth-child(n + 2) {
      & .title-wrap {
        padding-left: 51px;
      }
      & .skills-list {
        padding-left: 71px;
      }
    }
    border-right: 1px solid ${themes.primary.colors.darkGrey};
  }

  @media ${themes.primary.media.minPCFullHD} {
  }
`;

export const TitleWrapp = styled.div`
  display: flex;
  margin-left: -20px;
  width: 100vw;
  padding: 16px 20px;
  border-top: 1px solid ${themes.primary.colors.darkGrey};
  border-bottom: 1px solid ${themes.primary.colors.darkGrey};

  @media ${themes.primary.media.minMobile} {
    margin-left: 0;
    padding-left: 0;
    width: auto;
    padding-right: 0;
  }

  @media ${themes.primary.media.minPCFullHD} {
  }
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 16px;
  @media ${themes.primary.media.minMobile} {
    width: 56px;
    height: 56px;
  }

  @media ${themes.primary.media.minPCFullHD} {
  }
`;

export const Title = styled.h3`
  color: ${themes.primary.colors.primary};
  font-family: ${themes.primary.font.family.namu};
  font-size: 22px;
  font-style: normal;
  font-weight: 900;
  line-height: 160%;
  letter-spacing: 1.1px;
  margin: 0;

  @media ${themes.primary.media.minMobile} {
    font-size: 30px;
    line-height: 160%;
    letter-spacing: 1.5px;
  }

  @media ${themes.primary.media.minPCFullHD} {
  }
`;

export const SkillsList = styled.ul`
  margin: 0;
  padding: 16px 20px 32px;
  @media ${themes.primary.media.minMobile} {
    padding-right: 0;
  }

  @media ${themes.primary.media.minPCFullHD} {
  }
`;

export const SkillsItem = styled.li`
  margin: 0;
  padding: 0;
  @media ${themes.primary.media.minMobile} {
  }

  @media ${themes.primary.media.minPCFullHD} {
  }
`;

export const SkillsItemText = styled.p`
  margin: 0;
  padding: 0;
  font-family: ${themes.primary.font.family.namu};
  font-size: 16px;
  line-height: 1.6;
  font-weight: 900;
  @media ${themes.primary.media.minMobile} {
    font-size: 18px;
    letter-spacing: 0.36px;
  }

  @media ${themes.primary.media.minPCFullHD} {
  }
`;
