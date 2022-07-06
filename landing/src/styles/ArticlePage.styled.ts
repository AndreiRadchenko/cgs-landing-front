import styled from "styled-components";
import themes from "../utils/themes";

export const Title = styled.p`
  font-size: ${themes.primary.font.size.articleTitle};
  font-weight: ${themes.primary.font.weight.bold};
  font-family: ${themes.primary.font.family.namu};
  color: ${themes.primary.colors.primary};
  margin: 0 auto;
  max-width: 945px;
  text-align: center;
`;

export const SubTitle = styled.p`
  text-align: center;
  max-width: 945px;
  margin-top: 20px;
  font-size: ${themes.primary.font.size.linkText};
  font-weight: ${themes.primary.font.weight.normal};
  font-family: ${themes.primary.font.family.namu};
  color: ${themes.primary.colors.blogDarkText};
  line-height: 160%;
`;

export const Background = styled.div`
  background-color: ${themes.primary.colors.blogBackground};
`;

export const PageWrapper = styled.div`
  max-width: 950px;
  margin: 0 auto;
  margin-top: 100px;
  a {
    color: ${themes.primary.colors.darkBlue};
    text-decoration: none;
    border-bottom: 1px solid;
    u {
      text-decoration: none;
    }
  }
  li {
    padding-left: 12px;
    margin-bottom: 10px;
  }
  ul {
    margin-left: -1.3em;
    list-style-type: none;
    list-style-image: url(/listSquare.png);
    @media ${themes.primary.media.maxTabletPortrait} {
      list-style-image: url(/listSquareMobile.png);
    }
  }
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
  column-gap: 40px;
  width: 100%;
  margin-top: 20px;

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
  left: 0;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    left: 40px;
    top: 90px;
  }
`;
