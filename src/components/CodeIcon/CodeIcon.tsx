import React, { FC } from "react";
import * as StyledThisComp from "./CodeIcon.styled";
import { ICodeIcon } from "./CodeIcon.styled";

interface ICodeIconProps extends ICodeIcon {
  content: string;
}

const CodeIcon: FC<ICodeIconProps> = (props) => {
  const { content, ...otherProps } = props;
  return (
    <StyledThisComp.CodeIconContent {...otherProps}>
      {content}
    </StyledThisComp.CodeIconContent>
  );
};

export default CodeIcon;
