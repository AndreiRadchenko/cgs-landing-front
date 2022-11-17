import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import parse from "html-react-parser";
import { queryKeys } from "../../consts/queryKeys";
import * as Styled from "../../styles/DappAuditService/Footer.styled";
import {
  Subtitle,
  WrapperWithLine,
} from "../../styles/DappAuditService/Common.styled";
import { IServiceDappAudit } from "../../types/Admin/Response.types";
import {
  ArrowContainer,
  BlackButton,
} from "../../styles/HomePage/General.styled";
import ButtonArrow from "../../utils/ButtonArrow";
import Image from "next/image";

const FooterBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceDappAudit>([
    queryKeys.getServiceDappAuditPage,
  ])?.footerBlock;

  return (
    <Styled.ContentWrapper>
      <WrapperWithLine />
      <div>
        <Styled.TitleWrapper>
          <Subtitle>
            {data &&
              parse(
                data.title
                  .toLowerCase()
                  .replaceAll("|", "<br/>")
                  .replace(
                    "cgs-team",
                    '<span style="white-space: nowrap">cgs-team</span>'
                  )
              )}
          </Subtitle>
        </Styled.TitleWrapper>
        <BlackButton
          padding={"1em 2.27em"}
          size={"1.125em"}
          href={data?.buttonLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data?.button}
          <ArrowContainer>
            <ButtonArrow />
          </ArrowContainer>
        </BlackButton>
      </div>
      {data && (
        <Styled.ImageWrapper>
          <Image
            src={data?.image.url}
            alt="dapp audit footer image"
            layout="fill"
            objectFit="contain"
          />
        </Styled.ImageWrapper>
      )}
    </Styled.ContentWrapper>
  );
};

export default FooterBlock;
