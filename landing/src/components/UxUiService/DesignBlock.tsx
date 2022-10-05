import React, { useCallback, useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IUxUiInterface } from "../../types/Admin/Response.types";
import LinedText from "../BlockchainService/LinedText";
import * as Styled from "../../styles/UxUiService/DesignBlock.styled";
import { useWindowDimension } from "../../hooks/useWindowDimension";

const DesignBlock = () => {
  const queryClient = useQueryClient();
  const { width } = useWindowDimension();
  const [gradientAngle, setGradientAngle] = useState<string>("50%");

  const data = queryClient.getQueryData<IUxUiInterface>(
    queryKeys.getServiceUxUiPage
  )?.designBlock;

  const mouseMoveListener = useCallback(({ pageX }: MouseEvent) => {
    const windowWidth = window.innerWidth;
    const mouseXpercentage = Math.round((pageX / windowWidth) * 100);
    setGradientAngle(`${mouseXpercentage}%`);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveListener, false);
    return () => window.removeEventListener("mousemove", mouseMoveListener);
  }, [mouseMoveListener]);

  const arrayOfGradients =
    width && width >= 768
      ? [{ firstColor: "#D6FFBB", secondColor: "#C1E6C0" }]
      : [
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
        {width &&
          arrayOfGradients.map((el) => (
            <Styled.StyledLine
              key={el.firstColor}
              grad1={el.secondColor}
              grad2={el.firstColor}
              angle={gradientAngle}
            />
          ))}
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
