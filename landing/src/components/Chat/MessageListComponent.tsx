import React, { useEffect, useRef, useState } from "react";
import { MessageListProps, MessageObject } from "react-chat-engine-advanced";
import AdminMessageComponent from "./AdminMessageComponent";
import GreetingMessageComponent from "./GreetingMessageComponent";
import UserMessageComponent from "./UserMessageComponent";

import * as Styled from "../../styles/Chat/ChatMessagesComponent.styled";

interface IMessageListComponent {
  userEmail: string;
  openChatTime: string;
  sentEmailTime: string;
  isGreetingMeesageShow: boolean;
  messageProps: MessageListProps;
  setNewMessageAmount: React.Dispatch<React.SetStateAction<number>>;
}

const MessageListComponent = ({
  userEmail,
  openChatTime,
  sentEmailTime,
  messageProps,
  setNewMessageAmount,
  isGreetingMeesageShow,
}: IMessageListComponent) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<MessageObject[]>([]);

  useEffect(() => {
    if (messages.length === 0) {
      setMessages(messageProps.messages);

      return;
    }

    if (
      messages.length > 0 &&
      messageProps.messages.length > 0 &&
      messages[0].id !== messageProps.messages[0].id &&
      messages[messages.length - 1].id !== messageProps.messages[0].id
    ) {
      setMessages(
        (messages) => messages && [...messages, messageProps.messages[0]]
      );
      setNewMessageAmount((state) => ++state);
    }
  }, [messageProps]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current?.scrollHeight;
    }
  }, [messages]);

  const { username, style } = messageProps;

  return (
    <Styled.MessageListContainer
      ref={containerRef}
      style={{
        ...style,
        background: "#f1efed",
        height: "calc(100% - 80px)",
      }}
    >
      <GreetingMessageComponent
        userEmail={userEmail}
        openChatTime={openChatTime}
        sentEmailTime={sentEmailTime}
        isGreetingMeesageShow={isGreetingMeesageShow}
      />
      {messages &&
        messages.map((message, index, messagesArr) => {
          const previousMessage = index === 0 ? null : messagesArr[index - 1];
          const nextMessage =
            index === messagesArr.length - 1 ? null : messagesArr[index + 1];
          const isUserMessage = message.sender_username === username;

          return (
            <div key={`msg_${index}`}>
              {isUserMessage ? (
                <UserMessageComponent
                  message={message}
                  nextMessage={nextMessage}
                />
              ) : (
                <AdminMessageComponent
                  message={message}
                  previousMessage={previousMessage}
                  nextMessage={nextMessage}
                />
              )}
            </div>
          );
        })}
    </Styled.MessageListContainer>
  );
};

export default MessageListComponent;
