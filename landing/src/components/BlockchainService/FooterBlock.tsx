import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IBlockchainService } from "../../types/Admin/Response.types";
import {
  BlackButton,
  ArrowContainer,
} from "../../styles/HomePage/General.styled";
import ButtonArrow from "../../utils/ButtonArrow";
import * as Styled from "../../styles/BlockchainService/FooterBlock.styled";

const FooterBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IBlockchainService>([
    queryKeys.getServiceBlockchainPage,
  ])?.footerBlock;

  return (
    <Styled.Container>
      <Styled.Title>{data?.subtitle}</Styled.Title>
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
      <Styled.Image src={data?.image.url} />
    </Styled.Container>
  );
};

export default FooterBlock;
