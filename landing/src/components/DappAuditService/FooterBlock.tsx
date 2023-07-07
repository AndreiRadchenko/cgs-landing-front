import React, { useRef } from "react";
import parse from "html-react-parser";
import * as Styled from "../../styles/DappAuditService/Footer.styled";
import {
  Subtitle,
  WrapperWithLine,
} from "../../styles/DappAuditService/Common.styled";
import Image from "next/image";
import GetEstimationButton from "../GetEstimationButton";
import ButtonShareComponent from "../HomePage/ButtonShareComponent";
import { useQueryClient } from "@tanstack/react-query";
import { IServiceAi } from "../../types/Admin/Response.types";
import { queryKeys } from "../../consts/queryKeys";

const FooterBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceAi>([
    queryKeys.getServiceAiPage,
  ])?.footerBlock;

  const elRef = useRef<HTMLDivElement>(null);

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
          <p>{data?.text}</p>
        </Styled.TitleWrapper>
        {data && (
          <Styled.ButtonWrapper ref={elRef}>
            <GetEstimationButton
              buttonLink={data?.buttonLink}
              buttonText={data.button}
              withEstimation
              buttonClassName="social-button"
            />
            <ButtonShareComponent className="dappAuditShare" />
          </Styled.ButtonWrapper>
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

export default FooterBlock;
