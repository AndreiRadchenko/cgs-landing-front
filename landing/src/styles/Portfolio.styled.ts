import styled from "styled-components";
import themes from "../utils/themes";

interface IPortfolioInfoProps {
  readonly isInfoCont: boolean;
}

export const PortfolioContainer = styled.div`
  background-color: ${themes.primary.colors.blogBackground};
`;

export const PortfolioWrapper = styled.div`
  width: 100%;
  padding: 0 52.5px;
`;

export const PortfolioProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(652px, 1fr));
  gap: 52px 34px;
`;

export const ProjectsContainer = styled.div`
  position: relative;
  min-height: 441px;
`;

export const ProjectsContainerHeader = styled.div<IPortfolioInfoProps>`
  padding: 17px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${({ isInfoCont }) =>
    isInfoCont
      ? `1.5px solid ${themes.primary.colors.primary}`
      : `1.5px solid ${themes.primary.colors.headerBorder}`};
`;

export const ProjectsContainerHeaderLink = styled.div<IPortfolioInfoProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 18px;
  line-height: 130%;
  color: ${({ isInfoCont }) =>
    isInfoCont
      ? themes.primary.colors.blogBackground
      : themes.primary.colors.primary};
  margin: 0;
`;

export const ProjectsContainerInfoText = styled.div`
  margin: 20px 32px 33px 20px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 18px;
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
`;

export const ProjectsContainerInfoBtn = styled.div`
  margin: 30px 20px 0 20px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 16px;
  line-height: 160%;
  color: ${themes.primary.colors.blogBackground};
  text-transform: uppercase;
  padding: 5px 20px 7px;
  border: 1px solid ${themes.primary.colors.blogBackground};
  width: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
`;

export const ProjectsContainerInfoIconsContainer = styled.div`
  margin: 67px 86px 40px;
`;

export const ProjectsContainerArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  background: ${themes.primary.colors.portfolioHover};
  border: 2.26667px solid ${themes.primary.colors.primary};
  border-radius: 50%;
`;

export const ProjectsContainerHeaderTitle = styled.div`
  h4 {
    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.heavy};
    font-size: 30px;
    line-height: 130%;
    margin: 0;
    color: ${themes.primary.colors.primary};
  }
  p {
    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.heavy};
    font-size: 18px;
    line-height: 130%;
    color: ${themes.primary.colors.comment};
    margin: 0;
  }
`;

export const ProjectsContainerInfoHeaderTitle = styled.div`
  h4 {
    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.heavy};
    font-size: 30px;
    line-height: 130%;
    margin: 0;
    color: ${themes.primary.colors.blogBackground};
  }
  p {
    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.heavy};
    font-size: 18px;
    line-height: 130%;
    background: linear-gradient(
      90deg,
      ${themes.primary.colors.portfolioGradient} 0%,
      ${themes.primary.colors.darkBlue} 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    margin: 0;
  }
`;

export const ProjectsContainerImage = styled.div`
  .image-container {
    width: 100%;

    > div {
      position: unset !important;
    }

    .image {
      object-fit: contain;
      width: 100% !important;
      position: relative !important;
      height: unset !important;
    }
  }
`;

export const ProjectsContainerInfo = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
`;

export const LinkButton = styled.button`
  font-size: ${themes.primary.font.size.projectLink};
  font-family: ${themes.primary.font.family.namu};
  padding: 7px 15px 10px;
  background-color: ${themes.primary.colors.primary};
  outline: none;
  border-radius: 0;
  cursor: pointer;
  border: 1px solid ${themes.primary.colors.primary};
  color: ${themes.primary.colors.secondary};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${themes.primary.colors.blogBackground};
    color: ${themes.primary.colors.primary};
  }

  @media (max-width: 1300px) {
    font-size: ${themes.primary.font.size.reviewSmallText};
    a {
      text-decoration: none;
      border-bottom: 0.1px solid;
      u {
        text-decoration: none;
      }
    }
  }

  @media ${themes.primary.media.maxMobile} {
    margin-block: 10px 5px;
    font-size: 0.75rem;
    a {
      border: none;
    }
  }
`;

export const CTACont = styled.div`
  position: relative;
  margin-top: 10px;
  padding: 0rem 11.1rem 75px;
  overflow: hidden;

  @media ${themes.primary.media.maxMobile} {
    padding: 0rem 1.25rem;
  }
`;

export const CTAHeading = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.portfolioCTATitle};
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 48px;
  text-transform: uppercase;
  margin-bottom: 15px;

  @media ${themes.primary.media.maxMobile} {
    font-size: 22px;
    line-height: 32px;
  }
`;

export const CTAText = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.smallPortfolioText};
  font-weight: ${themes.primary.font.weight.heavy};
  max-width: 827px;
  line-height: 26px;
  margin-bottom: 34px;

  @media ${themes.primary.media.maxMobile} {
    font-size: 18px;
    line-height: 26px;
    max-width: 100%;
  }
`;

export const CTABtnsBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 29px;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    align-items: start;
    gap: 16px;
  }
`;

export const CTAIconsBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const CTAIconWrapper = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    & > div {
      filter: none;
    }

    & > p {
      color: ${themes.primary.colors.darkBlue};
    }
  }
`;

export const CTAIcon = styled.div`
  transition: filter 0.3s;
  filter: brightness(0);
`;

export const CTAIconText = styled.p`
  color: ${themes.primary.colors.primary};
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.mainBlogDescription};
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 26px;

  transition: color 0.3s;
`;

export const BlockMainIcon = styled.div`
  position: absolute;
  bottom: 44px;
  right: -28px;

  @media ${themes.primary.media.maxTabletLandScape} {
    display: none;
  }
`;
