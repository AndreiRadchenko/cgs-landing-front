import styled from "styled-components";
import { FormikProvider } from "formik";
import themes from "../../utils/themes";

export const Form = styled.form`
  margin-top: 20px;
  padding: 0 61px 0 50px;

  @media (max-width: 570px) {
    margin-top: 12px;
    padding: 0 46px 0 34px;
  }
`;

export const FormProvider = styled(FormikProvider)``;

export const FormSentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 53px;
  flex-direction: column;
  margin-top: 38px;
  margin-bottom: 38px;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 58px;
    margin-bottom: 58px;
  }

  @media ${themes.primary.media.estiomationFormWidth} {
    height: 50px;
    margin-top: 18.5px;
    margin-bottom: 26px;
  }
`;

export const Shadow = styled.div`
  height: 100%;
  z-index: 1;
  background: linear-gradient(
    180deg,
    ${themes.primary.colors.careerBackground} 0.8 100%,
    ${themes.primary.colors.careerBackground} 0 114.26%
  );
  position: absolute;
  &.enabled {
    display: none;
  }
`;
