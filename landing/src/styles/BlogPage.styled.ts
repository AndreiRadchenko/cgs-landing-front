import styled from "styled-components";
import themes from "../utils/themes";

export const PageWrapper = styled.div``;

export const BannerImage = styled.img`
  object-fit: contain;
  width: 100%;
`;

export const PageHeaderWrapper = styled.div`
  max-width: 950px;
  margin: 0 auto;
  margin-top: 67px;
  font-family: ${themes.primary.font.family.namu};
  margin-bottom: 20px;
`;

export const PageTitle = styled.div`
  max-width: 100%;
  margin-top: 28px;
  font-weight: ${themes.primary.font.weight.semiBold};
  font-size: ${themes.primary.font.size.quaternary};
  cursor: pointer;
`;

export const TagTitle = styled.div`
  display: flex;
  max-width: 950px;
  align-items: center;
  justify-content: center;
  margin: 80px 0 65px 0;
  font-weight: ${themes.primary.font.weight.semiBold};
  font-size: ${themes.primary.font.size.bigTitle};
  font-family: ${themes.primary.font.family.namu};
  text-align: center;
  @media (max-width: 990px) {
    margin-bottom: 0;
  }
`;

export const PageDescription = styled.div`
  width: 100%;
  font-weight: ${themes.primary.font.weight.normal};
  font-size: ${themes.primary.font.size.linkText};
  line-height: 160%;
  margin-top: 20px;
`;

export const BlogItemsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ArrowBackButton = styled.img`
  &:hover {
    cursor: pointer;
  }
  position: absolute;
  top: 79px;
  left: 0px;

  @media (max-width: 768px) {
    left: 40px;
  }
`;
