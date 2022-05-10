import React, { FC } from "react";
import BaseButton from "../../components/BaseButton/BaseButton";
import { IBaseButtonProps } from "../../types/Button.types";

const ArrowCarouselButton: FC<IBaseButtonProps> = ({
  children,
  src,
  onClick,
}) => {
  return (
    <BaseButton width={"12em"} height={"2em"} src={src} onClick={onClick}>
      {children}
    </BaseButton>
  );
};

export default ArrowCarouselButton;
