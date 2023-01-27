import { Field } from "formik";
import styled from "styled-components";
import themes from "../utils/themes";

export const AddQuestionButton = styled.button`
  font-size: ${themes.primary.font.size.projectLink};
  font-family: ${themes.primary.font.family.namu};
  padding: 17px 30px;
  border: 2px dashed ${themes.primary.colors.mainGradientColor2};
  background-color: transparent;
  outline: none;
  border-radius: 0;
  cursor: pointer;
  color: ${themes.primary.colors.mainGradientColor2};
  transition: background-color 0.3s, color 0.3s;
  margin-bottom: ${themes.primary.spacing.septenary};

  &:hover {
    background-color: ${themes.primary.colors.mainGradientColor2};
    color: ${themes.primary.colors.secondary};
  }
`;

export const QuestionBlockHeader = styled.h3`
  font-size: ${themes.primary.font.size.primary};
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  margin: 0 0 7px 0;
`;

export const QuestionBlock = styled.div`
  width: "100%";
  font-family: ${themes.primary.font.family.namu};
  padding: 20px;
  border: 2px solid ${themes.primary.colors.headerBorder};
  margin-bottom: ${themes.primary.spacing.tertiary};
`;

export const EstimationFormInputContainer = styled.div``;

export const EstimationFormInputHeader = styled.h3`
  font-size: ${themes.primary.font.size.mainBlogDescription};
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  margin: 0 0 10px 0;
`;

export const EstimationFormDropDownMenu = styled.div`
  background: ${themes.primary.colors.secondary};
  font-size: ${themes.primary.font.size.primary};
  margin-right: 10px;
  margin-top: 12px;
  z-index: 10;
`;

export const EstimationFormDropDownWrapper = styled.div`
  display: flex;
  align-items: center;
  z-index: 3;
`;

export const AdditinalAttributesBlock = styled.div`
  margin-bottom: 15px;
`;

export const AdditinalAttributesWrapper = styled.div`
  margin-bottom: 5px;
`;

export const AdditinalAttributesLabel = styled.label`
  display: flex;
  align-items: center;
  color: ${themes.primary.colors.primary};
  cursor: pointer;

  &:hover {
    color: ${themes.primary.colors.mainGradientColor2};
  }
`;

export const AdditinalAttributesInput = styled(Field)`
  margin: 0 5px 0 0;
`;

export const AdditinalRoundedInput = styled(Field)`
  border-radius: 50px;
`;

export const StyledConditionsForAppearanceBlock = styled.div`
  border: 1px solid #111;
  padding: 10px;
  margin: 10px 0 5px 0;
`;

export const StyledCheckBoxInput = styled(Field)`
  margin: 0 5px 0 0;
`;

export const AddOptionInputWrapper = styled.div<{ type: string }>`
  margin: 0 0 15px 0;
  border: none;
  margin-left: 11px;
  button {
    background: none;
    border: none;
    color: #8f8e93;
    position: relative;
    &::before {
      display: inline-block;
      content: " ";
      margin-right: ${({ type }) => (type === "TEXT" ? 0 : "8px")};
      -ms-transform: translateY(10%);
      transform: translateY(10%);
      width: 13px;
      height: 13px;
      border-radius: ${({ type }) => (type === "RADIO_BUTTON" ? "50%" : 0)};
      border: 1px solid ${themes.primary.colors.primary};
    }
  }

  &::before {
    border: 1px solid ${themes.primary.colors.primary};
  }
`;
