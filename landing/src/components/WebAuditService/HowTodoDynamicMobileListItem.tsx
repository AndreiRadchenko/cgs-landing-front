import React from "react";
import * as Styled from "../../styles/WebAuditService/HowTodoDynamicMobileListItem.styled";

interface IHowTodoDynamicMobileListItemProps {
  text: string;
  ind: number;
  isScrolled: boolean;
}

const HowTodoDynamicMobileListItem: React.FC<
  IHowTodoDynamicMobileListItemProps
> = ({ text, isScrolled, ind }) => {
  return (
    <Styled.ItemWrapper
      ind={ind}
      className={isScrolled ? "scrolled" : undefined}
    >
      <Styled.IndentionWrapper>
        <Styled.Indention />
        <Styled.IndentionBranch />
      </Styled.IndentionWrapper>
      <Styled.Text>{text}</Styled.Text>
    </Styled.ItemWrapper>
  );
};

export default HowTodoDynamicMobileListItem;