import themes from "../utils/themes";
import styled, { css } from "styled-components";

import CheckMarkPublished from "../../public/checkMarkPublished.svg";
import { Date } from "../components/BlogItem/BlogItem.styled";

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

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const InternalButtonWrapper = styled(ButtonWrapper)`
  width: auto;
`;

export const TimeStamp = styled(Date)`
  margin-right: 24px;
  word-spacing: 0.5rem;
`;

export const DeleteButton = styled.div`
  cursor: pointer;
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.medium};
  font-size: ${themes.primary.font.size.aboutUsCardText};
  color: ${themes.primary.colors.deleteButton};
`;

export const DeactivateButton = styled.div<IDisabled>`
  cursor: pointer;
  margin-right: 12px;
  padding: 7px 12px;
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.medium};
  font-size: ${themes.primary.font.size.aboutUsCardText};
  color: ${themes.primary.colors.darkBlue};
  opacity: ${({ disabled }) => (disabled ? "0.3" : "1")};
  border: 1px solid ${themes.primary.colors.darkBlue};
`;

export const PublishButton = styled.div<IDisabled>`
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  padding: 7px;
  background-color: ${themes.primary.colors.primary};
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.medium};
  font-size: ${themes.primary.font.size.aboutUsCardText};
  color: ${({ disabled }) =>
    disabled ? themes.primary.colors.primary : themes.primary.colors.secondary};
  ${({ disabled }) =>
    disabled &&
    css`
      background-image: linear-gradient(
        90deg,
        ${themes.primary.colors.mainGradientColor1} 0%,
        ${themes.primary.colors.mainGradientColor2} 100%
      );
    `};

  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;

    ::before {
      content: "";
      display: ${({ disabled }) => (disabled ? "block" : "none")};
      width: 14px;
      height: 10.7px;
      margin-right: 6px;
      background-image: url(${CheckMarkPublished.src});
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
`;

export const DraftMark = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.666em 1.888em;
  text-transform: uppercase;
  background-color: ${themes.primary.colors.headerBorderHover};
  font-size: 18px;
  line-height: 99%;
  border: 1px solid ${themes.primary.colors.primary};
`;
