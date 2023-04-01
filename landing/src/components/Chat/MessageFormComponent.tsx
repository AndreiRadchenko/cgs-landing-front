import { useFormik } from "formik";
import React, { useRef, useState } from "react";
import { sendMessage } from "react-chat-engine";

import * as Styled from "../../styles/Chat/ChatInputForm.styled";

interface IMessageFormComponentProps {
  chatId: string;
  userName: string;
  publicKey: string;
  userSecret: string;
}

interface IMessageFormValues {
  text: string;
}

const MessageFormComponent = ({
  chatId,
  userName,
  publicKey,
  userSecret,
}: IMessageFormComponentProps) => {
  const [file, setFile] = useState<FileList | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  console.log(file && file[0]?.name);
  console.dir(inputRef);

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

    if (text.length > 0) {
      sendMessage({ publicKey, userName, userSecret: userName }, chatId, {
        text,
        sender_username: userName,
      });
    }
  };

  const handleRemoveAttach = () => {
    setFile(null);
    if (inputRef.current) {
      inputRef.current.files = null;
    }
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    // sendMessage({ publicKey, userName, userSecret: userName }, chatId, {
    //   files: target.files,
    //   text: "",
    // });
    console.dir(target);
    setFile(target.files);
  };

  return (
    <Styled.MessageFormWrapper>
      <Styled.MessageForm onSubmit={formik.handleSubmit}>
        {file ? (
          <Styled.AttachmentContainer>
            <Styled.AttachmentIcon>psd</Styled.AttachmentIcon>
            <Styled.AttachmentName>{file[0].name}</Styled.AttachmentName>
            <Styled.RemoveAttachButton onClick={handleRemoveAttach} />
          </Styled.AttachmentContainer>
        ) : (
          <Styled.TextField
            name="text"
            placeholder="Write a message..."
            value={formik.values.text}
            onChange={formik.handleChange}
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
