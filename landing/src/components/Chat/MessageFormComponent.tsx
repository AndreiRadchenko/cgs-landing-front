import { useFormik } from "formik";
import React, { useRef, useState } from "react";
import { sendMessage } from "react-chat-engine";

import * as Styled from "../../styles/Chat/ChatInputForm.styled";

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

  const handleClickSendButton = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    formik.handleSubmit();
    event.preventDefault();
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
            <Styled.AttachmentName>{file[0].name}</Styled.AttachmentName>
            <Styled.RemoveAttachButton onClick={handleRemoveAttach} />
            <Styled.SubmitIconButton onClick={handleClickSendButton}>
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
      </Styled.MessageForm>
    </Styled.MessageFormWrapper>
  );
};

export default MessageFormComponent;
