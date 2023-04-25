import React from "react";
import * as Styled from "./MobileInfiniteText.styled";

interface IInfiniteTextProps {
  isRateCard?: boolean;
  title?: string;
  withoutMargin?: boolean;
}

export const MobileInfiniteText: React.FC<IInfiniteTextProps> = ({
  isRateCard,
  title,
  withoutMargin,
}) => {
  return (
    <Styled.MovingText
      className={
        withoutMargin
          ? isRateCard
            ? "rateCard withoutMargin"
            : `withoutMargin`
          : isRateCard
          ? "rateCard"
          : undefined
      }
    >
      <span>
        {title}&nbsp;&nbsp;&nbsp;{title}&nbsp;&nbsp;&nbsp;{title}
        &nbsp;&nbsp;&nbsp;
        {title}&nbsp;&nbsp;&nbsp;{title}&nbsp;&nbsp;&nbsp;{title}
        &nbsp;&nbsp;&nbsp;
        {title}&nbsp;&nbsp;&nbsp;{title}&nbsp;&nbsp;&nbsp;
      </span>
      <span>
        {title}&nbsp;&nbsp;&nbsp;{title}&nbsp;&nbsp;&nbsp;{title}
        &nbsp;&nbsp;&nbsp;
        {title}&nbsp;&nbsp;&nbsp;{title}&nbsp;&nbsp;&nbsp;{title}
        &nbsp;&nbsp;&nbsp;
        {title}&nbsp;&nbsp;&nbsp;{title}&nbsp;&nbsp;&nbsp;
      </span>
      <span>
        {title}&nbsp;&nbsp;&nbsp;{title}&nbsp;&nbsp;&nbsp;{title}
        &nbsp;&nbsp;&nbsp;;
        {title}&nbsp;&nbsp;&nbsp;{title}&nbsp;&nbsp;&nbsp;{title}
        &nbsp;&nbsp;&nbsp;;
        {title}&nbsp;&nbsp;&nbsp;{title}&nbsp;&nbsp;&nbsp;
      </span>
    </Styled.MovingText>
  );
};
