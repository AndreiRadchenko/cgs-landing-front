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
  const [newMessageAmount, setNewMessageAmount] = useState<number>(0);
  const [isSowingBubble, setIsSowingBubble] = useState<boolean>(false);
  const bubbleIntervalref = useRef<number | null>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  const toggleIsOpenChat = () => {
    setIsChatOpen((old) => !old);
    newMessageAmount > 0 && setNewMessageAmount(0);
    !openChatTime && setOpenChatTime(setMessageTime());
  };

  const hadleCloseBubble = () => {
    if (bubbleIntervalref.current !== null) {
      window.clearInterval(bubbleIntervalref.current);
      setIsSowingBubble(false);
    }
  };

  useEffect(() => {
    const handleClickOuteside = (e: Event) => {
      newMessageAmount > 0 && setNewMessageAmount(0);
      if (chatRef.current && !chatRef.current.contains(e.target as Element)) {
        setNewMessageAmount(0);
        setIsChatOpen(false);
      }
    };

    if (bubbleIntervalref.current === null) {
      bubbleIntervalref.current = window.setInterval(
        () => setIsSowingBubble((state) => !state),
        5000
      );
    }

    document.addEventListener("mousedown", handleClickOuteside);

    return () => {
      if (bubbleIntervalref.current !== null) {
        window.clearInterval(bubbleIntervalref.current);
      }
      document.removeEventListener("mousedown", handleClickOuteside);
    };
  }, []);

  return (
    <Styled.ChatWrapper ref={chatRef}>
      {!isChatOpen && isSowingBubble && (
        <Styled.MessageBable>
          Hi! Welcome to our website. How can we help you?
          <Styled.MessageBubbleCloseIcon onClick={hadleCloseBubble} />
        </Styled.MessageBable>
      )}
      <Styled.ChatButton isOpen={isChatOpen} onClick={toggleIsOpenChat}>
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
