import React, { useEffect, useRef, useState } from "react";
import * as Styled from "../../styles/HomePage/General.styled";
import leftArrow from "../../../public/HomePageDecoration/leftArrow.svg";
import boldLeftArrowMobile from "../../../public/HomePageDecoration/boldArrowLeftMobile.svg";
import boldRightArrowMobile from "../../../public/HomePageDecoration/boldArrowRightMobile.svg";
import rightArrow from "../../../public/HomePageDecoration/rightArrow.svg";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IDataResponse } from "../../types/Admin/Response.types";
import Tetris from "./Tetris";
import Image from "next/image";
import { useOnScreen } from "../../hooks/useOnScreen";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import ButtonShareComponent from "./ButtonShareComponent";
import GetEstimationButton from "../GetEstimationButton";

const HeadBlock = () => {
  const { width } = useWindowDimension();

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>([
    queryKeys.getFullHomePage,
  ])?.EditInformationBlock;

  const [buttonClassName, setButtonClassName] = useState<string>("main");
  const elRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elRef, true);

  useEffect(() => {
    if (isOnScreen) {
      setButtonClassName("scrolled");
      setTimeout(() => {
        setButtonClassName("scrolled removeBg");
      }, 1000);
    }
  }, [isOnScreen]);

  return (
    <Styled.HeadBlockRow>
      <Styled.HeadBlockContent>
        <Styled.Title>{data?.title}</Styled.Title>
        <Styled.MainSubtitle>
          <Styled.RowContainer>
            <div>WEB3-focused, WEB2-bolstered</div>
            <Styled.LeftArrowWrapper>
              {width && width > 768 && (
                <Image
                  src={leftArrow.src}
                  alt="head block left arrow"
                  layout="fill"
                  objectFit="contain"
                />
              )}
            </Styled.LeftArrowWrapper>
          </Styled.RowContainer>
          <Styled.RowContainer>
            <div>TODAY BRIEFED</div>
            <Styled.RightArrowWrapper>
              <Image
                src={
                  width && width > 768 ? rightArrow.src : boldRightArrowMobile
                }
                alt="head block left arrow"
                layout="fill"
                objectFit="contain"
              />
            </Styled.RightArrowWrapper>
            <div>YESTERDAY DONE</div>
          </Styled.RowContainer>
        </Styled.MainSubtitle>
        {data && (
          <Styled.ButtonWrapper ref={elRef}>
            <GetEstimationButton
              buttonLink={data?.buttonLink}
              withEstimation
              buttonText={data.button}
              buttonClassName={buttonClassName}
            />
            <ButtonShareComponent />
          </Styled.ButtonWrapper>
        )}
      </Styled.HeadBlockContent>
      {data?.image?.url && (
        <Styled.Tetris>
          <Tetris />
        </Styled.Tetris>
      )}
    </Styled.HeadBlockRow>
  );
};

export default HeadBlock;
