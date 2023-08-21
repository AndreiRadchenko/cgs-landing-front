import React from "react";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";

import { HeaderTextBlockServices } from "../ServisesComponents";

import {
  Container,
  ContentContainer,
  ImageWrapper,
} from "../../styles/WebService/HeadBlock.styled";

import { IServiceWeb } from "../../types/Admin/Response.types";

import { queryKeys } from "../../consts/queryKeys";

const HeadBlockWebDev = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceWeb>([
    queryKeys.getServiceWebPage,
  ])?.headerBlock;

  return (
    <Container>
      <ContentContainer>
        {data && (
          <HeaderTextBlockServices
            title={data?.title}
            text={data?.text}
            btnText={data.button}
            btnLink={data?.buttonLink}
          />
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

export default HeadBlockWebDev;
