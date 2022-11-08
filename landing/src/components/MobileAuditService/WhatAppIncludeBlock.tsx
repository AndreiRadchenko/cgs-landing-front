import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IServiceMobileAudit } from "../../types/Admin/Response.types";
import * as Styled from "../../styles/MobileAuditService/WhatAppInclude.styled";
import MagnifyingGlass from "../../../public/MobileAuditService/magnifyingGlass.svg";
import { SplitBrackets } from "../../utils/splitBrackets";
import Image from "next/image";
import WhatAppIncludeSubListItem from "./WhatAppIncludeSubList";
import { Separator } from "../../styles/MobileAuditService/Common.styled";

const WhatAppIncludeBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceMobileAudit>([
    queryKeys.getServiceMobileAuditPage,
  ])?.whatAppInclude;

  return (
    <Styled.Container>
      <Separator />
      <Styled.Title>
        <SplitBrackets text={data?.subtitle} />
      </Styled.Title>
      <Styled.GradientLineContainer>
        <Styled.GradientLine />
        <Styled.SubtitlesList>
          {data?.textBlock.map((item, idx) => (
            <WhatAppIncludeSubListItem item={item} key={idx} />
          ))}
        </Styled.SubtitlesList>
      </Styled.GradientLineContainer>
      <Styled.GlassContainer>
        <Image
          src={MagnifyingGlass}
          alt="magnifying glass image"
          layout="fill"
          objectFit="contain"
        />
      </Styled.GlassContainer>
    </Styled.Container>
  );
};

export default WhatAppIncludeBlock;
