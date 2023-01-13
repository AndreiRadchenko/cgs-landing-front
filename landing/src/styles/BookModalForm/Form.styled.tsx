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

  @media ${themes.primary.media.maxMobile} {
    font-size: 0.875rem;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    font-size: 0.75rem;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  padding: 0 61px 0 50px;

  @media (max-width: 570px) {
    margin-top: 12px;
    padding: 0 46px 0 34px;
  }
`;

export const FormProvider = styled(FormikProvider)``;

export const FormSentFillText = styled.span`
  color: ${themes.primary.colors.gray};
  font-weight: ${themes.primary.font.weight.normal};
  font-family: ${themes.primary.font.family.namu};
  font-size: 12px;
  position: absolute;
  bottom: 0;
  margin-bottom: 6px;
  &.toDisplay {
    display: none;
  }
`;

export const FormSentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 75px;
  flex-direction: column;
  margin-top: 30px;

  &.open {
    display: none;
  }

  @media ${themes.primary.media.maxMobile} {
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
  border: 1px solid ${themes.primary.colors.inputGrey};
  margin-top: 9px;

  div {
    width: 100%;
    height: 100%;
    position: relative;

    &.enabled {
      z-index: "1";
    }

    button {
      border: none !important;
      display: flex;
      align-items: center;
      padding: 0 12px;
      height: 100%;
      width: 100%;
      position: relative;
      font-weight: 100;

      &:hover {
        border-bottom: 1px solid ${themes.primary.colors.black} !important;
        border-right: none !important;
      }

      &.open {
        box-shadow: 4px 0px 0px 0px ${themes.primary.colors.black};

        border-bottom: none !important;
        border-right: 1px solid ${themes.primary.colors.black} !important;
        transition: none;
      }

      img {
        position: absolute;
        right: 0;
        margin-right: 18px;
      }
    }
  }

  div:nth-child(2) {
    height: auto;

    &:last-child {
      div:last-child {
        color: ${themes.primary.colors.black};
      }

      border-bottom: 10px solid ${themes.primary.colors.black};
      border-right: 1px solid ${themes.primary.colors.black} !important;
      box-shadow: 4px 0px 0px 0px ${themes.primary.colors.black};
      border-left: none;
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    height: 44px;
  }
`;
