import React from "react";
import * as Styled from "./MobileInfiniteText.styled";

interface IInfiniteTextProps {
  className: string;
  isRateCard?: boolean;
  title?: string;
  withoutMargin?: boolean;
}

export const MobileInfiniteText: React.FC<IInfiniteTextProps> = ({
  className,
  isRateCard,
  title,
  withoutMargin,
}) => {
  return (
    <Styled.MovingText
      className={`${
        withoutMargin
          ? isRateCard
            ? "rateCard withoutMargin"
            : `withoutMargin`
          : isRateCard
          ? "rateCard"
          : undefined
      } ${className}`}
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
