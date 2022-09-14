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
      <Styled.Title>{data?.subtitle}</Styled.Title>
      <Styled.BgiContainer>
        <Styled.MobileLine
          grad1={arrayOfGradients[0].firstColor}
          grad2={arrayOfGradients[0].secondColor}
        />
        <Styled.MobileLine
          grad1={arrayOfGradients[1].firstColor}
          grad2={arrayOfGradients[1].secondColor}
        />
        <Styled.MobileLine
          grad1={arrayOfGradients[2].firstColor}
          grad2={arrayOfGradients[2].secondColor}
        />
      </Styled.BgiContainer>
      <Styled.SubTextWrapper>
        <Styled.GridLine1>
          {data?.textSubBlock.slice(0, 3).map((el, idx) => (
            <LinedText text={el} position="top" height={65} key={idx} />
          ))}
        </Styled.GridLine1>
        <Styled.GridLine2>
          {data?.textSubBlock.slice(3).map((el, idx) => (
            <LinedText text={el} position="bottom" height={65} key={idx} />
          ))}
        </Styled.GridLine2>
      </Styled.SubTextWrapper>
    </Styled.Container>
  );
};

export default YourWayBlock;
