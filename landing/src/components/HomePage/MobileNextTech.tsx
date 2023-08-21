import React from "react";
import parse, { HTMLReactParserOptions, Element } from "html-react-parser";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";

import MobileServices from "./MobileServices";
import Badges from "./Badges";
import FreeServices from "../FreeServices/FreeServices";
import ButtonArrow from "../../utils/ButtonArrow";
import TwistedBlock from "./TwistedBlock";

import * as Styled from "../../styles/HomePage/MobileGeneral.styled";
import * as CSS from "../../styles/Portfolio/title.styled";
import { ArrowContainer } from "../../styles/HomePage/General.styled";
import longArrowMobile from "../../../public/HomePageDecoration/longArrowMobile.svg";
import { queryKeys } from "../../consts/queryKeys";
import { IDataResponse } from "../../types/Admin/Response.types";
import ScrambleText from "./ScrambleText";
import Testimonials from "./Testimonials";

const MobileNextTech = () => {
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (
        domNode instanceof Element &&
        domNode.attribs &&
        domNode.attribs.style &&
        domNode.attribs.style.includes("color: rgb(88, 105, 221)")
      ) {
        return (
          <span className="blue nextTechMobile">
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

  const options2: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (
        domNode instanceof Element &&
        domNode.attribs &&
        domNode.attribs.style &&
        domNode.attribs.style.includes("color: rgb(221, 105, 88)")
      ) {
        return (
          <>
            <CSS.ArrowWrapper className="nextTech">
              <Image
                src={longArrowMobile.src}
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
      <Styled.Subtitle className="techMobile">
        {text && parse(text.title, options)}
      </Styled.Subtitle>
      <Badges />
      <MobileServices />
      <Styled.Subtitle className="mobileTextOnFilm">
        {data?.textOnFilm && parse(data?.textOnFilm, options2)}
      </Styled.Subtitle>
      <Styled.SideOppositeContainer>
        <Styled.BlackButton
          target="_blank"
          rel="noopener noreferrer"
          size={"1.85em"}
          padding={"18px 17px"}
          className="seeAll"
          href={buttonData?.buttonLink}
        >
          {buttonData?.button}
          <ArrowContainer>
            <ButtonArrow />
          </ArrowContainer>
        </Styled.BlackButton>
      </Styled.SideOppositeContainer>
      {/* <FreeServices /> */}
      <TwistedBlock />
      <Testimonials />
    </Styled.NextTech>
  );
};

export default MobileNextTech;
