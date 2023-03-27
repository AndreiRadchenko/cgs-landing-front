import React from "react";
import * as Styled from "../../styles/Chat/CommonChat.styled";
import ChatComponent from "./ChatComponent";

interface IChatProps {
  isChatOpen: boolean;
  setIsChatOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Chat = ({ isChatOpen, setIsChatOpen }: IChatProps) => {
  const toggleIsOpenChat = () => setIsChatOpen((old) => !old);

  return (
    <Styled.ChatWrapper>
      <Styled.ChatButton onClick={toggleIsOpenChat}>
        A
        <Styled.ChatButtonIcon isOpen={isChatOpen} />
      </Styled.ChatButton>
      <ChatComponent isChatOpen={isChatOpen} />
    </Styled.ChatWrapper>
  );
};

export default Chat;
