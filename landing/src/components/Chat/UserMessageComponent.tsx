import React from "react";
import { MessageObject } from "react-chat-engine-advanced";

import * as Styled from "../../styles/Chat/ChatMessagesComponent.styled";
import setMessageTime from "../../utils/setMessageTime";

interface IUserMessageComponentProps {
  msgIdx: number;
  msgsCount: number;
  message: MessageObject;
  nextMessage: MessageObject | null;
}

const UserMessageComponent = ({
  msgIdx,
  msgsCount,
  message,
  nextMessage,
}: IUserMessageComponentProps) => {
  const isLastMessage =
    !nextMessage || nextMessage.sender_username !== message.sender_username;

  return (
    <Styled.SendedMessagesWrapper notLast={!isLastMessage}>
      <Styled.MessagesWrapper>
        {message.attachments.length > 0 && (
          <Styled.UserMessageAttachment
            style={{ marginBottom: `${message.text ? "0.5em" : "0"}` }}
          >
            atch
          </Styled.UserMessageAttachment>
        )}
        {message.text && (
          <Styled.SendedMessageBox
            className={msgIdx === msgsCount ? "msgAnimate" : ""}
          >
            {message.text}
          </Styled.SendedMessageBox>
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
