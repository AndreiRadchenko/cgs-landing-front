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
  margin: 0 0 10px 0;
  font-size: 16px;
  line-height: 132%;
`;

export const InputsWrapper = styled.div``;

export const TieUpInput = styled.input``;

export const TieUpLabel = styled.label``;

export const OptionWrapper = styled.div``;
