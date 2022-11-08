import React from "react";
import { IServiceMobile } from "../../types/Admin/Response.types";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import * as Styled from "../../styles/MobileAuditService/FooterBlock.styled";
import {
  BlackButton,
  ArrowContainer,
} from "../../styles/HomePage/General.styled";
import ButtonArrow from "../../utils/ButtonArrow";
import Image from "next/image";

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
        <BlackButton
          padding={"1.117em 2.17em"}
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
