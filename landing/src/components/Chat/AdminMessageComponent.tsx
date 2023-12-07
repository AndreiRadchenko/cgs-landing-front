import React from "react";
import { MessageObject } from "react-chat-engine-advanced";
import setMessageTime from "../../utils/setMessageTime";

import * as Styled from "../../styles/Chat/ChatMessagesComponent.styled";
import { makeLinksClickable } from "../../utils/getLinksFromMessage";
import { fileNameRegex, imageExtensionPattern } from "../../consts";
import Image from "next/image";

interface IAdminMessageComponentProps {
  msgIdx: number;
  msgsCount: number;
  message: MessageObject;
  previousMessage: MessageObject | null;
  nextMessage: MessageObject | null;
}

const AdminMessageComponent = ({
  msgIdx,
  msgsCount,
  message,
  previousMessage,
  nextMessage,
}: IAdminMessageComponentProps) => {
  const isFirstMessage =
    !previousMessage ||
    previousMessage.sender?.username !== message.sender_username;
  const isLastMessage =
    !nextMessage || nextMessage.sender_username !== message.sender_username;

  const match = message.attachments[0]?.file.match(fileNameRegex);

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
        {message.attachments.length > 0 &&
          (imageExtensionPattern.test(message.attachments[0].file) ? (
            <Styled.AdminMessageAttachment
              style={{ marginBottom: `${message.text ? "0.5em" : "0"}` }}
              onClick={handleDownload}
            >
              <Image
                style={{ borderRadius: "5px" }}
                src={message.attachments[0].file}
                height={"250px"}
                width={"250px"}
              />
            </Styled.AdminMessageAttachment>
          ) : (
            <Styled.AdminMessageAttachmentFile
              style={{ marginBottom: `${message.text ? "0.5em" : "0"}` }}
            >
              <Styled.UserMessageFileExt>
                {match && match[2]}
              </Styled.UserMessageFileExt>
              <Styled.UserMessageFileName>
                {match && match[1]}
              </Styled.UserMessageFileName>
            </Styled.AdminMessageAttachmentFile>
          ))}

        {message.text && (
          <Styled.RecivedMessageBox
            className={msgIdx === msgsCount ? "msgAnimate" : ""}
            dangerouslySetInnerHTML={{
              __html: makeLinksClickable(message.text),
            }}
          />
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
