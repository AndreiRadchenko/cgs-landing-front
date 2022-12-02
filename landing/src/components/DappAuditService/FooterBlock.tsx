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
import Image from "next/image";
import BookACallButton from "../BookACallButton";

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
        {data && (
          <BookACallButton
            buttonLink={data?.buttonLink}
            buttonText={data.button}
            withCalendly
            style={{
              padding: "1em 2.27em",
              fontSize: "1.125em",
            }}
          />
        )}
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
