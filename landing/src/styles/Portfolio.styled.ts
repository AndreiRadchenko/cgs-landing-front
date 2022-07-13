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
  padding: 7px 15px;
  background-color: ${themes.primary.colors.primary};
  outline: none;
  border-radius: 0;
  border: 0;
  color: ${themes.primary.colors.secondary};
  @media (max-width: 1000px) {
    font-size: ${themes.primary.font.size.quinary};
  }
`;

export const SlidersCont = styled.div`
  margin-bottom: 200px;
`;
