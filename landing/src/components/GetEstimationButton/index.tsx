import React, {
  CSSProperties,
  useRef,
  useState,
  MouseEvent,
  memo,
  MouseEventHandler,
} from "react";
import dynamic from "next/dynamic";

import { Loader } from "../../components/Loader";

const BookModalInputForms = dynamic(
  () => import("../BookModal/BookModalInput"),
  {
    loading: () => <Loader active className="getEstimationButton"></Loader>,
  }
);

import {
  ArrowContainer,
  BlackButton,
} from "../../styles/HomePage/General.styled";
import ButtonArrow from "../../utils/ButtonArrow";

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

interface IGetEstimationButtonProps {
  buttonText?: string;
  buttonLink?: string;
  buttonClassName?: string;
  style?: CSSProperties;
  withEstimation?: boolean;
  extRef?: React.Ref<HTMLAnchorElement | null>;
}

const GetEstimationButton = ({
  buttonLink,
  buttonText = "BOOK A CALL",
  buttonClassName,
  style,
  withEstimation,
  extRef,
}: IGetEstimationButtonProps) => {
  const elRef = useRef<HTMLAnchorElement | null>(null);

  React.useImperativeHandle(extRef, () => elRef.current);

  const [isOpen, setIsOpen] = useState(false);

  const onClose = (e?: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    e && e.stopPropagation();
    setIsOpen(false);
    document.querySelector("html")?.classList.remove("disableScrollBar");
    document.querySelector("body")?.classList.remove("disableScrollBar");
  };

  const handleButtonClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();
    withEstimation && setIsOpen(true);
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "get_estimation_now",
        formType: "Contact us",
      });
    }
  };

  return (
    <>
      <BlackButton
        size={"1.5em"}
        padding={"1.11em 1.5em"}
        rel="noopener noreferrer"
        className={buttonClassName}
        href={withEstimation === true ? "https://cgsteam.io" : buttonLink}
        onClick={handleButtonClick}
        style={style}
        ref={elRef}
      >
        {buttonText}
        <ArrowContainer>
          <ButtonArrow />
        </ArrowContainer>
      </BlackButton>
      {isOpen && withEstimation && elRef && elRef.current && (
        <BookModalInputForms isOpen={isOpen} onClose={onClose} />
      )}
    </>
  );
};

export default memo(GetEstimationButton);
