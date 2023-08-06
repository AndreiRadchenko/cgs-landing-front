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
  }

  @media ${themes.primary.media.minPCFullHD} {
  }
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 16px;
  @media ${themes.primary.media.minMobile} {
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
  }

  @media ${themes.primary.media.minPCFullHD} {
  }
`;

export const SkillsList = styled.ul`
  margin: 0;
  padding: 16px 20px 32px;
  @media ${themes.primary.media.minMobile} {
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
  }

  @media ${themes.primary.media.minPCFullHD} {
  }
`;
