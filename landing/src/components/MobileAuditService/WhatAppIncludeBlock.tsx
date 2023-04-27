import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";

import { SplitBrackets } from "../../utils/splitBrackets";
import WhatAppIncludeSubListItem from "./WhatAppIncludeSubList";

import { queryKeys } from "../../consts/queryKeys";
import { IServiceMobileAudit } from "../../types/Admin/Response.types";
import { Separator } from "../../styles/MobileAuditService/Common.styled";
import * as Styled from "../../styles/MobileAuditService/WhatAppInclude.styled";
import MagnifyingGlass from "../../../public/MobileAuditService/magnifyingGlass.svg";

const WhatAppIncludeBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceMobileAudit>([
    queryKeys.getServiceMobileAuditPage,
  ])?.whatAppInclude;

  const [gradientPosition, setGradientPosition] = useState<string>("50%");

  const mouseMoveListener = useCallback(({ pageY }: MouseEvent) => {
    const windowHeight = window.innerHeight;
    const mouseYpercentage = Math.round(
      ((pageY - window.scrollY) / windowHeight) * 100
    );
    setGradientPosition(`${mouseYpercentage}%`);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveListener, false);
    return () => window.removeEventListener("mousemove", mouseMoveListener);
  }, [mouseMoveListener]);

  const elRef = useRef<HTMLDivElement>(null);

  return (
    <Styled.Container>
      <Separator />
      <Styled.Title>
        <SplitBrackets text={data?.subtitle} />
      </Styled.Title>
      <Styled.GradientLineContainer>
        <Styled.MobileAuditBgiContainer angle={gradientPosition} ref={elRef} />
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
