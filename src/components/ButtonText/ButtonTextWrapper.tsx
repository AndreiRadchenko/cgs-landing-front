import React, { FC } from "react";
import * as StyledCommon from "../../styles/Page.styled";
import { IButtonTextProps } from "../../types/Button.types";

const ButtonTextWrapper: FC<IButtonTextProps> = ({ children, fontSize }) => {
  return (
    <StyledCommon.ButtonText fontSize={fontSize}>
      {children}
    </StyledCommon.ButtonText>
  );
};

export default ButtonTextWrapper;
