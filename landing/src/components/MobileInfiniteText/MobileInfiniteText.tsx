import React from "react";
import * as Styled from "./MobileInfiniteText.styled";

interface IInfiniteTextProps {
  title?: string;
}

export const MobileInfiniteText: React.FC<IInfiniteTextProps> = ({ title }) => {
  return (
    <Styled.MovingText>
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
