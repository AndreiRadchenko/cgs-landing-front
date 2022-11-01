import React, { useCallback, useEffect, useRef, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IServiceMobileAudit } from "../../types/Admin/Response.types";
import * as Styled from "../../styles/MobileAuditService/WhatAppInclude.styled";
import { useOnScreen } from "../../hooks/useOnScreen";
import LinedText from "./LinedText";
import MagnifyingGlass from "./MagnifyingGlass";
import Line from "./Line";
import { SplitBrackets } from "../../utils/splitBrackets";

const WhatAppIncludeBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceMobileAudit>([
    queryKeys.getServiceMobileAuditPage,
  ])?.whatAppInclude;
  const [gradientAngle, setGradientAngle] = useState<string>("0%");

  const arrayOfGradients = [
    {
      firstColor: "#D6FFBB",
      secondColor: "#5869DD",
    },
  ];

  const mouseMoveListener = useCallback((event: MouseEvent) => {
    const windowHeigth = window.innerHeight;
    const windowWidth = window.innerWidth;
    const mouseXpercentage = Math.round(
      (event.pageY / windowHeigth) * 100 - 250
    );
    setGradientAngle(`${mouseXpercentage}%`);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveListener, false);
    return () => window.removeEventListener("mousemove", mouseMoveListener);
  }, [mouseMoveListener]);

  const elRef = useRef<HTMLDivElement>(null);

  const isScrolled = useOnScreen(elRef, true);
  const textBlock = data?.textBlock;
  // console.log(data?.textBlock);

  return (
    <>
      <Styled.Container>
        <Styled.Title>
          <SplitBrackets text={data?.subtitle} />
        </Styled.Title>
        <Styled.GradientLineContainer>
          <Styled.GradientLine />
          <Styled.SubtitlesList>
            {data?.textBlock.map((item, idx) => (
              <Styled.ListItem key={idx}>
                <Styled.PointWrapper>
                  <Styled.PointLine />
                  <Styled.PointCircle />
                </Styled.PointWrapper>
                <Styled.ListText>
                  <SplitBrackets text={item.text} />
                </Styled.ListText>
              </Styled.ListItem>
            ))}
          </Styled.SubtitlesList>
        </Styled.GradientLineContainer>
      </Styled.Container>
      {/* <Styled.ContentContainer>
        <Styled.BgiContainer angle={gradientAngle} ref={elRef}>
          {arrayOfGradients.map((el, idx) => (
            <Styled.MobileLine
              ind={idx}
              className={isScrolled ? "scrolled" : undefined}
              key={el.firstColor}
              grad1={el.firstColor}
              grad2={el.secondColor}
            >
              {textBlock?.map((el, idx) => (
                <Styled.LineContainer key={idx}>
                  <Line />
                  <div style={{ width: "100%" }}>
                    <Styled.MobileLineText>{el.text}</Styled.MobileLineText>
                  </div>
                </Styled.LineContainer>
              ))}
            </Styled.MobileLine>
          ))}
          <Styled.SubTextWrapper>
            <Styled.GridLine>
              {textBlock?.map((el, idx) => (
                <LinedText
                  key={idx}
                  text={el.text}
                  height={65}
                  ind={idx}
                  isScrolled={isScrolled}
                  subtext={el?.subtext}
                />
              ))}
            </Styled.GridLine>
          </Styled.SubTextWrapper>
          <Styled.GlassContainer>
            <MagnifyingGlass />
          </Styled.GlassContainer>
        </Styled.BgiContainer> */}
      {/*<MobileLine />*/}
      {/* </Styled.ContentContainer> */}
    </>
  );
};

export default WhatAppIncludeBlock;
