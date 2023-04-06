import React, { useState, useEffect, useRef } from "react";
import setMessageTime from "../../utils/setMessageTime";
import ChatComponent from "./ChatComponent";

import * as Styled from "../../styles/Chat/CommonChat.styled";

interface IChatProps {
  isChatOpen: boolean;
  setIsChatOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Chat = ({ isChatOpen, setIsChatOpen }: IChatProps) => {
  const [openChatTime, setOpenChatTime] = useState<string>("");
  const [newMessageAmount, setNewMessageAmount] = useState<number>(0);
  const [isShowingBubble, setIsShowingBubble] = useState<boolean>(true);
  const chatRef = useRef<HTMLDivElement>(null);

  const toggleIsOpenChat = () => {
    setIsChatOpen((old) => !old);
    newMessageAmount > 0 && setNewMessageAmount(0);
    !openChatTime && setOpenChatTime(setMessageTime());
  };

  const handleBubbleShow = () => {
    setIsShowingBubble(true);
  };

  const hadleCloseBubble = () => {
    setIsShowingBubble(false);
  };

  useEffect(() => {
    const handleClickOuteside = (e: Event) => {
      newMessageAmount > 0 && setNewMessageAmount(0);
      if (chatRef.current && !chatRef.current.contains(e.target as Element)) {
        setNewMessageAmount(0);
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
      {!isChatOpen && isShowingBubble && (
        <Styled.MessageBable>
          <p>Hi! Welcome to our website. How can we help you?</p>
          <Styled.MessageBubbleCloseIcon onClick={hadleCloseBubble} />
        </Styled.MessageBable>
      )}
      <Styled.ChatButton
        isOpen={isChatOpen}
        onClick={toggleIsOpenChat}
        onMouseOver={handleBubbleShow}
        onMouseLeave={hadleCloseBubble}
      >
        A
        <Styled.ChatButtonIcon isOpen={isChatOpen} />
        {newMessageAmount > 0 && !isChatOpen && (
          <Styled.NewMessageCounter>
            {newMessageAmount}
          </Styled.NewMessageCounter>
        )}
      </Styled.ChatButton>
      <ChatComponent
        isChatOpen={isChatOpen}
        openChatTime={openChatTime}
        setNewMessageAmount={setNewMessageAmount}
      />
    </Styled.ChatWrapper>
  );
};

export default Chat;
