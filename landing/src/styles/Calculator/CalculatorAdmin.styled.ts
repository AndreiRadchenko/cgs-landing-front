import { Form } from "formik";
import styled from "styled-components";
import themes from "../../utils/themes";

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

    & .__se__t-radio-input {
      padding-left: 23px;
      position: relative;

      &::before {
        content: " ";
        position: absolute;
        left: 0;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
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

export const AddTieUpButton = styled.button`
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
`;

export const MinusTieUpButton = styled.button`
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
  margin-left: 14px;
`;

export const TieUpText = styled.div`
  font-size: 16px;
  line-height: 132%;
  margin-left: 22px;
`;

export const TieUpContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TieUpContentContainer = styled.div`
  margin-top: 30px;
`;

export const TieUpTitle = styled.h3`
  font-size: 22px;
  line-height: 132%;
  color: ${themes.primary.colors.darkBlue};
  margin-bottom: 10px;
`;

export const TieUpSubtitle = styled.p`
  margin: 0 0 12px 0;
  font-size: 16px;
  line-height: 132%;
`;

export const InputsWrapper = styled(Form)``;

export const TieUpInput = styled.input`
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  margin-right: 8px;

  &.radio {
    background-color: ${themes.primary.colors.blogBackground};
    margin: 0;
    width: 15px;
    height: 15px;
    border: 1px solid ${themes.primary.colors.primary};
    transform: translateY(-50%, -50%);
    border-radius: 50%;
    display: grid;
    place-content: center;
    margin-right: 8px;

    &::before {
      content: "";
      width: 15px;
      height: 15px;
      border-radius: 50%;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em ${themes.primary.colors.primary};
      background-color: ${themes.primary.colors.primary};
    }

    &:checked::before {
      transform: scale(1);
    }
  }

  &.checkbox {
    width: 16px;
    height: 16px;
    border: 1px solid ${themes.primary.colors.primary};
    background-color: transparent;
    position: relative;

    &::before {
      content: " ";
      top: 0;
      bottom: 2px;
      left: 0.5px;
      right: 0;
      margin: auto;
      width: 4px;
      height: 8px;
      position: absolute;
      border-width: 0 3px 3px 0;
      border-color: ${themes.primary.colors.primary};
      transition: 120ms transform ease-in-out;
      transform: rotate(45deg);
      border-style: solid;
    }

    &:checked::before {
      transform: rotate(45deg) scale(1);
    }
    &:not(:checked):before {
      transform: rotate(45deg) scale(0);
    }
  }
`;

export const TieUpLabel = styled.label`
  font-size: 16px;
  line-height: 19px;
`;

export const OptionWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
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
