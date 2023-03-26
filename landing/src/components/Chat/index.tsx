import React, { useState } from "react";
import * as Styled from "../../styles/Chat/CommonChat.styled";

const Chat = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpenChat = () => setIsOpen((old) => !old);

  return (
    <Styled.ChatButton onClick={toggleIsOpenChat}>
      <Styled.ChatButtonIcon isOpen={isOpen} />
    </Styled.ChatButton>
  );
};

export default Chat;
