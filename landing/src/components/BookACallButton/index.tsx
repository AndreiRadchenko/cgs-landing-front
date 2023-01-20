import React, { MouseEvent, useRef, useState } from "react";
import { PopupModal } from "react-calendly";
import { ArrowContainer } from "../../styles/HomePage/General.styled";
import ButtonArrow from "../../utils/ButtonArrow";
import { recoverLink } from "../../utils/recoverLink";
import * as Styled from "../../styles/HomePage/BookACallButton.styled";

interface IBookACallButtonProps {
  name: string;
  email: string;
  buttonText?: string;
  buttonLink: string;
  buttonClassName?: string;
  type?: string;
  isDisabled?: boolean;
  handleClose?: (e?: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
}

const BookACallButton = ({
  name,
  email,
  buttonLink,
  buttonText = "BOOK A CALL",
  buttonClassName,
  isDisabled,
  handleClose,
}: IBookACallButtonProps) => {
  const elRef = useRef<HTMLAnchorElement>(null);
  const [calendlyIsOpen, setCalendlyIsOpen] = useState<boolean>(false);

  const handleCalendyClose = () => {
    setCalendlyIsOpen(false);
    handleClose && handleClose();
  };

  const handleCalendyOpen = () => {
    setCalendlyIsOpen(true);
  };

  return (
    <>
      <Styled.BlackButton
        className={buttonClassName}
        onClick={handleCalendyOpen}
        disabled={isDisabled}
        type="submit"
      >
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

export default BookACallButton;
