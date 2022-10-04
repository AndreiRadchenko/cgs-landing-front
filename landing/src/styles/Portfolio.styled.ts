import styled from "styled-components";
import themes from "../utils/themes";
import { infiniteText } from "./Animations.styled";

export const PortfolioContainer = styled.div`
  background-color: ${themes.primary.colors.blogBackground};
`;

export const OurWorkTitle = styled.div`
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
  border: 0;
  color: ${themes.primary.colors.secondary};
  @media (max-width: 1000px) {
    font-size: ${themes.primary.font.size.quinary};
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
    margin-block: 10px;
    font-size: 0.75rem;
    a {
      border: none;
    }
  }
`;

export const SlidersCont = styled.div`
  margin-bottom: 200px;

  @media ${themes.primary.media.maxMobile} {
    margin: 4px 10px 100px;

    border-top: 1px solid ${themes.primary.colors.comment};
  }
`;
