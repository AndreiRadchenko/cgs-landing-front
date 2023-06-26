import React, { useEffect, useRef, useState } from "react";
import * as Styled from "../../styles/HomePage/General.styled";
import leftArrow from "../../../public/HomePageDecoration/leftArrow.svg";
import boldRightArrowMobile from "../../../public/HomePageDecoration/boldArrowRightMobile.svg";
import rightArrow from "../../../public/HomePageDecoration/rightArrow.svg";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IDataResponse } from "../../types/Admin/Response.types";
import Tetris from "./Tetris";
import Image from "next/image";
import { useOnScreen } from "../../hooks/useOnScreen";
import ButtonShareComponent from "./ButtonShareComponent";
import GetEstimationButton from "../GetEstimationButton";
import parse, { HTMLReactParserOptions, Element } from "html-react-parser";
import * as CSS from "../../styles/Portfolio/title.styled";
import { useMediaQuery } from "@mui/material";

const HeadBlock = () => {
  const is768px = useMediaQuery("(max-width: 768px)")

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>([
    queryKeys.getFullHomePage,
  ])?.EditInformationBlock;

  const [buttonClassName, setButtonClassName] = useState<string>("main");
  const elRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elRef, true);

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (!is768px) {
        if (
          domNode instanceof Element &&
          domNode.attribs &&
          domNode.attribs.style &&
          domNode.attribs.style.includes("color: rgb(88, 24, 14)")
        ) {
          return (
            <>
              <CSS.ArrowWrapper className="homePageSubtitleLeftArrow">
                <Image
                  src={leftArrow.src}
                  alt="wide tech long arrow"
                  layout="fill"
                  objectFit="contain"
                />
              </CSS.ArrowWrapper>
            </>
          );
        }
        if (
          domNode instanceof Element &&
          domNode.attribs &&
          domNode.attribs.style &&
          domNode.attribs.style.includes("color: rgb(221, 105, 88)")
        ) {
          return (
            <>
              <CSS.ArrowWrapper className="homePageSubtitleRightArrow">
                <Image
                  src={rightArrow.src}
                  alt="wide tech long arrow"
                  layout="fill"
                  objectFit="contain"
                />
              </CSS.ArrowWrapper>
            </>
          );
        }
      }
      if (is768px) {
        if (
          domNode instanceof Element &&
          domNode.attribs &&
          domNode.attribs.style &&
          domNode.attribs.style.includes("color: rgb(88, 24, 14)")
        ) {
          return (
            <></>
          );
        }
        if (
          domNode instanceof Element &&
          domNode.attribs &&
          domNode.attribs.style &&
          domNode.attribs.style.includes("color: rgb(221, 105, 88)")
        ) {
          return (
            <>
              <CSS.ArrowWrapper className="homePageSubtitleRightArrow">
                <Image
                  src={boldRightArrowMobile.src}
                  alt="wide tech long arrow"
                  layout="fill"
                  objectFit="contain"
                />
              </CSS.ArrowWrapper>
            </>
          );
        }
      }
    },
  };

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
        <Styled.MainSubtitle className="homePage">
          {data && parse(data?.subtitle, options)}
        </Styled.MainSubtitle>
        {data && (
          <Styled.ButtonWrapper ref={elRef}>
            <GetEstimationButton
              buttonLink={data?.buttonLink}
              buttonText={data?.button}
              withEstimation
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
