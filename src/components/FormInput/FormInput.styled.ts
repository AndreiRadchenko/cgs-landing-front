import styled from "styled-components";
import themes from "../../utils/themes";

export const FormInputWrapper = styled.div`
  margin-bottom: 1em;
`;

export const FormInput = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  font-size: ${themes.primary.font.size.linkText};
  padding: 0.5em 1em;
  line-height: 145%;
  outline: none;
  border: 1px solid ${themes.primary.colors.primary};
  font-family: ${themes.primary.font.family.sourceCode};

  &::-webkit-input-placeholder:after {
    content: "*";
    color: ${themes.primary.colors.starActive};
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 1.3em;
    width: 335px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const TextAreaInput = styled.textarea`
  display: block;
  box-sizing: border-box;
  width: 100%;
  resize: none;
  font-size: ${themes.primary.font.size.linkText};
  padding: 1em 1em;
  height: 8em;
  outline: none;
  border: 1px solid ${themes.primary.colors.primary};
  font-family: ${themes.primary.font.family.sourceCode};

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 1.5em;
    width: 20.938em;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ErrorNotification = styled.span`
  display: block;
  color: ${themes.primary.colors.errorText};

  padding-top: 0.3em;
  padding-left: 1em;

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1.3em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.3em;
  }
`;
