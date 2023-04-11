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
  border: 1px solid #d1d1d6;
  border-radius: 16.5px;
  padding: 5px 13px;

  font-family: ${themes.primary.font.family.openSans};
  font-weight: ${themes.primary.font.weight.normal};
  font-size: 16px;
  line-height: 1.83em;
  color: ${themes.primary.colors.primary};

  background: ${themes.primary.colors.blogBackground};

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
  overflow: hidden;

  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

export const MessageFormWrapper = styled(ChatFormContainer)`
  align-items: start;
  background: rgba(143, 142, 147, 0.07);
`;

export const ImageButton = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  background-image: url(${attachmentIcon.src});
  background-position: center;
  background-repeat: no-repeat;
`;

export const MessageForm = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 5px;

  div {
    width: 85%;
  }
`;

export const AttachmentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.83em;
  width: 94%;
`;

export const AttachmentIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.125rem;
  height: 2.125rem;

  font-size: 0.625rem;
  text-transform: uppercase;
  color: ${themes.primary.colors.secondary};

  border-radius: 5px;
  background-color: ${themes.primary.colors.attachmentIcon};
`;

export const AttachmentName = styled.p`
  margin: 0;
  font-weight: ${themes.primary.font.weight.normal};
  font-size: 0.875rem;
  line-height: 1.83em;
  color: ${themes.primary.colors.primary};
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
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid ${themes.primary.colors.primary};
  background: ${themes.primary.colors.portfolioHover};
  display: flex;
  align-items: center;
  justify-content: center;
`;
