import React, { useEffect, useState } from "react";
import {
  useSingleChatLogic,
  ChatFeed,
  MessageListProps,
  SingleChatSocket,
  MessageObject,
} from "react-chat-engine-advanced";

import GreetingMessageComponent from "./GreetingMessageComponent";
import MessageListComponent from "./MessageListComponent";
import MessageFormComponent from "./MessageFormComponent";

import { storeKeys } from "../../consts";
import { IChatUserInfo, ICurrentMessage } from "../../types/SupportChat.types";

interface IChatMessagesComponentProps {
  dragging: boolean;
  setDragging: React.Dispatch<React.SetStateAction<boolean>>;
  userEmail: string;
  userName: string;
  openChatTime: string;
  sentEmailTime: string;
  sentNameTime: string;
  chatUserInfo: IChatUserInfo | null;
  isGreetingMeesageShow: boolean;
  setIsGreetingMessageShow: React.Dispatch<React.SetStateAction<boolean>>;
  setOperator: React.Dispatch<React.SetStateAction<string | null>>;
  setNewMessageAmount: React.Dispatch<React.SetStateAction<number>>;
  setChatUserInfo: React.Dispatch<React.SetStateAction<IChatUserInfo | null>>;
  setUserEmail: React.Dispatch<React.SetStateAction<string>>;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

const ChatMessagesComponent = ({
  dragging,
  setDragging,
  userEmail,
  userName,
  openChatTime,
  sentEmailTime,
  setUserName,
  sentNameTime,
  chatUserInfo,
  setOperator,
  setNewMessageAmount,
  setChatUserInfo,
  setUserEmail,
  isGreetingMeesageShow,
  setIsGreetingMessageShow,
}: IChatMessagesComponentProps) => {
  const [showChat, setShowChat] = useState<boolean>(false);
  const [currentMessage, setCurrentMessage] = useState<ICurrentMessage>({
    text: "",
    sender_username: "",
  });
  const [messages, setMessages] = useState<MessageObject[]>([]);
  const chatProps = useSingleChatLogic(
    process.env.NEXT_PUBLIC_PROJECT_ID || "",
    chatUserInfo?.chatId || "",
    chatUserInfo?.accessKey || ""
  );

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true);
    }
  }, []);

  useEffect(() => {
    if (chatProps.chat) {
      setOperator(chatProps.chat?.people[0].person.first_name);
    }

    const chatUserData = JSON.parse(
      localStorage.getItem(storeKeys.chatUserData) || "{}"
    );

    chatProps && setIsGreetingMessageShow(true);

    const currentTime = new Date();

    if (chatUserInfo && currentTime.getTime() >= chatUserData?.expiredTime) {
      setMessages([]);
      setChatUserInfo(null);
      setUserEmail("");
      setUserName("");
      setIsGreetingMessageShow(false);
      localStorage.removeItem(storeKeys.chatUserData);
    }
  }, [chatProps]);

  if (!showChat) return <div />;

  return (
    <>
      {chatUserInfo && userName && userEmail ? (
        <>
          <ChatFeed
            {...chatProps}
            style={{
              background: "#f1efed",
              display: "flex",
              flexDirection: "column",
            }}
            username={chatUserInfo.userName}
            renderChatHeader={() => <div />}
            renderMessageList={(messageProps: MessageListProps) => {
              return messageProps ? (
                <MessageListComponent
                  messages={messages}
                  setMessages={setMessages}
                  userEmail={userEmail}
                  userName={userName}
                  openChatTime={openChatTime}
                  sentEmailTime={sentEmailTime}
                  sentNameTime={sentNameTime}
                  isGreetingMeesageShow={isGreetingMeesageShow}
                  messageProps={messageProps}
                  setNewMessageAmount={setNewMessageAmount}
                  currentMessage={currentMessage}
                  setCurrentMessage={setCurrentMessage}
                />
              ) : (
                <div />
              );
            }}
            renderMessageForm={() => (
              <MessageFormComponent
                dragging={dragging}
                setDragging={setDragging}
                chatId={chatUserInfo.chatId}
                userName={chatUserInfo.userName}
                publicKey={process.env.NEXT_PUBLIC_PROJECT_ID || ""}
                setCurrentMessage={setCurrentMessage}
              />
            )}
          />
          <SingleChatSocket {...chatProps} />
        </>
      ) : (
        <GreetingMessageComponent
          userEmail={userEmail}
          userName={userName}
          openChatTime={openChatTime}
          sentEmailTime={sentEmailTime}
          sentNameTime={sentNameTime}
          isGreetingMeesageShow={isGreetingMeesageShow}
        />
      )}
    </>
  );
};

export default ChatMessagesComponent;
