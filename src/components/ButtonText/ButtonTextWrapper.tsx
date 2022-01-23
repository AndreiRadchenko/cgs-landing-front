import React, { FC } from "react";
import * as StyledCommon from "../../styles/Page.styled";

interface IButtonTextProps {
  fontSize?: string;
  children: any;
}

const ButtonTextWrapper: FC<IButtonTextProps> = (props) => {
  return <StyledCommon.ButtonText>{props.children}</StyledCommon.ButtonText>;
};

export default ButtonTextWrapper;
