import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IUxUiInterface } from "../../types/Admin/Response.types";
import LinedText from "../BlockchainService/LinedText";
import * as Styled from "../../styles/UxUiService/DesignBlock.styled";

const DesignBlock = () => {
  const queryClient = useQueryClient();

  const data = queryClient.getQueryData<IUxUiInterface>(
    queryKeys.getServiceUxUiPage
  )?.designBlock;

  return (
    <Styled.Container>
      <Styled.Title>{data?.title}</Styled.Title>
      <Styled.BlockWrapper>
        <Styled.StyledLine />
        <Styled.TopSteps>
          {data?.textSubBlock.slice(0, 3).map((el, idx) => (
            <LinedText position="top" text={el} key={idx} height={78} />
          ))}
        </Styled.TopSteps>
        <Styled.BottomSteps>
          {data?.textSubBlock.slice(3).map((el, idx) => (
            <LinedText text={el} key={idx + 3} position="bottom" height={78} />
          ))}
        </Styled.BottomSteps>
      </Styled.BlockWrapper>
    </Styled.Container>
  );
};

export default DesignBlock;
