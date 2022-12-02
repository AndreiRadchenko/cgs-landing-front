import React, { CSSProperties, useRef, useState } from "react";
import { PopupModal } from "react-calendly";
import {
  ArrowContainer,
  BlackButton,
} from "../../styles/HomePage/General.styled";
import ButtonArrow from "../../utils/ButtonArrow";
import { recoverLink } from "../../utils/recoverLink";

interface IBookACallButtonProps {
  buttonText?: string;
  buttonLink: string;
  withCalendly?: boolean;
  buttonClassName?: string;
  style?: CSSProperties;
}

const BookACallButton = ({
  buttonLink,
  buttonText = "BOOK A CALL",
  withCalendly = false,
  buttonClassName,
  style,
}: IBookACallButtonProps) => {
  const elRef = useRef<HTMLAnchorElement>(null);
  const [calendlyIsOpen, setCalendlyIsOpen] = useState<boolean>(false);

  const handleCalendyClose = () => {
    setCalendlyIsOpen(false);
  };

  const handleCalendyOpen = () => {
    setCalendlyIsOpen(true);
  };
  return (
    <>
      <BlackButton
        size={"1.5em"}
        padding={"1.11em 1.5em"}
        rel="noopener noreferrer"
        className={buttonClassName}
        href={withCalendly ? undefined : buttonLink}
        onClick={withCalendly ? handleCalendyOpen : undefined}
        style={style}
        ref={elRef}
      >
        {buttonText}
        <ArrowContainer>
          <ButtonArrow />
        </ArrowContainer>
      </BlackButton>
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
