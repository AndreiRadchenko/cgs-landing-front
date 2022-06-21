import styled from "styled-components";
import themes from "../utils/themes";

export const Title = styled.p`
  font-size: ${themes.primary.font.size.articleTitle};
  font-weight: ${themes.primary.font.weight.bold};
  font-family: ${themes.primary.font.family.openSans};
  margin: 0 auto;
  max-width: 945px;
  text-align: center;
`;

export const SubTitle = styled.p`
  text-align: center;
  max-width: 945px;
  margin-top: 20px;
  font-size: ${themes.primary.font.size.articleSubtitle};
  font-weight: ${themes.primary.font.weight.normal};
  font-family: ${themes.primary.font.family.openSans};
`;

export const PageWrapper = styled.div`
  max-width: 950px;
  margin: 0 auto;
  margin-top: 100px;
`;

export const BannerImage = styled.img`
  width: 100%;
  max-height: 511px;
  object-fit: contain;
  margin-top: 28px;
`;

export const ShareTagsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 990px) {
    flex-direction: column-reverse;
  }
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
