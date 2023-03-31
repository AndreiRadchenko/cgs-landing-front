import React, { useEffect, useRef, useState } from "react";
import { MessageListProps, MessageObject } from "react-chat-engine-advanced";
import AdminMessageComponent from "./AdminMessageComponent";
import GreetingMessageComponent from "./GreetingMessageComponent";
import UserMessageComponent from "./UserMessageComponent";

interface IMessageListComponent {
  userEmail: string;
  openChatTime: string;
  sentEmailTime: string;
  messageProps: MessageListProps;
}

const MessageListComponent = ({
  userEmail,
  openChatTime,
  sentEmailTime,
  messageProps,
}: IMessageListComponent) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<MessageObject[] | null>(null);

  useEffect(() => {
    setMessages(messageProps.messages);
  }, []);

  useEffect(() => {
    if (
      messages &&
      messages[0].id !== messageProps.messages[0].id &&
      messages[messages.length - 1].id !== messageProps.messages[0].id
    ) {
      setMessages(
        (messages) => messages && [...messages, messageProps.messages[0]]
      );
    }

    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current?.scrollHeight;
    }
  }, [messageProps, messages]);
  console.log(messageProps);

  const { username, style } = messageProps;

  return (
    <div
      ref={containerRef}
      style={{
        ...style,
        scrollBehavior: "smooth",
        height: "calc(100% - 80px)",
      }}
    >
      <GreetingMessageComponent
        userEmail={userEmail}
        openChatTime={openChatTime}
        sentEmailTime={sentEmailTime}
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
    </div>
  );
};

export default MessageListComponent;
