import React from "react";
import { MessageObject } from "react-chat-engine-advanced";

import * as Styled from "../../styles/Chat/ChatMessagesComponent.styled";
import setMessageTime from "../../utils/setMessageTime";

interface IUserMessageComponentProps {
  message: MessageObject;
  nextMessage: MessageObject | null;
}

const UserMessageComponent = ({
  message,
  nextMessage,
}: IUserMessageComponentProps) => {
  const isLastMessage =
    !nextMessage || nextMessage.sender_username !== message.sender_username;

  return (
    <Styled.SendedMessagesWrapper notLast={!isLastMessage}>
      <Styled.MessagesWrapper>
        {message.attachments.length > 0 ? (
          <Styled.SendedMessageAttachments
            src={message.attachments[0].file}
            alt="message-attachment"
          />
        ) : (
          <Styled.SendedMessageBox>{message.text}</Styled.SendedMessageBox>
        )}
        {isLastMessage && (
          <Styled.SendedMessageTime>
            {setMessageTime(message.created)}
          </Styled.SendedMessageTime>
        )}
      </Styled.MessagesWrapper>
    </Styled.SendedMessagesWrapper>
  );
};

export default UserMessageComponent;
