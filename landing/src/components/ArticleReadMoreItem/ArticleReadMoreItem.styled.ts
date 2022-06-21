import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 458px;
  margin-right: 34px;
  margin-bottom: 80px;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 990px) {
    width: 100%;
    margin: 0;
    margin-bottom: 79px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 246px;
  object-fit: contain;
  @media (max-width: 426px) {
    margin-bottom: 15px;
  }
`;

export const Title = styled.p`
  font-family: ${themes.primary.font.family.openSans};
  font-size: ${themes.primary.font.size.quaternary};
  font-weight: ${themes.primary.font.weight.semiBold};
  width: 100%;
  margin-top: 28px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 426px) {
    margin: 0;
  }
`;

export const Description = styled.p`
  font-family: ${themes.primary.font.family.openSans};
  font-size: ${themes.primary.font.size.articleSubtitle};
  font-weight: ${themes.primary.font.weight.normal};
  margin-top: 28px;
  @media (max-width: 426px) {
    margin: 16px 0 0 0;
  }
`;
