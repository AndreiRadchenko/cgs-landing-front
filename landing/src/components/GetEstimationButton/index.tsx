import React, { CSSProperties, useRef, useState, MouseEvent } from "react";
import {
  ArrowContainer,
  BlackButton,
} from "../../styles/HomePage/General.styled";
import ButtonArrow from "../../utils/ButtonArrow";
import { recoverLink } from "../../utils/recoverLink";
import BookModal from "../BookModal";
import BookModalInputForms from "../BookModal/BookModalInput/indext";

interface IGetEstimationButtonProps {
  buttonText?: string;
  buttonLink: string;
  buttonClassName?: string;
  style?: CSSProperties;
  withEstimation?: boolean;
}

const GetEstimationButton = ({
  buttonLink,
  buttonText = "BOOK A CALL",
  buttonClassName,
  style,
  withEstimation,
}: IGetEstimationButtonProps) => {
  const elRef = useRef<HTMLAnchorElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const onClose = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <BlackButton
        size={"1.5em"}
        padding={"1.11em 1.5em"}
        rel="noopener noreferrer"
        className={buttonClassName}
        href={withEstimation ? undefined : buttonLink}
        onClick={withEstimation ? onOpen : undefined}
        style={style}
        ref={elRef}
      >
        {buttonText}
        <ArrowContainer>
          <ButtonArrow />
        </ArrowContainer>
      </BlackButton>
      {withEstimation && elRef && elRef.current && (
        <BookModal isOpen={isOpen} onClose={onClose}>
          <BookModalInputForms onClose={onClose} />
        </BookModal>
      )}
    </>
  );
};

export default GetEstimationButton;
