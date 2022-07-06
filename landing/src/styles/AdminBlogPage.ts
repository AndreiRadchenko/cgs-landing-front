import styled from "styled-components";
import themes from "../utils/themes";

export const AdminSubTitle = styled.h3`
  font-size: ${themes.primary.font.size.menuElement};
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.semiBold};
  margin: 40px 0 0.4em 0;
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
  width: 509px;
`;
