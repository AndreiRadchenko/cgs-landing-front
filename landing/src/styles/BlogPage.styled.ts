import styled from "styled-components";
import themes from "../utils/themes";

export const PageWrapper = styled.div``;

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
  line-height: 160%;
  margin-top: 20px;
  @media (max-width: 990px) {
    max-width: 720px;
  }
`;

export const PageTitle = styled.div`
  max-width: 950px;
  margin-top: 28px;
  font-weight: ${themes.primary.font.weight.semiBold};
  font-size: ${themes.primary.font.size.quaternary};
  cursor: pointer;
  @media ${themes.primary.media.maxTabletPortrait} {
    max-width: 720px;
    width: 100%;
  }
`;

export const BlogItemContainer = styled.div<{ isAdmin?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${themes.primary.font.family.namu};
  padding: 20px 0;

  @media (max-width: 920px) {
    &:hover {
      background-color: ${(props) =>
        props.isAdmin ? "transparent" : themes.primary.colors.darkBlue};
      color: ${(props) =>
        props.isAdmin
          ? themes.primary.colors.black
          : themes.primary.colors.secondary};
    }
    &:hover ${PageDescription} {
      color: ${(props) =>
        props.isAdmin
          ? themes.primary.colors.black
          : themes.primary.colors.previewArticleText};
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
`;

export const ArrowBackButton = styled.img`
  &:hover {
    cursor: pointer;
  }
  position: absolute;
  top: 79px;
  left: 0px;

  @media ${themes.primary.media.maxMobile} {
    left: 40px;
  }
`;

export const PageHeaderWrapper = styled.div`
  max-width: 950px;
  margin: 0 auto;
  margin-top: 67px;
`;
