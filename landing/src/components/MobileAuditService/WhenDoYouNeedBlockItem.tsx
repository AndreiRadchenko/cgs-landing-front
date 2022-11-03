import React from "react";
import * as Styled from "../../styles/MobileAuditService/WhenDoYouNeedBlock.styled";
import { SplitBrackets } from "../../utils/splitBrackets";

interface IWhenNeedBlockItemProps {
  idx: number;
  isScrolled: boolean;
  item: string;
}

const WhenDoYouNeedBlockItem = ({
  idx,
  isScrolled,
  item,
}: IWhenNeedBlockItemProps) => {
  return (
    <Styled.TextBlock ind={idx} className={isScrolled ? "scrolled" : undefined}>
      <Styled.BigDigit>{idx + 1}</Styled.BigDigit>
      <Styled.TextContent className={idx === 0 ? "one" : undefined}>
        <SplitBrackets text={item} />
      </Styled.TextContent>
    </Styled.TextBlock>
  );
};

export default WhenDoYouNeedBlockItem;
