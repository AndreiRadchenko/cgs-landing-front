import React from "react";
import * as Styled from "./MobileInfiniteText.styled";

interface IInfiniteTextProps {
  title?: string;
  withoutMargin?: boolean;
}

export const MobileInfiniteText: React.FC<IInfiniteTextProps> = ({
  title,
  withoutMargin,
}) => {
  return (
    <Styled.MovingText className={withoutMargin ? "withoutMargin" : undefined}>
      <span>
        {title}&nbsp;&nbsp;{title}&nbsp;&nbsp;{title}&nbsp;&nbsp;
        {title}&nbsp;&nbsp;{title}&nbsp;&nbsp;{title}&nbsp;&nbsp;
        {title}&nbsp;&nbsp;{title}&nbsp;
      </span>
      <span>
        {title}&nbsp;&nbsp;{title}&nbsp;&nbsp;{title}&nbsp;&nbsp;
        {title}&nbsp;&nbsp;{title}&nbsp;&nbsp;{title}&nbsp;&nbsp;
        {title}&nbsp;&nbsp;{title}&nbsp;
      </span>
      <span>
        {title}&nbsp;&nbsp;{title}&nbsp;&nbsp;{title}&nbsp;&nbsp;
        {title}&nbsp;&nbsp;{title}&nbsp;&nbsp;{title}&nbsp;&nbsp;
        {title}&nbsp;&nbsp;{title}&nbsp;
      </span>
    </Styled.MovingText>
  );
};
