import React, { useEffect, useRef, useState } from "react";
import { IChatUserInfo } from "../../types/SupportChat.types";
import ChatMessagesComponent from "./ChatMessagesComponent";
import ChatRegisterForm from "./ChatRegisterForm";
import { storeKeys } from "../../consts";

import * as Styled from "../../styles/Chat/ChatComponent.styled";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import ChatNameForm from "./ChatNameForm";

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
  let dragCounter = 0;
  const [userEmail, setUserEmail] = useState<string>("");
  const [sentEmailTime, setSentEmailTime] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [sentNameTime, setSentNameTime] = useState<string>("");
  const [chatUserInfo, setChatUserInfo] = useState<IChatUserInfo | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [isGreetingMeesageShow, setIsGreetingMessageShow] =
    useState<boolean>(false);
  const [dragging, setDragging] = useState(false);

  const chatAreaRef = useRef<HTMLDivElement | null>(null);

  const { height } = useWindowDimension();

  const handleDragIn = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter++;
    setDragging(true);
  };
  const handleDragOut = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter--;
    if (dragCounter > 0) return;
    else {
      setDragging(false);
    }
  };

  useEffect(() => {
    const chatUserData = localStorage.getItem(storeKeys.chatUserData);
    setChatUserInfo(chatUserData ? JSON.parse(chatUserData) : chatUserData);
    setUserEmail(chatUserData ? JSON.parse(chatUserData).userName : "");
    setUserName(chatUserData ? JSON.parse(chatUserData).firstName : "");
  }, []);

  useEffect(() => {
    chatAreaRef.current?.addEventListener("dragenter", handleDragIn, false);
    chatAreaRef.current?.addEventListener("dragleave", handleDragOut, false);
    return () => {
      chatAreaRef.current?.removeEventListener(
        "dragenter",
        handleDragIn,
        false
      );
      chatAreaRef.current?.removeEventListener(
        "dragleave",
        handleDragOut,
        false
      );
    };
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
      <Styled.ChatBody ref={chatAreaRef}>
        <Styled.ChatMessagesContainer isMessagesDisplayed={Boolean(userName)}>
          <ChatMessagesComponent
            dragging={dragging}
            setDragging={setDragging}
            userEmail={userEmail}
            userName={userName}
            openChatTime={openChatTime}
            isGreetingMeesageShow={isGreetingMeesageShow}
            setIsGreetingMessageShow={setIsGreetingMessageShow}
            sentEmailTime={sentEmailTime}
            sentNameTime={sentNameTime}
            chatUserInfo={chatUserInfo}
            setOperator={setOperator}
            setNewMessageAmount={setNewMessageAmount}
            setChatUserInfo={setChatUserInfo}
            setUserEmail={setUserEmail}
            setUserName={setUserName}
          />
        </Styled.ChatMessagesContainer>
        {!chatUserInfo && (
          <Styled.ChatFormContainer>
            <ChatRegisterForm
              isChatOpen={isChatOpen}
              setUserEmail={setUserEmail}
              setUserName={setUserName}
              setSentNameTime={setSentNameTime}
              setSentEmailTime={setSentEmailTime}
              setChatUserInfo={setChatUserInfo}
              setIsGreetingMessageShow={setIsGreetingMessageShow}
            />
          </Styled.ChatFormContainer>
        )}
        {!userName && chatUserInfo && (
          <Styled.ChatFormContainer>
            <ChatNameForm
              isChatOpen={isChatOpen}
              setUserName={setUserName}
              setSentNameTime={setSentNameTime}
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
