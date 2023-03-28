import React, { useState } from "react";
import * as Styled from "../../styles/Chat/CommonChat.styled";
import setMessageTime from "../../utils/setMessageTime";
import ChatComponent from "./ChatComponent";

interface IChatProps {
  isChatOpen: boolean;
  setIsChatOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Chat = ({ isChatOpen, setIsChatOpen }: IChatProps) => {
  const [openChatTime, setOpenChatTime] = useState<string>("");

  const toggleIsOpenChat = () => {
    setIsChatOpen((old) => !old);
    setOpenChatTime(setMessageTime());
  };

  return (
    <Styled.ChatWrapper>
      <Styled.ChatButton onClick={toggleIsOpenChat}>
        A
        <Styled.ChatButtonIcon isOpen={isChatOpen} />
      </Styled.ChatButton>
      <ChatComponent isChatOpen={isChatOpen} openChatTime={openChatTime} />
    </Styled.ChatWrapper>
  );
};

export default Chat;
