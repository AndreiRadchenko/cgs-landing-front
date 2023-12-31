import React, { useRef, useState } from "react";
import { TextareaAutosize } from "@mui/material";
import { sendMessage } from "react-chat-engine";
import { useFormik } from "formik";

import { formatChatAttachName } from "../../utils/formatChatAttachName";

import * as Styled from "../../styles/Chat/ChatInputForm.styled";
import { ICurrentMessage } from "../../types/SupportChat.types";
import { storeKeys } from "../../consts";
interface IMessageFormComponentProps {
  dragging: boolean;
  setDragging: React.Dispatch<React.SetStateAction<boolean>>;
  chatId: string;
  userName: string;
  publicKey: string;
  setCurrentMessage: React.Dispatch<React.SetStateAction<ICurrentMessage>>;
}

interface IMessageFormValues {
  text: string;
}

const MessageFormComponent = ({
  dragging,
  setDragging,
  chatId,
  userName,
  publicKey,
  setCurrentMessage,
}: IMessageFormComponentProps) => {
  const formik = useFormik<IMessageFormValues>({
    initialValues: {
      text: "",
    },
    onSubmit: (values, actions) => {
      handleSubmit();
      setMessage("");
      actions.resetForm();
    },
  });

  const [fileSizeError, setFileSizeError] = useState<string>("");
  const [file, setFile] = useState<FileList | null>(null);
  const [message, setMessage] = useState("");

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = () => {
    const chatUserData = JSON.parse(
      localStorage.getItem(storeKeys.chatUserData) || "{}"
    );
    const text = message.trim().replace(/\n/g, "<br/>");

    const currentDate = new Date();
    const expiredTime =
      currentDate.getTime() +
        Number(process.env.NEXT_PUBLIC_CHAT_EXPIRED_TIME) || 0;

    localStorage.setItem(
      storeKeys.chatUserData,
      JSON.stringify({ ...chatUserData, expiredTime })
    );

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
      setCurrentMessage({
        text,
        sender_username: userName,
      });
      sendMessage({ publicKey, userName, userSecret: userName }, chatId, {
        text,
        files: file || null,
        sender_username: userName,
      });
      handleRemoveAttach();
    }
  };

  const getFileExtensions = (filename: string) => filename.split(".").pop();

  const handleRemoveAttach = () => {
    setFile(null);
    setFileSizeError("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleInput = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && event.shiftKey) {
      event.preventDefault();
      setMessage(message + "\n");
    }
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      formik.handleSubmit();
    }
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    setFile(target.files);
    setDragging(false);
  };

  return (
    <Styled.MessageFormWrapper>
      <Styled.MessageForm onSubmit={formik.handleSubmit}>
        <label htmlFor="upload-button">
          <Styled.ImageButton>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.348 7.57293C19.3422 7.57969 19.3363 7.58628 19.3302 7.59272L8.56961 18.8771C7.6491 19.8424 6.55734 20.347 5.3977 20.3471C5.30961 20.3471 5.22117 20.3442 5.13234 20.3383C4.02452 20.2654 2.94975 19.7381 2.10605 18.8533C1.26235 17.9686 0.759484 16.8415 0.689991 15.6797C0.611063 14.3602 1.09288 13.1138 2.08331 12.0751L12.8086 0.827857C12.9883 0.639392 13.2797 0.639432 13.4595 0.827857C13.6392 1.01636 13.6392 1.32194 13.4595 1.51041L2.73417 12.7577C0.968731 14.6091 1.50842 16.8615 2.75692 18.1708C4.00546 19.4801 6.1533 20.046 7.91875 18.1946L18.6699 6.9201C19.8507 5.52383 19.4513 3.9251 18.5292 2.95828C17.6073 1.99142 16.0827 1.57247 14.7513 2.81084L7.88212 10.0144C6.97484 10.9658 7.23486 12.0903 7.89501 12.7826C8.55519 13.4749 9.62747 13.7475 10.5348 12.7961L16.4796 6.56183C16.6593 6.37333 16.9507 6.37333 17.1304 6.56183C17.3102 6.75034 17.3102 7.05588 17.1304 7.24439L11.1856 13.4786C9.89604 14.831 8.22671 14.4955 7.24418 13.4651C6.26165 12.4348 5.94176 10.6842 7.23126 9.33186L14.1099 2.11839C14.116 2.112 14.1223 2.10577 14.1288 2.09973C14.9245 1.3544 15.8605 1.00719 16.8352 1.09599C17.6966 1.17434 18.5294 1.5933 19.1801 2.27573C19.8308 2.95812 20.2303 3.83143 20.305 4.73474C20.3897 5.75706 20.0587 6.73851 19.348 7.57293Z"
                fill={`${file ? "#D1D1D6" : "black"}`}
              />
            </svg>
          </Styled.ImageButton>
          <input
            ref={inputRef}
            type="file"
            multiple={false}
            id="upload-button"
            style={
              !dragging
                ? { display: "none" }
                : {
                    opacity: 0,
                    position: "absolute",
                    top: 0,
                    left: "-15px",
                    width: "105%",
                    height: "100%",
                  }
            }
            disabled={!!file}
            onChange={handleUpload}
          />
        </label>
        {file ? (
          <Styled.AttachmentContainer>
            <Styled.AttachmentIcon>
              {getFileExtensions(file[0].name)}
            </Styled.AttachmentIcon>
            <Styled.AttachmentName>
              {formatChatAttachName(file[0].name)}
            </Styled.AttachmentName>
            <Styled.RemoveAttachButton onClick={handleRemoveAttach} />
          </Styled.AttachmentContainer>
        ) : (
          <TextareaAutosize
            maxRows={4}
            maxLength={1024}
            name="text"
            placeholder="Write a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
