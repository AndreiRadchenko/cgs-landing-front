import React, { useState } from "react";
import { CalculatorAndChatWrapper } from "../../styles/HomePage/General.styled";
import Calculator from "../Calculator";
import Chat from "../Chat";
import { ICalendlyUserData } from "../HomePage/Content";

interface ICalcAndChatContainer {
  setIsCalendlyOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCalendlyUserData: React.Dispatch<React.SetStateAction<ICalendlyUserData>>;
}

const CalcAndChatContainer = ({
  setIsCalendlyOpen,
  setCalendlyUserData,
}: ICalcAndChatContainer) => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [isShowingBubble, setIsShowingBubble] = useState<boolean>(true);
  const [isShowingCross, setIsShowingCross] = useState<boolean>(true);

  return (
    <CalculatorAndChatWrapper>
      <Calculator
        isChatOpen={isChatOpen}
        setIsChatOpen={setIsChatOpen}
        setIsShowingBubble={setIsShowingBubble}
        setIsShowingCross={setIsShowingCross}
        setIsCalendlyOpen={setIsCalendlyOpen}
        setCalendlyUserData={setCalendlyUserData}
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
