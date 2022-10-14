import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import {
  BlackButton,
  ArrowContainer,
} from "../../styles/HomePage/General.styled";
import ButtonArrow from "../../utils/ButtonArrow";
import { IBlockchainService } from "../../types/Admin/Response.types";
import * as Styled from "../../styles/BlockchainService/HeadBlock.styled";
import TextTypingAnimation from "../Typewrite";

const HeadBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IBlockchainService>([
    queryKeys.getServiceBlockchainPage,
  ])?.headerBlock;

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Title>
          {data && <TextTypingAnimation text={data?.title} />}
        </Styled.Title>
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
      </Styled.Content>
      <Styled.Image src={data?.image.url} />
    </Styled.Container>
  );
};

export default HeadBlock;
