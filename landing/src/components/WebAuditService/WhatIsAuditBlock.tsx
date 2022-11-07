import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { queryKeys } from "../../consts/queryKeys";
import * as Styled from "../../styles/WebAuditService/WhatIsAudit.styled";
import { IServiceWebAudit } from "../../types/Admin/Response.types";
import { SplitBrackets } from "../../utils/splitBrackets";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";
import { Subtitle } from "../../styles/WebAuditService/WhatIsAudit.styled";

const WhatIsAuditBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceWebAudit>([
    queryKeys.getServiceWebAuditPage,
  ])?.whatIsBlock;

  return (
    <Styled.Wrapper>
      <Subtitle>{data?.subtitle}</Subtitle>
      <MobileInfiniteText title={data?.subtitle} />
      <Styled.ContentWrapper>
        {data?.image && (
          <Styled.Image src={data?.image.url} alt="what is web audit image" />
        )}
        <Styled.TextWrapper>
          <SplitBrackets text={data?.text} />
        </Styled.TextWrapper>
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
};

export default WhatIsAuditBlock;
