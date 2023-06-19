import React from "react";
import * as Styled from "../../styles/MobileAuditService/WhatAppInclude.styled";
import { SplitBrackets } from "../../utils/splitBrackets";
import WhatAppIncludeSubListItem from "./WhatAppIncludeSubListItem";

interface ISubListProps {
  item: { text: string; subtext: string[] };
  onMouseEnter?: (title: string, event: React.MouseEvent) => void;
  onMouseOut?: () => void;
}

const WhatAppIncludeSubList = ({ item, onMouseOut, onMouseEnter }: ISubListProps) => {
  return (
    <Styled.ListItem>
      <Styled.PointWrapper>
        <Styled.PointLine />
        <Styled.PointCircle />
      </Styled.PointWrapper>
      <Styled.ListText>
        <SplitBrackets text={item.text} onMouseOut={onMouseOut} onMouseEnter={(text, event) => {
          onMouseEnter?.(text as string, event)
        }} />
        {item.subtext.length !== 0 && (
          <Styled.SubtextContainer>
            <Styled.ConectLine />
            <Styled.SubtextContentWrapper>
              {item.subtext.map((subItem, idx) => (
                <WhatAppIncludeSubListItem subItem={subItem} key={idx} onMouseEnter={(text, event) => {
                  onMouseEnter?.(text as string, event)
                }} onMouseOut={onMouseOut} />
              ))}
            </Styled.SubtextContentWrapper>
          </Styled.SubtextContainer>
        )}
      </Styled.ListText>
    </Styled.ListItem>
  );
};

export default WhatAppIncludeSubList;
