import React from "react";
import * as Styled from "../../styles/Chat/ChatComponent.styled";
import ChatMessagesComponent from "./ChatMessagesComponent";
import ChatRegisterForm from "./ChatRegisterForm";

interface IChatComponentProps {
  isChatOpen: boolean;
}

const ChatComponent = ({ isChatOpen }: IChatComponentProps) => {
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
          <ChatMessagesComponent />
        </Styled.ChatMessagesContainer>
        <Styled.ChatFormContainer>
          <ChatRegisterForm />
        </Styled.ChatFormContainer>
      </Styled.ChatBody>
    </Styled.ChatContainer>
  );
};

export default ChatComponent;
