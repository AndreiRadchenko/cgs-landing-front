import React, { SetStateAction, useRef } from "react";
import { PopupModal } from "react-calendly";

import ButtonArrow from "../../../../utils/ButtonArrow";

import { ArrowContainer } from "../../../../styles/HomePage/General.styled";
import * as Styled from "../../../../styles/HomePage/BookACallButton.styled";
import { recoverLink } from "../../../../utils/recoverLink";

interface IBookACallButtonProps {
  name: string;
  email: string;
  buttonText?: string;
  buttonLink: string;
  buttonClassName?: string;
  type?: string;
  handleClose?: any;
  calendlyIsOpen: boolean;
  setCalendlyIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

const ContactPageButton = ({
  name,
  email,
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
          prefill={{ email, name }}
          url={recoverLink(buttonLink)}
          rootElement={elRef.current}
          onModalClose={handleCalendyClose}
          open={calendlyIsOpen}
        />
      )}
    </>
  );
};

export default ContactPageButton;
