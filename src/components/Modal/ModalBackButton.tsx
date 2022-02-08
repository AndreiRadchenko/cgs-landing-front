import React, { FC, useEffect, useState } from "react";
import * as StyledThisComp from "../../styles/Modal.styled";

interface ModalBackButtonProps {
  selectedCategory: string;
  onToggleModalHandler: () => void;
}

const ModalBackButton: FC<ModalBackButtonProps> = ({
  onToggleModalHandler,
  selectedCategory,
}) => {
  const [buttonState, setButtonState] = useState("close");

  useEffect(() => {
    setButtonState(selectedCategory === "all work" ? "close" : "back");
  }, [selectedCategory]);

  return (
    <StyledThisComp.ModalBackButtonAnimated onClick={onToggleModalHandler}>
      <StyledThisComp.ModalBackButtonAnimatedContent className={buttonState} />
    </StyledThisComp.ModalBackButtonAnimated>
  );
};

export default ModalBackButton;
