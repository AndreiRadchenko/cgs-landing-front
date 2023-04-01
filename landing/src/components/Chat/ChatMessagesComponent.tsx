import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  useSingleChatLogic,
  ChatFeed,
  MessageListProps,
  MessageFormProps,
} from "react-chat-engine-advanced";
import GreetingMessageComponent from "./GreetingMessageComponent";
import { IChatUserInfo } from "../../types/SupportChat.types";
import MessageListComponent from "./MessageListComponent";
import MessageFormComponent from "./MessageFormComponent";

interface IChatMessagesComponentProps {
  userEmail: string;
  openChatTime: string;
  sentEmailTime: string;
  chatUserInfo: IChatUserInfo | null;
}

const SingleChatSocket = dynamic(() =>
  import("react-chat-engine-advanced").then((module) => module.SingleChatSocket)
);

const ChatMessagesComponent = ({
  userEmail,
  openChatTime,
  sentEmailTime,
  chatUserInfo,
}: IChatMessagesComponentProps) => {
  const [showChat, setShowChat] = useState<boolean>(false);
  const chatProps = useSingleChatLogic(
    "1e93bf30-22d5-42ec-a0ae-d47fa7cf17f8",
    chatUserInfo?.chatId || "",
    chatUserInfo?.accessKey || ""
  );

  console.log(chatProps);
  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true);
    }
  }, []);

  if (!showChat) return <div />;

  return (
    <>
      {chatUserInfo ? (
        <>
          <ChatFeed
            {...chatProps}
            username={chatUserInfo.userName}
            renderChatHeader={() => <div />}
            renderMessageList={(messageProps: MessageListProps) => {
              return messageProps.messages.length > 0 ? (
                <MessageListComponent
                  userEmail={userEmail}
                  openChatTime={openChatTime}
                  sentEmailTime={sentEmailTime}
                  messageProps={messageProps}
                />
              ) : (
                <div />
              );
            }}
            renderMessageForm={(messageFormProps: MessageFormProps) => {
              console.log(messageFormProps);
              return (
                <MessageFormComponent
                  chatId={chatUserInfo.chatId}
                  userName={chatUserInfo.userName}
                  publicKey="1e93bf30-22d5-42ec-a0ae-d47fa7cf17f8"
                  userSecret={chatUserInfo.userSecret}
                />
              );
            }}
          />
          <SingleChatSocket {...chatProps} />
        </>
      ) : (
        <GreetingMessageComponent
          userEmail={userEmail}
          openChatTime={openChatTime}
          sentEmailTime={sentEmailTime}
        />
      )}
    </>
  );
};

export default ChatMessagesComponent;
