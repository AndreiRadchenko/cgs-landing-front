import styled, { keyframes } from "styled-components";
import { FormikProvider, Field } from "formik";
import themes from "../../../utils/themes";

interface ICVProps {
  active: boolean;
}

interface ILabelOptions {
  inCvInput: boolean;
  cvlink: boolean;
  toFormError: boolean;
}

interface IFormField extends ITitle {
  isEmpty: boolean;
  toFormError: boolean;
}

interface ITitle {
  isCvIn: boolean;
}

interface ISpinner {
  isLoading: boolean;
}

interface ISentButton {
  isDisabled: boolean;
}

interface IFillAllFields {
  toDisplay: boolean;
}

interface IEnableGlare {
  enabled: boolean;
}

export const FormFieldContainer = styled.div`
  height: 67px;
  width: 46.37em;
  position: relative;
  margin-top: 16px;
  border: 1px solid black;
  box-shadow: 6px 6px 0 #000;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 90%;
    height: 54px;
  }

  @media (max-width: 400px) {
    width: 100%;
  }

  @media (max-width: 380px) {
    width: 335px;
  }
`;

export const FormField = styled(Field)<IFormField>`
  height: 100%;
  width: 100%;
  background: none;
  border: 0.5px solid #000;
  box-shadow: 6px 6px 0 #000;
  border-radius: 0;

  font-family: ${themes.primary.font.family.namu};

  font-size: 1.34em;
  padding: 0 0 0 33px;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${themes.primary.colors.careersPlaceholder};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 0.875rem;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    font-size: 0.75rem;
  }
`;

export const Form = styled.form`
  @media (max-width: 768px) {
    width: 89vw;
    margin-left: 2.5em;
  }

  @media (max-width: 767px) {
    width: 89vw;
    margin-left: 4vw;
  }

  @media (max-width: 475px) {
    margin-left: 1em;
  }

  @media (max-width: 474px) {
    width: 94vw;
    margin-left: 2em;
  }

  @media (max-width: 400px) {
    width: 92vw;
    margin-left: 0;
  }
`;

export const FormProvider = styled(FormikProvider)``;

export const FormSentButton = styled.button<ISentButton>`
  width: 190px;
  height: 56px;
  position: relative;
  border: 2px solid ${themes.primary.colors.primary};
  cursor: pointer;
  padding: 0;

  & path {
    transition: all 1s ease-in-out;
  }
  & path:nth-child(1) {
    z-index: -1;
    transform: translate(-36px, 36px);
  }
  &:hover {
    & path:nth-child(2) {
      transform: translate(36px, -36px);
    }

    & path:nth-child(1) {
      transform: translate(0px, 0px);
    }
  }

  &:nth-child(1) {
    color: ${({ isDisabled }) => (isDisabled ? "grey" : "black")};
  }

  @media ${themes.primary.media.maxMobile} {
    border: 1.48px solid ${themes.primary.colors.primary};
  }
`;

export const FormSentFillText = styled.span<IFillAllFields>`
  display: ${({ toDisplay }) => (toDisplay ? "inline-block" : "none")};
  color: red;
  font-weight: ${themes.primary.font.weight.normal};
  font-family: ${themes.primary.font.family.namu};
  font-size: 16px;
  bottom: 0;
  margin-top: 10px;
  animation: ${({ toDisplay }) => (toDisplay ? "move .5s linear" : "none")};

  @keyframes move {
    0% {
      transform: translateX(0);
    }
    20% {
      transform: translateX(5px);
    }
    40% {
      transform: translateX(0);
    }
    60% {
      transform: translateX(-5px);
    }
    80% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(0);
    }
  }

  @media (max-width: 1200px) {
    margin-top: 2px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const FormSentText = styled.span`
  width: 100%;
  height: 100%;
  text-transform: uppercase;
  font-size: 22px;
  border: 0;
  background: black;
  color: white;
  padding-top: 6.5%;

  @media (max-width: 768px) {
    padding-top: 7%;
  }
`;

export const FormSentContainer = styled.div<{ isCvIn: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  margin-top: 40px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    font-size: 16px;
    font-weight: ${themes.primary.font.weight.heavy};
    font-family: ${themes.primary.font.family.namu};
  }

  @media ${themes.primary.media.maxMobile} {
    align-items: flex-start;
    margin-top: 60px;
  }

  @media (max-width: 475px) {
    margin-top: ${({ isCvIn }) => (isCvIn ? "10px" : "60px")};
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    height: 94px;
  }
`;

export const Shadow = styled.div<IEnableGlare>`
  display: ${({ enabled }) => (enabled ? "inline-block" : "none")};
  width: 104%;
  height: 100%;
  z-index: 1;
  background: linear-gradient(
    180deg,
    rgba(241, 239, 237, 0.8) 100%,
    rgba(241, 239, 237, 0) 114.26%
  );
  position: absolute;

  @media (max-width: 768px) {
    height: 130%;
  }
`;

