import React, { useState } from "react";
import * as Styled from "../../styles/Chat/ChatComponent.styled";
import ChatMessagesComponent from "./ChatMessagesComponent";
import ChatRegisterForm from "./ChatRegisterForm";

interface IChatComponentProps {
  isChatOpen: boolean;
  openChatTime: string;
}

const ChatComponent = ({ isChatOpen, openChatTime }: IChatComponentProps) => {
  const [userEmail, setUserEmail] = useState<string>("");
  const [sentEmailTime, setSentEmailTime] = useState<string>("");

  return (
    <Styled.ChatContainer isChatOpen={isChatOpen}>
      <Styled.ChatHeader>
        <Styled.ChatTitle>Chat with CGS-team</Styled.ChatTitle>
        <Styled.OperatorStatus>
          Operator Daniel is now online
        </Styled.OperatorStatus>
      </Styled.ChatHeader>
      <Styled.ChatBody>
        <Styled.ChatMessagesContainer>
          <ChatMessagesComponent
            userEmail={userEmail}
            openChatTime={openChatTime}
            sentEmailTime={sentEmailTime}
          />
        </Styled.ChatMessagesContainer>
        <Styled.ChatFormContainer>
          <ChatRegisterForm
            isChatOpen={isChatOpen}
            setUserEmail={setUserEmail}
            setSentEmailTime={setSentEmailTime}
          />
        </Styled.ChatFormContainer>
      </Styled.ChatBody>
    </Styled.ChatContainer>
  );
};

export default ChatComponent;
