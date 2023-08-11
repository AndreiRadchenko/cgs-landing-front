import styled from "styled-components";
import themes from "../../../../utils/themes";

export const InfoCard = styled.div`
  position: relative;
  margin: 0;
  padding-top: 20px;
  margin-left: -20px;
  padding-inline: 20px;
  width: 100vw;
  background-color: ${themes.primary.colors.blogBackground};
  transition: background-color 0.3s ease-in-out;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        rgba(214, 255, 187, 0.3) 0%,
        rgba(88, 105, 221, 0.3) 100%
      ),
      #f1efed;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  &.intersecting {
    background-color: transparent;
    &::before {
      opacity: 1;
    }
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -20px;
    width: 110vw;
    height: 1px;
    background-color: ${themes.primary.colors.darkGrey};
  }
  @media ${themes.primary.media.minMobile} {
    width: 100%;
    margin-left: 0;
    padding: 40px;
    padding-bottom: 52px;
    margin-bottom: 50px;
    margin-top: 24px;
    &::after {
      content: "";
      height: 0;
    }
    border: 1px solid ${themes.primary.colors.darkGrey};
    transition: border-color 0.3s ease-in-out;
    &.intersecting {
      border-color: transparent;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 32px;
    margin-bottom: 64px;
    padding: 53px;
    padding-bottom: 65px;
  }
`;

export const NumberTitleWrapp = styled.div`
  width: 100%;
  margin: 0 0 0 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 28.5px;
  align-self: stretch;

  @media ${themes.primary.media.minMobile} {
    gap: 40px;
    align-items: flex-start;
  }

  @media ${themes.primary.media.minPCFullHD} {
    gap: 53px;
  }
`;

export const Number = styled.h3`
  margin: 0 0 0 0;
  padding: 0;
  padding-left: 12.5px;
  color: ${themes.primary.colors.estimationAdminBg};
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  -webkit-text-stroke: 1.2px black;
  text-shadow: 4px 1px 0px #000;
  font-family: ${themes.primary.font.family.namu};
  font-size: 87px;
  line-height: normal;

  @media ${themes.primary.media.minMobile} {
    text-shadow: 7px 2px 0px #000;
    font-size: 87px;
    padding-left: 16px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 116px;
    padding-left: 21.5px;
  }
`;

export const DesktopTitle = styled.div`
  @media ${themes.primary.media.minMobile} {
  }

  @media ${themes.primary.media.minPCFullHD} {
  }
`;

export const TitleWrapp = styled.div`
  width: 100%;
  margin: 0 0 0 0;

  @media ${themes.primary.media.minMobile} {
    display: flex;
    align-items: baseline;
    gap: 10px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    gap: 21px;
  }
`;

export const Title = styled.h4`
  margin: 0 0 0 0;
  padding: 0;
  color: ${themes.primary.colors.primary};
  font-size: 24px;
  line-height: normal;

  @media ${themes.primary.media.minMobile} {
    font-size: 40px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 53.333px;
  }
`;

export const Date = styled.p`
  margin: 8px 0 0 0;
  padding: 0;
  color: ${themes.primary.colors.blogArticleText};
  font-size: 16px;
  line-height: normal;

  @media ${themes.primary.media.minMobile} {
    font-size: 22px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 29.333px;
  }
`;

export const Role = styled.p`
  margin: 8px 0 0 0;
  padding: 0;
  color: ${themes.primary.colors.blogArticleText};
  font-size: 22px;
  line-height: normal;
  &.mobile {
    display: block;
  }
  &.desktop {
    display: none;
  }

  @media ${themes.primary.media.minMobile} {
    &.mobile {
      display: none;
    }
    &.desktop {
      display: block;
    }
    font-size: 30px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 40px;
    margin-top: 10px;
  }
`;

export const About = styled.div`
  margin: 24px 0 0 0;
  padding: 0;

  @media ${themes.primary.media.minMobile} {
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 32px;
  }
`;

export const AboutTitle = styled.h4`
  margin: 0;
  padding: 0;
  color: ${themes.primary.colors.primary};
  font-size: 22px;
  line-height: 1.6;
  text-transform: uppercase;

  @media ${themes.primary.media.minMobile} {
    font-size: 30px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 40px;
  }
`;

export const AboutText = styled.p`
  margin: 8px 0 0 0;
  padding: 0;
  color: ${themes.primary.colors.primary};
  font-size: 16px;
  line-height: 1.6;

  @media ${themes.primary.media.minMobile} {
    font-size: 22px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 29.333px;
    margin-top: 10px;
  }
`;

export const AchievementsTechnologyWrapp = styled.div`
  @media ${themes.primary.media.minMobile} {
    display: flex;
    justify-content: space-between;
    gap: 58px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    gap: 74px;
  }
`;

export const Technologies = styled.div`
  margin: 24px 0 0 0;
  padding: 0;

  @media ${themes.primary.media.minMobile} {
    width: 100%;
    flex: 1;
  }

  @media ${themes.primary.media.minPCFullHD} {
  }
`;

export const TechnologiesTitle = styled.h4`
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

interface IPortfolioIconProps {
  readonly firstSet?: boolean;
}

export const PortfolioPageIconContainer = styled.div<IPortfolioIconProps>`
  width: 100%;
  display: grid;
  margin-top: 16px;
  padding-bottom: 20px;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  row-gap: 16px;
  margin-left: 0;

  > span {
    position: unset !important;
  }

  .image {
    object-fit: contain;
    position: relative;
    width: 100%;
    height: 47px;
  }

  @media ${themes.primary.media.minMobile} {
    margin-top: 16px;
    grid-template-columns: repeat(auto-fill, minmax(110px, 110px));
    row-gap: 20px;
    .image {
      height: 95px;
      margin: 8px;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 21px;
    grid-template-columns: repeat(auto-fill, minmax(148px, 148px));
    row-gap: 21px;
    .image {
      height: 127px;
      margin: 10px;
    }
  }
`;
