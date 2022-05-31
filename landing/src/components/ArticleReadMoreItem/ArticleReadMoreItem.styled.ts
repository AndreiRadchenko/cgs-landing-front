import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 458px;
  margin-right: 34px;
  margin-bottom: 80px;
  &:last-child {
    margin-right: 0px;
  }

  @media (max-width: 990px) {
    width: 335px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 246px;
  object-fit: contain;
`;

export const Title = styled.p`
  font-family: ${themes.primary.font.family.openSans};
  font-size: ${themes.primary.font.size.quaternary};
  font-weight: ${themes.primary.font.weight.semiBold};
  width: 90%;
  margin-top: 28px;
`;

export const Description = styled.p`
  font-family: ${themes.primary.font.family.openSans};
  font-size: ${themes.primary.font.size.articleSubtitle};
  font-weight: ${themes.primary.font.weight.normal};
  margin-top: 28px;
`;
