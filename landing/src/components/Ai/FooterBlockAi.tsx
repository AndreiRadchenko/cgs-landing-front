import { useQueryClient } from "@tanstack/react-query";
import React, { useRef } from "react";
import parse from "html-react-parser";
import { queryKeys } from "../../consts/queryKeys";
import * as Styled from "../../styles/AiService/Footer.styled";
import {
  Subtitle,
  WrapperWithLine,
} from "../../styles/DappAuditService/Common.styled";
import { IServiceDappAudit } from "../../types/Admin/Response.types";
import Image from "next/image";
import GetEstimationButton from "../GetEstimationButton";
import ButtonShareComponent from "../HomePage/ButtonShareComponent";
import { FooterTextBlockServices } from "../ServisesComponents";

const FooterBlockAi = () => {
  const queryClient = useQueryClient();
  const elRef = useRef<HTMLDivElement>(null);
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
