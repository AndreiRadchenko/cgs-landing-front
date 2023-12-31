import React, { useRef } from "react";
import { PopupModal } from "react-calendly";

import { ArrowContainer } from "../../styles/HomePage/General.styled";
import * as Styled from "../../styles/HomePage/BookACallButton.styled";

import { IBookACallButtonProps } from "../../types/Button.types";

import ButtonArrow from "../../utils/ButtonArrow";
import { recoverLink } from "../../utils/recoverLink";

const BookACallButton = ({
  name,
  email,
  phoneNumber,
  buttonLink,
  buttonText = "BOOK A CALL",
  buttonClassName,
  handleClose,
  calendlyIsOpen,
  setCalendlyIsOpen,
}: IBookACallButtonProps) => {
  const elRef = useRef<HTMLAnchorElement>(null);

  const handleCalendyClose = () => {
    setCalendlyIsOpen(false);
    handleClose && handleClose();
  };

  return (
    <>
      <Styled.BlackButton className={buttonClassName} type="submit">
        <Styled.BlackButtonAnchor ref={elRef} rel="noopener noreferrer">
          {buttonText}
        </Styled.BlackButtonAnchor>
        <ArrowContainer>
          <ButtonArrow />
        </ArrowContainer>
      </Styled.BlackButton>
      {elRef && elRef.current && (
        <PopupModal
          prefill={{
            email,
            name,
            smsReminderNumber: phoneNumber,
          }}
          url={recoverLink(buttonLink)}
          rootElement={elRef.current}
          onModalClose={handleCalendyClose}
          open={calendlyIsOpen}
        />
      )}
    </>
  );
};

export default BookACallButton;
