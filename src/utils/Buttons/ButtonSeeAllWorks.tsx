import React, { FC } from "react";
import BaseButton from "../../components/BaseButton/BaseButton";
import { IBaseButtonProps } from "../../types/Button.types";
import themes from "../themes";

const ButtonSeeAllWorks: FC<IBaseButtonProps> = ({ children, onClick }) => {
  return (
    <BaseButton
      onClick={onClick}
      width={"15em"}
      height={"5em"}
      topSpacing={"2em"}
    >
      {children}
    </BaseButton>
  );
};

export default ButtonSeeAllWorks;
