import React, { useState, useEffect, useRef } from "react";
import setMessageTime from "../../utils/setMessageTime";
import ChatComponent from "./ChatComponent";

import * as Styled from "../../styles/Chat/CommonChat.styled";
import { useWindowDimension } from "../../hooks/useWindowDimension";

interface IChatProps {
  isChatOpen: boolean;
  setIsChatOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isShowingBubble: boolean;
  setIsShowingBubble: React.Dispatch<React.SetStateAction<boolean>>;
  isShowingCross: boolean;
  setIsShowingCross: React.Dispatch<React.SetStateAction<boolean>>;
}

const Chat = ({
  isChatOpen,
  setIsChatOpen,
  setIsShowingCross,
  setIsShowingBubble,
  isShowingCross,
  isShowingBubble,
}: IChatProps) => {
  const [openChatTime, setOpenChatTime] = useState<string>("");
  const [newMessageAmount, setNewMessageAmount] = useState<number>(0);
  const chatRef = useRef<HTMLDivElement>(null);

  const { width } = useWindowDimension();

  const toggleIsOpenChat = () => {
    setIsChatOpen((old) => !old);
    newMessageAmount > 0 && setNewMessageAmount(0);
    !openChatTime && setOpenChatTime(setMessageTime());
  };

  const handleBubbleShow = () => {
    setIsShowingBubble(true);
    setIsShowingCross(false);
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

  useEffect(() => {
    if (width && width < 769 && isChatOpen)
      document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isChatOpen]);

  return (
    <Styled.ChatWrapper ref={chatRef}>
      {!isChatOpen && isShowingBubble && (
        <Styled.MessageBable>
          <p>Hi! Welcome to our website. How can we help you?</p>
          {isShowingCross && (
            <Styled.MessageBubbleCloseIcon onClick={hadleCloseBubble} />
          )}
        </Styled.MessageBable>
      )}
      <Styled.ChatButton
        isOpen={isChatOpen}
        onClick={toggleIsOpenChat}
        onMouseOver={handleBubbleShow}
        onMouseLeave={hadleCloseBubble}
      >
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
