import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { Subtitle } from "../../styles/MobileService/Layout";
import * as Styled from "../../styles/DbService/FooterBlock.styled";
import { IServiceDb } from "../../types/Admin/Response.types";
import {
  ArrowContainer,
  BlackButton,
} from "../../styles/HomePage/General.styled";
import ButtonArrow from "../../utils/ButtonArrow";

const FooterBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceDb>([
    queryKeys.getServiceDbPage,
  ])?.footerBlock;

  return (
    <Styled.Container>
      <Styled.TextContent>
        <Styled.SubtitleWrapper>
          <Subtitle>{data?.subtitle}</Subtitle>
        </Styled.SubtitleWrapper>
        <BlackButton
          padding={"1.117em 1.97em"}
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
      </Styled.TextContent>
      <Styled.Image src={data?.image.url} />
    </Styled.Container>
  );
};

export default FooterBlock;
