import React from "react";
import dynamic from "next/dynamic";
import { useSingleChatLogic, ChatFeed } from "react-chat-engine-advanced";
import GreetingMessageComponent from "./GreetingMessageComponent";
import { IChatUserInfo } from "../../types/SupportChat.types";

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
  const chatProps = useSingleChatLogic(
    "1e93bf30-22d5-42ec-a0ae-d47fa7cf17f8",
    chatUserInfo?.chatId || "",
    chatUserInfo?.accessKey || ""
  );

  return (
    <>
      <GreetingMessageComponent
        userEmail={userEmail}
        openChatTime={openChatTime}
        sentEmailTime={sentEmailTime}
      />
      {chatUserInfo && (
        <>
          <ChatFeed {...chatProps} username={chatUserInfo.userName} />
          <SingleChatSocket {...chatProps} />
        </>
      )}
    </>
  );
};

export default ChatMessagesComponent;
