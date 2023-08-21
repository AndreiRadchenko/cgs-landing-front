import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import Image from "next/image";

import { FooterTextBlockServices } from "../ServisesComponents";

import * as Styled from "../../styles/AiService/Footer.styled";

import { WrapperWithLine } from "../../styles/DappAuditService/Common.styled";

import { queryKeys } from "../../consts/queryKeys";

import { IServiceDappAudit } from "../../types/Admin/Response.types";

const FooterBlockAi = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceDappAudit>([
    queryKeys.getServiceDappAuditPage,
  ])?.footerBlock;

  return (
    <Styled.ContentWrapper>
      <WrapperWithLine />
      <div>
        {data && (
          <FooterTextBlockServices
            title={data.title}
            btnText={data.button}
            btnLink={data.buttonLink}
          />
        )}
      </div>
      {data && (
        <Styled.ImageWrapper>
          <Image
            src={data?.image?.url}
            alt="dapp audit footer image"
            layout="fill"
            objectFit="contain"
          />
        </Styled.ImageWrapper>
      )}
    </Styled.ContentWrapper>
  );
};

export default FooterBlockAi;
