import themes from "../utils/themes";
import styled from "styled-components";

interface IDisabled {
  disabled: boolean;
}

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
  left: 40px;
  bottom: 20px;
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.medium};
  font-size: ${themes.primary.font.size.aboutUsCardText};
  color: ${themes.primary.colors.deleteButton};
`;

export const DeactivateButton = styled.div<IDisabled>`
  cursor: pointer;
  position: absolute;
  right: 180px;
  bottom: 15px;
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.medium};
  font-size: ${themes.primary.font.size.aboutUsCardText};
  color: ${themes.primary.colors.darkBlue};
  opacity: ${({ disabled }) => (disabled ? "0.3" : "1")};
`;

export const PublishButton = styled.div`
  cursor: pointer;
  position: absolute;
  right: 40px;
  bottom: 8px;
  padding: 0.5em 1.5em;
  background-color: ${themes.primary.colors.primary};
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.medium};
  font-size: ${themes.primary.font.size.aboutUsCardText};
  color: ${themes.primary.colors.secondary};
`;
