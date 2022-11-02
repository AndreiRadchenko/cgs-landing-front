import React from "react";
import * as Styled from "../../styles/MobileAuditService/HowDoWeAudit.styled";
import { SplitBrackets } from "../../utils/splitBrackets";
import MarkedBox from "./MarkedBox";

interface IAuditBox {
  data: string[];
}

const AuditBox = ({ data }: IAuditBox) => {
  return (
    <Styled.AuditBox>
      <Styled.ListWrapper>
        {data.map((item, idx) => (
          <Styled.ListItem key={item}>
            <Styled.CheckMarkWrapper>
              <MarkedBox />
            </Styled.CheckMarkWrapper>
            <Styled.ListText>
              <SplitBrackets text={item} />
            </Styled.ListText>
            {idx !== data.length - 1 && <Styled.ItemBottomLine />}
          </Styled.ListItem>
        ))}
      </Styled.ListWrapper>
      <Styled.Shadow />
    </Styled.AuditBox>
  );
};

export default AuditBox;
