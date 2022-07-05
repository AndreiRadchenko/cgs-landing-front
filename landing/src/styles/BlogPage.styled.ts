import styled from "styled-components";
import themes from "../utils/themes";

export const PageWrapper = styled.div`
  background-color: ${themes.primary.colors.blogBackground};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HeaderContainer = styled.article`
  width: 1400px;
  position: relative;
  margin: 0 auto;
  padding-top: ${themes.primary.spacing.headerNavVertical};

  @media ${themes.primary.media.onlyLaptop} {
    width: 1100px;

    &.lets-code {
      width: 90%;
    }
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
    width: 840px;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    margin: 0 auto;
    padding-top: ${themes.primary.spacing.headerNavVertical};
    width: 720px;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    margin: 0;
    padding: ${themes.primary.spacing.headerNavVertical}
      ${themes.primary.spacing.headerNavHorizontal};
    overflow: hidden;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    padding: 2em 2em;
  }
`;

export const BannerImage = styled.img`
  object-fit: contain;
  max-width: 950px;
  width: 100%;
  @media (max-width: 990px) {
    max-width: 720px;
    padding: 0;
  }
`;

export const PageDescription = styled.div`
  max-width: 950px;
  font-weight: ${themes.primary.font.weight.normal};
  font-size: ${themes.primary.font.size.linkText};
  color: ${themes.primary.colors.blogDarkText};
  line-height: 160%;
  margin-top: 15px;
  @media (max-width: 990px) {
    max-width: 720px;
  }
`;

export const PageTitle = styled.div`
  max-width: 950px;
  width: 100%;
  margin-top: 28px;
  font-weight: ${themes.primary.font.weight.semiBold};
  font-size: ${themes.primary.font.size.quaternary};
  color: ${themes.primary.colors.primary};
  cursor: pointer;
  @media ${themes.primary.media.maxTabletPortrait} {
    width: 100%;
    max-width: 720px;
  }
`;

export const BlogItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${themes.primary.font.family.namu};
  padding: 20px 0;
  margin-top: 40px;
  &:hover {
    cursor: pointer;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    &:active {
      background-color: ${themes.primary.colors.darkBlue};
      color: ${themes.primary.colors.secondary};
    }
    &:active ${PageDescription} {
      color: ${themes.primary.colors.previewArticleText};
    }
    &:active ${PageTitle} {
      color: ${themes.primary.colors.secondary};
    }
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    width: 100%;
    margin: 0;
    padding: ${themes.primary.spacing.headerNavVertical}
      ${themes.primary.spacing.headerNavHorizontal};
    overflow: hidden;
    margin: ${themes.primary.spacing.headerNavVertical} auto;
  }
  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    margin: 0;
    padding: ${themes.primary.spacing.headerNavVertical}
      ${themes.primary.spacing.headerNavHorizontal};
    overflow: hidden;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    padding: 2em 2em;
  }
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

export const BlogItemsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
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

export const PageHeaderWrapper = styled.div`
  max-width: 950px;
  margin: 0 auto;
  margin-top: 67px;
`;
