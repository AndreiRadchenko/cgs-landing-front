import React from "react";
import { IServiceDb } from "../../types/Admin/Response.types";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { SplitBrackets } from "../../utils/splitBrackets";
import {
  Container,
  ContentContainer,
  Title,
  Description,
  Image,
} from "../../styles/DbService/HeadBlock.styled";
import TextTypingAnimation from "../Typewrite";
import GetEstimationButton from "../GetEstimationButton";

const HeadBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceDb>([
    queryKeys.getServiceDbPage,
  ])?.headerBlock;

  const lastIndex = data!.title.lastIndexOf("|");
  const title =
    data?.title.substr(0, lastIndex) + data!.title.substring(lastIndex + 1);

  return (
    <Container>
      <ContentContainer>
        <Title>{data && <TextTypingAnimation text={title} />}</Title>
        <Description>
          <SplitBrackets text={data?.text} />
        </Description>
        {data && (
          <GetEstimationButton
            buttonLink={data?.buttonLink}
            withEstimation
            buttonText={data.button}
            style={{
              padding: "1.117em 3.57em",
              fontSize: "1.125em",
            }}
          />
        )}
      </ContentContainer>
      <Image src={data?.image.url} alt="hero image" />
    </Container>
  );
};

export default HeadBlock;
