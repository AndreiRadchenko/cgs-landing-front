import React from "react";
import { BlackButton, ButtonArrow } from "../../styles/HomePage/General.styled";
import themes from "../../utils/themes";
import arrow from "../../../public/HomePageDecoration/buttonArrow.svg";
import { IServiceDb } from "../../types/Admin/Response.types";
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
} from "../../styles/DbService/HeadBlock.styled";

const HeadBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceDb>(
    queryKeys.getServiceDbPage
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
          padding={"1.13em 2.55em"}
          size={themes.primary.font.size.oneAndHalf}
          href={data?.buttonLink}
        >
          {data?.button}
          <ButtonArrow src={arrow.src} />
        </BlackButton>
      </ContentContainer>
      <Image src={data?.image.url} alt="hero image" />
    </Container>
  );
};

export default HeadBlock;
