import React, { FC } from "react";
import * as StyledThisComp from "./BaseButton.styled";
import themes from "../../utils/themes";
import Image from "next/image";
import { IBaseButtonProps } from "../../types/Button.types";
import backImg from "../../../public/backButton.svg";

const BaseButton: FC<IBaseButtonProps> = ({
  type = "button",
  children,
  onClick = () => ({}),
  height = themes.primary.spacing.btnHeight,
  width = themes.primary.spacing.btnWidth,
  topSpacing = themes.primary.spacing.topButtonSpace,
  letterSpacing = "normal",
  src = backImg,

  isLoading,
}) => {
  return (
    <StyledThisComp.StyledButton
      type={type}
      width={width}
      height={height}
      onClick={onClick}
      letterSpacing={letterSpacing}
      marginTop={topSpacing}
    >
      <Image src={src} alt="back image photo" layout="fill" objectFit="cover" />
      {children}
    </StyledThisComp.StyledButton>
  );
};

export default BaseButton;
