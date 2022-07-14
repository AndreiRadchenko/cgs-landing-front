import styled from "styled-components";
import themes from "../utils/themes";

export const PortfolioContainer = styled.div`
  background-color: ${themes.primary.colors.blogBackground};
`;

export const OurWorkTitle = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.medium};
  font-size: ${themes.primary.font.size.ourWorkText};
  overflow: hidden;
  white-space: nowrap;
  margin-top: 70px;
  line-height: 47px;
  margin-bottom: 40px;
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
`;

export const SlidersCont = styled.div`
  margin-bottom: 200px;
`;
