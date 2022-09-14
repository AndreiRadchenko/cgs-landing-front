import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { Subtitle } from "../../styles/MobileService/Layout";
import * as Styled from "../../styles/WebService/Perks.styled";
import { IServiceWeb } from "../../types/Admin/Response.types";
import { SplitBrackets } from "../../utils/splitBrackets";

const PerksBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceWeb>(
    queryKeys.getServiceWebPage
  )?.perksBlock;

  return (
    <Styled.Container>
      <Subtitle>{data?.subtitle}</Subtitle>
      <Styled.ContentWrapper>
        {data?.list.map((el, idx) => (
          <Styled.TextBlock key={idx}>
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
