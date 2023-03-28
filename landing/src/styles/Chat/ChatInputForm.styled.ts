import styled from "styled-components";
import themes from "../../utils/themes";

export const InputEmailError = styled.p`
  margin: 0;
  font-style: italic;
  color: ${themes.primary.colors.validationErrorText};
`;

export const InputField = styled.input`
  border: none;
  padding: 0;

  font-weight: ${themes.primary.font.weight.semiBold};
  font-size: 1.33em;
  line-height: 1.83em;
  color: ${themes.primary.colors.chatFormColor};

  background-color: transparent;

  ::placeholder {
    font-weight: ${themes.primary.font.weight.normal};
  }

  :focus {
    outline: none;
  }
`;
