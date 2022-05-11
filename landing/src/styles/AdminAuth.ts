import { Form } from "formik";
import styled from "styled-components";
import themes from "../utils/themes";

export const AdminAuthPassWrapper = styled.div`
  background: ${themes.primary.colors.secondary};
  width: 400px;
  border-radius: 0 30px;
  box-shadow: 2px 2px 1px ${themes.primary.colors.lightShadows};
  position: absolute;
  top: 35%;
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
  font-family: ${themes.primary.font.family.sourceCode};
  margin: ${themes.primary.spacing.primary} 0 0 0;
`;

export const AdminAuthPassBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AdminAuthButton = styled.button`
  position: relative;
  cursor: pointer;
  width: 150px;
  height: 80px;
  z-index: 25;
  outline: none;
  border: none;
  align-items: center;
  background: ${themes.primary.colors.secondary};
`;

export const AdminAuthButtonText = styled.h3`
  font-size: 20px; 
  position: relative;
  text-align: center;
  top: -3em;
`;

export const AuthFormBlock = styled(Form)`
  margin: 0;
  padding: 0;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AuthFormError = styled.h4`
  font-family: ${themes.primary.font.family.sourceCode};
  color: ${themes.primary.colors.errorText};
`;
