import React, { useState } from "react";
import { CalculatorAndChatWrapper } from "../../styles/HomePage/General.styled";
import Calculator from "../Calculator";
import Chat from "../Chat";

const CalcAndChatContainer = () => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  return (
    <CalculatorAndChatWrapper>
      <Calculator isChatOpen={isChatOpen} />
      <Chat isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen} />
    </CalculatorAndChatWrapper>
  );
};

export default CalcAndChatContainer;
