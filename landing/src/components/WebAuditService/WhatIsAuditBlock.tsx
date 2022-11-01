import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import { queryKeys } from "../../consts/queryKeys";
import { Subtitle } from "../../styles/WebAuditService/Common.styled";
import * as Styled from "../../styles/WebAuditService/WhatIsAudit.styled";
import { IServiceWebAudit } from "../../types/Admin/Response.types";
import { SplitBrackets } from "../../utils/splitBrackets";

const WhatIsAuditBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceWebAudit>([
    queryKeys.getServiceWebAuditPage,
  ])?.whatIsBlock;

  return (
    <Styled.Wrapper>
      <Subtitle>{data?.subtitle}</Subtitle>
      <Styled.ContentWrapper>
        {data?.image && (
          <Styled.ImageWrapper>
            <Image
              src={data?.image.url}
              alt="what is web audit image"
              layout="fill"
              objectFit="contain"
            />
          </Styled.ImageWrapper>
        )}
        <Styled.TextWrapper>
          <SplitBrackets text={data?.text} />
        </Styled.TextWrapper>
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
};

export default WhatIsAuditBlock;
