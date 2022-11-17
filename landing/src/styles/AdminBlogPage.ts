import styled from "styled-components";
import themes from "../utils/themes";

export const AdminSubTitle = styled.h3`
  font-size: ${themes.primary.font.size.menuElement};
  font-family: ${themes.primary.font.family.namu};
  margin: 0 0 10px 0;
`;

export const TextEditorWrapper = styled.div`
  width: 1100px;
`;

export const BigWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`;

export const SmallWrapper = styled.div`
  width: 745px;
  margin-right: 30px;
`;

export const ColumnsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

export const SubHeadersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SubHeaderWrapper = styled.div``;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
`;

export const FooterButton = styled.div`
  cursor: pointer;
  font-size: ${themes.primary.font.size.adminButton};
  font-weight: ${themes.primary.font.weight.semiBold};
  font-family: ${themes.primary.font.family.gilroy};
  margin-top: 30px;
`;

export const SubmitButtonWrapper = styled.div`
  display: flex;
  width: fit-content;
  column-gap: 30px;
`;

export const DropdownWrapper = styled.div`
  margin: 0 20px;
  transform: translateY(20px);
  width: 100px;
`;

export const Message = styled.span`
  color: ${themes.primary.colors.errorText};
`;

export const Counter = styled.span`
  &.error {
    color: ${themes.primary.colors.errorText};
  }
`;

export const Text = styled.div`
  margin-top: -15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const BlogCancelButton = styled.button`
  max-width: 226px;
  height: 56px;
  width: 100%;
  background-color: ${themes.primary.colors.portfolioHover};
  border: 2px solid ${themes.primary.colors.primary};
  font-family: ${themes.primary.font.family.namu};
  font-size: 1.5em;
  cursor: pointer;
`;

export const BlogButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 37px;
  margin-inline: 45px;
`;

export const AdminBlogGrid = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 0.65fr 1.2fr 1.1fr;
`;

export const ArticleInputsWrapper = styled.div``;

export const TagWrapper = styled.div`
  padding: 3px 8px 4px;
  font-size: 14px;
  line-height: 160%;
  color: ${themes.primary.colors.secondary};
  background-color: ${themes.primary.colors.darkBlue};
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    cursor: pointer;
    margin-left: 6px;
  }
`;

export const DraftButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 2px solid ${themes.primary.colors.primary};
  width: 226px;
  height: 56px;
  font-size: 18px;
  font-family: inherit;
`;

export const PodcastGrid = styled.div`
  display: grid;
  column-gap: 45px;
  grid-template-columns: repeat(2, 1fr);
`;

export const PodcastWrapper = styled.div`
  margin-bottom: 4em;
`;
