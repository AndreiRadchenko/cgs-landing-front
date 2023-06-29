import React, { useRef } from "react";
import { IServiceWeb } from "../../types/Admin/Response.types";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { SplitBrackets } from "../../utils/splitBrackets";
import {
  Container,
  ContentContainer,
  Title,
  Description,
  ButtonWrapper,
  ImageWrapper,
} from "../../styles/WebService/HeadBlock.styled";
import TextTypingAnimation from "../Typewrite";
import GetEstimationButton from "../GetEstimationButton";
import ButtonShareComponent from "../HomePage/ButtonShareComponent";
import Image from "next/image";

const HeadBlock = () => {
  const queryClient = useQueryClient();
  const elRef = useRef<HTMLDivElement>(null);
  const data = queryClient.getQueryData<IServiceWeb>([
    queryKeys.getServiceWebPage,
  ])?.headerBlock;

  return (
    <Container>
      <ContentContainer>
        <Title>{data && <TextTypingAnimation text={data?.title} />}</Title>
        <Description>
          <SplitBrackets text={data?.text} />
        </Description>
        {data && (
          <ButtonWrapper ref={elRef}>
            <GetEstimationButton
              buttonLink={data?.buttonLink}
              withEstimation
              buttonText={data.button}
              buttonClassName="social-button"
            />
            <ButtonShareComponent />
          </ButtonWrapper>
        )}
      </ContentContainer>
      <ImageWrapper>
        {data?.image && (
          <Image
            src={data?.image.url}
            alt={"main image"}
            layout={"fill"}
            loading={"eager"}
            objectFit={"cover"}
            priority
          />
        )}
      </ImageWrapper>
    </Container>
  );
};

export default HeadBlock;
