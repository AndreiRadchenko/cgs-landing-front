import Image from "next/image";
import React from "react";

import {
  Wrapper,
  Subtitle,
  WrapperWithLine,
} from "../../styles/DappAuditService/Common.styled";
import * as Styled from "../../styles/DappAuditService/FigureOutBlock.styled";

import { SplitBrackets } from "../../utils/splitBrackets";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";
import FigureOutImg from "../../../public/DappAuditService/FigureOutImg.svg";
import FigureOutImgMobile from "../../../public/DappAuditService/FigureOutImgMobile.svg";
import WhyIsAuditImportant from "/public/DappAuditService/WhyIsAuditImportant.svg";
import WhyIsAuditImportantMobile from "/public/DappAuditService/WhyIsAuditImportantMobile.svg";
import { useWindowDimension } from "../../hooks/useWindowDimension";

const FigureOutBlock = () => {
  const { width } = useWindowDimension();
  const figureOutBlockData = {
    subtitle: "Figure out terms",
    textBlock: [
      "A dapp audit is conducted to identify and assess the security | of the project. It includes various tests, from automation to | penetration ones, smart contract audits, and more. ",
      "Another part of the audit is tokenomic planning. | Our teammates develop an effective economic model and | a functional description of your dapp. Also, we conduct | an audit of the existing tokenomic model. ",
    ],
    image: {
      url: "https://landing-cgs.s3.amazonaws.com/a262e4fb-3852-4f9f-a143-d046eafc1086.svg",
    },
  };

  const whyIsDappsBlockData = { subtitle: "Why is a dapps audit | important?" };

  return (
    <Wrapper>
      <Subtitle className="mobileDissapear">
        {figureOutBlockData?.subtitle}
      </Subtitle>
      <MobileInfiniteText title={figureOutBlockData?.subtitle} />
      <Styled.ContentWrapper>
        {figureOutBlockData && (
          <Styled.ImageWrapper>
            <Image
              src={
                width && width <= 992 ? FigureOutImgMobile.src : FigureOutImg.src
              }
              alt="figure out terms upper image"
              layout="fill"
              objectFit="contain"
            />
          </Styled.ImageWrapper>
        )}
        <Styled.TextWrapper>
          {figureOutBlockData?.textBlock.map((text, index) => (
            <Styled.Text key={index}>
              <SplitBrackets text={text} />
            </Styled.Text>
          ))}
        </Styled.TextWrapper>
      </Styled.ContentWrapper>
      <WrapperWithLine />
      <Styled.WhyIsAuditImportantWrapper>
        <Styled.LowerContentWrapper>
          <Subtitle>
            <SplitBrackets text={whyIsDappsBlockData?.subtitle} />
          </Subtitle>
          <Styled.WhyIsAuditImportantImageWrapper>
            <Image
              src={
                width && width <= 992
                  ? WhyIsAuditImportantMobile.src
                  : WhyIsAuditImportant.src
              }
              alt="figure out terms upper image"
              layout="fill"
              objectFit="contain"
            />
          </Styled.WhyIsAuditImportantImageWrapper>
        </Styled.LowerContentWrapper>
      </Styled.WhyIsAuditImportantWrapper>
    </Wrapper>
  );
};

export default FigureOutBlock;
