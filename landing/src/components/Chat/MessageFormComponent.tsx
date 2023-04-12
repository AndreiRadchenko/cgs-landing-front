import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import { sendMessage } from "react-chat-engine";

import * as Styled from "../../styles/Chat/ChatInputForm.styled";
import { formatChatAttachName } from "../../utils/formatChatAttachName";
import { TextareaAutosize } from "@mui/material";

interface IMessageFormComponentProps {
  chatId: string;
  userName: string;
  publicKey: string;
}

interface IMessageFormValues {
  text: string;
}

const MessageFormComponent = ({
  chatId,
  userName,
  publicKey,
}: IMessageFormComponentProps) => {
  const [fileSizeError, setFileSizeError] = useState<string>("");
  const [file, setFile] = useState<FileList | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const formik = useFormik<IMessageFormValues>({
    initialValues: {
      text: "",
    },
    onSubmit: (values, actions) => {
      handleSubmit(values);
      actions.resetForm();
    },
  });

  const handleSubmit = (values: IMessageFormValues) => {
    const text = values.text.trim();

    if (file && file[0].size > 20000000) {
      setFileSizeError("not more than 20 MB");

      return;
    }

    if (file && text.length === 0) {
      sendMessage({ publicKey, userName, userSecret: userName }, chatId, {
        text,
        files: file,
        sender_username: userName,
      });
      handleRemoveAttach();
      return;
    }

    if (text.length > 0) {
      sendMessage({ publicKey, userName, userSecret: userName }, chatId, {
        text,
        files: file || null,
        sender_username: userName,
      });
      handleRemoveAttach();
    }
  };

  const handleRemoveAttach = () => {
    setFile(null);
    setFileSizeError("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleInput = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      formik.handleSubmit();
    }
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    setFile(target.files);
  };

  return (
    <Styled.MessageFormWrapper>
      <Styled.MessageForm onSubmit={formik.handleSubmit}>
        <label htmlFor="upload-button">
          <Styled.ImageButton />
          <input
            ref={inputRef}
            type="file"
            multiple={false}
            id="upload-button"
            style={{ display: "none" }}
            onChange={handleUpload}
          />
        </label>
        {file ? (
          <Styled.AttachmentContainer>
            <Styled.AttachmentIcon>PSD</Styled.AttachmentIcon>
            <Styled.AttachmentName>
              {formatChatAttachName(file[0].name)}
            </Styled.AttachmentName>
            <Styled.RemoveAttachButton onClick={handleRemoveAttach} />
          </Styled.AttachmentContainer>
        ) : (
          <TextareaAutosize
            maxRows={4}
            name="text"
            placeholder="Write a message..."
            value={formik.values.text}
            onChange={formik.handleChange}
            onKeyDown={handleInput}
          />
        )}
        <Styled.SubmitIconButton type="submit">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66536 11.3327L6.66536 3.21935L10.392 6.94602L11.332 5.99935L5.9987 0.666015L0.665365 5.99935L1.60536 6.93935L5.33203 3.21935L5.33203 11.3327L6.66536 11.3327Z"
              fill="black"
            />
          </svg>
        </Styled.SubmitIconButton>
      </Styled.MessageForm>
      <Styled.InputEmailError>{fileSizeError}</Styled.InputEmailError>
    </Styled.MessageFormWrapper>
  );
};

export default MessageFormComponent;
