import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

import setMessageTime from "../../utils/setMessageTime";
const ChatComponent = dynamic(() => import("./ChatComponent"));

import * as Styled from "../../styles/Chat/CommonChat.styled";
import { getWindowDimension } from "../../utils/getWindowDimension";
import { isChatAvailable } from "../../utils/chatAvailabilityUtil";

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

  const { width } = getWindowDimension();

  const isChatWorking = isChatAvailable();

  const toggleIsOpenChat = () => {
    if (isChatWorking) {
      setIsShowingBubble(false);
      setIsChatOpen((old) => !old);
      newMessageAmount > 0 && setNewMessageAmount(0);
      !openChatTime && setOpenChatTime(setMessageTime());
    }
  };

  const handleBubbleShow = () => {
    setIsShowingBubble(true);
    setIsShowingCross(false);
  };

  const hadleCloseBubble = () => {
    if (isChatWorking) setIsShowingBubble(false);
    else {
      setTimeout(() => setIsShowingBubble(false), 3000);
    }
  };

  useEffect(() => {
    if (width && width < 769 && isChatOpen)
      document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isChatOpen]);
  useEffect(() => {
    let timer = setTimeout(() => setNewMessageAmount(1), 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Styled.ChatWrapper isChatWorking={isChatWorking} ref={chatRef}>
      {!isChatOpen && isShowingBubble && (
        <Styled.MessageBable isChatWorking={isChatWorking}>
          {isChatWorking ? (
            <p>Hi! Welcome to our website. How can we help you?</p>
          ) : (
            <p>
              Oops, our chat is not available right now. <br />
              Text us at{" "}
              <a
                style={{ color: "#5869DD", textDecoration: "underline" }}
                href="mailto:contact@cgsteam.io"
              >
                contact@cgsteam.io
              </a>
            </p>
          )}
          {isShowingCross && (
            <Styled.MessageBubbleCloseIcon
              onClick={() => setIsShowingBubble(false)}
            />
          )}
        </Styled.MessageBable>
      )}
      <Styled.ChatButton
        isChatWorking={isChatWorking}
        isOpen={isChatOpen}
        onClick={toggleIsOpenChat}
        onMouseOver={handleBubbleShow}
        onMouseLeave={hadleCloseBubble}
      >
        <Styled.ChatButtonIcon isOpen={isChatOpen} />
        {newMessageAmount > 0 && isChatWorking && !isChatOpen && (
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
