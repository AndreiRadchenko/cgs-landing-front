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

  return (
    <Styled.RecievedMessagesWrapper notLast={!isLastMessage}>
      {isFirstMessage && <Styled.AvatarWrapper />}
      <Styled.MessagesWrapper notFirst={!isFirstMessage}>
        {isFirstMessage && (
          <Styled.MessageSender>{message.sender_username}</Styled.MessageSender>
        )}
        {message.attachments.length > 0 ? (
          <Styled.RecivedMessageAttachments
            src={message.attachments[0].file}
            alt="message-attachment"
          />
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
