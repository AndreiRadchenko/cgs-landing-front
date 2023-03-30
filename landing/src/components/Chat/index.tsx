import React, { useState, useEffect, useRef } from "react";
import * as Styled from "../../styles/Chat/CommonChat.styled";
import setMessageTime from "../../utils/setMessageTime";
import ChatComponent from "./ChatComponent";

interface IChatProps {
  isChatOpen: boolean;
  setIsChatOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Chat = ({ isChatOpen, setIsChatOpen }: IChatProps) => {
  const [openChatTime, setOpenChatTime] = useState<string>("");
  const chatRef = useRef<HTMLDivElement>(null);

  const toggleIsOpenChat = () => {
    setIsChatOpen((old) => !old);
    !openChatTime && setOpenChatTime(setMessageTime());
  };

  useEffect(() => {
    const handleClickOuteside = (e: Event) => {
      if (chatRef.current && !chatRef.current.contains(e.target as Element)) {
        setIsChatOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOuteside);

    return () => {
      document.removeEventListener("mousedown", handleClickOuteside);
    };
  }, []);

  return (
    <Styled.ChatWrapper ref={chatRef}>
      <Styled.ChatButton onClick={toggleIsOpenChat}>
        A
        <Styled.ChatButtonIcon isOpen={isChatOpen} />
      </Styled.ChatButton>
      <ChatComponent isChatOpen={isChatOpen} openChatTime={openChatTime} />
    </Styled.ChatWrapper>
  );
};

export default Chat;
