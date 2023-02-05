import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IBlockchainService } from "../../types/Admin/Response.types";
import * as Styled from "../../styles/BlockchainService/HeadBlock.styled";
import TextTypingAnimation from "../Typewrite";
import GetEstimationButton from "../GetEstimationButton";

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
        {data && (
          <GetEstimationButton
            buttonLink={data?.buttonLink}
            withEstimation
            buttonText={data.button}
            style={{ padding: "1.117em 2.17em", fontSize: "1.125em" }}
          />
        )}
      </Styled.Content>
      <Styled.Image src={data?.image.url} />
    </Styled.Container>
  );
};

export default HeadBlock;
