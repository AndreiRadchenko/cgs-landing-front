import React from "react";
import dynamic from "next/dynamic";
import { useSingleChatLogic, ChatFeed } from "react-chat-engine-advanced";
import GreetingMessageComponent from "./GreetingMessageComponent";

interface IChatMessagesComponent {
  userEmail: string;
  openChatTime: string;
  sentEmailTime: string;
}

const SingleChatSocket = dynamic(() =>
  import("react-chat-engine-advanced").then((module) => module.SingleChatSocket)
);

const ChatMessagesComponent = ({
  userEmail,
  openChatTime,
  sentEmailTime,
}: IChatMessagesComponent) => {
  const chatProps = useSingleChatLogic(
    "1e93bf30-22d5-42ec-a0ae-d47fa7cf17f8",
    "155734",
    "ca-3573232f-e488-4921-8cdf-52206efd4c54"
  );

  return (
    <>
      <GreetingMessageComponent
        userEmail={userEmail}
        openChatTime={openChatTime}
        sentEmailTime={sentEmailTime}
      />

      <ChatFeed {...chatProps} username="email@domain.com" />
      <SingleChatSocket {...chatProps} />
    </>
  );
};

export default ChatMessagesComponent;
