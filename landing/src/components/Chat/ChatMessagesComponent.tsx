import React, { useEffect, useState } from "react";
import {
  useSingleChatLogic,
  ChatFeed,
  MessageListProps,
  SingleChatSocket,
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
  openChatTime: string;
  sentEmailTime: string;
  chatUserInfo: IChatUserInfo | null;
  isGreetingMeesageShow: boolean;
  setIsGreetingMessageShow: React.Dispatch<React.SetStateAction<boolean>>;
  setOperator: React.Dispatch<React.SetStateAction<string | null>>;
  setNewMessageAmount: React.Dispatch<React.SetStateAction<number>>;
  setChatUserInfo: React.Dispatch<React.SetStateAction<IChatUserInfo | null>>;
  setUserEmail: React.Dispatch<React.SetStateAction<string>>;
}

const ChatMessagesComponent = ({
  dragging,
  setDragging,
  userEmail,
  openChatTime,
  sentEmailTime,
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

    const currentTime = new Date();

    if (chatUserInfo && currentTime.getTime() >= chatUserInfo.expiredTime) {
      setChatUserInfo(null);
      setUserEmail("");
      setIsGreetingMessageShow(false);
      localStorage.removeItem(storeKeys.chatUserData);
    }
  }, [chatProps]);

  if (!showChat) return <div />;

  return (
    <>
      {chatUserInfo ? (
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
                  userEmail={userEmail}
                  openChatTime={openChatTime}
                  sentEmailTime={sentEmailTime}
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
          openChatTime={openChatTime}
          sentEmailTime={sentEmailTime}
          isGreetingMeesageShow={isGreetingMeesageShow}
        />
      )}
    </>
  );
};

export default ChatMessagesComponent;
