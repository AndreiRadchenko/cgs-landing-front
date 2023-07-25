import React from "react";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";

import { HeaderTextBlockServices } from "../ServisesComponents";

import * as Styled from "../../styles/DappAuditService/HeadBlock.styled";

import { IServiceAi } from "../../types/Admin/Response.types";

import { queryKeys } from "../../consts/queryKeys";

const HeadBlockDapp = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceAi>([
    queryKeys.getServiceAiPage,
  ])?.headerBlock;

  return (
    <Styled.Wrapper>
      <Styled.TextContent>
        {data && (
          <HeaderTextBlockServices
            title={data.title}
            text={data.text}
            btnText={data.button}
            btnLink={data.buttonLink}
          />
        )}
      </Styled.TextContent>
      <Styled.ImageWrapper>
        {data?.image && (
          <Image
            src={data?.image.url}
            alt="dapp service hero img"
            layout="fill"
            loading={"eager"}
            objectFit="contain"
            priority
          />
        )}
      </Styled.ImageWrapper>
    </Styled.Wrapper>
  );
};

export default HeadBlockDapp;
