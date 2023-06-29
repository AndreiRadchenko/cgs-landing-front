import React, { useRef } from "react";
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
  ButtonWrapper,
} from "../../styles/DbService/HeadBlock.styled";
import TextTypingAnimation from "../Typewrite";
import GetEstimationButton from "../GetEstimationButton";
import ButtonShareComponent from "../HomePage/ButtonShareComponent";
import { IHeadServicesProps } from "../../types/Services.types";

const HeadBlock = ({ setIsMainImagesLoaded }: IHeadServicesProps) => {
  const queryClient = useQueryClient();
  const elRef = useRef<HTMLDivElement>(null);
  const data = queryClient.getQueryData<IServiceDb>([
    queryKeys.getServiceDbPage,
  ])?.headerBlock;

  const lastIndex = data!.title.lastIndexOf("|");
  const title =
    data?.title.substr(0, lastIndex) + data!.title.substring(lastIndex + 1);

  const onMainImageLoad = () => {
    setIsMainImagesLoaded(true);
  };

  return (
    <Container>
      <ContentContainer>
        <Title>{data && <TextTypingAnimation text={title} />}</Title>
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
      <Image
        onLoad={() => onMainImageLoad()}
        src={data?.image.url}
        alt="hero image"
      />
    </Container>
  );
};

export default HeadBlock;
