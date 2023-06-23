import React from "react";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";
import parse, { HTMLReactParserOptions, Element } from "html-react-parser";

import Partners from "../Partners/Partners";
import { queryKeys } from "../../consts/queryKeys";
import ButtonArrow from "../../utils/ButtonArrow";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import ScrambleText from "./ScrambleText";
import FreeServices from "../FreeServices/FreeServices";
import { IDataResponse } from "../../types/Admin/Response.types";
import longArrow from "../../../public/HomePageDecoration/longArrow.svg";
import Badges from "./Badges";

import * as Styled from "../../styles/HomePage/General.styled";

const NextTech = () => {
  const { width } = useWindowDimension();

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (
        domNode instanceof Element &&
        domNode.attribs &&
        domNode.attribs.style &&
        domNode.attribs.style.includes("color: rgb(88, 105, 221)")
      ) {
        return (
          <span className="blue">
            <ScrambleText
              text={
                domNode.children[0].type === "text" &&
                (domNode.children[0] as any).data
              }
            />
          </span>
        );
      }
    },
  };

  const queryClient = useQueryClient();

  const data = queryClient.getQueryData<IDataResponse>([
    queryKeys.getFullHomePage,
  ])?.FilmBlock;
  const text = queryClient.getQueryData<IDataResponse>([
    queryKeys.getFullHomePage,
  ])?.SubtitleBlock;
  const buttonData = queryClient.getQueryData<IDataResponse>([
    queryKeys.getFullHomePage,
  ])?.SeeAllBlock;

  return (
    <Styled.NextTech>
      <Styled.Subtitle className="nextTech">{text && parse(text.title, options)}</Styled.Subtitle>
      <Badges />
      <FreeServices />
      <Styled.Subtitle className="small">
        {width && width < 475 ? (
          <>
            wide
            <span className={"blue range"}>
              <ScrambleText text={"tech-range"} />
            </span>
            <Styled.RowContainer>
              <Styled.LongArrowWrapper>
                <Image
                  src={longArrow.src}
                  alt="wide tech long arrow"
                  layout="fill"
                  objectFit="contain"
                />
              </Styled.LongArrowWrapper>
              Innovative
            </Styled.RowContainer>
            customer-value
          </>
        ) : (
          <>
            <Styled.RowContainer>
              wide
              <span className={"blue"}>
                {typeof window !== "undefined" && (
                  <ScrambleText text={"tech-range"} />
                )}
              </span>
              <Styled.LongArrowWrapper>
                <Image
                  src={longArrow.src}
                  alt="wide tech long arrow"
                  layout="fill"
                  objectFit="contain"
                  objectPosition={"50% 57%"}
                />
              </Styled.LongArrowWrapper>
            </Styled.RowContainer>
            <Styled.RowContainer>Innovative customer-value</Styled.RowContainer>
          </>
        )}
      </Styled.Subtitle>
      <Styled.RightContainer>
        <Styled.BlackButton
          target="_blank"
          rel="noopener noreferrer"
          size={"1.85em"}
          padding={"18px 17px"}
          className="seeAll"
          href={buttonData?.buttonLink}
        >
          {buttonData?.button}
          <Styled.ArrowContainer>
            <ButtonArrow />
          </Styled.ArrowContainer>
        </Styled.BlackButton>
      </Styled.RightContainer>
      <Partners />
    </Styled.NextTech>
  );
};

export default NextTech;
