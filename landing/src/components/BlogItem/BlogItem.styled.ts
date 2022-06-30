import themes from "../../utils/themes";
import styled from "styled-components";

interface IAdmin {
  isAdmin?: boolean;
}

export const BlogItemDescription = styled.p`
  max-width: 500px;
  font-weight: ${themes.primary.font.weight.normal};
  font-size: ${themes.primary.font.size.linkText};
  color: ${themes.primary.colors.blogDarkText};
  line-height: 160%;
  @media (max-width: 990px) {
    max-width: 720px;
  }
`;

export const BlogItemContainer = styled.div<{ isAdmin?: boolean }>`
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
    padding: ${themes.primary.spacing.headerNavVertical}
      ${themes.primary.spacing.headerNavHorizontal};
    overflow: hidden;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    padding: 2em 2em;
  }
`;

export const BlogItem = styled.div<IAdmin>`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: ${(props) => (props.isAdmin ? "100%" : "950px")};
  padding: ${(props) => (props.isAdmin ? "40px 60px" : "20px 0")};
  margin-top: ${(props) => props.isAdmin && "30px"};
  border: ${(props) =>
    props.isAdmin ? `1px solid ${themes.primary.colors.black}` : "none"};
  @media (max-width: 990px) {
    flex-wrap: wrap-reverse;
    justify-content: center;
    padding: ${(props) => (props.isAdmin ? "57px 70px" : "0px")};
    max-width: 720px;
  }
  @media ${themes.primary.media.onlyTabletPortrait} {
    margin-top: 25px;
  }
`;

export const BlogItemTitle = styled.p<IAdmin>`
  max-width: 500px;
  font-weight: ${themes.primary.font.weight.semiBold};
  font-size: ${themes.primary.font.size.quaternary};
  font-family: ${themes.primary.font.family.namu};

  &:hover {
    cursor: ${(props) => (props.isAdmin === false ? "pointer" : "default")};
  }
  @media (max-width: 990px) {
    max-width: 720px;
    padding: 0;
  }
`;

export const BlogItemImage = styled.img`
  object-fit: contain;
  width: 400px;
  height: 220px;
  margin-left: 10px;

  @media (max-width: 990px) {
    object-fit: contain;
    width: 100%;
    max-width: 720px;
    height: auto;
    margin: 0;
  }
`;

export const BlogItemInfo = styled.div``;
