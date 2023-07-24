import React from "react";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";

import { HeaderTextBlockServices } from "../ServisesComponents";

import * as Styled from "../../styles/AiService/HeadBlock.styled";

import { queryKeys } from "../../consts/queryKeys";

import { IServiceDappAudit } from "../../types/Admin/Response.types";

const HeadBlockAi = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceDappAudit>([
    queryKeys.getServiceDappAuditPage,
  ])?.headerBlock;

  return (
    <Styled.Wrapper>
      {data && (
        <HeaderTextBlockServices
          title={data.title}
          text={data.text}
          btnText={data.button}
          btnLink={data.buttonLink}
        />
      )}
      {data && (
        <Styled.ImageWrapper>
          <Image
            src={data?.image.url}
            alt="dapp service hero img"
            layout="fill"
            objectFit="contain"
            loading={"eager"}
          />
        </Styled.ImageWrapper>
      )}
    </Styled.Wrapper>
  );
};

export default HeadBlockAi;
