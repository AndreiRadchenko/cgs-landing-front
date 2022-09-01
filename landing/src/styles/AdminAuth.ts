import { Field, Form } from "formik";
import styled from "styled-components";
import themes from "../utils/themes";

export const AdminAuthPassWrapper = styled.div`
  width: 650px;
  border: 2px solid ${themes.primary.colors.black};
  position: absolute;
  top: 10%;
  margin: 0 auto 0 auto;
  left: 0;
  right: 0;
`;

export const AdminAuthHeader = styled.div`
  padding: ${themes.primary.spacing.septenary};
`;

export const AdminAuthTeamLogo = styled.div`
  width: fit-content;
`;

export const AdminAuthSubHeader = styled.h2`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  margin: ${themes.primary.spacing.primary} 0 0 0;
  font-size: ${themes.primary.font.size.secondary};
  text-align: center;
`;

export const AdminAuthPassBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 60px;
`;

export const AdminAuthButton = styled.button`
  width: 280px;
  outline: none;
  border: none;
  padding: 17px 0;
  cursor: pointer;
  font-size: ${themes.primary.font.size.oneAndHalf};
  color: ${themes.primary.colors.secondary};
  background: ${themes.primary.colors.black};
`;

export const AuthFormBlock = styled(Form)`
  margin: 0;
  padding: 0;
  width: 388px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AuthFormError = styled.h4`
  font-family: ${themes.primary.font.family.sourceCode};
  color: ${themes.primary.colors.errorText};
`;

export const AdminFormContainer = styled.div`
  padding: 0 25px;
`;

export const AdminFormHeader = styled.div`
  padding: 35px;
  border-bottom: 2px solid ${themes.primary.colors.black};
  background: ${themes.primary.colors.decorationText};
`;

export const AdminFormTitleWrap = styled.div`
  padding-bottom: 17px;
  border-bottom: 2px solid ${themes.primary.colors.lightGreyBorder};
  margin-bottom: 30px;
`;

export const AdminFormField = styled(Field)`
  width: 100%;
  border: 1px solid ${themes.primary.colors.inputGrey};
  background: transparent;
  padding: 18px 14px;

  font-family: ${themes.primary.font.family.namu};

  font-size: ${themes.primary.font.size.oneAndHalf};
  color: ${themes.primary.colors.inputGrey};
  font-weight: ${themes.primary.font.weight.heavy};
  margin-bottom: 22px;

  &:focus {
    outline: none;
  }
`;

export const AdminFormLabel = styled.label`
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.oneAndHalf};
  margin-bottom: 20px;
  align-self: flex-start;
`;
