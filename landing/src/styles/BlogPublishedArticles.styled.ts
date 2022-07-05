import themes from "../utils/themes";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 200px;
  margin-bottom: 50px;
`;

export const ChangeIcon = styled.img`
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 15px;
`;

export const EmptyArticles = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: center;
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.medium};
  font-size: ${themes.primary.font.size.articleTagDescription};
`;

export const DeleteButton = styled.div`
  cursor: pointer;
  position: absolute;
  right: 15px;
  bottom: 15px;
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.medium};
  font-size: ${themes.primary.font.size.aboutUsCardText};
  color: ${themes.primary.colors.deleteButton};
`;
