import React, { useState } from "react";
import { CalculatorAndChatWrapper } from "../../styles/HomePage/General.styled";
import Calculator from "../Calculator";
import Chat from "../Chat";
import { ICalendlyUserData } from "../../types/ModalCategory.types";
import ChatIcon from "../Chat/ChatIcon";

interface ICalcAndChatContainer {
  setIsCalendlyOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCalendlyUserData: React.Dispatch<React.SetStateAction<ICalendlyUserData>>;
  isCalendlyOpen: boolean;
}

const CalcAndChatContainer = ({
  setIsCalendlyOpen,
  setCalendlyUserData,
  isCalendlyOpen,
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
        isCalendlyOpen={isCalendlyOpen}
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
