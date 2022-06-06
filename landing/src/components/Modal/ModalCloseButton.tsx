import React, { FC } from "react";
import * as StyledThisComp from "../../styles/Modal.styled";
import closeBtn from "../../../public/closeBtn.svg";
import Image from "next/image";

interface ModalCloseButtonProps {
  closeModalHandler: () => void;
}

const ModalCloseButton: FC<ModalCloseButtonProps> = ({ closeModalHandler }) => {
  return (
    <StyledThisComp.ModalBackButtonAnimated className="sent-email">
      <Image src={closeBtn} onClick={closeModalHandler} alt="close btn" />
    </StyledThisComp.ModalBackButtonAnimated>
  );
};

export default ModalCloseButton;
