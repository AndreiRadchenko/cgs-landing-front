import React, { useState } from "react";
import * as Styled from "../../styles/Chat/ChatComponent.styled";
import ChatMessagesComponent from "./ChatMessagesComponent";
import ChatRegisterForm from "./ChatRegisterForm";

interface IChatComponentProps {
  isChatOpen: boolean;
}

const ChatComponent = ({ isChatOpen }: IChatComponentProps) => {
  const [userEmail, setUserEmail] = useState<string>("");

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
          <ChatMessagesComponent userEmail={userEmail} />
        </Styled.ChatMessagesContainer>
        <Styled.ChatFormContainer>
          <ChatRegisterForm
            setUserEmail={setUserEmail}
            isChatOpen={isChatOpen}
          />
        </Styled.ChatFormContainer>
      </Styled.ChatBody>
    </Styled.ChatContainer>
  );
};

export default ChatComponent;
