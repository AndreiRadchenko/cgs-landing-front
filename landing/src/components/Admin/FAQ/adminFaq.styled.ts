import styled from "styled-components";
import themes from "../../../utils/themes";

export const AddButton = styled.div`
  color: ${themes.primary.colors.adminBlue};
  cursor: pointer;
  font-size: ${themes.primary.font.size.vistaco};
  font-family: ${themes.primary.font.family.inter};
  font-weight: ${themes.primary.font.weight.semiBold};
`;

export const DeleteButton = styled.div`
  color: ${themes.primary.colors.adminRed};
  cursor: pointer;
  font-size: ${themes.primary.font.size.vistaco};
  font-family: ${themes.primary.font.family.inter};
  font-weight: ${themes.primary.font.weight.semiBold};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const QuestionContainer = styled.div`
  margin-bottom: 50px;
  max-width: 80vw;
  width: 100%;
`;

export const QuestionTitleContainer = styled.div`
  max-width: 70%;
`;
