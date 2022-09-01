import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IBlockchainService } from "../../types/Admin/Response.types";
import LinedText from "./LinedText";
import * as Styled from "../../styles/BlockchainService/YourWayBlock.styled";

const YourWayBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IBlockchainService>(
    queryKeys.getServiceBlockchainPage
  )?.wayBlock;

  return (
    <Styled.Container>
      <Styled.Title>{data?.subtitle}</Styled.Title>
      <Styled.BgiContainer>
        <div />
        <div />
        <div />
      </Styled.BgiContainer>
      <Styled.SubTextWrapper>
        <Styled.GridLine1>
          {data?.textSubBlock.slice(0, 3).map((el, idx) => (
            <LinedText text={el} position="top" height={78} key={idx} />
          ))}
        </Styled.GridLine1>
        <Styled.GridLine2>
          {data?.textSubBlock.slice(3).map((el, idx) => (
            <LinedText text={el} position="bottom" height={78} key={idx} />
          ))}
        </Styled.GridLine2>
      </Styled.SubTextWrapper>
    </Styled.Container>
  );
};

export default YourWayBlock;
