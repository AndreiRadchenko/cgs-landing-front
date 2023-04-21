import styled from "styled-components";
import { FormikProvider, Field } from "formik";
import themes from "../../utils/themes";

export const FormField = styled(Field)`
  height: 100%;
  width: 100%;
  background: none;
  border: none;
  border-bottom: 1px solid black;

  font-family: ${themes.primary.font.family.namu};

  font-size: 16px;
  padding-left: 12px;

  &:focus {
    outline: none;
  }
  &::placeholder {
    opacity: 1;
  }

  @media ${themes.primary.media.estiomationFormWidth} {
    font-size: 0.75rem;
  }
`;

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
  height: 75px;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 30px;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 40px;
  }

  @media ${themes.primary.media.estiomationFormWidth} {
    height: 60px;
    margin-top: 15px;
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

export const ServiceSelect = styled.div`
  height: 54px;
  width: 100%;
  margin-top: 22px;
  margin-bottom: 18px;

  & > div {
    width: 100%;
    height: 100%;
    position: relative;
  }

  & > div:nth-child(2) {
    height: auto;

    &:last-child {
      div:last-child {
        color: ${themes.primary.colors.black};
      }
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    /* height: 84px;
    margin-bottom: 35px; */
  }

  @media ${themes.primary.media.estiomationFormWidth} {
    height: 44px;
    margin-bottom: 9px;
  }
`;
