import themes from "../../utils/themes";
import styled from "styled-components";

interface IAdmin {
  isAdmin?: boolean;
}

export const BlogItemDescription = styled.p`
  max-width: 500px;
  font-weight: ${themes.primary.font.weight.normal};
  font-size: ${themes.primary.font.size.menuElement};
`;

export const BlogItemContainer = styled.div<{ isAdmin?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
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
`;

export const BlogItem = styled.div<IAdmin>`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: ${(props) => (props.isAdmin ? "100%" : "950px")};
  padding: ${(props) => (props.isAdmin ? "57px 70px" : "40px 0")};
  margin-top: ${(props) => props.isAdmin && "30px"};
  border: ${(props) =>
    props.isAdmin ? `1px solid ${themes.primary.colors.black}` : "none"};
  @media (max-width: 990px) {
    flex-wrap: wrap-reverse;
    padding: ${(props) => (props.isAdmin ? "57px 70px" : "40px 20px 0")};
  }
`;

export const BlogItemTitle = styled.p<IAdmin>`
  max-width: 500px;
  font-weight: ${themes.primary.font.weight.semiBold};
  font-size: ${themes.primary.font.size.quaternary};
  &:hover {
    cursor: ${(props) => (props.isAdmin === false ? "pointer" : "default")};
  }
`;

export const BlogItemImage = styled.img`
  object-fit: contain;
  width: 410px;
  height: 220px;

  @media (max-width: 990px) {
    max-width: 370px;
    height: 220px;
    margin: auto;
    padding: 0;
  }
`;

export const BlogItemInfo = styled.div``;
