import React, { useRef } from "react";
import { IServiceMobile } from "../../types/Admin/Response.types";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import * as Styled from "../../styles/MobileAuditService/FooterBlock.styled";
import Image from "next/image";
import GetEstimationButton from "../GetEstimationButton";
import ButtonShareComponent from "../HomePage/ButtonShareComponent";

const FooterBlock = () => {
  const queryClient = useQueryClient();
  const elRef = useRef<HTMLDivElement>(null);
  const data = queryClient.getQueryData<IServiceMobile>([
    queryKeys.getServiceMobileAuditPage,
  ])?.footerBlock;

  return (
    <Styled.Container>
      <Styled.ContentWrapper>
        <Styled.Title>{data?.title}</Styled.Title>
        <Styled.Description>{data?.text}</Styled.Description>
        {data && (
          <Styled.ButtonWrapper ref={elRef}>
            <GetEstimationButton
              buttonLink={data?.buttonLink}
              buttonText={data.button}
              withEstimation
              buttonClassName="social-button"
            />
            <ButtonShareComponent />
          </Styled.ButtonWrapper>
        )}
      </Styled.ContentWrapper>
      {data && (
        <Styled.ImageWrapper>
          <Image
            src={data?.image?.url}
            alt="footer image img"
            layout="fill"
            objectFit="contain"
          />
        </Styled.ImageWrapper>
      )}
    </Styled.Container>
  );
};

export default FooterBlock;
