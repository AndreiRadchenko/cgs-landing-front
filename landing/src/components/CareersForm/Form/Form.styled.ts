import styled, { keyframes } from "styled-components";
import { FormikProvider, Field } from "formik";
import themes from "../../../utils/themes";
import Lottie from "lottie-react";

interface ICVProps {
  active: boolean;
}

interface ILabelOptions {
  inCvInput: boolean;
  cvlink: boolean;
}

interface IFormField extends ITitle {
  isEmpty: boolean;
}

interface ITitle {
  isCvIn: boolean;
}

interface ISpinner {
  isLoading: boolean;
}

export const FormFieldContainer = styled.div`
  width: 100%;
  height: 78px;
  position: relative;
`;

export const FormField = styled(Field)<IFormField>`
  height: 100%;
  width: 100%;
  background: none;
  border: none;
  border-bottom: 1px solid black;

  font-family: ${themes.primary.font.family.namu};

  font-size: 16px;
  padding: 0 0 0 12px;

  &:focus {
    outline: none;
  }
`;

const opacity = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

export const Form = styled.form``;

export const LottieButton = styled(Lottie)`
  position: relative;
  & svg {
    position: absolute;
    width: 80rem !important;
    height: 25rem !important;
    top: -13rem;
    left: -30rem;
    box-sizing: border-box;
  }

  @media ${themes.primary.media.maxLaptop} {
    & svg {
      width: 37rem !important;
      height: 30rem !important;
      top: -16.4rem;
      left: -18.2rem;
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    & svg {
      left: -16.7rem;
      width: 33rem !important;
    }
  }
`;
export const LottieWrapper = styled.div`
  @media ${themes.primary.media.maxLaptop} {
    margin-top: 2.188rem;
  }
`;

export const SubmitButton = styled.div`
  width: 100%;
  text-align: center;
`;

export const BottomText = styled.p`
  line-height: 1.625rem;
  font-family: ${themes.primary.font.family.gilroy};
  font-style: normal;
`;
export const FormProvider = styled(FormikProvider)``;

export const FileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.188rem;
  margin-bottom: 0;
  height: 2.8em;
  @media ${themes.primary.media.maxLaptop} {
    height: auto;
    flex-direction: column;
    align-items: center;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    flex-direction: column;
    align-items: center;
  }
  @media ${themes.primary.media.maxTablet} {
    flex-direction: row;
    align-items: stretch;
    justify-content: space-around;
  }
  @media ${themes.primary.media.minTablet} {
    flex-direction: column;
    align-items: center;
  }
`;

export const FileLoad = styled.p`
  animation: ${opacity} 2.5s forwards;
`;

export const FileInputWrapper = styled.div<ICVProps>`
  position: relative;
  text-align: center;
  height: 2.8em;
  font-size: 0.75em;
  color: #bdbdbd;
  display: ${({ active }) => (active ? "none;" : "block;")};
  line-height: 1.7;
  background: none;
  animation: ${opacity} 2s;
  width: 20.375rem;
  padding: 1.438rem 2.75rem;
  background: white;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05);
`;

export const InputFile = styled.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`;

export const InputFileLabel = styled.label`
  width: 100%;
  color: black;
  font-size: ${themes.primary.font.size.buttonText};
  font-weight: ${themes.primary.font.weight.light};
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  border: none;
  cursor: pointer;
  margin: 0 auto;
  position: absolute;
  top: 9px;
  align-items: center;
`;

export const FileButton = styled.span`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`;

export const FileText = styled.span`
  line-height: 1;
  margin-top: 1px;
  margin-left: 5px;
  color: #3c95f9;
  font-weight: ${themes.primary.font.weight.extraBold};
`;

export const FileImg = styled.img`
  margin-top: 4px;
`;

export const SentMessage = styled.div`
  transform: translateY(2rem);
  font-weight: ${themes.primary.font.weight.bold};
  color: ${themes.primary.colors.lightBlue};
  @media ${themes.primary.media.maxLaptop} {
    transform: none;
  }
`;

export const ErrorMessage = styled.p`
  color: ${themes.primary.colors.errorText};
  text-align: center;
  font-size: ${themes.primary.font.size.linkText};
  font-weight: ${themes.primary.font.weight.bold};
`;

export const FormSentButton = styled.button`
  width: 280px;
  height: 56px;
  border: 2px solid black;
  cursor: pointer;
`;

export const FormSentWrap = styled.span`
  color: grey;
  margin: 0;
`;

export const FormSentText = styled.span`
  margin: 0;

  &:first-letter {
    text-transform: capitalize;
  }
`;

export const FormSentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 102px;

  background: linear-gradient(75.6deg, #d6ffbb -9.39%, #5869dd 110.45%);

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    font-size: 16px;
    font-weight: ${themes.primary.font.weight.heavy};
    font-family: ${themes.primary.font.family.namu};
  }
`;

export const PositionSelect = styled.div`
  height: 78px;
  width: 100%;

  div {
    width: 100%;
    height: 100%;

    button {
      border: none !important;
      border-bottom: 1px solid black !important;
      display: flex;
      justify-content: normal;
      height: 100%;
      width: 100%;
      position: relative;

      img {
        position: absolute;
        right: 0;
        margin: 0 18px 0 0;
      }
    }
  }
  div:nth-child(2) {
    height: auto;

    &:last-child {
      div:last-child {
        color: ${themes.primary.colors.darkBlue};
      }

      border-bottom: 1px solid black;
      border-right: none;
      border-left: none;
    }
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

  display: ${({ isCvIn }) => (isCvIn ? "none" : "inline-block")};

  input {
    color: ${({ isEmpty }) =>
      isEmpty ? themes.primary.colors.darkBlue : "gray"};

    &::placeholder {
      color: ${({ isEmpty }) =>
        isEmpty ? themes.primary.colors.darkBlue : "gray"};
    }
  }
`;

export const Label = styled.label<ILabelOptions>`
  display: ${({ inCvInput, cvlink }) =>
    inCvInput || cvlink ? "none" : "inline-block"};
  height: 100%;
  width: 77px;
  border-left: 1px solid black;
  position: absolute;
  right: 0;
  color: gray;
  cursor: pointer;
`;

export const LabelTitle = styled.span`
  margin: 0;
  margin-left: 10%;
  font-size: 12px;
`;

export const Clip = styled.img`
  margin-top: 17px;
  display: flex;
  margin-left: 35%;
  widht: 25px;
  height: 25px;
`;

export const LabelWithClipContainer = styled.div<ISpinner>`
  display: ${({ isLoading }) => (isLoading ? "none" : "block")};
`;

export const TitleContainer = styled.div<ITitle>`
  width: 100%;
  height: 100%;
  display: ${({ isCvIn }) => (isCvIn ? "flex" : "none")};
  position: absolute;
  border-bottom: 1px solid black;
  align-items: center;
`;

export const Title = styled.span`
  color: ${themes.primary.colors.darkBlue};
  margin-left: 15px;
`;

export const DeleteCv = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 10px;
  margin-top: 2px;
  cursor: pointer;
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
  width: 34px;
  height: 34px;

  margin-top: 20px;
  margin-left: 20px;

  animation: ${rotate360} 1s linear infinite;

  display: ${({ isLoading }) => (isLoading ? "inline-block" : "none")};
`;
