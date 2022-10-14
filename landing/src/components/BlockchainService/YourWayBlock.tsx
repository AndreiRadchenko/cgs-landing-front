import React, { useCallback, useEffect, useRef, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IBlockchainService } from "../../types/Admin/Response.types";
import LinedText from "./LinedText";
import * as Styled from "../../styles/BlockchainService/YourWayBlock.styled";
import { useOnScreen } from "../../hooks/useOnScreen";

const YourWayBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IBlockchainService>([
    queryKeys.getServiceBlockchainPage,
  ])?.wayBlock;
  const [gradientAngle, setGradientAngle] = useState<string>("50%");

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

  const mouseMoveListener = useCallback(({ pageX }: MouseEvent) => {
    const windowWidth = window.innerWidth;
    const mouseXpercentage = Math.round((pageX / windowWidth) * 100);
    setGradientAngle(`${mouseXpercentage}%`);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveListener, false);
    return () => window.removeEventListener("mousemove", mouseMoveListener);
  }, [mouseMoveListener]);

  const elRef = useRef<HTMLDivElement>(null);

  const isScrolled = useOnScreen(elRef, true);

  return (
    <Styled.Container>
      <Styled.Title>{data?.subtitle}</Styled.Title>
      <Styled.BgiContainer angle={gradientAngle} ref={elRef}>
        {arrayOfGradients.map((el, idx) => (
          <Styled.MobileLine
            ind={idx}
            className={isScrolled ? "scrolled" : undefined}
            key={el.firstColor}
            grad1={el.firstColor}
            grad2={el.secondColor}
          />
        ))}
      </Styled.BgiContainer>
      <Styled.SubTextWrapper>
        <Styled.GridLine1>
          {data?.textSubBlock.slice(0, 3).map((el, idx) => (
            <LinedText
              text={el}
              position="top"
              height={65}
              key={idx}
              ind={idx}
              isScrolled={isScrolled}
            />
          ))}
        </Styled.GridLine1>
        <Styled.GridLine2>
          {data?.textSubBlock.slice(3).map((el, idx) => (
            <LinedText
              text={el}
              position="bottom"
              height={65}
              key={idx}
              ind={idx}
              isScrolled={isScrolled}
            />
          ))}
        </Styled.GridLine2>
      </Styled.SubTextWrapper>
    </Styled.Container>
  );
};

export default YourWayBlock;
