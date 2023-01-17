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
  font-size: ${themes.primary.font.size.primary};
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

export const AdditinalAttributesInput = styled.input`
  margin: 0 5px 0 0;
`;

export const AddOptionInputWrapper = styled.div`
  margin: 0 0 15px 0;
  border: none;
  border-bottom: 1px solid ${themes.primary.colors.primary};

  input {
    margin-bottom: 10px;
  }
`;
