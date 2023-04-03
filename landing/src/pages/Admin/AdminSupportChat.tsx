import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useMultiChatLogic } from "react-chat-engine-advanced";
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
    "CGS-team",
    "ELdBC4fEy@VYi"
  );

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true);
    }
  }, []);

  if (!showChat) return <div />;
  console.log(chatProps);
  return (
    <Styled.SupportWrapper style={{ fontFamily: "Gilroy" }}>
      <MultiChatWindow {...chatProps} style={{ height: "100vh" }} />
      <MultiChatSocket {...chatProps} />
    </Styled.SupportWrapper>
  );
};

export default AdminSupportChat;
