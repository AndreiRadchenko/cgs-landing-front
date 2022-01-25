import React, { FC } from "react";
import BaseButton from "../../components/BaseButton/BaseButton";
import { IBaseButtonProps } from "../../types/Button.types";

const ButtonSubmitForm: FC<IBaseButtonProps> = ({ children }) => {
  return (
    <BaseButton
      type={"submit"}
      width={"14em"}
      height={"6em"}
      topSpacing={".3em"}
    >
      {children}
    </BaseButton>
  );
};

export default ButtonSubmitForm;
