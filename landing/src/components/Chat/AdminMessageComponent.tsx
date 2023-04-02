import React from "react";
import { MessageObject } from "react-chat-engine-advanced";
import * as Styled from "../../styles/Chat/ChatMessagesComponent.styled";
import setMessageTime from "../../utils/setMessageTime";

interface IAdminMessageComponentProps {
  message: MessageObject;
  previousMessage: MessageObject | null;
  nextMessage: MessageObject | null;
}

const AdminMessageComponent = ({
  message,
  previousMessage,
  nextMessage,
}: IAdminMessageComponentProps) => {
  const isFirstMessage =
    !previousMessage ||
    previousMessage.sender?.username !== message.sender_username;
  const isLastMessage =
    !nextMessage || nextMessage.sender_username !== message.sender_username;

  const handleDownload = () => {
    const link = document.createElement("a");

    link.href = message.attachments[0].file;
    link.download = "recived content";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Styled.RecievedMessagesWrapper notLast={!isLastMessage}>
      {isFirstMessage && (
        <Styled.AvatarWrapper>
          {message.sender?.avatar && (
            <Styled.AvatarImg src={message.sender.avatar} />
          )}
        </Styled.AvatarWrapper>
      )}
      <Styled.MessagesWrapper notFirst={!isFirstMessage}>
        {isFirstMessage && (
          <Styled.MessageSender>{message.sender_username}</Styled.MessageSender>
        )}
        {message.attachments.length > 0 ? (
          <Styled.AdminMessageAttachment onClick={handleDownload}>
            atch
          </Styled.AdminMessageAttachment>
        ) : (
          <Styled.RecivedMessageBox>{message.text}</Styled.RecivedMessageBox>
        )}
        {isLastMessage && (
          <Styled.RecievdMessageTime>
            {setMessageTime(message.created)}
          </Styled.RecievdMessageTime>
        )}
      </Styled.MessagesWrapper>
    </Styled.RecievedMessagesWrapper>
  );
};

export default AdminMessageComponent;
