import React from "react";
import Image from "next/image";
import { MessageObject } from "react-chat-engine-advanced";

import * as Styled from "../../styles/Chat/ChatMessagesComponent.styled";

import setMessageTime from "../../utils/setMessageTime";
import { makeLinksClickable } from "../../utils/getLinksFromMessage";

import { fileNameRegex, imageExtensionPattern } from "../../consts";

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

  const match = message.attachments[0]?.file.match(fileNameRegex);

  return (
    <Styled.SendedMessagesWrapper notLast={!isLastMessage}>
      <Styled.MessagesWrapper>
        {message.attachments.length > 0 &&
          (imageExtensionPattern.test(message.attachments[0].file) ? (
            <Styled.UserMessageAttachment
              style={{ marginBottom: `${message.text ? "0.5em" : "0"}` }}
            >
              <Image
                style={{ borderRadius: "5px" }}
                src={message.attachments[0].file}
                height={"250px"}
                width={"250px"}
              />
            </Styled.UserMessageAttachment>
          ) : (
            <Styled.UserMessageAttachmentFile
              style={{ marginBottom: `${message.text ? "0.5em" : "0"}` }}
            >
              <Styled.UserMessageFileExt>
                {match && match[2]}
              </Styled.UserMessageFileExt>
              <Styled.UserMessageFileName>
                {match && match[1]}
              </Styled.UserMessageFileName>
            </Styled.UserMessageAttachmentFile>
          ))}
        {message.text && (
          <Styled.SendedMessageBox
            className={msgIdx === msgsCount ? "msgAnimate" : ""}
            dangerouslySetInnerHTML={{
              __html: makeLinksClickable(message.text),
            }}
          />
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
