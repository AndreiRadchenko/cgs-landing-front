import themes from "../../utils/themes";
import styled from "styled-components";

export const BlogItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 40px 20px;
  &:hover {
    background-color: ${themes.primary.colors.decorationText};
  }
  @media (max-width: 990px) {
    flex-wrap: wrap-reverse;
  }
`;

export const BlogItemTitle = styled.p`
  max-width: 400px;
  font-weight: ${themes.primary.font.weight.semiBold};
  font-size: ${themes.primary.font.size.quaternary};
`;

export const BlogItemDescription = styled.p`
  max-width: 494px;
  font-weight: ${themes.primary.font.weight.normal};
  font-size: ${themes.primary.font.size.menuElement};
`;

export const BlogItemImage = styled.img`
  object-fit: contain;
  max-width: 410px;
  height: 220px;
  margin-left: 40px;

  @media (max-width: 990px) {
    margin-left: 0;
    max-width: 335px;
    height: 220px;
  }
`;

export const BlogItemInfo = styled.div``;
