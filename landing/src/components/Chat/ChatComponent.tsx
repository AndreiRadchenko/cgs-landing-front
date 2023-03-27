import React from "react";
import * as Styled from "../../styles/Chat/ChatComponent.styled";

interface IChatComponentProps {
  isChatOpen: boolean;
}

const ChatComponent = ({ isChatOpen }: IChatComponentProps) => {
  return (
    <Styled.ChatContainer isChatOpen={isChatOpen}>Chat</Styled.ChatContainer>
  );
};

export default ChatComponent;
