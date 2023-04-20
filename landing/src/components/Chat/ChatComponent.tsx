import React, { useEffect, useState } from "react";
import { IChatUserInfo } from "../../types/SupportChat.types";
import ChatMessagesComponent from "./ChatMessagesComponent";
import ChatRegisterForm from "./ChatRegisterForm";
import { storeKeys } from "../../consts";

import * as Styled from "../../styles/Chat/ChatComponent.styled";
import { useWindowDimension } from "../../hooks/useWindowDimension";

interface IChatComponentProps {
  isChatOpen: boolean;
  openChatTime: string;
  setNewMessageAmount: React.Dispatch<React.SetStateAction<number>>;
}

const ChatComponent = ({
  isChatOpen,
  openChatTime,
  setNewMessageAmount,
}: IChatComponentProps) => {
  const [userEmail, setUserEmail] = useState<string>("");
  const [sentEmailTime, setSentEmailTime] = useState<string>("");
  const [chatUserInfo, setChatUserInfo] = useState<IChatUserInfo | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [isGreetingMeesageShow, setIsGreetingMessageShow] =
    useState<boolean>(false);

  const { height } = useWindowDimension();

  useEffect(() => {
    const chatUserData = localStorage.getItem(storeKeys.chatUserData);
    setChatUserInfo(chatUserData ? JSON.parse(chatUserData) : chatUserData);
    setUserEmail(chatUserData ? JSON.parse(chatUserData).userName : "");
  }, []);

  return (
    <Styled.ChatContainer windowHeight={height} isChatOpen={isChatOpen}>
      <Styled.ChatHeader>
        <Styled.ChatTitle>Chat with CGS-team</Styled.ChatTitle>
        <Styled.OperatorStatus>
          {operator
            ? `Operator ${operator} is now online`
            : "Waiting registration"}
        </Styled.OperatorStatus>
      </Styled.ChatHeader>
      <Styled.ChatBody>
        <Styled.ChatMessagesContainer
          isMessagesDisplayed={Boolean(chatUserInfo)}
        >
          <ChatMessagesComponent
            userEmail={userEmail}
            openChatTime={openChatTime}
            isGreetingMeesageShow={isGreetingMeesageShow}
            setIsGreetingMessageShow={setIsGreetingMessageShow}
            sentEmailTime={sentEmailTime}
            chatUserInfo={chatUserInfo}
            setOperator={setOperator}
            setNewMessageAmount={setNewMessageAmount}
            setChatUserInfo={setChatUserInfo}
            setUserEmail={setUserEmail}
          />
        </Styled.ChatMessagesContainer>
        {!chatUserInfo && (
          <Styled.ChatFormContainer>
            <ChatRegisterForm
              isChatOpen={isChatOpen}
              setUserEmail={setUserEmail}
              setSentEmailTime={setSentEmailTime}
              setChatUserInfo={setChatUserInfo}
              setIsGreetingMessageShow={setIsGreetingMessageShow}
            />
          </Styled.ChatFormContainer>
        )}
      </Styled.ChatBody>
    </Styled.ChatContainer>
  );
};

export default ChatComponent;
