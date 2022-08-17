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
  console.log(data?.textSubBlock.slice(3));

  return (
    <Styled.Container>
      <Styled.Title>{data?.subtitle}</Styled.Title>
      <Styled.BgiContainer />
      <Styled.SubTextWrapper>
        <Styled.GridLine1>
          {data?.textSubBlock.slice(0, 3).map((el, idx) => (
            <Styled.SubText key={idx}>{el}</Styled.SubText>
          ))}
        </Styled.GridLine1>
        <Styled.GridLine2>
          {data?.textSubBlock.slice(3).map((el, idx) => (
            <Styled.SubText key={idx}>{el}</Styled.SubText>
          ))}
        </Styled.GridLine2>
      </Styled.SubTextWrapper>
    </Styled.Container>
  );
};

export default YourWayBlock;
