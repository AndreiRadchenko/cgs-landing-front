import React from "react";
import * as Styled from "../../styles/MobileAuditService/WhatAppInclude.styled";
import { SplitBrackets } from "../../utils/splitBrackets";

interface ISubListItemProps {
  subItem: string;
  onMouseEnter?: (title: string) => void;
  onMouseOut?: () => void;
}

const WhatAppIncludeSubListItem = ({ subItem, onMouseEnter, onMouseOut }: ISubListItemProps) => {
  return (
    <Styled.SubtextWrapper>
      <Styled.PointWrapper className="subtext">
        <Styled.SubtextPointLine />
        <Styled.PointCircle />
      </Styled.PointWrapper>
      <Styled.Subtext>
        <SplitBrackets text={subItem} onMouseEnter={onMouseEnter} onMouseOut={onMouseOut} />
      </Styled.Subtext>
    </Styled.SubtextWrapper>
  );
};

export default WhatAppIncludeSubListItem;
