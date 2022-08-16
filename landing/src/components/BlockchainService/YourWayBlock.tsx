import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IBlockchainService } from "../../types/Admin/Response.types";
import * as Styled from "../../styles/BlockchainService/YourWayBlock.styled";

const YourWayBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IBlockchainService>(
    queryKeys.getServiceBlockchainPage
  )?.wayBlock;

  return (
    <Styled.Container>
      <Styled.Title>{data?.subtitle}</Styled.Title>
      <Styled.BgiContainer />
      <Styled.SubTextWrapper>
        {data?.textSubBlock.map((el, idx) => (
          <Styled.SubText key={idx}>{el}</Styled.SubText>
        ))}
      </Styled.SubTextWrapper>
    </Styled.Container>
  );
};

export default YourWayBlock;
