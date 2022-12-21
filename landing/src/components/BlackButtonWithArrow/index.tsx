import React, { CSSProperties } from "react";
import {
  BlackButton,
  ArrowContainer,
} from "../../styles/HomePage/General.styled";
import ButtonArrow from "../../utils/ButtonArrow";

interface IBlackButtonProps {
  href?: string;
  style?: CSSProperties;
  text?: string;
  onClick?: () => void;
}

const BlackButtonComponent = ({
  href = undefined,
  style,
  text,
  onClick,
}: IBlackButtonProps) => {
  return (
    <BlackButton
      target="_blank"
      rel="noopener noreferrer"
      size="1em"
      padding={"18px 17px"}
      className="seeAll"
      href={href}
      style={style}
      onClick={onClick}
    >
      {text}
      <ArrowContainer>
        <ButtonArrow />
      </ArrowContainer>
    </BlackButton>
  );
};

export default BlackButtonComponent;