export const PositionSelect = styled.div<IEnableGlare>`
  height: 68px;
  width: 46.45em;

  div {
    z-index: ${({ enabled }) => (enabled ? "2" : "1")};

    width: 100%;
    height: 100%;

    position: relative;

    button {
      border: none !important;
      border-bottom: 1px solid black !important;
      display: flex;
      align-items: center;
      padding: 0 33px;
      height: 100%;
      width: 100%;
      position: relative;

      &:hover {
        border-bottom: 1px solid black !important;
        border-right: none !important;
      }

      &.open {
        box-shadow: 13px 0px 0px 0px black;

        border-bottom: none !important;
        border-radius: 0;
        border-right: 1px solid black !important;
        transition: none;
      }

      img {
        position: absolute;
        right: 0;
        margin: 0 18px 0 0;
      }
    }
  }

  div:nth-child(2) {
    height: 204px;

    &:last-child {
      div:last-child {
        color: #8f8e93;
      }

      border-bottom: 10px solid black;
      border-right: 1px solid black !important;
      box-shadow: 13px 0px 0px 0px black;
      border-left: none;
      overflow-y: scroll;
      padding-right: 10px;

      &::-webkit-scrollbar {
        width: 10px;
      }

      &::-webkit-scrollbar-track {
        background-color: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background-color: transparent;
        border-left: 5px solid;
        border-top-left-radius: 5px;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 20px;
      }

      scrollbar-color: ${themes.primary.colors.primary} transparent;
      scrollbar-width: thin;
    }

    @media (max-width: 768px) {
      height: 172px;
      ::-webkit-scrollbar {
        display: none;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 90%;
    height: 54px;
  }

  @media (max-width: 400px) {
    width: 100%;
  }

  @media (max-width: 380px) {
    width: 335px;
  }
`;

export const DropCv = styled.input`
  height: 100%;
  width: 77px;
  border-left: 1px solid black;
  position: absolute;
  right: 0;

  display: none;
`;

export const Cvfield = styled.div<IFormField>`
  height: 100%;
  width: 100%;
  position: relative;
  background-color: #f1efed;

  display: ${({ isCvIn }) => (isCvIn ? "none" : "inline-block")};

  input {
    color: ${({ isEmpty }) =>
      isEmpty ? themes.primary.colors.darkBlue : "black"};

    &::placeholder {
      color: ${({ isEmpty, toFormError }) =>
        isEmpty
          ? themes.primary.colors.darkBlue
          : toFormError
          ? "#F84A3F"
          : "#8F8E93"};
    }
  }
`;

export const Label = styled.label<ILabelOptions>`
  display: ${({ inCvInput, cvlink }) =>
    inCvInput || cvlink ? "none" : "flex"};
  justify-content: center;
  border: ${({ toFormError }) =>
    toFormError ? "1px solid #F84A3F" : "1px solid black"};
  padding: 7px 12px;
  position: absolute;
  right: 2em;
  bottom: 1.5em;
  color: ${({ toFormError }) => (toFormError ? "#F84A3F" : "black")};
  cursor: pointer;
  width: 90px;

  @media (min-width: 1560px) {
    bottom: 1.2em;
  }

  @media (min-width: 2000px) {
    bottom: 1em;
  }

  @media ${themes.primary.media.maxMobile} {
    bottom: -4em;
    left: 0;
    box-shadow: 6px 3px 0 #000;
  }

  @media (max-width: 767px) {
    bottom: -5em;
  }

  @media (max-width: 474px) {
    width: 100px;
    padding: 7px 12px 2px 12px;
  }
`;

export const LabelTitle = styled.span`
  font-size: 12px;
  margin-left: 5px;
`;

export const Clip = styled.img`
  width: 15px;
  height: 15px;

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 17px;
    height: 17px;
    margin-bottom: 5px;
  }
`;

export const LabelWithClipContainer = styled.div<ISpinner>`
  display: ${({ isLoading }) => (isLoading ? "none" : "flex")};
`;

export const TitleContainer = styled.div<ITitle>`
  width: 100%;
  height: 100%;
  display: ${({ isCvIn }) => (isCvIn ? "flex" : "none")};
  position: absolute;
  border-bottom: 1px solid black;
  align-items: center;
`;

export const Format = styled.div`
  text-transform: uppercase;
  color: #fff;
  background-color: #5869dd;
  padding: 8px 4px;
  border-radius: 6px;
  margin-left: 33px;
  font-size: 0.85em;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const Title = styled.span`
  font-size: 1.35em;
  color: #8f8e93;
  margin-left: 15px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const DeleteCv = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 10px;
  margin-top: 2px;
  cursor: pointer;
`;

export const DeleteCvLink = styled.img<{ cvlink: boolean }>`
  cursor: pointer;
  position: absolute;

  @media (min-width: 769px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: ${({ cvlink }) => (cvlink ? "block" : "none")};
    width: 20px;
    height: 20px;
    top: 2em;
    right: 1.6em;
  }

  @media (max-width: 767px) {
    top: 2.3em;
  }

  @media (max-width: 474px) {
    width: 16px;
    height: 16px;
    top: 1.9em;
    right: 1.4em;
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.img<ISpinner>`
  width: 14px;
  height: 14px;

  animation: ${rotate360} 1s linear infinite;

  display: ${({ isLoading }) => (isLoading ? "inline-block" : "none")};
`;
