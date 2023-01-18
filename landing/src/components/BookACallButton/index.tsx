import React, { MouseEvent, useRef, useState } from "react";
import { PopupModal } from "react-calendly";
import { ArrowContainer } from "../../styles/HomePage/General.styled";
import ButtonArrow from "../../utils/ButtonArrow";
import { recoverLink } from "../../utils/recoverLink";
import * as Styled from "../../styles/HomePage/BookACallButton.styled";

interface IBookACallButtonProps {
  buttonText?: string;
  buttonLink: string;
  buttonClassName?: string;
  type?: string;
  isDisabled?: boolean;
  handleClose?: (e?: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
  onClick?: () => void;
}

const BookACallButton = ({
  buttonLink,
  buttonText = "BOOK A CALL",
  buttonClassName,
  isDisabled,
  handleClose,
  onClick,
}: IBookACallButtonProps) => {
  const elRef = useRef<HTMLAnchorElement>(null);
  const [calendlyIsOpen, setCalendlyIsOpen] = useState<boolean>(false);

  const handleCalendyClose = () => {
    setCalendlyIsOpen(false);
    handleClose && handleClose();
  };

  const handleCalendyOpen = () => {
    setCalendlyIsOpen(true);
    onClick && onClick();
  };

  return (
    <>
      <Styled.BlackButton
        className={buttonClassName}
        onClick={handleCalendyOpen}
        disabled={isDisabled}
        type="submit"
      >
        <a ref={elRef} rel="noopener noreferrer">
          {buttonText}
        </a>
        <ArrowContainer>
          <ButtonArrow />
        </ArrowContainer>
      </Styled.BlackButton>
      {elRef && elRef.current && (
        <PopupModal
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
