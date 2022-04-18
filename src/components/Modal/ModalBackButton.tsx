import React, { FC, useEffect, useState } from "react";
import * as StyledThisComp from "../../styles/Modal.styled";
import closeBtn from "../../../public/closeBtn.svg";
import backArrow from "../../../public/backArrow.svg";
import Image from "next/image";

interface ModalBackButtonProps {
  selectedCategory: string;
  onToggleModalHandler: () => void;
  closeModalHandler: () => void;
}

const ModalBackButton: FC<ModalBackButtonProps> = ({
  onToggleModalHandler,
  closeModalHandler,
  selectedCategory,
}) => {
  const [buttonState, setButtonState] = useState<boolean>(false);

  useEffect(() => {
    setButtonState(selectedCategory === "all work" ? false : true);
  }, [selectedCategory]);

  return (
    <StyledThisComp.ModalBackButtonAnimated
      className={buttonState ? "back" : "close"}
    >
      {buttonState && (
        <StyledThisComp.ModalBackButtonArrow onClick={onToggleModalHandler}>
          <Image src={backArrow} alt="back arrow btn" />
          <StyledThisComp.ModalBackButtonArrowText>
            Return to portfolio
          </StyledThisComp.ModalBackButtonArrowText>
        </StyledThisComp.ModalBackButtonArrow>
      )}
      <Image src={closeBtn} onClick={closeModalHandler} alt="close btn" />
    </StyledThisComp.ModalBackButtonAnimated>
  );
};

export default ModalBackButton;
