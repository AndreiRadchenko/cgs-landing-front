import styled from "styled-components";
import themes from "../../utils/themes";

export const InputWrapper = styled.div`
  width: 80%;
`;

export const TransparentTextEditorWrapper = styled.div`
  background-color: transparent;

  & .se-toolbar {
    background-color: transparent;
  }

  & .sun-editor {
    max-width: 559px;
    background-color: transparent;

    border: 1px solid ${themes.primary.colors.comment};
    & .txt {
      font-family: ${themes.primary.font.family.namu};
    }
  }

  & .sun-editor-editable {
    background-color: transparent;
  }
`;
