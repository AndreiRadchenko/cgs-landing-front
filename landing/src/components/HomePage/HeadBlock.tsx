import React, { useEffect, useRef, useState } from "react";
import parse, { HTMLReactParserOptions, Element } from "html-react-parser";
import { useQueryClient } from "@tanstack/react-query";
import { useMediaQuery } from "@mui/material";

import ButtonShareComponent from "./ButtonShareComponent";
import GetEstimationButton from "../GetEstimationButton";
import { LeftArrow } from "./LeftArrow/LeftArrow";

import * as Styled from "../../styles/HomePage/General.styled";

import { queryKeys } from "../../consts/queryKeys";

import { IDataResponse } from "../../types/Admin/Response.types";

import { useOnScreen } from "../../hooks/useOnScreen";

import Tetris from "./Tetris";

const HeadBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>([
    queryKeys.getFullHomePage,
  ])?.EditInformationBlock;

  const [buttonClassName, setButtonClassName] = useState<string>("main");
  const elRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elRef, true);

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (
        domNode instanceof Element &&
        domNode.attribs &&
        domNode.attribs.style &&
        domNode.attribs.style.includes("color: rgb(88, 24, 14)")
      ) {
        return <LeftArrow />;
      }
      if (
        domNode instanceof Element &&
        domNode.attribs &&
        domNode.attribs.style &&
        domNode.attribs.style.includes("color: rgb(221, 105, 88)")
      ) {
        return <LeftArrow isRight />;
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
              buttonClassName={`${buttonClassName} homePage`}
            />
            <ButtonShareComponent className="homePage" />
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
