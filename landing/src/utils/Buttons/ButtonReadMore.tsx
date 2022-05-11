import React, { FC } from "react";
import BaseButton from "../../components/BaseButton/BaseButton";
import { IBaseButtonProps } from "../../types/Button.types";

const ButtonReadMore: FC<IBaseButtonProps> = ({ children, onClick }) => {
  return (
    <BaseButton
      onClick={onClick}
      width={"13em"}
      height={"4em"}
      topSpacing={"2em"}
    >
      {children}
    </BaseButton>
  );
};

export default ButtonReadMore;
