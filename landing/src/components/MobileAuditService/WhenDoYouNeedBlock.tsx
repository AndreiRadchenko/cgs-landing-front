import React, { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IServiceMobileAudit } from "../../types/Admin/Response.types";
import * as Styled from "../../styles/MobileAuditService/WhenDoYouNeedBlock.styled";
import { SplitBrackets } from "../../utils/splitBrackets";
import { useOnScreen } from "../../hooks/useOnScreen";

const WhenDoYouNeedBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceMobileAudit>([
    queryKeys.getServiceMobileAuditPage,
  ])?.whenDoYouNeed;

  const elRef = useRef<HTMLDivElement>(null);

  const isScrolled = useOnScreen(elRef, true);

  return (
    <Styled.Container>
      <Styled.Title>{data?.subtitle}</Styled.Title>
      <Styled.Description>{data?.description}</Styled.Description>
      <Styled.ContentWrapper ref={elRef}>
        {data?.points.map((el, idx) => (
          <Styled.TextBlock
            key={idx}
            ind={idx}
            className={isScrolled ? "scrolled" : undefined}
          >
            <Styled.BigDigit>{idx + 1}</Styled.BigDigit>
            <Styled.TextContent>
              <SplitBrackets text={el} />
            </Styled.TextContent>
          </Styled.TextBlock>
        ))}
      </Styled.ContentWrapper>
    </Styled.Container>
  );
};

export default WhenDoYouNeedBlock;
