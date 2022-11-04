import React, { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { useOnScreen } from "../../hooks/useOnScreen";
import * as Styled from "../../styles/WebService/Perks.styled";
import { IServiceWeb } from "../../types/Admin/Response.types";
import { SplitBrackets } from "../../utils/splitBrackets";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";

const PerksBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceWeb>([
    queryKeys.getServiceWebPage,
  ])?.perksBlock;

  const elRef = useRef<HTMLDivElement>(null);

  const isScrolled = useOnScreen(elRef, true);

  return (
    <Styled.Container>
      <MobileInfiniteText title={data?.subtitle} />
      <Styled.ContentWrapper ref={elRef}>
        {data?.list.map((el, idx) => (
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

export default PerksBlock;
