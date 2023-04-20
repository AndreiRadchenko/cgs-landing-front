import React, { useEffect, useRef, useState } from "react";
import { MessageListProps, MessageObject } from "react-chat-engine-advanced";

import AdminMessageComponent from "./AdminMessageComponent";
import GreetingMessageComponent from "./GreetingMessageComponent";
import UserMessageComponent from "./UserMessageComponent";

import * as Styled from "../../styles/Chat/ChatMessagesComponent.styled";
import { ICurrentMessage } from "../../types/SupportChat.types";

interface IMessageListComponent {
  userEmail: string;
  openChatTime: string;
  sentEmailTime: string;
  isGreetingMeesageShow: boolean;
  messageProps: MessageListProps;
  setNewMessageAmount: React.Dispatch<React.SetStateAction<number>>;
  currentMessage: ICurrentMessage;
  setCurrentMessage: React.Dispatch<React.SetStateAction<ICurrentMessage>>;
}

const MessageListComponent = ({
  userEmail,
  openChatTime,
  sentEmailTime,
  messageProps,
  setNewMessageAmount,
  isGreetingMeesageShow,
  currentMessage,
  setCurrentMessage,
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
      !messages.some((obj) => obj.id === messageProps.messages[0].id) &&
      messages[messages.length - 1].id !== messageProps.messages[0].id &&
      messageProps.messages[0].attachments.length !== 0
    ) {
      setMessages(
        (messages) => messages && [...messages, messageProps.messages[0]]
      );
      setNewMessageAmount((state) => ++state);
    }
  }, [messageProps]);

  useEffect(() => {
    if (currentMessage.text) {
      setMessages([
        ...messages,
        {
          text: currentMessage.text,
          sender_username: currentMessage.sender_username,
          created: "",
          attachments: [],
          custom_json: "",
        },
      ]);
      setNewMessageAmount((state) => ++state);
    }
  }, [currentMessage]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current?.scrollHeight;
    }

    currentMessage.text &&
      setCurrentMessage({
        text: "",
        sender_username: "",
      });
  }, [messages]);

  const { username, style } = messageProps;

  return (
    <Styled.MessageListContainer
      ref={containerRef}
      style={{
        ...style,
        background: "#f1efed",
        height: "calc(100% - 72px)",
        overscrollBehavior: "contain",
      }}
    >
      <Styled.DisplayedMessagesWrapper>
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
      </Styled.DisplayedMessagesWrapper>
    </Styled.MessageListContainer>
  );
};

export default MessageListComponent;
