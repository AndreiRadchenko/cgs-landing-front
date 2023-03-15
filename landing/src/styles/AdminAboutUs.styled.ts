import styled from "styled-components";

import themes from "../utils/themes";

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  &.about {
    margin-bottom: ${themes.primary.spacing.septenary};
  }
`;

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

export const Wrapper = styled.div``;
