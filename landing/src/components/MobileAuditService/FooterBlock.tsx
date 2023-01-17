import React from "react";
import { IServiceMobile } from "../../types/Admin/Response.types";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import * as Styled from "../../styles/MobileAuditService/FooterBlock.styled";
import Image from "next/image";
import GetEstimationButton from "../GetEstimationButton";

const FooterBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceMobile>([
    queryKeys.getServiceMobileAuditPage,
  ])?.footerBlock;

  return (
    <Styled.Container>
      <Styled.ContentWrapper>
        <Styled.Title>{data?.title}</Styled.Title>
        <Styled.Description>{data?.text}</Styled.Description>
        {data && (
          <GetEstimationButton
            buttonLink={data?.buttonLink}
            buttonText={data.button}
            withEstimation
            style={{
              padding: "1.117em 2.17em",
              fontSize: "1.125em",
            }}
          />
        )}
      </Styled.ContentWrapper>
      {data && (
        <Styled.ImageWrapper>
          <Image
            src={data.image.url}
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
