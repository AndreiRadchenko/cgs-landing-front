import styled from "styled-components";
import themes from "../utils/themes";
import { infiniteText } from "./Animations.styled";

export const PortfolioContainer = styled.div`
  background-color: ${themes.primary.colors.blogBackground};
`;

export const OurWorkTitle = styled.header`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.medium};
  font-size: ${themes.primary.font.size.ourWorkText};
  overflow: hidden;
  white-space: nowrap;
  margin-top: 78px;
  line-height: 90%;
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;

  & > span {
    animation: ${infiniteText} 40s infinite linear;
  }
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

export const SlidersCont = styled.article`
  margin-bottom: 48px;

  @media ${themes.primary.media.maxMobile} {
    margin: 4px 10px 40px;

    border-top: 1px solid ${themes.primary.colors.comment};
  }
`;

export const CTACont = styled.div`
  position: relative;
  margin-top: 10px;
  padding: 0rem 11.1rem 75px;
  overflow: hidden;

  @media ${themes.primary.media.maxTablet} {
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

  @media ${themes.primary.media.maxTablet} {
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

  @media ${themes.primary.media.maxTablet} {
    font-size: 18px;
    line-height: 26px;
    max-width: 100%;
  }
`;

export const CTABtnsBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 29px;

  @media ${themes.primary.media.maxTablet} {
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
`;

export const CTAIcon = styled.p`
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.mainBlogDescription};
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 26px;
`;

export const BlockMainIcon = styled.div`
  position: absolute;
  bottom: 44px;
  right: -28px;

  @media ${themes.primary.media.maxTabletLandScape} {
    display: none;
  }
`;
