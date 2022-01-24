import React, { FC } from "react";
import BaseButton from "../../components/BaseButton/BaseButton";
import { IBaseButtonProps } from "../../types/Button.types";

const ButtonReadMore: FC<IBaseButtonProps> = ({ children }) => {
  return (
    <BaseButton width={"13em"} height={"4em"} topSpacing={"2em"}>
      {children}
    </BaseButton>
  );
};

export default ButtonReadMore;
