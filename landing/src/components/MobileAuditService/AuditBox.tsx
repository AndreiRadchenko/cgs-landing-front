import React from "react";
import * as Styled from "../../styles/MobileAuditService/HowDoWeAudit.styled";
import AuditListItem from "./AuditListItem";

interface IAuditBoxProps {
  data: string[];
  className?: string;
}

const AuditBox = ({ data, className }: IAuditBoxProps) => {
  return (
    <Styled.AuditBox>
      <Styled.ListWrapper>
        {data.map((item, idx) => (
          <AuditListItem
            key={item}
            item={item}
            idx={idx !== data.length - 1 ? idx : null}
          />
        ))}
      </Styled.ListWrapper>
      <Styled.Shadow className={className} />
    </Styled.AuditBox>
  );
};

export default AuditBox;
