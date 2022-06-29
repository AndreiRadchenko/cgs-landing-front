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
`;

export const PageTitle = styled.div`
  width: 20px;
  margin-top: 28px;
  font-weight: ${themes.primary.font.weight.semiBold};
  font-size: ${themes.primary.font.size.quaternary};
  font-family: ${themes.primary.font.family.openSans};
`;

export const TagTitle = styled.div`
  display: flex;
  max-width: 950px;
  align-items: center;
  justify-content: center;
  margin-bottom: 65px;
  font-weight: ${themes.primary.font.weight.semiBold};
  font-size: ${themes.primary.font.size.bigTitle};
  font-family: ${themes.primary.font.family.openSans};
  text-align: center;
  @media (max-width: 990px) {
    margin-bottom: 0;
  }
`;

export const PageDescription = styled.div`
  width: 100%;
  font-weight: ${themes.primary.font.weight.normal};
  font-size: ${themes.primary.font.size.menuElement};
  line-height: 160%;
  margin-top: 20px;

  font-family: ${themes.primary.font.family.openSans};
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
  top: 100px;
  left: 0px;

  @media (max-width: 768px) {
    left: 40px;
  }
`;
