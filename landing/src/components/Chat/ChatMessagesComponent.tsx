import React from "react";
import GreetingMessageComponent from "./GreetingMessageComponent";

interface IChatMessagesComponent {
  userEmail: string;
  openChatTime: string;
  sentEmailTime: string;
}

const ChatMessagesComponent = ({
  userEmail,
  openChatTime,
  sentEmailTime,
}: IChatMessagesComponent) => {
  return (
    <GreetingMessageComponent
      userEmail={userEmail}
      openChatTime={openChatTime}
      sentEmailTime={sentEmailTime}
    />
  );
};

export default ChatMessagesComponent;
