import React, { CSSProperties, MouseEvent, useRef, useState } from "react";
import { PopupModal } from "react-calendly";
import { ArrowContainer } from "../../styles/HomePage/General.styled";
import ButtonArrow from "../../utils/ButtonArrow";
import { recoverLink } from "../../utils/recoverLink";
import * as Styled from "../../styles/HomePage/BookACallButton.styled";

interface IBookACallButtonProps {
  buttonText?: string;
  buttonLink: string;
  withCalendly?: boolean;
  buttonClassName?: string;
  style?: CSSProperties;
  type?: string;
  isDisabled?: boolean;
  handleClose?: (e?: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
}

const BookACallButton = ({
  buttonLink,
  buttonText = "BOOK A CALL",
  withCalendly = false,
  buttonClassName,
  style,
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
        size={"1.5em"}
        padding={"1.2em 1.5em"}
        className={buttonClassName}
        onClick={withCalendly ? handleCalendyOpen : undefined}
        style={style}
        disabled={isDisabled}
        type="submit"
      >
        <a
          href={withCalendly ? undefined : buttonLink}
          ref={elRef}
          rel="noopener noreferrer"
        >
          {buttonText}
        </a>
        <ArrowContainer>
          <ButtonArrow />
        </ArrowContainer>
      </Styled.BlackButton>
      {withCalendly && elRef && elRef.current && (
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
