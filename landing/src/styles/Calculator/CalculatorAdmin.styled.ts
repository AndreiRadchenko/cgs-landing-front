import { Field, Form } from "formik";
import styled from "styled-components";
import themes from "../../utils/themes";
import { errorColorAnimation } from "../Animations.styled";
import checkboxBg from "../../../public/Calculator/checkbox.svg";
import checkboxSign from "../../../public/Calculator/checkboxSign.svg";

export const InputWrapper = styled.div`
  width: 80%;

  &.withMarginBottom {
    margin-bottom: 50px;
  }
`;

export const TransparentTextEditorWrapper = styled.div`
  background-color: transparent;

  & .se-toolbar {
    background-color: ${themes.primary.colors.blogBackground};
  }

  & .sun-editor {
    background-color: transparent;
    border: 1px solid ${themes.primary.colors.comment};

    & .txt {
      font-family: ${themes.primary.font.family.namu};
    }
  }

  & .se-btn-list {
    padding-left: 6px;
    font-size: 12px;
    font-family: ${themes.primary.font.family.namu};
    line-height: 132%;
    min-height: 20px;
  }

  & .se-submenu {
    background-color: ${themes.primary.colors.blogBackground};
    box-shadow: none;
    border-radius: 0;
    border: 1px solid ${themes.primary.colors.comment};
  }

  & .se-list-format {
    min-width: 52px !important;
  }

  & .sun-editor-editable {
    background-color: transparent;
    font-size: 16px;
    font-family: ${themes.primary.font.family.namu} !important;
    color: ${themes.primary.colors.primary} !important;
    & .__se__t-radio-input {
      position: relative;
      display: inline-block;

      &::before {
        display: inline-block;
        content: " ";
        margin-right: 8px;
        -ms-transform: translateY(10%);
        transform: translateY(10%);
        width: 15px;
        height: 15px;
        border-radius: 50%;
        border: 1px solid ${themes.primary.colors.primary};
      }
    }

    & .__se__t-checkbox-input {
      display: inline-block;
      &::before {
        content: " ";
        display: inline-block;
        margin-right: 8px;
        width: 16px;
        height: 16px;
        -ms-transform: translateY(10%);
        transform: translateY(10%);
        border: 1px solid ${themes.primary.colors.primary};
      }
    }
  }

  & .__se__t-upper {
    text-transform: uppercase;
  }

  & .__se__t-lower {
    text-transform: lowercase;
  }

  & .__se__t-first-letter-capitalize {
    display: block;

    &:first-letter {
      text-transform: uppercase;
    }
  }

  &.text {
    margin-top: 16px;
  }
`;

