import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import { sendMessage } from "react-chat-engine";

import * as Styled from "../../styles/Chat/ChatInputForm.styled";
import { formatChatAttachName } from "../../utils/formatChatAttachName";

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

  const handlePressEnter = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter" && event.shiftKey == false) {
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
        {file ? (
          <Styled.AttachmentContainer>
            <Styled.AttachmentIcon>atch</Styled.AttachmentIcon>
            <Styled.AttachmentName>
              {formatChatAttachName(file[0].name)}
            </Styled.AttachmentName>
            <Styled.RemoveAttachButton onClick={handleRemoveAttach} />
            <Styled.SubmitIconButton type="submit">
              Send
            </Styled.SubmitIconButton>
          </Styled.AttachmentContainer>
        ) : (
          <Styled.TextField
            name="text"
            placeholder="Write a message..."
            value={formik.values.text}
            onChange={formik.handleChange}
            onKeyDown={handlePressEnter}
          />
        )}

        {!file && (
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
        )}
      </Styled.MessageForm>
      <Styled.InputEmailError>{fileSizeError}</Styled.InputEmailError>
    </Styled.MessageFormWrapper>
  );
};

export default MessageFormComponent;
