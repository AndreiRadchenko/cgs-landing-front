import React, { FC } from "react";
import * as StyledThisComp from "./BaseButton.styled";
import themes from "../../utils/themes";
import { IBaseButtonProps } from "../../types/Button.types";
import backImg from "../../../public/back-button.png";
import ImagePreview from "../Image/ImagePreview";

const BaseButton: FC<IBaseButtonProps> = ({
  type = "button",
  children,
  onClick = () => ({}),
  height = themes.primary.spacing.btnHeight,
  width = themes.primary.spacing.btnWidth,
  mobileWidth = "10em",
  topSpacing = themes.primary.spacing.topButtonSpace,
  letterSpacing = "normal",
  src = backImg,

  isLoading,
}) => {
  return (
    <StyledThisComp.StyledButton
      type={type}
      width={width}
      mobileWidth={mobileWidth}
      height={height}
      onClick={onClick}
      letterSpacing={letterSpacing}
      marginTop={topSpacing}
      className={src === "/careersSendBg.png" ? "big-btn" : ""}
    >
      <ImagePreview
        src={src}
        alt="back image photo"
        layout="fill"
        objectFit="cover"
      />
      {children}
    </StyledThisComp.StyledButton>
  );
};

export default BaseButton;
