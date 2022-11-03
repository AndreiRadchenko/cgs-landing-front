import React from "react";
import * as Styled from "../../styles/MobileAuditService/WhatAppInclude.styled";
import { SplitBrackets } from "../../utils/splitBrackets";

interface ISubListItemProps {
  subItem: string;
}

const WhatAppIncludeSubListItem = ({ subItem }: ISubListItemProps) => {
  return (
    <Styled.SubtextWrapper>
      <Styled.PointWrapper className="subtext">
        <Styled.SubtextPointLine />
        <Styled.PointCircle />
      </Styled.PointWrapper>
      <Styled.Subtext>
        <SplitBrackets text={subItem} />
      </Styled.Subtext>
    </Styled.SubtextWrapper>
  );
};

export default WhatAppIncludeSubListItem;
