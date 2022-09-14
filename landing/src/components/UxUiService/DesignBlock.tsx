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

  const arrayOfGradients = [
    { firstColor: "#D6FFBB", secondColor: "#C1E6C0" },
    {
      firstColor: "#C7EDBF",
      secondColor: "#9DBBCA",
    },
    {
      firstColor: "#88A2D0",
      secondColor: "#5E70DC",
    },
  ];

  return (
    <Styled.Container>
      <Styled.Title>{data?.title}</Styled.Title>
      <Styled.BlockWrapper>
        <Styled.StyledLine
          grad1={arrayOfGradients[0].secondColor}
          grad2={arrayOfGradients[0].firstColor}
        />
        <Styled.StyledLine
          grad1={arrayOfGradients[1].secondColor}
          grad2={arrayOfGradients[1].firstColor}
        />
        <Styled.StyledLine
          grad1={arrayOfGradients[2].secondColor}
          grad2={arrayOfGradients[2].firstColor}
        />
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
