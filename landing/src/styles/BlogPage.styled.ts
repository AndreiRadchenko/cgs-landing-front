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