export const TextEditorContainer = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 20px;
`;

export const AddButton = styled.button`
  cursor: pointer;
  width: 58px;
  height: 56px;
  color: ${themes.primary.colors.blogBackground};
  background-color: ${themes.primary.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  line-height: 42px;
  border: 0;
  margin-right: 14px;

  &.tieup {
    background-color: ${themes.primary.colors.darkBlue};
  }
`;

export const MinusButton = styled.button`
  cursor: pointer;
  width: 58px;
  height: 56px;
  background-color: ${themes.primary.colors.blogBackground};
  color: ${themes.primary.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  border: 2px dashed ${themes.primary.colors.primary};
`;

export const ButtonsText = styled.div`
  font-size: 16px;
  line-height: 132%;
  margin-left: 22px;
`;

export const ButtonsRowContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 14px;
`;

export const SubStepContentContainer = styled.div`
  margin-top: 30px;
`;

export const StepSubTitle = styled.h3`
  font-size: 22px;
  line-height: 132%;
  color: ${themes.primary.colors.darkBlue};
  margin-bottom: 10px;
`;

export const SubStepSubtitle = styled.p`
  margin: 0 0 12px 0;
  font-size: 16px;
  line-height: 132%;
`;

export const InputsWrapper = styled(Form)``;

export const TieUpInputWrapper = styled.div`
  position: relative;
  max-width: 22px;
`;

// export const TieUpShadowBluePart = styled.div`
//   display: inline-block;
//   background-color: ${themes.primary.colors.darkBlue};
//   height: 23px;
//   width: 12.25px;
// `;

// export const TieUpShadowBlackPart = styled.div`
//   display: inline-block;
//   background-color: ${themes.primary.colors.primary};
//   height: 19px;
//   width: 10.25px;
// `;

export const TieUpShadowWrapper = styled.div`
  position: absolute;
  box-sizing: content-box;
  top: -1px;
  width: 19px;
  height: 18.4px;
  border-radius: 50%;
  border: 1.5px solid ${themes.primary.colors.primary};
  background: linear-gradient(
    150deg,
    ${themes.primary.colors.darkBlue},
    ${themes.primary.colors.darkBlue} 43%,
    ${themes.primary.colors.primary} 43%
  );

  @media ${themes.primary.media.maxMobile} {
    /* &:first-of-type {
      outline: 2px solid red;
    } */
  }
`;

export const TieUpInput = styled(Field)`
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  z-index: 2;

  &:checked + label {
    color: ${themes.primary.colors.darkBlue};

    & span {
      color: ${themes.primary.colors.darkBlue} !important;
    }
  }

  &.radio {
    margin-right: 8px;
    background-color: ${themes.primary.colors.blogBackground};
    margin: 0;
    min-width: 18.76px;
    width: 18.76px;
    height: 20px;
    border: 1.5px solid ${themes.primary.colors.primary};
    border-radius: 50%;
    display: grid;
    place-content: center;
    position: relative;

    &::before {
      content: "";
      min-width: 8px;
      max-width: 8px;
      height: 9px;
      border-radius: 50%;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      border: 1.5px solid ${themes.primary.colors.primary};
      background: linear-gradient(
        90deg,
        ${themes.primary.colors.mainGradientColor1} 0%,
        ${themes.primary.colors.mainGradientColor2} 100%
      );
    }

    &:checked::before {
      transform: scale(1);
    }
  }

  &.checkbox {
    margin: 0;
    min-width: 26px;
    max-width: 26px;
    height: 26px;
    background: url(${checkboxBg.src});
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    top: 0;

    &::before {
      content: "";
      position: absolute;
      top: -2px;
      left: 4px;
      width: 25px;
      height: 19.2px;
      background: url(${checkboxSign.src});
      background-size: contain;
      background-repeat: no-repeat;
      transition: transform 0.3s;
      transform: scale(0);
    }

    &:checked::before {
      transform: scale(1);
    }
  }

  &.email {
    width: 98%;
    background-color: transparent;
    border: 0;
    outline: none;
    font-size: 1.125em;
    font-family: ${themes.primary.font.family.namu};

    &.invalid {
      animation: ${errorColorAnimation} 1.5s ease-in-out;
    }
    &::placeholder {
      color: ${themes.primary.colors.calculatorEmailPlaceholder};
    }
  }

  @media ${themes.primary.media.maxMobile} {
    &.checkbox {
      transform: translateY(-10%);
    }

    &.email {
      width: 96%;
    }
  }
`;

export const TieUpLabel = styled.label`
  font-size: 16px;
  line-height: 19px;
  margin-left: 12px;
  transition: 0.15s;

  & span {
    transition: 0.15s;
  }

  &.active,
  &:hover {
    cursor: pointer;
    color: ${themes.primary.colors.darkBlue} !important;

    & span {
      color: ${themes.primary.colors.darkBlue} !important;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const OptionWrapper = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 16px;
  width: 100%;

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 20px;
  }
`;

export const DropDownContainer = styled.div`
  margin-top: 29px;
`;

export const DropDownHeader = styled.div`
  width: 106px;
  height: 31px;
  font-size: 16px;
  line-height: 19px;
  border: 0.2px solid ${themes.primary.colors.primary};
  background-color: ${themes.primary.colors.blogBackground};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: ${themes.primary.colors.adminInputBorder};
  }

  & svg {
    transition: transform 0.3s;
  }

  &.open svg {
    transform: rotate(180deg);
  }
`;

export const HiddenContent = styled.div`
  display: none;
  position: absolute;
  z-index: 3;

  &.open {
    display: block;
  }
`;

export const DropdownStepItem = styled(DropDownHeader)``;

export const ChooseTitle = styled.h2`
  text-transform: uppercase;
  font-size: 1.666em;
  line-height: 99%;
  margin-bottom: 0.6em;
`;

export const ChooseButton = styled.button`
  font-size: 1.666em;
  line-height: 160%;
  font-family: ${themes.primary.font.family.namu};
  padding: 0.55em 4.25em;
  text-transform: uppercase;
  cursor: pointer;

  &.active {
    background: linear-gradient(
      61.63deg,
      ${themes.primary.colors.mainGradientColor1} 0%,
      ${themes.primary.colors.mainGradientColor2} 100%
    );
    border: 2px solid ${themes.primary.colors.primary};
  }

  &.disabled {
    background: ${themes.primary.colors.calculatorButtonBg};
    border: 2px solid ${themes.primary.colors.calculatorButtonBorderBg};
    color: ${themes.primary.colors.comment};
  }
`;

export const ChooseButtonsWrapper = styled.div`
  display: flex;
  column-gap: 3.666em;
  margin-bottom: 4.1666em;
`;

export const TieUpContainer = styled.div``;

export const PriceFormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 36px;
  row-gap: 16px;
  margin-bottom: 14px;
`;

export const QuestionTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  line-height: 99%;
  font-family: ${themes.primary.font.family.namu};
  text-transform: uppercase;
  margin-bottom: 16px;

  & p {
    margin: 0;
  }
`;

export const PriceItemWrapper = styled.div`
  & .__se__t-upper {
    text-transform: uppercase;
  }

  & .__se__t-lower {
    text-transform: lowercase;
  }

  & .__se__t-first-letter-capitalize {
    display: block;

    &:first-letter {
      text-transform: uppercase;
    }
  }
`;

export const PriceSubtitle = styled.p`
  margin: 0;
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 22px;

  & span {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const TypeFieldWrapper = styled.div`
  display: flex;

  column-gap: 16px;
`;

export const AdminCalculatorTypeInput = styled(Field)`
  width: 274px;
  height: 56px;
  padding-inline: 17px;
  border: 1px solid ${themes.primary.colors.adminInputBorder};
  background-color: ${themes.primary.colors.blogBackground};
  outline: none;

  &::placeholder {
    color: ${themes.primary.colors.adminInputBorder};
    letter-spacing: 0.03em;
  }
`;

export const CalculatorAdminAddTypeWrapper = styled.div`
  margin-bottom: 2.666em;
`;

export const CalculatorTypeGrid = styled.div``;
