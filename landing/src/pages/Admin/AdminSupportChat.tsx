import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useMultiChatLogic, ChatFeed } from "react-chat-engine-advanced";
import * as Styled from "../../styles/AdminSupportChat.styled";

const MultiChatWindow = dynamic(() =>
  import("react-chat-engine-advanced").then((module) => module.MultiChatWindow)
);

const MultiChatSocket = dynamic(() =>
  import("react-chat-engine-advanced").then((module) => module.MultiChatSocket)
);

const AdminSupportChat = () => {
  const [showChat, setShowChat] = useState<boolean>(false);

  const chatProps = useMultiChatLogic(
    "1e93bf30-22d5-42ec-a0ae-d47fa7cf17f8",
    "dchushko",
    "ELdBC4fEy@VYi"
  );

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true);
    }
  }, []);

  if (!showChat) return <div />;

  return (
    <Styled.SupportWrapper>
      {/* <ChatFeed {...chatProps} style={{ height: "100vh" }} /> */}
      <MultiChatWindow {...chatProps} style={{ height: "100vh" }} />
      <MultiChatSocket {...chatProps} />
    </Styled.SupportWrapper>
  );
};

export default AdminSupportChat;
