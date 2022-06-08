import React from "react";
import Image from "next/image";

import sentEmail from "/public/sentEmail.png";
import * as Styled from "../../styles/Modal.styled";
import ModalCloseButton from "./ModalCloseButton";

interface IModalSentEmail {
  isOpen: boolean;
  closeHandler: () => void;
}

const ModalSentEmail = ({ isOpen, closeHandler }: IModalSentEmail) => {
  return (
    <Styled.ModalContainer className="sent-email" open={isOpen}>
      <Styled.ModalWrapper className="sent-email">
        <ModalCloseButton closeModalHandler={closeHandler} />
        <Styled.SentEmailHeader>
          Thank you! We make every effort to contact you faster than you expect.
        </Styled.SentEmailHeader>
        <Styled.SentEmailImageWrapper>
          <Image src={sentEmail.src} alt="sent email image" layout="fill" />
        </Styled.SentEmailImageWrapper>
      </Styled.ModalWrapper>
    </Styled.ModalContainer>
  );
};

export default ModalSentEmail;
