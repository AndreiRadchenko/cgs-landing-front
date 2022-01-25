import styled from "styled-components";
import themes from "../../utils/themes";

export const FormInputWrapper = styled.div`
  margin-bottom: 1em;
`;

export const FormInput = styled.input`
  display: block;
  width: 100%;
  font-size: ${themes.primary.font.size.linkText};
  padding: 0.5em 1em;
  line-height: 145%;
  outline: none;
  border: 1px solid ${themes.primary.colors.primary};

  &::-webkit-input-placeholder:after {
    content: "*";
    color: ${themes.primary.colors.starActive};
  }
`;

export const TextAreaInput = styled.textarea`
  display: block;
  width: 100%;
  resize: none;
  font-size: ${themes.primary.font.size.linkText};
  padding: 1em 1em;
  height: 8em;
  outline: none;
  border: 1px solid ${themes.primary.colors.primary};
`;

export const ErrorNotification = styled.span`
  display: block;
  color: ${themes.primary.colors.errorText};

  padding-top: 0.3em;
  padding-left: 1em;
`;
