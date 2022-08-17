﻿import React from "react";
import {
  ArrowContainer,
  BlackButton,
} from "../../styles/HomePage/General.styled";
import themes from "../../utils/themes";
import { IServiceWeb } from "../../types/Admin/Response.types";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { SplitBrackets } from "../../utils/splitBrackets";
import {
  Container,
  ContentContainer,
  Title,
  Cursor,
  Description,
  Image,
} from "../../styles/WebService/HeadBlock.styled";
import ButtonArrow from "../../utils/ButtonArrow";

const HeadBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceWeb>(
    queryKeys.getServiceWebPage
  )?.headerBlock;

  return (
    <Container>
      <ContentContainer>
        <Title>
          <SplitBrackets text={data?.title} />
          <Cursor />
        </Title>
        <Description>
          <SplitBrackets text={data?.text} />
        </Description>
        <BlackButton
          padding={"1.117em 2.537em"}
          size={themes.primary.font.size.oneAndHalf}
          href={data?.buttonLink}
        >
          {data?.button}
          <ArrowContainer>
            <ButtonArrow />
          </ArrowContainer>
        </BlackButton>
      </ContentContainer>
      <Image src={data?.image.url} alt="hero image" />
    </Container>
  );
};

export default HeadBlock;