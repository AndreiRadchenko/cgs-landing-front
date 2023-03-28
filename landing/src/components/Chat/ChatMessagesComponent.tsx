import React from "react";
import GreetingMessageComponent from "./GreetingMessageComponent";

interface IChatMessagesComponent {
  userEmail: string;
}

const ChatMessagesComponent = ({ userEmail }: IChatMessagesComponent) => {
  return <GreetingMessageComponent userEmail={userEmail} />;
};

export default ChatMessagesComponent;
