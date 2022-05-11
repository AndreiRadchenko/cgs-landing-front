import React, { FC } from "react";
import BaseButton from "../../components/BaseButton/BaseButton";
import { IBaseButtonProps } from "../../types/Button.types";

const ButtonProjectLink: FC<IBaseButtonProps> = ({ children }) => {
  return (
    <BaseButton width={"13em"} height={"4em"} topSpacing={"1em"}>
      {children}
    </BaseButton>
  );
};

export default ButtonProjectLink;
