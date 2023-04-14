import React, { useState } from "react";
import { CalculatorAndChatWrapper } from "../../styles/HomePage/General.styled";
import Calculator from "../Calculator";
import Chat from "../Chat";

const CalcAndChatContainer = () => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [isShowingBubble, setIsShowingBubble] = useState<boolean>(true);
  const [isShowingCross, setIsShowingCross] = useState<boolean>(true);

  return (
    <CalculatorAndChatWrapper>
      <Calculator
        isChatOpen={isChatOpen}
        setIsShowingBubble={setIsShowingBubble}
        setIsShowingCross={setIsShowingCross}
      />
      <Chat
        isChatOpen={isChatOpen}
        setIsChatOpen={setIsChatOpen}
        isShowingBubble={isShowingBubble}
        setIsShowingBubble={setIsShowingBubble}
        isShowingCross={isShowingCross}
        setIsShowingCross={setIsShowingCross}
      />
    </CalculatorAndChatWrapper>
  );
};

export default CalcAndChatContainer;
