import styled, { css } from "styled-components";
import themes from "../../utils/themes";
import { ChatFormContainer } from "./ChatComponent.styled";
import attachmentIcon from "../../../public/attachmentIcon.svg";
import removeAttachButton from "../../../public/removeAttachButton.svg";

export const InputEmailError = styled.p`
  margin: 0;
  font-style: italic;
  color: ${themes.primary.colors.validationErrorText};
`;

const FieldSample = css`
  width: 100%;
  border: none;
  padding: 0;

  font-family: inherit;
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

export const InputField = styled.input`
  ${FieldSample}
`;

export const TextField = styled.textarea`
  ${FieldSample}
  width: 80%;
  resize: none;
`;

export const MessageFormWrapper = styled(ChatFormContainer)``;

export const ImageButton = styled.span`
  display: block;
  width: 2.83em;
  height: 2.83em;
  border-radius: 50%;
  background-color: ${themes.primary.colors.darkedGrayBack};
  background-image: url(${attachmentIcon.src});
  background-position: center;
  background-repeat: no-repeat;
`;

export const MessageForm = styled.form`
  display: flex;
  justify-content: space-between;
`;

export const AttachmentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.83em;
  width: 80%;
`;

export const AttachmentIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.325rem;
  height: 2.325rem;

  text-transform: uppercase;
  color: ${themes.primary.colors.secondary};

  border-radius: 5px;
  background-color: ${themes.primary.colors.attachmentIcon};
`;

export const AttachmentName = styled.p`
  margin: 0;
  font-weight: ${themes.primary.font.weight.semiBold};
  font-size: 1.33em;
  line-height: 1.83em;
  color: ${themes.primary.colors.chatFormColor};
`;

export const RemoveAttachButton = styled.button`
  display: block;
  width: 1.34em;
  height: 1.34em;
  padding: 0;
  border: none;
  background-color: transparent;
  background-image: url(${removeAttachButton.src});
  background-position: center;
  background-repeat: no-repeat;
`;

export const SubmitIconButton = styled(RemoveAttachButton)`
  width: 4.25rem;
  height: 2.125rem;
  border-radius: 5px;
  color: ${themes.primary.colors.secondary};
  background: ${themes.primary.colors.attachmentIcon};
`;
