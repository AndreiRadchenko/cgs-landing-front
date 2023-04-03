import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  useSingleChatLogic,
  ChatFeed,
  MessageListProps,
} from "react-chat-engine-advanced";
import GreetingMessageComponent from "./GreetingMessageComponent";
import { IChatUserInfo } from "../../types/SupportChat.types";
import MessageListComponent from "./MessageListComponent";
import MessageFormComponent from "./MessageFormComponent";
import { storeKeys } from "../../consts";

interface IChatMessagesComponentProps {
  userEmail: string;
  openChatTime: string;
  sentEmailTime: string;
  chatUserInfo: IChatUserInfo | null;
  setOperator: React.Dispatch<React.SetStateAction<string>>;
  setNewMessageAmount: React.Dispatch<React.SetStateAction<number>>;
  setChatUserInfo: React.Dispatch<React.SetStateAction<IChatUserInfo | null>>;
  setUserEmail: React.Dispatch<React.SetStateAction<string>>;
}

const SingleChatSocket = dynamic(() =>
  import("react-chat-engine-advanced").then((module) => module.SingleChatSocket)
);

const ChatMessagesComponent = ({
  userEmail,
  openChatTime,
  sentEmailTime,
  chatUserInfo,
  setOperator,
  setNewMessageAmount,
  setChatUserInfo,
  setUserEmail,
}: IChatMessagesComponentProps) => {
  const [showChat, setShowChat] = useState<boolean>(false);
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
    if (chatProps.chat?.admin.first_name) {
      setOperator(chatProps.chat?.admin.first_name);
    }

    const currentTime = new Date();

    if (chatUserInfo && currentTime.getTime() >= chatUserInfo.expiredTime) {
      setChatUserInfo(null);
      setUserEmail("");
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
            username={chatUserInfo.userName}
            renderChatHeader={() => <div />}
            renderMessageList={(messageProps: MessageListProps) => {
              return messageProps ? (
                <MessageListComponent
                  userEmail={userEmail}
                  openChatTime={openChatTime}
                  sentEmailTime={sentEmailTime}
                  messageProps={messageProps}
                  setNewMessageAmount={setNewMessageAmount}
                />
              ) : (
                <div />
              );
            }}
            renderMessageForm={() => (
              <MessageFormComponent
                chatId={chatUserInfo.chatId}
                userName={chatUserInfo.userName}
                publicKey={process.env.NEXT_PUBLIC_PROJECT_ID || ""}
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
        />
      )}
    </>
  );
};

export default ChatMessagesComponent;
