import React from "react";
import * as Styled from "../../styles/DappAuditService/HowDoProvideBlock.styled";
import { SplitBrackets } from "../../utils/splitBrackets";

interface IHowToProvideBlockItemProps {
  number: number;
  title: string;
  text: string;
  optional?: boolean;
}

const HowToProvideBlockItem = ({
  number,
  title,
  text,
  optional = false,
}: IHowToProvideBlockItemProps) => {
  return (
    <Styled.ItemContainer>
      <Styled.ItemTitleContainer>
        <Styled.BigDigit>{number}</Styled.BigDigit>
        <Styled.OptionalContainer>
          <Styled.ItemTitle>{title}</Styled.ItemTitle>
          <Styled.OptionalText className={optional ? "optional" : undefined}>
            (Optional)
          </Styled.OptionalText>
        </Styled.OptionalContainer>
      </Styled.ItemTitleContainer>
      <Styled.Description>
        <SplitBrackets text={text} />
      </Styled.Description>
    </Styled.ItemContainer>
  );
};

export default HowToProvideBlockItem;
