import themes from "../../utils/themes";
import styled, { css } from "styled-components";

interface IAdmin {
  isAdmin?: boolean;
}

export const BlogItemDescription = styled.div<IAdmin>`
  max-width: ${(props) => (props.isAdmin ? "430px" : "500px")};
  font-family: ${themes.primary.font.family.openSans};
  font-weight: ${themes.primary.font.weight.normal};
  font-size: ${themes.primary.font.size.linkText};
  color: ${themes.primary.colors.blogDarkText};
  line-height: 160%;
  display: -webkit-box;
  max-width: 533px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media (max-width: 990px) {
    max-width: 720px;
  }

  &.admin {
    margin: 0;

    & h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-block: 0 16px;
    }
    p {
      line-height: 160%;
      color: ${themes.primary.colors.blogDarkText};
    }
  }
`;
interface IBlogItemContainer {
  isAdmin?: boolean;
}
export const BlogItemContainer = styled.div<IBlogItemContainer>`
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: ${themes.primary.font.family.namu};

  &:hover {
    background-color: ${(props) =>
      props.isAdmin ? "transparent" : themes.primary.colors.darkBlue};
    color: ${(props) =>
      props.isAdmin
        ? themes.primary.colors.black
        : themes.primary.colors.secondary};
  }
  &:hover ${BlogItemDescription} {
    color: ${(props) =>
      props.isAdmin
        ? themes.primary.colors.black
        : themes.primary.colors.previewArticleText};
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    margin: 0;
    padding: ${css`
      ${themes.primary.spacing.headerNavVertical}
      ${themes.primary.spacing.headerNavHorizontal}
    `};
    overflow: hidden;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    padding: 2em 2em;
  }
  @media (max-width: 990px) {
    &:hover {
      background-color: transparent;
      color: ${themes.primary.colors.black};
    }
    &:hover ${BlogItemDescription} {
      color: ${themes.primary.colors.blogDarkText};
    }
    &:active {
      background-color: ${(props) =>
        props.isAdmin ? "transparent" : themes.primary.colors.darkBlue};
      color: ${(props) =>
        props.isAdmin
          ? themes.primary.colors.black
          : themes.primary.colors.secondary};
    }
    &:active ${BlogItemDescription} {
      color: ${(props) =>
        props.isAdmin
          ? themes.primary.colors.black
          : themes.primary.colors.previewArticleText};
    }
  }
`;

interface IBlogItem {
  isAdmin?: boolean;
  disabled?: boolean;
}

export const BlogItem = styled.div<IAdmin>`
  display: flex;
  position: relative;
  justify-content: space-between;
  flex-wrap: wrap;
  width: ${(props) => (props.isAdmin ? "100%" : "950px")};
  padding: ${(props) => (props.isAdmin ? "61px 111px 101px 37px" : "20px 0")};
  margin-top: ${(props) => props.isAdmin && "30px"};
  border: ${(props) =>
    props.isAdmin ? `1px solid ${themes.primary.colors.black}` : "none"};

  &:hover {
    cursor: ${(props) => (props.isAdmin === false ? "pointer" : "default")};
  }
  @media (max-width: 990px) {
    flex-wrap: wrap-reverse;
    justify-content: center;
    padding: ${(props) => (props.isAdmin ? "57px 70px" : "0px")};
    max-width: 720px;
    width: 100%;
  }
  @media ${themes.primary.media.onlyTabletPortrait} {
    margin-top: 25px;
  }
`;

export const BlogItemTitle = styled.h1<IAdmin>`
  max-width: ${(props) => (props.isAdmin ? "430px" : "500px")};
  font-weight: ${themes.primary.font.weight.semiBold};
  font-size: ${themes.primary.font.size.quaternary};
  font-family: ${themes.primary.font.family.openSans};
  margin-top: 28px;
  margin-bottom: 0;
  @media (max-width: 990px) {
    max-width: 720px;
    padding: 0;
  }
`;

export const BlogItemImage = styled.img`
  object-fit: contain;
  width: 394px;
  height: 212px;
  margin-left: 10px;

  @media (max-width: 990px) {
    object-fit: contain;
    width: 100%;
    max-width: 720px;
    height: auto;
    margin: 0;
  }
`;

export const BlogItemInfo = styled.div`
  max-width: 100%;
  @media (max-width: 990px) {
    width: 100%;
    max-width: 720px;
    height: auto;
    margin: 0;
  }
`;

export const Date = styled.div`
  color: ${themes.primary.colors.authorGrey};
  font-size: 1.333em;

  & strong {
    color: ${themes.primary.colors.primary};
  }
`;

export const BlogDateTagWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25em;
`;

export const BlogItemTagWrapper = styled.div``;

export const Tag = styled.div`
  padding: 4px 13px;
  font-family: ${themes.primary.font.family.openSans};
  line-height: 160%;
  font-size: 1.166em;
  font-weight: ${themes.primary.font.weight.semiBold};
  background-color: ${themes.primary.colors.darkBlue};
  color: ${themes.primary.colors.secondary};
  width: fit-content;
  height: fit-content;
  margin-left: 1.785em;
`;
